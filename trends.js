// trends.js - the Trends page: summary stats, records, and ~20 charts across all 24 NASA classes.
import { groups as ALL_GROUPS, ERAS, countBy, mean, median } from './dataAll.js';
import { barChart, stackedBarChart, lineChart, scatterChart, legend, initTooltips, PALETTE, fmtInt } from './chartKit.js';

const ERA_COLOR = { early: 'var(--c1)', shuttle: 'var(--c2)', iss: 'var(--c3)', modern: 'var(--c4)' };
const MUTED = 'var(--c8)';
const pct = (n, d) => d ? Math.round(n / d * 100) : 0;
const f1 = n => n == null ? '–' : (+n).toFixed(1);
const gtip = g => `Group ${g.number} · ${g.year}${g.nickname ? ' · ' + g.nickname : ''}`;
const top = (arr, fn, n = 15) => [...arr].sort((a, b) => fn(b) - fn(a)).slice(0, n);
const plural = (n, s) => `${n} ${s}${n === 1 ? '' : 's'}`;

// ---------------------------------------------------------------------------
// Dataset view (optionally without international candidates)
// ---------------------------------------------------------------------------
function makeCtx(includeIntl) {
  const groups = ALL_GROUPS.map(g => {
    const m = g.astronauts.filter(a => includeIntl || !a.is_international);
    return { ...g, astronauts: m, count: m.length, avg_age: mean(m.map(a => a.age_at_selection).filter(Boolean)) };
  }).filter(g => g.count);
  const A = groups.flatMap(g => g.astronauts);
  const P = A.filter(a => a.has_profile);
  const eras = ERAS.map(e => ({ ...e, A: A.filter(a => a.era === e.id) }));
  return { groups, A, P, eras, cats: groups.map(g => String(g.number)), tips: Object.fromEntries(groups.map(g => [String(g.number), gtip(g)])) };
}

// ---------------------------------------------------------------------------
// Chart definitions
// ---------------------------------------------------------------------------
const FIELD_ORDER = ['Engineering', 'Science', 'Physics', 'Medicine', 'Mathematics', 'Biology', 'Business', 'Military Science', 'Computer Science', 'Other'];

