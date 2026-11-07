import { getTotalApplications, getTotalNumberOfAstronauts } from './dataService.js';

function renderSelectivityCard() {
  const card = document.getElementById('selectivity_stat');
  if (!card) return;

  const applications = getTotalApplications();
  const selected = getTotalNumberOfAstronauts();

  if (!applications || !selected) {
    card.innerHTML = '<p>Application data unavailable.</p>';
    return;
  }

  const ratio = Math.round(applications / selected);

  card.innerHTML = `
    <p>1 selected for every <strong>${ratio.toLocaleString()}</strong> applicants</p>
    <p class="selectivity-sub">${applications.toLocaleString()} applications &rarr; ${selected} selected</p>
  `;
}

document.addEventListener('DOMContentLoaded', renderSelectivityCard);
