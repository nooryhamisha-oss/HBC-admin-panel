# HBC Admin Panel

Admin panel project for HBC — built as a final course project.
Originally built with plain HTML, CSS, and JavaScript, then converted to React + Tailwind CSS in week 3.

## Project Status

This project is being built incrementally, one module per week, as assigned by the instructor. Each week's work is developed on a separate branch and merged after instructor approval.

## Progress

| Week | Module                                                                                                     | Status  |
| ---- | ------------------------------------------------------------------------------------------------------------ | ------- |
| 1    | Sign-in/Sign-up page, Dashboard (sidebar, navbar, stat cards with donut charts), Logout page, About page      | Done    |
| 2    | Find Instructor and Find Program pages                                                                        | Done    |
| 3    | Converted the whole project from HTML/CSS/JS to React (Vite) + Tailwind CSS, same design and behavior kept    | Done    |

## Folder Structure

HBC-admin-panel/

- index.html - Vite entry point
- src/main.jsx - React app entry point
- src/App.jsx - Routes for all pages
- src/pages/ - One component per page (Login, Dashboard, FindProgram, FindInstructor, Logout, About)
- src/components/ - Shared pieces (Sidebar, footers, fake map, Map/List tabs)
- src/index.css - Tailwind directives
- src/assets/hero-bg.jpg - Background image used on the sign-in and find pages
- tailwind.config.js - Brand colors and fonts matching the original design
- vite.config.js - Vite + React plugin config

## How to Run

1. Clone the repository
2. Install dependencies:
