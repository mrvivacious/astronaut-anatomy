import { getAgeDistribution } from './dataService.js';
import { filterService } from './filterService.js';

const PADDING = 50;
const BAR_GAP = 6;

function drawAgeChart(filters = {}) {
  const canvas = document.getElementById('ageChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const buckets = getAgeDistribution(filters);
  const bars = Object.entries(buckets).sort(([a], [b]) => parseInt(a) - parseInt(b));

  if (bars.length === 0) {
    ctx.fillStyle = '#666';
    ctx.textAlign = 'center';
    ctx.font = '14px Arial';
    ctx.fillText('No data for current filters', canvas.width / 2, canvas.height / 2);
    return;
  }

  const maxValue = Math.max(...bars.map(([, v]) => v));
  const barWidth = (canvas.width - PADDING * 2) / bars.length;
  const chartHeight = canvas.height - PADDING * 2;
  const isDark = document.body.classList.contains('dark');
  const labelColor = isDark ? '#ccc' : '#333';

  bars.forEach(([label, count], index) => {
    const barHeight = (count / maxValue) * chartHeight;
    const x = PADDING + index * barWidth;
    const y = canvas.height - PADDING - barHeight;
    const centerX = x + (barWidth - BAR_GAP) / 2;

    ctx.fillStyle = '#2a6fdb';
    ctx.fillRect(x, y, barWidth - BAR_GAP, barHeight);

    ctx.fillStyle = labelColor;
    ctx.textAlign = 'center';
    ctx.font = '12px Arial';

    // Count above bar
    ctx.fillText(count, centerX, y - 5);
    // Age range label below
    ctx.fillText(label, centerX, canvas.height - PADDING + 16);
  });

  // Mean line
  const allAges = [];
  bars.forEach(([label, count]) => {
    const startAge = parseInt(label);
    const midAge = startAge + 2; // midpoint of 4-year bucket
    for (let i = 0; i < count; i++) allAges.push(midAge);
  });
  const mean = allAges.reduce((a, b) => a + b, 0) / allAges.length;
  const firstAge = parseInt(bars[0][0]);
  const lastAge = parseInt(bars[bars.length - 1][0]) + 3;
  const ageRange = lastAge - firstAge;
  const meanX = PADDING + ((mean - firstAge) / ageRange) * (canvas.width - PADDING * 2);

  ctx.beginPath();
  ctx.setLineDash([4, 4]);
  ctx.strokeStyle = '#e05';
  ctx.lineWidth = 1.5;
  ctx.moveTo(meanX, PADDING);
  ctx.lineTo(meanX, canvas.height - PADDING);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = '#e05';
  ctx.textAlign = 'center';
  ctx.font = '11px Arial';
  ctx.fillText(`avg ${mean.toFixed(1)}`, meanX, PADDING - 5);
}

function init() {
  const redraw = () => drawAgeChart(filterService.getFilters());
  filterService.subscribe(() => drawAgeChart(filterService.getFilters()));
  document.addEventListener('DOMContentLoaded', redraw);
  window.addEventListener('resize', redraw);
}

init();