const SECTIONS = [
  {
    title: 'The corps over time',
    intro: 'How big, how diverse and how selective each class has been since the Mercury Seven in 1959.',
    charts: [
      {
        id: 'class_size', title: 'Class size', wide: true,
        why: c => { const mx = top(c.groups, g => g.count, 1)[0], mn = [...c.groups].sort((a, b) => a.count - b.count)[0];
          return `Class sizes ranged from ${mn.count} (Group ${mn.number}) to ${mx.count} (Group ${mx.number}${mx.nickname ? ', "' + mx.nickname + '"' : ''}).`; },
        render(c, box) {
          barChart(box, { height: 250, data: c.groups.map(g => ({ label: String(g.number), value: g.count, color: ERA_COLOR[g.era], tip: `${gtip(g)}\n${g.count} astronauts` })),
            xLabelText: 'Selection group (1 = Mercury Seven, 1959 … 24 = 2025)', yLabel: 'astronauts' });
          legend(box, ERAS.map(e => ({ name: `${e.label} (${e.years})`, color: ERA_COLOR[e.id] })));
        },
      },
      {
        id: 'women', title: 'Share of women in each class',
        why: c => { const first = c.groups.find(g => g.astronauts.some(a => a.gender === 'female'));
          const best = top(c.groups, g => g.astronauts.filter(a => a.gender === 'female').length / g.count, 1)[0];
          return `No women were selected until Group ${first.number} (${first.year}); the highest share is ${pct(best.astronauts.filter(a => a.gender === 'female').length, best.count)}% in Group ${best.number} (${best.year}).`; },
        render(c, box) {
          const w = c.groups.map(g => g.astronauts.filter(a => a.gender === 'female').length);
          stackedBarChart(box, { categories: c.cats, tips: c.tips, percent: true, xLabelText: 'Selection group', yLabel: 'share of class',
            series: [{ name: 'Women', color: 'var(--c4)', values: w }, { name: 'Men', color: 'var(--c1)', values: c.groups.map((g, i) => g.count - w[i]) }] });
          legend(box, [{ name: 'Women', color: 'var(--c4)' }, { name: 'Men', color: 'var(--c1)' }]);
        },
      },
      {
        id: 'military', title: 'Military vs civilian background',
        why: c => { const e = c.eras; const s = x => pct(x.A.filter(a => a.military).length, x.A.length);
          return `Military share fell from ${s(e[0])}% (${e[0].label}) to ${s(e[3])}% (${e[3].label}); the Shuttle era was ${s(e[1])}% and the Shuttle–ISS era ${s(e[2])}%.`; },
        note: 'Follows the source\'s classification: some civilians (e.g. Neil Armstrong) had earlier military service.',
        render(c, box) {
          const m = c.groups.map(g => g.astronauts.filter(a => a.military).length);
          stackedBarChart(box, { categories: c.cats, tips: c.tips, percent: true, xLabelText: 'Selection group', yLabel: 'share of class',
            series: [{ name: 'Military', color: 'var(--c1)', values: m }, { name: 'Civilian', color: 'var(--c2)', values: c.groups.map((g, i) => g.count - m[i]) }] });
          legend(box, [{ name: 'Military', color: 'var(--c1)' }, { name: 'Civilian', color: 'var(--c2)' }]);
        },
      },
      {
        id: 'age_by_class', title: 'Age at selection, by class',
        why: c => { const e = c.eras; return `Average age at selection rose from ${f1(mean(e[0].A.map(a => a.age_at_selection)))} (${e[0].label}) to ${f1(mean(e[3].A.map(a => a.age_at_selection)))} (${e[3].label}).`; },
        note: 'Age = selection year − birth year (the same convention as the main page). Shaded band = youngest to oldest.',
        render(c, box) {
          const ages = c.groups.map(g => g.astronauts.map(a => a.age_at_selection).filter(Boolean));
          lineChart(box, { categories: c.cats, tips: c.tips, xLabelText: 'Selection group', yLabel: 'years', yMin: 20,
            band: { low: ages.map(a => Math.min(...a)), high: ages.map(a => Math.max(...a)) },
            series: [{ name: 'Average', color: 'var(--c1)', values: ages.map(a => mean(a)) }, { name: 'Median', color: 'var(--c4)', dashed: true, values: ages.map(a => median(a)) }] });
          legend(box, [{ name: 'Average', color: 'var(--c1)' }, { name: 'Median', color: 'var(--c4)' }, { name: 'Youngest–oldest', color: 'color-mix(in srgb, var(--c1) 22%, transparent)' }]);
        },
      },
      {
        id: 'selectivity', title: 'Applicants per astronaut selected',
        why: c => { const k = c.groups.filter(g => g.applications); const mx = top(k, g => g.applications / g.count, 1)[0];
          return k.length ? `Where counts are known, selection ran from 1 in ${fmtInt(Math.min(...k.map(g => g.applications / g.count)))} to 1 in ${fmtInt(mx.applications / mx.count)} (Group ${mx.number}, ${fmtInt(mx.applications)} applications).` : ''; },
        note: 'Only classes with a reliably known application count are shown; the rest are unknown, not zero.',
        render(c, box) {
          const k = c.groups.filter(g => g.applications);
          barChart(box, { data: k.map(g => ({ label: String(g.number), value: Math.round(g.applications / g.count), color: ERA_COLOR[g.era],
            tip: `${gtip(g)}\n${fmtInt(g.applications)} applications → ${g.count} selected` })), xLabelText: 'Selection group', yLabel: 'applicants per astronaut', format: v => fmtInt(v) });
        },
      },
    ],
  },
  {
    title: 'Education',
    intro: 'Degrees and fields of study. Degree levels for Groups 1–18 are partly inferred; see the note on each chart.',
    charts: [
      {
        id: 'degree_tier', title: 'Highest degree, by class',
        why: c => { const s = x => pct(x.A.filter(a => a.tier !== 'Bachelor').length, x.A.length);
          return `Advanced degrees went from ${s(c.eras[0])}% of ${c.eras[0].label} astronauts to ${s(c.eras[3])}% of ${c.eras[3].label} astronauts.`; },
        note: 'Groups 1–18: "Doctorate" counts only MDs and a curated list of well-known PhD holders, so it is a lower bound; "Graduate" means a graduate degree of unspecified level.',
        render(c, box) {
          const tiers = [['Bachelor', 'var(--c6)'], ['Graduate', 'var(--c1)'], ['Doctorate', 'var(--c4)']];
          stackedBarChart(box, { categories: c.cats, tips: c.tips, percent: true, xLabelText: 'Selection group', yLabel: 'share of class',
            series: tiers.map(([t, col]) => ({ name: t, color: col, values: c.groups.map(g => g.astronauts.filter(a => a.tier === t).length) })) });
          legend(box, tiers.map(([name, color]) => ({ name, color })));
        },
      },
      {
        id: 'fields', title: 'Fields of study (all astronauts)',
        why: c => { const cnt = countBy(c.A.flatMap(a => a.fields.map(f => ({ f }))), x => x.f); const withF = c.A.filter(a => a.fields.length).length;
          const [k, v] = Object.entries(cnt).sort((a, b) => b[1] - a[1])[0]; return `${pct(v, withF)}% of astronauts hold at least one ${k.toLowerCase()} degree.`; },
        note: 'Share of astronauts holding at least one degree in the field. Astronauts with placeholder degrees in data.js (Group 21) are excluded.',
        render(c, box) {
          const withF = c.A.filter(a => a.fields.length).length;
          const cnt = countBy(c.A.flatMap(a => a.fields.map(f => ({ f }))), x => x.f);
          barChart(box, { horizontal: true, format: v => v + '%', data: Object.entries(cnt).sort((a, b) => b[1] - a[1]).map(([k, v]) => ({ label: k, value: pct(v, withF), tip: `${k}\n${v} of ${withF} astronauts` })) });
        },
      },
      {
        id: 'fields_era', title: 'Field-of-study mix, by era',
        why: c => { const s = e => { const all = e.A.flatMap(a => a.fields); return pct(all.filter(f => f === 'Engineering').length, all.length); };
          return `Engineering made up ${s(c.eras[0])}% of degree fields in ${c.eras[0].label} vs ${s(c.eras[3])}% in ${c.eras[3].label}.`; },
        note: 'Each astronaut counts once per field. Group 21 is excluded (placeholder degrees in data.js).',
        render(c, box) {
          const MAIN = FIELD_ORDER.slice(0, 7);   // 7 named fields + one merged slice keeps every colour distinct
          const count = (e, test) => e.A.flatMap(a => a.fields).filter(test).length;
          const series = MAIN.map((f, i) => ({ name: f, color: PALETTE[i], values: c.eras.map(e => count(e, x => x === f)) }));
          series.push({ name: 'All other (computer science, military science, other)', color: MUTED, values: c.eras.map(e => count(e, x => !MAIN.includes(x))) });
          stackedBarChart(box, { categories: c.eras.map(e => e.label), percent: true, series, yLabel: 'share of degree fields', height: 300 });
          legend(box, series);
        },
      },
      {
        id: 'universities', title: 'Where astronauts studied (top 20)',
        why: c => { const cnt = countBy(c.A.flatMap(a => a.institutions.map(i => ({ i }))), x => x.i); const [k, v] = Object.entries(cnt).sort((a, b) => b[1] - a[1])[0];
          const mil = ['US Naval Academy', 'US Air Force Academy', 'US Military Academy', 'US Coast Guard Academy'].reduce((s, n) => s + (cnt[n] || 0), 0);
          return `${k} leads with ${v} astronauts; the four US service academies together account for ${mil} degrees.`; },
        note: 'Astronauts with a degree from the school (undergraduate or graduate); the same school is counted once per astronaut.',
        render(c, box) {
          const cnt = countBy(c.A.flatMap(a => a.institutions.map(i => ({ i }))), x => x.i);
          barChart(box, { horizontal: true, data: Object.entries(cnt).sort((a, b) => b[1] - a[1]).slice(0, 20).map(([k, v]) => ({ label: k, value: v, tip: `${k}\n${v} astronauts` })) });
        },
      },
    ],
  },
  {
    title: 'Backgrounds',
    intro: 'Who they were before selection: service branch, age, birth decade and birthplace.',
    charts: [
      {
        id: 'branches', title: 'Service branch of military astronauts, by era',
        why: c => { const cnt = countBy(c.A.flatMap(a => a.branches.map(b => ({ b }))), x => x.b); const t = Object.entries(cnt).sort((a, b) => b[1] - a[1]);
          return `Overall: ${t.slice(0, 3).map(([k, v]) => `${k} ${v}`).join(', ')} (an astronaut with two branches counts in both).`; },
        render(c, box) {
          const B = [['Navy', 'var(--c1)'], ['Air Force', 'var(--c6)'], ['Army', 'var(--c3)'], ['Marines', 'var(--c4)'], ['Coast Guard', 'var(--c5)'], ['Space Force', 'var(--c7)'], ['Non-US forces', MUTED]];
          const series = B.map(([n, col]) => ({ name: n, color: col, values: c.eras.map(e => e.A.filter(a => a.branches.includes(n)).length) })).filter(s => s.values.some(Boolean));
          stackedBarChart(box, { categories: c.eras.map(e => e.label), percent: true, series, yLabel: 'share of military astronauts' });
          legend(box, series);
        },
      },
      {
        id: 'age_hist', title: 'Age at selection: the whole distribution',
        why: c => { const ages = c.A.map(a => a.age_at_selection).filter(Boolean); return `Median ${f1(median(ages))}, from ${Math.min(...ages)} to ${Math.max(...ages)}. Women: median ${f1(median(c.A.filter(a => a.gender === 'female').map(a => a.age_at_selection).filter(Boolean)))}, men: ${f1(median(c.A.filter(a => a.gender === 'male').map(a => a.age_at_selection).filter(Boolean)))}.`; },
        render(c, box) {
          const ages = c.A.filter(a => a.age_at_selection);
          const lo = Math.floor(Math.min(...ages.map(a => a.age_at_selection)) / 3) * 3, hi = Math.max(...ages.map(a => a.age_at_selection));
          const bins = []; for (let b = lo; b <= hi; b += 3) bins.push(b);
          const val = g => bins.map(b => ages.filter(a => a.gender === g && a.age_at_selection >= b && a.age_at_selection < b + 3).length);
          stackedBarChart(box, { categories: bins.map(b => `${b}–${b + 2}`), series: [{ name: 'Women', color: 'var(--c4)', values: val('female') }, { name: 'Men', color: 'var(--c1)', values: val('male') }],
            xLabelText: 'Age at selection', yLabel: 'astronauts' });
          legend(box, [{ name: 'Women', color: 'var(--c4)' }, { name: 'Men', color: 'var(--c1)' }]);
        },
      },
      {
        id: 'age_scatter', title: 'Age at selection vs. year selected', wide: true,
        why: c => { const pts = c.A.filter(a => a.age_at_selection); const n = pts.length, mx = mean(pts.map(a => a.selection_year)), my = mean(pts.map(a => a.age_at_selection));
          const sl = pts.reduce((s, a) => s + (a.selection_year - mx) * (a.age_at_selection - my), 0) / pts.reduce((s, a) => s + (a.selection_year - mx) ** 2, 0);
          return `Across ${n} astronauts the trend is about ${sl >= 0 ? '+' : ''}${(sl * 10).toFixed(1)} years of age per decade; each dot is one astronaut (horizontal jitter only separates overlapping dots).`; },
        render(c, box) {
          const jit = nm => ([...nm].reduce((s, ch) => s + ch.charCodeAt(0), 0) % 100 / 100 - 0.5) * 1.7;
          const mk = a => ({ x: a.selection_year + jit(a.name), y: a.age_at_selection, tip: `${a.name}\nGroup ${a.group} (${a.selection_year}) · age ${a.age_at_selection}\n${a.military_experience || 'Civilian'}` });
          const pts = c.A.filter(a => a.age_at_selection);
          scatterChart(box, { height: 340, xLabelText: 'Year selected', yLabel: 'age at selection', trend: true, xMin: 1955, xMax: 2030, xTicks: [1960, 1970, 1980, 1990, 2000, 2010, 2020], yMin: 20,
            xFormat: v => String(Math.round(v)), yFormat: v => String(Math.round(v)),
            series: [{ name: 'Military', color: 'var(--c1)', points: pts.filter(a => a.military).map(mk) }, { name: 'Civilian', color: 'var(--c2)', points: pts.filter(a => !a.military).map(mk) }] });
          legend(box, [{ name: 'Military', color: 'var(--c1)' }, { name: 'Civilian', color: 'var(--c2)' }]);
        },
      },
      {
        id: 'birth_decade', title: 'Birth decade',
        why: c => { const cnt = countBy(c.A.filter(a => a.birth_year), a => Math.floor(a.birth_year / 10) * 10); const [k, v] = Object.entries(cnt).sort((a, b) => b[1] - a[1])[0]; return `The ${k}s produced the most astronauts (${v}).`; },
        note: 'Birth year is exact for Groups 1–20; for Groups 21–24 it is derived from selection year and age.',
        render(c, box) {
          const A = c.A.filter(a => a.birth_year); const dec = [...new Set(A.map(a => Math.floor(a.birth_year / 10) * 10))].sort();
          const val = g => dec.map(d => A.filter(a => a.gender === g && Math.floor(a.birth_year / 10) * 10 === d).length);
          stackedBarChart(box, { categories: dec.map(d => `${d}s`), series: [{ name: 'Women', color: 'var(--c4)', values: val('female') }, { name: 'Men', color: 'var(--c1)', values: val('male') }], yLabel: 'astronauts' });
          legend(box, [{ name: 'Women', color: 'var(--c4)' }, { name: 'Men', color: 'var(--c1)' }]);
        },
      },
      {
        id: 'birth_states', title: 'Birthplace: top US states',
        why: c => { const P = c.P; const us = P.filter(a => a.birth_state).length; const cnt = countBy(P.filter(a => a.birth_state), a => a.birth_state); const [k, v] = Object.entries(cnt).sort((a, b) => b[1] - a[1])[0];
          return `${k} is the most common birth state (${v}); ${P.length - us} of ${P.length} profiled astronauts were born outside the US.`; },
        note: 'Groups 1–20 only (the sources with birthplaces).',
        render(c, box) {
          const cnt = countBy(c.P.filter(a => a.birth_state), a => a.birth_state);
          barChart(box, { horizontal: true, data: Object.entries(cnt).sort((a, b) => b[1] - a[1]).slice(0, 15).map(([k, v]) => ({ label: k, value: v, tip: `${k}\n${v} astronauts` })) });
        },
      },
    ],
  },
  {
    title: 'Careers in space',
    intro: 'Flight history for the astronauts in Groups 1–20. Totals are as of the source data (mostly through 2019), so astronauts from the later classes are still accumulating flights.',
    charts: [
      {
        id: 'flights', title: 'Spaceflights per astronaut',
        why: c => { const P = c.P.filter(a => a.flights != null); const never = P.filter(a => !a.flights).length; return `${pct(never, P.length)}% of astronauts (${never} of ${P.length}) never flew — many died, resigned or were reassigned before a flight (Apollo 1, Challenger, Columbia, medical disqualification).`; },
        render(c, box) {
          const P = c.P.filter(a => a.flights != null); const mx = Math.max(...P.map(a => a.flights));
          barChart(box, { data: Array.from({ length: mx + 1 }, (_, n) => ({ label: String(n), value: P.filter(a => a.flights === n).length, color: n ? 'var(--c1)' : MUTED })), xLabelText: 'Spaceflights', yLabel: 'astronauts' });
        },
      },
      {
        id: 'flew_share', title: 'Share of each class that flew',
        why: c => { const gs = c.groups.filter(g => g.astronauts.some(a => a.has_profile)); const low = [...gs].sort((a, b) => flewShare(a) - flewShare(b))[0];
          return `Lowest: Group ${low.number} (${pct(flewShare(low) * 100, 100)}%). Recent classes are low only because they hadn't flown yet at the data cutoff.`; },
        render(c, box) {
          const gs = c.groups.filter(g => g.astronauts.some(a => a.has_profile));
          barChart(box, { format: v => v + '%', maxValue: 100, xLabelText: 'Selection group',
            data: gs.map(g => ({ label: String(g.number), value: Math.round(flewShare(g) * 100), color: g.number >= 16 ? MUTED : 'var(--c1)', tip: `${gtip(g)}\n${g.astronauts.filter(a => a.flights > 0).length} of ${g.astronauts.filter(a => a.has_profile).length} flew${g.number >= 16 ? '\n(careers still in progress at data cutoff)' : ''}` })) });
          legend(box, [{ name: 'Career complete', color: 'var(--c1)' }, { name: 'Careers in progress', color: MUTED }]);
        },
      },
      {
        id: 'days', title: 'Average days in space per astronaut who flew',
        why: c => { const by = c.groups.filter(g => g.astronauts.some(a => a.has_profile)); const best = top(by, g => avgDays(g) || 0, 1)[0];
          return `Group ${best.number} (${best.year}) leads at ${fmtInt(avgDays(best))} days per flown astronaut, driven by long ISS stays; the shuttle era topped out at far shorter missions.`; },
        note: 'Career totals through the source date (≤ 2019). Muted bars: careers incomplete.',
        render(c, box) {
          const gs = c.groups.filter(g => g.astronauts.some(a => a.has_profile && a.flights > 0));
          barChart(box, { yLabel: 'days', xLabelText: 'Selection group',
            data: gs.map(g => ({ label: String(g.number), value: Math.round(avgDays(g)), color: g.number >= 16 ? MUTED : 'var(--c3)', tip: `${gtip(g)}\n${f1(avgDays(g))} days per astronaut who flew` })) });
        },
      },
      {
        id: 'status', title: 'Where are they now? Status by class',
        why: c => { const P = c.P; const d = P.filter(a => a.status === 'deceased').length; return `${d} of ${P.length} astronauts in Groups 1–20 have died, including ${P.filter(a => a.death_mission).length} in spaceflight-related accidents recorded in the source.`; },
        note: 'Status as of the source data.',
        render(c, box) {
          const gs = c.groups.filter(g => g.astronauts.some(a => a.has_profile));
          const S = [['retired', 'Retired', 'var(--c1)'], ['management', 'Management', 'var(--c6)'], ['active', 'Active', 'var(--c3)'], ['deceased', 'Deceased', 'var(--c4)']];
          stackedBarChart(box, { categories: gs.map(g => String(g.number)), tips: c.tips, xLabelText: 'Selection group', yLabel: 'astronauts',
            series: S.map(([k, name, col]) => ({ name, color: col, values: gs.map(g => g.astronauts.filter(a => a.status === k).length) })) });
          legend(box, S.map(([, name, color]) => ({ name, color })));
        },
      },
      {
        id: 'top_days', title: 'Most time in space (top 15)',
        why: c => { const t = top(c.P.filter(a => a.days_in_space != null), a => a.days_in_space, 1)[0]; return `${t.name} leads with ${fmtInt(t.days_in_space)} days (${(t.days_in_space / 365.25).toFixed(1)} years) across ${plural(t.flights, 'flight')}.`; },
        note: 'NASA missions only; later commercial flights are not counted.',
        render(c, box) {
          barChart(box, { horizontal: true, format: v => fmtInt(v) + ' d',
            data: top(c.P.filter(a => a.days_in_space != null), a => a.days_in_space).map(a => ({ label: a.name, value: Math.round(a.days_in_space), tip: `${a.name}\nGroup ${a.group} · ${plural(a.flights, 'flight')}\n${fmtInt(a.days_in_space)} days` })) });
        },
      },
      {
        id: 'top_eva', title: 'Most spacewalk time (top 15)',
        why: c => { const t = top(c.P.filter(a => a.spacewalk_hours != null), a => a.spacewalk_hours, 1)[0]; return `${t.name} leads with ${f1(t.spacewalk_hours)} hours outside${t.spacewalks ? ` over ${plural(t.spacewalks, 'spacewalk')}` : ''}.`; },
        render(c, box) {
          barChart(box, { horizontal: true, format: v => v + ' h',
            data: top(c.P.filter(a => a.spacewalk_hours != null), a => a.spacewalk_hours).map(a => ({ label: a.name, value: Math.round(a.spacewalk_hours * 10) / 10, tip: `${a.name}\nGroup ${a.group}\n${f1(a.spacewalk_hours)} h${a.spacewalks ? ` · ${plural(a.spacewalks, 'spacewalk')}` : ''}` })) });
        },
      },
    ],
  },
];

