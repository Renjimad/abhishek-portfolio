# Project Assets

This directory contains project preview images and other assets.

## Project Images

- `storyline.png` - STORYLINE project preview
- `task-manager.png` - Task Manager project preview

## Adding New Project Images

1. Add your project screenshot to this directory
2. Use kebab-case naming: `project-name.png`
3. Update the project data in `app/projects/page.tsx`
4. Set `hasImage: true` and `image: "/assets/project-name.png"`

## Image Guidelines

- Use PNG or JPG format
- Recommended size: 800x600px or similar aspect ratio
- Keep file sizes under 2MB for optimal loading
- Use descriptive filenames that match the project name

## Placeholder for Missing Images

Projects without images will show a "Coming Soon" placeholder with:
- Camera emoji (📸)
- "Coming Soon" text
- Project title
- Gradient background 