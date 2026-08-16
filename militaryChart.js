import { getMilitaryCounts } from './dataService.js';
import { filterService } from './filterService.js';

function drawMilitaryChart(filters = {}) {
  const canvas = document.getElementById('militaryChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  // Match canvas resolution to CSS size
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const { military, civilian } = getMilitaryCounts(filters);
  const total = military + civilian;

  if (total === 0) {
    ctx.fillStyle = '#666';
    ctx.textAlign = 'center';
    ctx.font = '14px Arial';
    ctx.fillText('No data for current filters', canvas.width / 2, canvas.height / 2);
    return;
  }

  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  const radius = Math.min(cx, cy) - 20;
  const innerRadius = radius * 0.6;
  const militaryAngle = (military / total) * 2 * Math.PI;

  // Military segment
  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.arc(cx, cy, radius, -Math.PI / 2, -Math.PI / 2 + militaryAngle);
  ctx.closePath();
  ctx.fillStyle = '#2a6fdb';
  ctx.fill();

  // Civilian segment
  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.arc(cx, cy, radius, -Math.PI / 2 + militaryAngle, -Math.PI / 2 + 2 * Math.PI);
  ctx.closePath();
  ctx.fillStyle = '#e0e0e0';
  ctx.fill();

  // Donut hole
  ctx.beginPath();
  ctx.arc(cx, cy, innerRadius, 0, 2 * Math.PI);
  ctx.fillStyle = document.body.classList.contains('dark') ? '#1a1a2e' : '#fff';
  ctx.fill();

  // Center label
  ctx.fillStyle = document.body.classList.contains('dark') ? '#eee' : '#000';
  ctx.textAlign = 'center';
  ctx.font = 'bold 22px Arial';
  ctx.fillText(`${Math.round((military / total) * 100)}%`, cx, cy - 6);
  ctx.font = '13px Arial';
  ctx.fillText('Military', cx, cy + 14);

  // Legend
  const legendY = canvas.height - 20;
  ctx.fillStyle = '#2a6fdb';
  ctx.fillRect(cx - 80, legendY - 12, 12, 12);
  ctx.fillStyle = document.body.classList.contains('dark') ? '#eee' : '#333';
  ctx.font = '12px Arial';
  ctx.textAlign = 'left';
  ctx.fillText(`Military (${military})`, cx - 64, legendY);

  ctx.fillStyle = '#e0e0e0';
  ctx.fillRect(cx + 10, legendY - 12, 12, 12);
  ctx.strokeStyle = '#aaa';
  ctx.strokeRect(cx + 10, legendY - 12, 12, 12);
  ctx.fillStyle = document.body.classList.contains('dark') ? '#eee' : '#333';
  ctx.fillText(`Civilian (${civilian})`, cx + 26, legendY);
}

function init() {
  const redraw = () => drawMilitaryChart(filterService.getFilters());
  filterService.subscribe(() => drawMilitaryChart(filterService.getFilters()));
  document.addEventListener('DOMContentLoaded', redraw);
  window.addEventListener('resize', redraw);
}

init();
