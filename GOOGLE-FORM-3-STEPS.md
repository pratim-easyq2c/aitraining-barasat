# Build the Google Form in 3 steps (no manual typing)

Google Forms **cannot** import a CSV or file through the normal UI.
But this script builds **all 35+ questions automatically** on the form you already have open.

---

## Step 1 — Open Apps Script from your form

You are here: `docs.google.com/forms/.../edit`

1. Click **⋮** (three dots, top right of the form editor)
2. Click **Script editor**  
   *(or: menu **Extensions** → **Apps Script**)*

A new tab opens with a blank `Code.gs` file.

---

## Step 2 — Paste the script

1. Open this file in your project:  
   **`deliverables/google-form-auto-build.gs`**
2. Select **all** the code (Ctrl+A) and **Copy**
3. In Apps Script: delete everything in `Code.gs`, **Paste**
4. Click **Save** (disk icon)
5. Name the project: `EasyQ2C Form Builder`

---

## Step 3 — Run

1. At the top, function dropdown: choose **`buildEasyQ2CForm`**
2. Click **Run** ▶
3. First time only: **Review permissions** → choose your Google account → **Advanced** → **Go to EasyQ2C Form Builder (unsafe)** → **Allow**
4. Wait for "Execution completed" at the bottom
5. **Go back to your Form tab** and **refresh** (F5)

All sections and questions should appear.

---

## After the script runs (5 min manual)

| Task | Where |
|------|--------|
| Upload logo | Form → palette icon → header image → `EasyQ2CLogo.jpeg` |
| Link to Sheet | **Responses** tab → green Sheets icon → Create spreadsheet |
| Get share link | **Send** → link icon → Copy |
| Put on website | Paste URL into `aitraining-barasat/config.js` → `formUrl` → git push |

---

## Each student = separate row

**Responses** → **Link to Sheets** → every submission is **one row** with timestamp, email, name, phone, and every answer.

View one person: Form → **Responses** → **Individual** tab.

---

## If something goes wrong

- **"Cannot find function"** → make sure dropdown says `buildEasyQ2CForm`
- **Form still blank** → refresh the Form tab; run script again (it clears and rebuilds)
- **Run from wrong place** → script must run while the **form** is open via Script editor linked to that form

---

## Your form ID (from your screenshot)

`1su1uPmM4pR1Z1CV5MzFyU9H6jg99PelAvoIDr5070baA`

After publishing, your public link will look like:

`https://docs.google.com/forms/d/e/XXXXX/viewform`

(Click **Send** → link — not the `/edit` URL)
