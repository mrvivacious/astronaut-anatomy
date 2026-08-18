// chartKit.js - tiny dependency-free SVG chart helpers for the Trends page.
//
// All colours/strokes come from CSS classes + variables in extras.css, so charts follow the
// site's light/dark mode with no redraw. Every mark carries a data-tip attribute that
// initTooltips() turns into a hover tooltip.

const NS = 'http://www.w3.org/2000/svg';
const h = (tag, attrs = {}, ...kids) => {
  const e = document.createElementNS(NS, tag);
  for (const [k, v] of Object.entries(attrs)) if (v != null) e.setAttribute(k, v);
  kids.forEach(c => e.append(c));
  return e;
};
const text = (x, y, s, attrs = {}) => { const t = h('text', { x, y, ...attrs }); t.textContent = s; return t; };

export const PALETTE = ['var(--c1)', 'var(--c2)', 'var(--c3)', 'var(--c4)', 'var(--c5)', 'var(--c6)', 'var(--c7)', 'var(--c8)'];
export const fmtInt = n => Math.round(n).toLocaleString();
export const fmtPct = n => `${Math.round(n)}%`;

function niceStep(raw) {
  const p = Math.pow(10, Math.floor(Math.log10(raw)));
  const f = raw / p;
  return (f <= 1 ? 1 : f <= 2 ? 2 : f <= 2.5 ? 2.5 : f <= 5 ? 5 : 10) * p;
}
function niceTicks(min, max, count = 5) {
  const step = niceStep(((max - min) || 1) / count);
  const start = Math.floor(min / step) * step;
  const out = [];
  for (let v = start; v <= max + step * 0.999; v += step) { out.push(+v.toFixed(10)); if (out.length > 40) break; }
  // trim to the first tick >= max
  const i = out.findIndex(v => v >= max - 1e-9);
  return i >= 0 ? out.slice(0, i + 1) : out;
}

function frame(el, { height = 300, margin = {}, title = 'chart' }) {
  const m = { t: 12, r: 14, b: 40, l: 46, ...margin };
  const width = Math.max(320, el.clientWidth || 680);
  const svg = h('svg', { viewBox: `0 0 ${width} ${height}`, class: 'ck', role: 'img', 'aria-label': title });
  el.replaceChildren(svg);
  return { svg, width, height, m, iw: width - m.l - m.r, ih: height - m.t - m.b };
}

function yAxis(f, ticks, yOf, fmt, label) {
  const { svg, m, iw } = f;
  ticks.forEach(t => {
    svg.append(h('line', { class: 'ck-grid', x1: m.l, x2: m.l + iw, y1: yOf(t), y2: yOf(t) }));
    svg.append(text(m.l - 6, yOf(t) + 4, fmt(t), { class: 'ck-tick', 'text-anchor': 'end' }));
  });
  if (label) svg.append(text(12, m.t + f.ih / 2, label, { class: 'ck-axis-label', 'text-anchor': 'middle', transform: `rotate(-90 12 ${m.t + f.ih / 2})` }));
}
function xLabel(f, label) {
  if (label) f.svg.append(text(f.m.l + f.iw / 2, f.height - 6, label, { class: 'ck-axis-label', 'text-anchor': 'middle' }));
}
function xCategoryLabels(f, labels, xOf, bw, { rotate = false, every = 1 } = {}) {
  labels.forEach((lab, i) => {
    if (i % every) return;
    const x = xOf(i) + bw / 2, y = f.m.t + f.ih + 14;
    f.svg.append(text(x, y, lab, rotate
      ? { class: 'ck-tick', 'text-anchor': 'end', transform: `rotate(-40 ${x} ${y})` }
      : { class: 'ck-tick', 'text-anchor': 'middle' }));
  });
}

