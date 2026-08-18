// directory.js - searchable / sortable / filterable table of every astronaut (groups 1-24).
import { astronauts, groups, ERAS } from './dataAll.js';

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const $ = id => document.getElementById(id);
const dash = '<span class="muted">–</span>';
const cap = s => s ? s[0].toUpperCase() + s.slice(1) : '';

const COLS = [
  { key: 'name', label: 'Name', get: a => a.name, html: a => `<a href="${esc(a.wikipedia_link || '#')}" target="_blank" rel="noopener">${esc(a.name)}</a>${a.is_international ? '<span class="tag">intl</span>' : ''}` },
  { key: 'group', label: 'Group', num: true, get: a => a.group * 10000 + a.selection_year % 100, html: a => `${a.group} · ${a.selection_year}` },
  { key: 'age', label: 'Age', num: true, get: a => a.age_at_selection, html: a => a.age_at_selection ?? dash },
  { key: 'gender', label: 'Gender', get: a => a.gender, html: a => cap(a.gender) },
  { key: 'degree', label: 'Highest degree', get: a => a.highest_degree || '', html: a => a.highest_degree === 'Graduate' ? 'Graduate <span class="muted">(level n/a)</span>' : esc(a.highest_degree) || dash },
  { key: 'fields', label: 'Fields', wrap: true, get: a => a.fields.join(', '), html: a => esc(a.fields.join(', ')) || dash },
  { key: 'school', label: 'School(s)', wrap: true, get: a => a.institutions.join('; '), html: a => esc(a.institutions.join('; ')) || dash },
  { key: 'military', label: 'Military', get: a => a.military_experience || '', html: a => esc(a.military_experience || 'Civilian') + (a.military_rank ? ` <span class="muted">(${esc(a.military_rank)})</span>` : '') },
  { key: 'born', label: 'Born', get: a => a.birth_year ?? 0, num: true, html: a => a.birth_year ? `${a.birth_year}${a.birth_place ? ` · ${esc(a.birth_place)}` : ''}` : dash },
  { key: 'status', label: 'Status', get: a => a.status || '', html: a => cap(a.status) || dash },
  { key: 'flights', label: 'Flights', num: true, get: a => a.flights, html: a => a.flights ?? dash },
  { key: 'days', label: 'Days in space', num: true, get: a => a.days_in_space, html: a => a.days_in_space == null ? dash : Math.round(a.days_in_space).toLocaleString() },
  { key: 'eva', label: 'EVA hrs', num: true, get: a => a.spacewalk_hours, html: a => a.spacewalk_hours == null ? dash : a.spacewalk_hours },
];

const state = { sort: 'group', dir: 'asc', open: new Set() };

function filtered() {
  const q = $('q').value.trim().toLowerCase();
  const v = id => $(id).value;
  const era = v('f_era'), grp = v('f_group'), gen = v('f_gender'), mil = v('f_mil'), tier = v('f_tier'), st = v('f_status'), fl = v('f_flown');
  return astronauts.filter(a => {
    if (era && a.era !== era) return false;
    if (grp && String(a.group) !== grp) return false;
    if (gen && a.gender !== gen) return false;
    if (mil && (mil === 'mil') !== a.military) return false;
    if (tier && a.tier !== tier) return false;
    if (st && a.status !== st) return false;
    if (fl && ((fl === 'yes') !== (a.flights > 0)) ) return false;
    if (q) {
      const hay = [a.name, a.fields.join(' '), a.institutions.join(' '), a.birth_place, a.military_experience, a.missions, a.education].join(' ').toLowerCase();
      if (!q.split(/\s+/).every(t => hay.includes(t))) return false;
    }
    return true;
  });
}

function sorted(rows) {
  const col = COLS.find(c => c.key === state.sort), sgn = state.dir === 'asc' ? 1 : -1;
  return [...rows].sort((a, b) => {
    const x = col.get(a), y = col.get(b);
    if (x == null && y == null) return 0;
    if (x == null) return 1;            // missing values always last
    if (y == null) return -1;
    const r = col.num ? x - y : String(x).localeCompare(String(y));
    return (r || a.group - b.group || a.name.localeCompare(b.name)) * (r ? sgn : 1);
  });
}

