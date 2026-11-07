// dataAll.js - one merged, enriched view of every astronaut group (1-24).
//
// Reads (never modifies) data.js (groups 19-24), data_history.js (groups 1-18) and
// data_profiles.js (birth/status/flight data) and exposes flat, chart-ready records.
// Used by trends.js and directory.js. The original index page does not use this file.

import { nasa } from './data.js';
import { nasaHistory } from './data_history.js';
import { profiles } from './data_profiles.js';

// ---------------------------------------------------------------------------
// Eras: used to group classes in charts
// ---------------------------------------------------------------------------
export const ERAS = [
  { id: 'early',   label: 'Mercury–Apollo', years: '1959–1969', groups: [1, 7] },
  { id: 'shuttle', label: 'Shuttle',        years: '1978–1994', groups: [8, 15] },
  { id: 'iss',     label: 'Shuttle–ISS',    years: '1996–2009', groups: [16, 20] },
  { id: 'modern',  label: 'ISS & Artemis',  years: '2013–2025', groups: [21, 24] },
];
export const eraOf = n => ERAS.find(e => n >= e.groups[0] && n <= e.groups[1]);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
const norm = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
  .replace(/[.,()]/g, ' ').split(/\s+/).filter(t => t && !['jr', 'sr', 'ii', 'iii', 'iv'].includes(t));
const keyOf = n => { const t = norm(n); return t[0] + '|' + t[t.length - 1].slice(0, 6); };

// data.js has gender "unknown" for all of groups 19-21 (33 people). Fill from public record.
const FEMALE_FIX = new Set([
  'Dorothy Metcalf-Lindenburger', 'Shannon Walker', 'Serena M. Aunon', 'Jeanette J Epps',
  'Kathleen Rubins', 'Christina H. Koch', 'Nicole A. Mann', 'Anne C. McClain', 'Jessica U. Meir',
]);
const fixGender = a => a.gender !== 'unknown' ? a.gender : (FEMALE_FIX.has(a.name) ? 'female' : 'male');

// Consistent institution names (the sources spell the same school several ways)
const INSTITUTION_ALIASES = [
  [/massachusetts institute of technology|^mit$/i, 'MIT'],
  [/naval academy/i, 'US Naval Academy'],
  [/air force academy/i, 'US Air Force Academy'],
  [/military academy|west point/i, 'US Military Academy'],
  [/naval postgraduate/i, 'US Naval Postgraduate School'],
  [/air force institute of technology|^afit$/i, 'Air Force Institute of Technology'],
  [/california institute of technology|^caltech$/i, 'Caltech'],
  [/test pilot school/i, 'Test Pilot School'],
  [/coast guard academy/i, 'US Coast Guard Academy'],
];
export function normInstitution(s) {
  if (!s) return null;
  const t = s.replace(/\s+/g, ' ').trim();
  for (const [re, name] of INSTITUTION_ALIASES) if (re.test(t)) return name;
  return t;
}

// Military branch buckets (a person can have more than one)
export function branchesOf(a) {
  if (!a.military_experience) return [];
  const out = new Set();
  a.military_experience.split(/[,;]/).forEach(raw => {
    const b = raw.trim().toLowerCase();
    if (b.includes('space force')) out.add('Space Force');
    else if (b.includes('canadian') || b.includes('rcaf') || b.includes('self defense') || b.includes('dubai')) out.add('Non-US forces');
    else if (b.includes('air force') || b.includes('usaf')) out.add('Air Force');
    else if (b.includes('navy') || b.includes('naval') || b.includes('usn')) out.add('Navy');
    else if (b.includes('army')) out.add('Army');
    else if (b.includes('marine') || b.includes('usmc')) out.add('Marines');
    else if (b.includes('coast guard')) out.add('Coast Guard');
    else out.add('Other');
  });
  return [...out];
}

const DOCTORATE = new Set(['PhD', 'MD', 'DVM', 'JD', 'DO', 'ScD']);
const BACHELOR = new Set(['BS', 'BEng', 'BA']);
export const TIERS = ['Bachelor', 'Graduate', 'Doctorate'];
export const tierOf = h => !h ? null : DOCTORATE.has(h) ? 'Doctorate' : BACHELOR.has(h) ? 'Bachelor' : 'Graduate';

const stateOf = place => { const m = /,\s*([A-Z]{2})$/.exec(place || ''); return m ? m[1] : null; };

// ---------------------------------------------------------------------------
// Merge
// ---------------------------------------------------------------------------
const rawGroups = { ...nasaHistory.astronaut_groups, ...nasa.astronaut_groups };
const profilesByGroup = {};
Object.entries(profiles).forEach(([name, p]) => { (profilesByGroup[p.group] ||= []).push([name, p]); });

