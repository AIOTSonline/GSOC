document.addEventListener('DOMContentLoaded', function() {
  const yearSelect = document.getElementById('year-select');
  const projectSelect = document.getElementById('project-select');
  const taskSelect = document.getElementById('task-select');
  const projectCards = document.querySelectorAll('.project-card');

  function filterProjects() {
    const year = yearSelect.value;
    const project = projectSelect.value;
    projectCards.forEach(card => {
      const cardYear = card.getAttribute('data-year');
      const cardProject = card.getAttribute('data-project');
      let show = true;
      if (year && cardYear !== year) show = false;
      if (project && cardProject !== project) show = false;
      card.style.display = show ? '' : 'none';
    });
  }

  yearSelect.addEventListener('change', filterProjects);
  projectSelect.addEventListener('change', filterProjects);

  // Populate project select based on year
  yearSelect.addEventListener('change', function() {
    const year = yearSelect.value;
    projectSelect.innerHTML = '<option value="">All Projects</option>';
    const projects = Array.from(projectCards)
      .filter(card => !year || card.getAttribute('data-year') === year)
      .map(card => card.getAttribute('data-project'));
    [...new Set(projects)].forEach(p => {
      const opt = document.createElement('option');
      opt.value = p;
      opt.textContent = p.replace(/_/g, ' ');
      projectSelect.appendChild(opt);
    });
    filterProjects();
  });
});