// ---------------------------------------------------------------------------
// Vertical or horizontal bar chart. data: [{label, value, color?, tip?}]
// ---------------------------------------------------------------------------
export function barChart(el, { data, horizontal = false, height, title, yLabel, xLabelText, format = fmtInt,
  rotate = false, every = 1, color = 'var(--c1)', maxValue } = {}) {
  if (horizontal) {
    const rowH = 22;
    const longest = Math.max(...data.map(d => d.label.length));
    const left = Math.min(230, Math.max(80, longest * 6.4 + 12));
    const f = frame(el, { height: height || data.length * rowH + 34, margin: { l: left, r: 46, t: 6, b: 24 }, title });
    const max = maxValue || Math.max(...data.map(d => d.value), 1);
    const ticks = niceTicks(0, max, 5);
    const xOf = v => f.m.l + (v / ticks[ticks.length - 1]) * f.iw;
    ticks.forEach(t => {
      f.svg.append(h('line', { class: 'ck-grid', x1: xOf(t), x2: xOf(t), y1: f.m.t, y2: f.m.t + f.ih }));
      f.svg.append(text(xOf(t), f.height - 8, format(t), { class: 'ck-tick', 'text-anchor': 'middle' }));
    });
    data.forEach((d, i) => {
      const y = f.m.t + i * rowH + 2;
      f.svg.append(h('rect', { class: 'ck-bar', x: f.m.l, y, width: Math.max(1, xOf(d.value) - f.m.l), height: rowH - 6,
        fill: d.color || color, 'data-tip': d.tip || `${d.label}\n${format(d.value)}` }));
      f.svg.append(text(f.m.l - 6, y + (rowH - 6) / 2 + 4, d.label, { class: 'ck-tick', 'text-anchor': 'end' }));
      f.svg.append(text(xOf(d.value) + 4, y + (rowH - 6) / 2 + 4, format(d.value), { class: 'ck-value' }));
    });
    return;
  }
  const f = frame(el, { height: height || 280, margin: { b: rotate ? 64 : 40 }, title });
  const max = maxValue || Math.max(...data.map(d => d.value), 1);
  const ticks = niceTicks(0, max, 5);
  const top = ticks[ticks.length - 1];
  const yOf = v => f.m.t + f.ih - (v / top) * f.ih;
  yAxis(f, ticks, yOf, format, yLabel);
  const step = f.iw / data.length, bw = Math.min(46, step * 0.72);
  const xOf = i => f.m.l + i * step + (step - bw) / 2;
  data.forEach((d, i) => {
    f.svg.append(h('rect', { class: 'ck-bar', x: xOf(i), y: yOf(d.value), width: bw, height: Math.max(0, f.m.t + f.ih - yOf(d.value)),
      fill: d.color || color, 'data-tip': d.tip || `${d.label}\n${format(d.value)}` }));
  });
  xCategoryLabels(f, data.map(d => d.label), xOf, bw, { rotate, every });
  xLabel(f, xLabelText);
}

// ---------------------------------------------------------------------------
// Stacked bars. categories: [label], series: [{name,color,values:[...]}], percent: normalise to 100%
// ---------------------------------------------------------------------------
export function stackedBarChart(el, { categories, series, percent = false, height, title, yLabel, xLabelText,
  rotate = false, every = 1, tips = {} } = {}) {
  const f = frame(el, { height: height || 300, margin: { b: rotate ? 64 : 40 }, title });
  const totals = categories.map((_, i) => series.reduce((s, x) => s + (x.values[i] || 0), 0));
  const max = percent ? 100 : Math.max(...totals, 1);
  const ticks = niceTicks(0, max, 5);
  const top = ticks[ticks.length - 1];
  const yOf = v => f.m.t + f.ih - (v / top) * f.ih;
  yAxis(f, ticks, yOf, percent ? fmtPct : fmtInt, yLabel);
  const step = f.iw / categories.length, bw = Math.min(54, step * 0.76);
  const xOf = i => f.m.l + i * step + (step - bw) / 2;
  categories.forEach((cat, i) => {
    let acc = 0;
    series.forEach((s, si) => {
      const raw = s.values[i] || 0;
      if (!raw) return;
      const v = percent ? (totals[i] ? raw / totals[i] * 100 : 0) : raw;
      f.svg.append(h('rect', { class: 'ck-bar', x: xOf(i), y: yOf(acc + v), width: bw, height: Math.max(0, yOf(acc) - yOf(acc + v)),
        fill: s.color || PALETTE[si % PALETTE.length],
        'data-tip': `${tips[cat] || cat}\n${s.name}: ${fmtInt(raw)}${percent ? ` (${Math.round(raw / totals[i] * 100)}%)` : ''}\nTotal: ${fmtInt(totals[i])}` }));
      acc += v;
    });
  });
  xCategoryLabels(f, categories, xOf, bw, { rotate, every });
  xLabel(f, xLabelText);
}

