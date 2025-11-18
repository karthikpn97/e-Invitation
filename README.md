# Wedding Invitation (React + Vite)

A single-page, scrollable wedding invitation built with React, Vite, and Framer Motion. Designed for elegant center alignment, subtle animations, and easy deployment to **GitHub Pages**.

## ✨ Features
- Full-screen hero with soft zoom.
- Animated groom & bride name reveal (left/right slide, meeting with a pulsing heart).
- Collage grid with subtle staggered reveals.
- Details card (date, time, venue, message).
- Embedded Google Map + full address.
- Fully responsive (mobile friendly).
- Framer Motion powered animations.

## 🧪 Tech Stack
- React 18
- Vite
- Framer Motion
- GitHub Pages (deployment)

## 🔧 Quick Start
```bash
npm install
npm run dev
```
Visit: http://localhost:5173

## 📝 Customize Invitation
Edit `src/config.js`:
```js
export const INVITE = {
  groomName: 'Karthikeyan',
  brideName: 'Priya',
  date: 'February 14, 2026',
  time: '6:30 PM onwards',
  venue: 'Sri Lakshmi Choultry',
  shortMessage: 'With joyful hearts we invite you to share in our wedding celebration and bless our union.',
  addressLines: [ 'Sri Lakshmi Choultry', '123 Celebration Road', 'Chennai, Tamil Nadu 600001', 'India' ],
  googleMapsEmbedSrc: 'EMBED_URL_HERE'
};
```

### Replace Map Embed
1. Open Google Maps.
2. Search venue.
3. Click "Share" → "Embed a map" → Copy `<iframe src=...>` URL.
4. Paste the `src` value into `googleMapsEmbedSrc`.

### Collage Images
Replace URLs in `src/components/Collage.jsx` with your own image links (preferably optimized JPEGs). For local images, place them in `src/assets` and `import` them.

## 🎨 Fonts & Styling
- Playfair Display (headings)
- Poppins (body)
Modify palette in `src/styles/global.css` under `:root`.

## 🚀 Deploy to GitHub Pages
1. Create a GitHub repository (this repo is named `e-Invitation`).
2. Ensure `vite.config.js` has the correct `base` option for GitHub Pages:
```js
// for repository named `e-Invitation`
base: '/e-Invitation/'
```
3. Commit & push everything to `main`.
4. Publish with the included script (this uses the `gh-pages` package):
```bash
npm install
npm run deploy
```
This will build the site and push the `dist` directory to the `gh-pages` branch.
5. In the repository Settings → Pages, ensure the Source is set to branch `gh-pages` (root) and save.
6. Visit: `https://<username>.github.io/e-Invitation/`

### Redeploy after edits
```bash
npm run deploy
```

### Troubleshooting: blank white page after deployment
- Most blank pages are caused by incorrect `base` settings in `vite.config.js`. The built HTML must reference assets using the repo subpath (e.g. `/e-Invitation/`).
- Confirm the built `dist/index.html` contains script/style links starting with `/e-Invitation/`.
- If using a custom domain or serving from root, set `base: '/'` and redeploy.


## 🛠 Optional Improvements
- Add RSVP form (Netlify / Formspree).
- Replace heart with animated rings SVG.
- Add countdown timer.
- Add photo preloader for smoother appearance.

## ✅ Accessibility Notes
- Alt text included for collage images.
- High-contrast text over hero image with brightness overlay.

## 🧩 Folder Structure
```
wedding-invitation/
  index.html
  vite.config.js
  package.json
  README.md
  src/
    config.js
    main.jsx
    App.jsx
    styles/global.css
    components/
      Hero.jsx
      NamesReveal.jsx
      Heart.jsx
      Collage.jsx
      Details.jsx
      MapSection.jsx
```

## 📄 License
You may use, modify, and deploy freely for personal invitation purposes.

Enjoy and congratulations! 🎉