function findProfile(a, groupNum) {
  if (profiles[a.name] && profiles[a.name].group === groupNum) return profiles[a.name];
  const list = profilesByGroup[groupNum] || [];
  const k = keyOf(a.name);
  const exact = list.filter(([n]) => keyOf(n) === k);
  if (exact.length === 1) return exact[0][1];
  const last = norm(a.name).pop().slice(0, 6);
  const byLast = list.filter(([n]) => norm(n).pop().slice(0, 6) === last);
  return byLast.length === 1 ? byLast[0][1] : null;
}

// data.js groups 19-21 hold a placeholder degree (institution "University") for everyone
const isPlaceholder = a => a.degrees && a.degrees.length > 0 && a.degrees.every(d => d.institution === 'University');

export const groups = [];          // sorted oldest -> newest
export const astronauts = [];      // flat, enriched

Object.entries(rawGroups)
  .map(([key, g]) => ({ key, g, number: parseInt(key.split('_')[1], 10) }))
  .sort((x, y) => x.number - y.number)
  .forEach(({ key, g, number }) => {
    const era = eraOf(number);
    const members = g.astronauts.map(a => {
      const p = findProfile(a, number);
      const doctorate = tierOf(a.highest_degree) === 'Doctorate';
      let degrees = a.degrees || [], degreesNote = null;
      if (isPlaceholder(a)) {
        if (p && p.degrees) { degrees = p.degrees; degreesNote = 'rebuilt from NASA Fact Book (data.js has placeholders)'; }
        else { degrees = []; degreesNote = 'degree details not yet entered in data.js'; }
      }
      const cats = [...new Set(degrees.map(d => d.category).filter(c => c && c !== '?'))];
      const instSrc = degrees.length ? degrees.map(d => d.institution) : (a.education || '').split(';');
      const insts = [...new Set(instSrc.map(normInstitution).filter(Boolean))];
      const birthYear = p ? p.birth_year : (a.age_at_selection ? g.selection_year - a.age_at_selection : null);
      return {
        ...a,
        degrees,
        degrees_note: degreesNote,
        gender: fixGender(a),
        group: number, group_key: key, selection_year: g.selection_year, era: era.id,
        military: Boolean(a.military_experience),
        branches: branchesOf(a),
        tier: tierOf(a.highest_degree),
        doctorate,
        fields: cats,
        institutions: insts,
        birth_date: p ? p.birth_date : null,
        military_rank: p ? p.military_rank : null,
        age_exact_at_selection: p ? p.age_exact_at_selection : null,
        birth_year: birthYear,
        birth_year_derived: !p && birthYear != null,
        birth_place: p ? p.birth_place : null,
        birth_state: p ? stateOf(p.birth_place) : null,
        status: p ? p.status : null,
        flights: p ? p.flights : null,
        days_in_space: p ? +(p.hours_in_space / 24).toFixed(1) : null,
        spacewalks: p ? p.spacewalks : null,
        spacewalk_hours: p ? p.spacewalk_hours : null,
        stats_through: p ? p.stats_through : null,
        missions: p ? p.missions : null,
        death_date: p ? p.death_date : null,
        death_mission: p ? p.death_mission : null,
        degree_basis: p ? p.degree_basis : null,
        has_profile: Boolean(p),
      };
    });
    const ages = members.map(m => m.age_at_selection).filter(Boolean);
    groups.push({
      key, number, era: era.id,
      year: g.selection_year,
      date: g.selection_date || null,
      nickname: g.nickname || null,
      applications: g.applications_received || null,
      count: members.length,
      avg_age: ages.length ? ages.reduce((s, x) => s + x, 0) / ages.length : null,
      astronauts: members,
    });
    astronauts.push(...members);
  });

export const getGroup = n => groups.find(g => g.number === n);
export const profiled = () => astronauts.filter(a => a.has_profile);

// small generic helpers shared by the pages
export const countBy = (arr, fn) => arr.reduce((m, x) => { const k = fn(x); if (k != null) m[k] = (m[k] || 0) + 1; return m; }, {});
export const mean = a => a.length ? a.reduce((s, x) => s + x, 0) / a.length : null;
export const median = a => { if (!a.length) return null; const s = [...a].sort((x, y) => x - y); const m = s.length >> 1; return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; };

// Same shape as data.js's `nasa`, but covering all 24 groups with the fixes above applied.
// The homepage (app.js) reads this, so it lists every astronaut.
export const nasaAll = {
  astronaut_groups: Object.fromEntries(groups.map(g => [g.key, {
    selection_year: g.year, selection_date: g.date, nickname: g.nickname,
    applications_received: g.applications, average_age_of_astronauts: g.avg_age, astronauts: g.astronauts,
  }])),
};