// ---------------------------------------------------------------------------
// Line chart over categorical x. series: [{name,color,values:[number|null],dashed?}]
// band: optional {low:[], high:[]} shaded range
// ---------------------------------------------------------------------------
export function lineChart(el, { categories, series, band, height, title, yLabel, xLabelText, format = v => String(+v.toFixed(1)),
  yMin, yMax, every = 1, rotate = false, tips = {}, step = false } = {}) {
  const f = frame(el, { height: height || 300, margin: { b: rotate ? 64 : 40 }, title });
  const all = series.flatMap(s => s.values).concat(band ? band.low.concat(band.high) : []).filter(v => v != null);
  const lo = yMin != null ? yMin : Math.min(0, ...all), hi = yMax != null ? yMax : Math.max(...all, 1);
  const ticks = niceTicks(lo, hi, 5);
  const a = ticks[0], b = ticks[ticks.length - 1];
  const yOf = v => f.m.t + f.ih - ((v - a) / (b - a || 1)) * f.ih;
  yAxis(f, ticks, yOf, format, yLabel);
  const stepX = f.iw / categories.length;
  const xOf = i => f.m.l + i * stepX + stepX / 2;
  if (band) {
    const pts = [];
    band.high.forEach((v, i) => v != null && pts.push([xOf(i), yOf(v)]));
    for (let i = band.low.length - 1; i >= 0; i--) if (band.low[i] != null) pts.push([xOf(i), yOf(band.low[i])]);
    f.svg.append(h('polygon', { class: 'ck-band', points: pts.map(p => p.join(',')).join(' ') }));
  }
  series.forEach((s, si) => {
    const col = s.color || PALETTE[si % PALETTE.length];
    let d = '', pen = false;
    s.values.forEach((v, i) => {
      if (v == null) { pen = false; return; }
      d += `${pen ? 'L' : 'M'}${xOf(i)},${yOf(v)} `; pen = true;
    });
    f.svg.append(h('path', { d, class: 'ck-line', stroke: col, 'stroke-dasharray': s.dashed ? '5 4' : null }));
    s.values.forEach((v, i) => {
      if (v == null) return;
      f.svg.append(h('circle', { class: 'ck-dot', cx: xOf(i), cy: yOf(v), r: 3.4, fill: col,
        'data-tip': `${tips[categories[i]] || categories[i]}\n${s.name}: ${format(v)}` }));
    });
  });
  xCategoryLabels(f, categories, i => xOf(i) - stepX / 2, stepX, { rotate, every });
  xLabel(f, xLabelText);
}

// ---------------------------------------------------------------------------
// Scatter. series: [{name,color,points:[{x,y,tip}]}]; trend: draw least-squares line over all points
// ---------------------------------------------------------------------------
export function scatterChart(el, { series, height, title, xLabelText, yLabel, xMin, xMax, yMin, yMax, xTicks, trend = false,
  xFormat = v => String(v), yFormat = v => String(v) } = {}) {
  const f = frame(el, { height: height || 320, margin: { l: 50 }, title });
  const pts = series.flatMap(s => s.points);
  const xs = pts.map(p => p.x), ys = pts.map(p => p.y);
  const xt = xTicks || niceTicks(xMin != null ? xMin : Math.min(...xs), xMax != null ? xMax : Math.max(...xs), 6);
  const yt = niceTicks(yMin != null ? yMin : Math.min(...ys), yMax != null ? yMax : Math.max(...ys), 5);
  const x0 = xMin != null ? xMin : xt[0], x1 = xMax != null ? xMax : xt[xt.length - 1], y0 = yt[0], y1 = yt[yt.length - 1];
  const xOf = v => f.m.l + ((v - x0) / (x1 - x0 || 1)) * f.iw;
  const yOf = v => f.m.t + f.ih - ((v - y0) / (y1 - y0 || 1)) * f.ih;
  yAxis(f, yt, yOf, yFormat, yLabel);
  xt.forEach(t => f.svg.append(text(xOf(t), f.m.t + f.ih + 14, xFormat(t), { class: 'ck-tick', 'text-anchor': 'middle' })));
  xLabel(f, xLabelText);
  if (trend && pts.length > 2) {
    const n = pts.length, mx = xs.reduce((s, v) => s + v, 0) / n, my = ys.reduce((s, v) => s + v, 0) / n;
    const sl = pts.reduce((s, p) => s + (p.x - mx) * (p.y - my), 0) / (pts.reduce((s, p) => s + (p.x - mx) ** 2, 0) || 1);
    const ic = my - sl * mx;
    f.svg.append(h('line', { class: 'ck-trend', x1: xOf(x0), y1: yOf(sl * x0 + ic), x2: xOf(x1), y2: yOf(sl * x1 + ic),
      'data-tip': `Trend: ${sl >= 0 ? '+' : ''}${(sl * 10).toFixed(2)} per decade` }));
  }
  series.forEach((s, si) => s.points.forEach(p => f.svg.append(h('circle', { class: 'ck-dot ck-scatter', cx: xOf(p.x), cy: yOf(p.y), r: 3.6,
    fill: s.color || PALETTE[si % PALETTE.length], 'data-tip': p.tip || `${s.name}\n${xFormat(p.x)}, ${yFormat(p.y)}` }))));
}

// ---------------------------------------------------------------------------
export function legend(el, items) {
  const wrap = document.createElement('div');
  wrap.className = 'ck-legend';
  items.forEach((it, i) => {
    const s = document.createElement('span');
    const sw = document.createElement('i');
    sw.style.background = it.color || PALETTE[i % PALETTE.length];
    s.append(sw, document.createTextNode(it.name));
    wrap.append(s);
  });
  el.append(wrap);
}

let tipEl;
export function initTooltips() {
  if (tipEl) return;
  tipEl = document.createElement('div');
  tipEl.className = 'ck-tooltip';
  tipEl.hidden = true;
  document.body.append(tipEl);
  const move = e => {
    const pad = 14, w = tipEl.offsetWidth, hgt = tipEl.offsetHeight;
    let x = e.clientX + pad, y = e.clientY + pad;
    if (x + w > innerWidth - 6) x = e.clientX - w - pad;
    if (y + hgt > innerHeight - 6) y = e.clientY - hgt - pad;
    tipEl.style.left = `${Math.max(4, x)}px`; tipEl.style.top = `${Math.max(4, y)}px`;
  };
  document.addEventListener('mouseover', e => {
    const t = e.target.closest && e.target.closest('[data-tip]');
    if (!t) return;
    tipEl.textContent = t.getAttribute('data-tip');
    tipEl.hidden = false; move(e);
  });
  document.addEventListener('mousemove', e => { if (!tipEl.hidden) move(e); });
  document.addEventListener('mouseout', e => { if (e.target.closest && e.target.closest('[data-tip]')) tipEl.hidden = true; });
}
