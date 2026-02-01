document.addEventListener('DOMContentLoaded', async function() {
  const grid = document.getElementById('projects-grid');
  const yearSelect = document.getElementById('year-select');
  const projectSelect = document.getElementById('project-select');
  const taskSelect = document.getElementById('task-select');

  // Fetch project folders dynamically
  async function fetchProjects() {
    const years = ['2026', '2025'];
    let allProjects = [];
    for (const year of years) {
      try {
        const res = await fetch(`projects/${year}/projects.json`);
        if (res.ok) {
          const projects = await res.json();
          allProjects = allProjects.concat(projects.map(p => ({...p, year})));
        }
      } catch (e) {}
    }
    return allProjects;
  }

  function renderProjects(projects) {
    grid.innerHTML = '';
    projects.forEach(p => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.setAttribute('data-year', p.year);
      card.setAttribute('data-project', p.id);
      card.innerHTML = `
        <div class="project-title">${p.title}</div>
        <div class="project-meta">${p.meta}</div>
        <a class="project-link" href="projects/${p.year}/${p.id}/index.html">Project</a>
        <a class="project-link" href="projects/${p.year}/${p.id}/task.html">Task</a>
      `;
      grid.appendChild(card);
    });
  }

  function updateFilters(projects) {
    // Populate project select
    projectSelect.innerHTML = '<option value="">All Projects</option>';
    [...new Set(projects.map(p => p.id))].forEach(pid => {
      const opt = document.createElement('option');
      opt.value = pid;
      opt.textContent = projects.find(p => p.id === pid).title;
      projectSelect.appendChild(opt);
    });
  }

  function filterProjects(projects) {
    let filtered = projects;
    if (yearSelect.value) filtered = filtered.filter(p => p.year === yearSelect.value);
    if (projectSelect.value) filtered = filtered.filter(p => p.id === projectSelect.value);
    renderProjects(filtered);
  }

  const allProjects = await fetchProjects();
  updateFilters(allProjects);
  filterProjects(allProjects);

  yearSelect.addEventListener('change', () => filterProjects(allProjects));
  projectSelect.addEventListener('change', () => filterProjects(allProjects));
});