function flewShare(g) { const p = g.astronauts.filter(a => a.has_profile); return p.length ? p.filter(a => a.flights > 0).length / p.length : 0; }
function avgDays(g) { const f = g.astronauts.filter(a => a.has_profile && a.flights > 0 && a.days_in_space != null); return f.length ? mean(f.map(a => a.days_in_space)) : null; }

// ---------------------------------------------------------------------------
// Summary + records
// ---------------------------------------------------------------------------
function renderSummary(c) {
  const A = c.A, ages = A.map(a => a.age_at_selection).filter(Boolean);
  const years = A.reduce((s, a) => s + (a.days_in_space || 0), 0) / 365.25;
  const cells = [
    [fmtInt(A.length), 'astronauts'], [c.groups.length, `classes, ${c.groups[0].year}–${c.groups[c.groups.length - 1].year}`],
    [pct(A.filter(a => a.military).length, A.length) + '%', 'military'], [pct(A.filter(a => a.gender === 'female').length, A.length) + '%', 'women'],
    [f1(mean(ages)), 'avg age at selection'], [pct(A.filter(a => a.tier !== 'Bachelor').length, A.length) + '%', 'advanced degree'],
    [fmtInt(years), 'person-years in space (≤2019)'],
  ];
  document.getElementById('summary').innerHTML = cells.map(([n, l]) => `<div class="stat"><span class="num">${n}</span><span class="label">${l}</span></div>`).join('');
  document.getElementById('dataset_note').textContent = `${fmtInt(A.length)} astronauts · ${fmtInt(c.P.length)} with birth/flight profiles`;
}