function detailHtml(a) {
  const degs = a.degrees.length
    ? a.degrees.map(d => `${esc(d.level)}${d.fields && d.fields.length ? ' — ' + esc(d.fields.join(', ')) : ''}${d.institution ? ` <span class="muted">(${esc(d.institution)}${d.institution_approximate ? ', approx.' : ''})</span>` : ''}`).join('<br>')
    : '<span class="muted">not available</span>';
  const rows = [
    ['Degrees', degs],
    ['Born', a.birth_date ? `${esc(a.birth_date)}${a.birth_place ? ' · ' + esc(a.birth_place) : ''}` : (a.birth_year ? `${a.birth_year} <span class="muted">(derived)</span>` : null)],
    ['Exact age at selection', a.age_exact_at_selection != null ? a.age_exact_at_selection : null],
    ['Missions', a.missions ? esc(a.missions) : null],
    ['Spacewalks', a.spacewalks != null ? `${a.spacewalks} (${a.spacewalk_hours} h)` : (a.spacewalk_hours ? `${a.spacewalk_hours} h` : null)],
    ['Died', a.death_date ? `${esc(a.death_date)}${a.death_mission ? ' · ' + esc(a.death_mission) : ''}` : null],
    ['Data notes', [a.degrees_note ? `Degrees ${esc(a.degrees_note)}.` : '', a.degree_basis === 'graduate-level-unspecified' ? 'Graduate degree level not specified in source.' : '',
      a.has_profile ? `Career stats ${a.stats_through ? 'through ' + a.stats_through : 'per NASA Fact Book (c. 2013–17)'}.` : 'No career stats in this dataset.'].filter(Boolean).join(' ')],
  ].filter(r => r[1] != null && r[1] !== '');
  return `<td colspan="${COLS.length}" class="wrap"><table style="width:auto;margin:2px 0 4px 18px;font-size:13px">${rows.map(([k, val]) => `<tr><td class="muted" style="border:0;padding:1px 14px 1px 0;white-space:nowrap">${k}</td><td class="wrap" style="border:0;padding:1px 0">${val}</td></tr>`).join('')}</table></td>`;
}

function render() {
  const rows = sorted(filtered());
  const head = $('dir').tHead;
  head.innerHTML = '<tr>' + COLS.map(c => `<th class="${c.num ? 'num' : ''}" data-key="${c.key}" aria-sort="${state.sort === c.key ? (state.dir === 'asc' ? 'ascending' : 'descending') : 'none'}" tabindex="0">${c.label}</th>`).join('') + '</tr>';
  const body = $('dir').tBodies[0];
  body.innerHTML = rows.map(a => {
    const id = a.name + '|' + a.group, open = state.open.has(id);
    return `<tr data-id="${esc(id)}">${COLS.map(c => `<td class="${c.num ? 'num' : ''}${c.wrap ? ' wrap' : ''}">${c.html(a)}</td>`).join('')}</tr>` + (open ? `<tr class="detail">${detailHtml(a)}</tr>` : '');
  }).join('') || `<tr><td colspan="${COLS.length}" class="muted" style="padding:14px">No astronauts match these filters.</td></tr>`;
  $('count').textContent = `${rows.length} of ${astronauts.length} astronauts`;
  return rows;
}

function csv(rows) {
  const cols = [['name', a => a.name], ['group', a => a.group], ['selection_year', a => a.selection_year], ['age_at_selection', a => a.age_at_selection], ['gender', a => a.gender],
    ['highest_degree', a => a.highest_degree], ['degree_tier', a => a.tier], ['fields', a => a.fields.join('; ')], ['institutions', a => a.institutions.join('; ')],
    ['military_experience', a => a.military_experience], ['military_rank', a => a.military_rank], ['international', a => a.is_international],
    ['birth_year', a => a.birth_year], ['birth_date', a => a.birth_date], ['birth_place', a => a.birth_place], ['status', a => a.status],
    ['flights', a => a.flights], ['days_in_space', a => a.days_in_space], ['spacewalks', a => a.spacewalks], ['spacewalk_hours', a => a.spacewalk_hours], ['missions', a => a.missions]];
  const q = v => v == null ? '' : /[",\n]/.test(String(v)) ? `"${String(v).replace(/"/g, '""')}"` : String(v);
  const text = [cols.map(c => c[0]).join(','), ...rows.map(a => cols.map(c => q(c[1](a))).join(','))].join('\n');
  const url = URL.createObjectURL(new Blob([text], { type: 'text/csv' }));
  const link = Object.assign(document.createElement('a'), { href: url, download: 'astronauts.csv' });
  document.body.append(link); link.click(); link.remove(); URL.revokeObjectURL(url);
}

function init() {
  ERAS.forEach(e => $('f_era').insertAdjacentHTML('beforeend', `<option value="${e.id}">${e.label} (${e.years})</option>`));
  [...groups].reverse().forEach(g => $('f_group').insertAdjacentHTML('beforeend', `<option value="${g.number}">Group ${g.number} · ${g.year}</option>`));
  document.querySelectorAll('#dir_toolbar select, #q').forEach(el => el.addEventListener('input', render));
  $('reset').addEventListener('click', () => { document.querySelectorAll('#dir_toolbar select').forEach(s => s.value = ''); $('q').value = ''; render(); });
  $('csv').addEventListener('click', () => csv(sorted(filtered())));
  const head = $('dir').tHead;
  const sortBy = th => { if (!th) return; const k = th.dataset.key; state.dir = state.sort === k && state.dir === 'asc' ? 'desc' : 'asc'; state.sort = k; render(); };
  head.addEventListener('click', e => sortBy(e.target.closest('th')));
  head.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); sortBy(e.target.closest('th')); } });
  $('dir').tBodies[0].addEventListener('click', e => {
    if (e.target.closest('a')) return;
    const tr = e.target.closest('tr[data-id]'); if (!tr) return;
    const id = tr.dataset.id; state.open.has(id) ? state.open.delete(id) : state.open.add(id); render();
  });
  $('foot').innerHTML = 'Wikipedia links are search links (they never land on the wrong person). “Graduate (level n/a)” means a graduate degree whose level the source does not state.';
  render();
}
init();
