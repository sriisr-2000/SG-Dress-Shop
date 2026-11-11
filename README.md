# SG DRESS SHOP

React + React Router DOM landing page and custom 404 page.

## Run
```
npm install
npm run dev
```

## Routes
- `/` → Home / Landing page
- `*` (About Us, Services, Contact Us, Login, Register, anything else) → Custom 404 page

## Deploying to GitHub Pages
BrowserRouter needs server-side fallback. For GitHub Pages either switch to `HashRouter`
in `src/main.jsx`, or copy `dist/index.html` to `dist/404.html` after building.
