import { getFieldOfStudyCounts } from './dataService.js';
import { filterService } from './filterService.js';

const PADDING = { top: 16, right: 48, bottom: 16, left: 160 };
const BAR_HEIGHT = 28;
const BAR_GAP = 10;

function drawFieldChart(filters = {}) {
  const canvas = document.getElementById('fieldChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const counts = getFieldOfStudyCounts(filters);
  const bars = Object.entries(counts).sort(([, a], [, b]) => b - a);

  if (bars.length === 0) {
    canvas.height = 60;
    canvas.width = canvas.clientWidth || 400;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#666';
    ctx.textAlign = 'center';
    ctx.font = '14px Arial';
    ctx.fillText('No data for current filters', canvas.width / 2, 30);
    return;
  }

  // Height is data-driven so the chart grows with the number of bars
  canvas.height = bars.length * (BAR_HEIGHT + BAR_GAP) + PADDING.top + PADDING.bottom;
  canvas.width = canvas.clientWidth || 400;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const maxValue = Math.max(...bars.map(([, v]) => v));
  const chartWidth = canvas.width - PADDING.left - PADDING.right;
  const isDark = document.body.classList.contains('dark');
  const labelColor = isDark ? '#ccc' : '#333';

  bars.forEach(([field, count], index) => {
    const y = PADDING.top + index * (BAR_HEIGHT + BAR_GAP);
    const barWidth = maxValue > 0 ? (count / maxValue) * chartWidth : 0;
    const centerY = y + BAR_HEIGHT / 2 + 5;

    // Bar
    ctx.fillStyle = '#2a6fdb';
    ctx.fillRect(PADDING.left, y, barWidth, BAR_HEIGHT);

    // Field label (left)
    ctx.fillStyle = labelColor;
    ctx.textAlign = 'right';
    ctx.font = '13px Arial';
    ctx.fillText(field, PADDING.left - 8, centerY);

    // Count label (right of bar)
    ctx.textAlign = 'left';
    ctx.fillText(count, PADDING.left + barWidth + 6, centerY);
  });
}

function init() {
  const redraw = () => drawFieldChart(filterService.getFilters());
  filterService.subscribe(() => drawFieldChart(filterService.getFilters()));
  document.addEventListener('DOMContentLoaded', redraw);
  window.addEventListener('resize', redraw);
}

init();
