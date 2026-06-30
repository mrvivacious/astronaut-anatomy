const STORAGE_KEY = 'checklist-progress';

function getCheckboxes() {
  return Array.from(document.querySelectorAll('ul.checklist input[type="checkbox"]'));
}

function saveProgress() {
  const state = {};
  getCheckboxes().forEach(box => {
    state[box.id] = box.checked;
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadProgress() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;
  let state;
  try {
    state = JSON.parse(raw);
  } catch {
    return;
  }
  getCheckboxes().forEach(box => {
    if (box.id in state) box.checked = state[box.id];
  });
}

function initChecklist() {
  loadProgress();

  getCheckboxes().forEach(box => {
    box.addEventListener('change', saveProgress);
  });

  document.getElementById('print-btn').addEventListener('click', () => window.print());

  document.getElementById('reset-btn').addEventListener('click', () => {
    getCheckboxes().forEach(box => { box.checked = false; });
    localStorage.removeItem(STORAGE_KEY);
  });
}

document.addEventListener('DOMContentLoaded', initChecklist);
