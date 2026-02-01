# GSOC Projects Portal

This website showcases project ideas, requirements, and entry tasks for GSOC (Google Summer of Code) for the years 2025 and 2026. It is designed for both applicants and mentors to easily browse, filter, and access all project details and tasks.

## Features
- **Year and Project Selection:** Filter projects by year (2025, 2026) and by project name.
- **Modern UI:** Responsive, clean, and visually appealing interface with separate CSS and JS for maintainability.
- **Project Pages:** Each project has its own folder with a detailed project page and a dedicated entry task page.
- **Task Pages:** Entry tasks are clearly described for each project, including requirements and evaluation criteria.
- **Expandable:** Easily add new years, projects, and tasks by following the folder structure.

## Folder Structure
```
GSOC/
├── assets/
│   ├── css/
│   │   └── main.css
│   └── js/
│       └── main.js
├── index.html
├── readme.md
└── projects/
    ├── 2025/
    │   ├── 01_ai_generated_3d_models/
    │   │   ├── index.html
    │   │   └── task.html
    │   ├── ...
    └── 2026/
        ├── 01_skeleton_based_procedural_animation_system/
        │   ├── index.html
        │   └── task.html
        ├── ...
        └── 12_mqtt_multiplayer_iot_homeassistant/
            ├── index.html
            ├── task.html
            ├── mqtt.css
            └── mqtt.js
```

## How to Use
- Open `index.html` in your browser to browse all projects.
- Use the dropdowns to filter by year or project.
- Click on a project to view its details or entry task.

## Adding New Projects
1. Create a new folder under the appropriate year in `projects/`.
2. Add `index.html` and `task.html` for the project.
3. (Optional) Add custom CSS/JS for the project in its folder.
4. Update `index.html` to include the new project in the grid and dropdowns.

## Credits
- UI/UX: Modern, responsive, and accessible design.
- Content: GSOC mentors and contributors.

---

For any questions or suggestions, please contact the GSOC organizing team.
