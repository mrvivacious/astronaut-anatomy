function getDegreeCounts() {
  const counts = {};

  const groupNames = getGroupNames();

  groupNames.forEach(name => {
    const group = getGroup(name);

    group.astronauts.forEach(astronaut => {
      const degree = astronaut.highest_degree;
      if (!degree) return;

      counts[degree] = (counts[degree] || 0) + 1;
    });
  });

  return counts;
}

function drawDegreeChart(filters = { military: 'all', degree: 'all' }) {
  const canvas = document.getElementById('degreeChart');
  const ctx = canvas.getContext('2d');

  // Match internal resolution to displayed size
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;

  const counts = getDegreeCounts(filters);

  const degrees = Object.keys(counts);
  const values = Object.values(counts);

  if (values.length === 0) return;

  const maxValue = Math.max(...values);

  const chartWidth = canvas.width;
  const chartHeight = canvas.height;
  const padding = 50;

  const barWidth = (chartWidth - padding * 2) / degrees.length;

  ctx.clearRect(0, 0, chartWidth, chartHeight);

  degrees.forEach((degree, index) => {
    const value = values[index];

    const barHeight = (value / maxValue) * (chartHeight - padding * 2);

    const x = padding + index * barWidth;
    const y = chartHeight - padding - barHeight;

    ctx.fillStyle = "#2a6fdb";
    ctx.fillRect(x, y, barWidth - 10, barHeight);

    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.fillText(value, x + (barWidth - 10) / 2, y - 5);
    ctx.fillText(degree, x + (barWidth - 10) / 2, chartHeight - padding + 20);
  });
}


document.addEventListener("DOMContentLoaded", () => {
  drawDegreeChart();
});

window.addEventListener('resize', () => {
  drawDegreeChart(activeFilters);
});
