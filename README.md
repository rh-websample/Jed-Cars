# Jed Cars — Dealership Website

A static, single-page website for a used-car lot: hero banner, filterable inventory grid with 6 sample listings, a "why buy from us" section, and an inquiry form.

## Structure
```
jeds-cars/
├── index.html
├── styles.css
├── script.js
├── assets/
│   └── cars/          # listing photos
└── README.md
```

No build step, no dependencies — just static HTML/CSS/JS.

## Run it locally
Open `index.html` directly in a browser, or serve it:
```bash
cd jeds-cars
python3 -m http.server 8000
# visit http://localhost:8000
```

## Upload to GitHub
```bash
cd jeds-cars
git init
git add .
git commit -m "Initial commit: Jed Cars site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Publish with GitHub Pages
1. Push the repo to GitHub (steps above).
2. On GitHub: **Settings → Pages**.
3. Under **Source**, choose the `main` branch and `/ (root)` folder.
4. Save — your site will be live at `https://<your-username>.github.io/<your-repo>/` within a minute or two.

## Editing the inventory
Each listing lives inside `<article class="car-card">` in `index.html`. Duplicate a block, swap the image path, title, price, year, and specs. The `data-type` attribute (`sedan`, `suv`, `mpv`, `pickup`) controls which filter chip shows the card — set it to match the body style.

To add a new photo: drop it in `assets/cars/` and point `src` at it.

## Making the inquiry form actually send messages
Right now the form is a front-end demo only — submitting it shows a confirmation message but doesn't send anything anywhere. To receive real inquiries, pick one:

- **Formspree** (easiest, free tier): create a form at formspree.io, then set the `<form>` tag's `action` to your Formspree endpoint and `method="POST"`, and remove/replace the JS `preventDefault` handler in `script.js`.
- **EmailJS**: send straight to your inbox from client-side JS using their SDK — no backend needed.
- **Your own backend**: point the fetch/form submission at your API route and store leads in a database.

## Customizing the look
All design tokens (colors, fonts, spacing) are declared as CSS variables at the top of `styles.css` under `:root`. Change `--amber`, `--red`, or the font stacks there to reskin the whole site.

## Credits
Fonts via Google Fonts: Oswald, Work Sans, Space Mono.
