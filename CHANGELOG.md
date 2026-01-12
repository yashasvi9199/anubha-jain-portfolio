# version 0.1

## 0.1.5

- fix: Restore absolute asset paths (leading slashes) to ensure images load correctly
- fix: Cleaned up index.html to remove redundant CDN scripts and incorrect CSS link providing "text/html" MIME type
- fix: Resolved path resolution issues between local dev and production build

## 0.1.4

- change: Switch to @tailwindcss/vite plugin for better integration and reliability
- removed: Delete postcss.config.js (replaced by Vite plugin)
- fix: Resolve "using tailwindcss directly as a PostCSS plugin" error once and for all

## 0.1.3

- change: Upgrade to Tailwind CSS v4 configuration
- fix: Resolve PostCSS plugin error by using @tailwindcss/postcss
- change: Move theme configuration from tailwind.config.js to src/index.css (CSS-first configuration)
- removed: Delete obsolete tailwind.config.js

## 0.1.2

- fix: Update asset paths in profile.json and portfolio.json to be relative (fix 404 errors)
- fix: Configure Vite base path to only use subdirectory in production, root in development
- fix: Resolve index.css MIME type error by ensuring dev server paths are correct

## 0.1.1

- fix: Restore Tailwind CSS configuration and dependencies
- fix: Re-add missing index.css with Tailwind directives
- fix: Update main entry point to include global styles
- fix: Define custom color palette (background, surface, accent) in tailwind configuration to match existing components