function recordCards(c) {
  const A = c.A, P = c.P, names = (arr, n = 2) => arr.slice(0, n).map(a => a.name).join(', ') + (arr.length > n ? ` +${arr.length - n}` : '');
  const ext = (arr, fn, sign) => { const v = sign(...arr.map(fn)); return [v, arr.filter(a => fn(a) === v)]; };
  const withAge = A.filter(a => a.age_at_selection);
  const [yv, y] = ext(withAge, a => a.age_at_selection, Math.min), [ov, o] = ext(withAge, a => a.age_at_selection, Math.max);
  const fl = P.filter(a => a.flights != null), [fv, f] = ext(fl, a => a.flights, Math.max);
  const dd = P.filter(a => a.days_in_space != null), [dv, d] = ext(dd, a => a.days_in_space, Math.max);
  const ee = P.filter(a => a.spacewalk_hours != null), [ev, e] = ext(ee, a => a.spacewalk_hours, Math.max);
  const big = top(c.groups, g => g.count, 1)[0];
  const cards = [
    ['Youngest at selection', `${yv}`, names(y)], ['Oldest at selection', `${ov}`, names(o)],
    ['Most spaceflights', `${fv}`, names(f)], ['Most days in space', fmtInt(dv), names(d, 1)],
    ['Most spacewalk hours', f1(ev), names(e, 1)], ['Largest class', `${big.count} (Group ${big.number})`, `${big.year}${big.nickname ? ' · ' + big.nickname : ''}`],
  ];
  return `<div class="records">${cards.map(([k, v, dd2]) => `<div class="rec"><span class="k">${k}</span><span class="v">${v}</span><span class="d">${dd2}</span></div>`).join('')}</div>`;
}

// ---------------------------------------------------------------------------
// Mount / render
// ---------------------------------------------------------------------------
function build(c) {
  const app = document.getElementById('app');
  app.innerHTML = '';
  const intro = document.createElement('div');
  intro.className = 'section';
  intro.innerHTML = `<h2>Records</h2>${recordCards(c)}`;
  app.append(intro);
  const jobs = [];   // render charts only after every card is in the DOM, so each measures its final width
  SECTIONS.forEach(sec => {
    const s = document.createElement('div');
    s.className = 'section';
    s.innerHTML = `<h2>${sec.title}</h2><p class="section-intro">${sec.intro}</p><div class="chart-grid"></div>`;
    const grid = s.querySelector('.chart-grid');
    sec.charts.forEach(ch => {
      const card = document.createElement('div');
      card.className = 'chart-card' + (ch.wide ? ' wide' : '');
      card.id = ch.id;
      let why = ''; try { why = ch.why(c); } catch (err) { console.warn('takeaway failed for', ch.id, err); }
      card.innerHTML = `<h3>${ch.title}</h3><p class="why">${why}</p><div class="box"></div>${ch.note ? `<p class="foot">${ch.note}</p>` : ''}`;
      grid.append(card);
      jobs.push(() => { const box = card.querySelector('.box'); try { ch.render(c, box); } catch (err) { console.error('chart failed:', ch.id, err); box.textContent = 'Chart unavailable.'; } });
    });
    app.append(s);
  });
  jobs.forEach(j => j());
}

let ctx;
function render() { ctx = makeCtx(document.getElementById('intl_toggle').checked); renderSummary(ctx); build(ctx); }

let started = false;
function init() {
  if (started) return;
  started = true;
  initTooltips();
  document.getElementById('intl_toggle').addEventListener('change', render);
  let t; window.addEventListener('resize', () => { clearTimeout(t); t = setTimeout(build.bind(null, ctx), 150); });
  render();
}
// module scripts are deferred: the DOM is already parsed when this runs
init();
