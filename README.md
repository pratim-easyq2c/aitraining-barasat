# EasyQ2C AI Prarambh Lab — Barasat

Landing site for the **EasyQ2C AI Prarambh Lab** — a 2-week hybrid weekend AI course in Barasat for Year 12 and graduation students (non-CS).

**Live site (after GitHub Pages enabled):** https://pratim-easyq2c.github.io/aitraining-barasat/

## Deploy on GitHub Pages

1. Push this repo to `main`
2. On GitHub: **Settings → Pages → Build and deployment**
3. Source: **Deploy from a branch**
4. Branch: **main** / **/ (root)**
5. Save — site goes live in 1–2 minutes

In `config.js`, set your links (must start with `https://` for the form):

```js
const SITE_CONFIG = {
  formUrl: 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform',
  whatsapp: '919876543210',
  whatsappDisplay: '+91 98765 43210'
};
```

Until `formUrl` is set, Apply buttons scroll to the enroll section and show a "coming soon" notice — they will **not** cause a 404.

## Structure

```
.
├── index.html      # Landing page
├── config.js       # Form URL + WhatsApp (edit this)
├── site.js         # Wires buttons safely
├── styles.css
├── assets/         # Logo and images
└── README.md
```

## Operator

**EasyQ2C Pty Ltd** — [github.com/pratim-easyq2c/aitraining-barasat](https://github.com/pratim-easyq2c/aitraining-barasat)

Curriculum wiki: sibling folder `LLM-Wiki-AITraining/`
