// Theme toggle logic, robust and persistent
function setTheme(mode) {
  document.body.classList.toggle('night', mode === 'night');
  localStorage.setItem('theme', mode);
}
function getTheme() {
  return localStorage.getItem('theme') || 'day';
}
function toggleTheme() {
  setTheme(getTheme() === 'day' ? 'night' : 'day');
}
document.addEventListener('DOMContentLoaded', function() {
  setTheme(getTheme());
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.addEventListener('click', toggleTheme);
});