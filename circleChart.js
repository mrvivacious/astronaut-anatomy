import { getMilitaryCounts } from './dataService.js';
import { filterService } from './filterService.js';

const PADDING = 50;

function getCSSVar(name) {
  return getComputedStyle(document.body).getPropertyValue(name).trim();
}

function drawDegreeChart(filters = { military: 'all', degree: 'all', gender: 'all' }) {
  const canvas = document.getElementById('circleChart');
  const ctx = canvas.getContext('2d');

  // Match internal resolution to displayed size
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;

  const counts = getMilitaryCounts(filters);
  const chartWidth = canvas.width;
  const chartHeight = canvas.height;
  const totalCount = (counts.civilian || 0) + (counts.military || 0);

  ctx.clearRect(0, 0, chartWidth, chartHeight);
  if (totalCount === 0) return;

  const slices = [
    {
      label: 'Civilian',
      value: counts.civilian || 0,
      color: getCSSVar('--civilian-color') || '#4CAF50'
    },
    {
      label: 'Military',
      value: counts.military || 0,
      color: getCSSVar('--military-color') || '#264653'
    }
  ].filter(slice => slice.value > 0);

  const centerX = chartWidth / 2;
  const centerY = chartHeight / 2;
  const radius = Math.min(chartWidth, chartHeight) / 2 - PADDING;
  let currentAngle = -Math.PI / 2;

  slices.forEach(slice => {
    const sliceAngle = (slice.value / totalCount) * Math.PI * 2;
    const endAngle = currentAngle + sliceAngle;

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, currentAngle, endAngle);
    ctx.closePath();
    ctx.fillStyle = slice.color;
    ctx.fill();
    ctx.strokeStyle = getCSSVar('--bar-label') || '#000';
    ctx.stroke();

    currentAngle = endAngle;
  });

  ctx.fillStyle = getCSSVar('--bar-label') || '#000';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = '16px sans-serif';
  ctx.fillText(`Total ${totalCount}`, centerX, centerY);

  const legend = document.getElementById('circleLegend');
  if (legend) {
    legend.innerHTML = '';
    slices.forEach(slice => {
      const item = document.createElement('div');
      item.className = 'legend-item';

      const swatch = document.createElement('span');
      swatch.className = 'legend-swatch';
      swatch.style.backgroundColor = slice.color;

      const label = document.createElement('span');
      label.className = 'legend-text';
      const percentage = Math.round((slice.value / totalCount) * 100);
      label.textContent = `${slice.label}: ${slice.value} (${percentage}%)`;

      item.appendChild(swatch);
      item.appendChild(label);
      legend.appendChild(item);
    });
  }
}

function init() {
  const redraw = () => drawDegreeChart(filterService.getFilters());
  filterService.subscribe(filters => drawDegreeChart(filters));
  document.addEventListener('DOMContentLoaded', redraw);
  window.addEventListener('resize', redraw);
}

init();
