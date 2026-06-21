/**
 * EasyQ2C AI Prostuti (AI প্রস্তুতি) — Auto-build pre-screening Google Form
 *
 * HOW TO RUN (one time, ~30 seconds):
 * 1. Open your blank form in Google Forms (the tab you have open now)
 * 2. Click ⋮ (top right) → Script editor   OR   Extensions → Apps Script
 * 3. Delete any code in Code.gs, paste ALL of this file, click Save
 * 4. Select function "buildEasyQ2CForm" in the dropdown → click Run ▶
 * 5. Authorize when asked (first time only)
 * 6. Go back to the Form tab and refresh — all questions appear
 * 7. Theme: upload EasyQ2C logo manually (palette icon) — script cannot add images
 * 8. Responses tab → Link to Sheets → create spreadsheet for per-student rows
 * 9. Send → copy link → paste into aitraining-barasat/config.js → formUrl
 */

function buildEasyQ2CForm() {
  const form = FormApp.getActiveForm();

  // Clear existing items (removes the default "Untitled Question")
  form.getItems().forEach(function (item) {
    form.deleteItem(item);
  });

  form.setTitle('EasyQ2C AI Prostuti (AI প্রস্তুতি) — Student Pre-Screening Form');
  form.setDescription(
    'AI মানে শুধু চ্যাট নয় – ভবিষ্যতের জন্য কাজে লাগানোর দক্ষতা।\n\n' +
      '2-Week AI Course for Year 12 & Graduation Students (Non-CS) | Barasat\n' +
      'ইয়ার ১২ ও স্নাতক ছাত্রছাত্রীদের জন্য ২ সপ্তাহের AI কোর্স (CS নয়) | বারাসাত\n\n' +
      'This form checks your basic computer skills (Word, Excel, Google Drive). ~15 minutes.\n' +
      'এটি আপনার কম্পিউটারের প্রাথমিক দক্ষতা যাচাই করবে। সৎ উত্তর দিন — "Never tried" ঠিক আছে।\n\n' +
      'Venue: Near Nilimaloy, Barasat Na Para\n' +
      'Dates: 5–6 & 12–13 July 2026 (Saturdays & Sundays)'
  );

  form.setCollectEmail(true);
  form.setLimitOneResponsePerUser(true);
  form.setConfirmationMessage(
    'ধন্যবাদ! Thank you for applying to EasyQ2C AI Prostuti (AI প্রস্তুতি).\n\n' +
      'We will review your form within 48 hours on WhatsApp.\n' +
      'If approved, you will receive payment details (₹4,999 early bird till 28 Jun / ₹5,999).\n\n' +
      'Venue: Near Nilimaloy, Barasat Na Para'
  );

  const skillOpts = ['Never tried', 'Tried but need help', 'Can do alone', 'Confident'];
  const helpOpts = ['Never', 'With help', 'Alone'];

  // ── Section 1: Student profile ──
  form.addPageBreakItem().setTitle('Section 1 — Student profile').setHelpText('আপনার পরিচয়');

  form.addTextItem().setTitle('Full name').setRequired(true);
  form.addTextItem().setTitle('Mobile number (WhatsApp)').setRequired(true);
  form.addTextItem().setTitle('Email (Gmail preferred)').setRequired(true);
  form.addTextItem().setTitle('Age').setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle('Current status')
    .setChoiceValues([
      'Year 12',
      '1st year Graduation',
      '2nd year Graduation',
      '3rd year Graduation',
      'Other',
    ])
    .setRequired(true);
  form.addTextItem().setTitle('Stream / subject (e.g. Commerce, Arts, B.Com)').setRequired(true);
  form.addTextItem().setTitle('School or college name').setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle('Are you a Computer Science / IT / BCA student?')
    .setChoiceValues(['Yes', 'No'])
    .setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle('Preferred language mix')
    .setChoiceValues(['Mostly Bengali', '50-50 Banglish', 'Mostly English'])
    .setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle('How did you hear about us?')
    .setChoiceValues(['Friend', 'WhatsApp', 'Poster', 'School', 'Other'])
    .setRequired(false);

  // ── Section 2: Devices ──
  form.addPageBreakItem()
    .setTitle('Section 2 — Devices & access')
    .setHelpText('ল্যাপটপ এবং ইন্টারনেট সম্পর্কে জানুন');

  form.addMultipleChoiceItem()
    .setTitle('Do you have a laptop you can bring every class?')
    .setChoiceValues([
      'Yes — Windows',
      'Yes — Mac',
      'No — I only have phone',
      'No device',
    ])
    .setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle('Laptop RAM (if applicable)')
    .setChoiceValues(['8 GB or more', '4 GB', "Don't know", 'N/A'])
    .setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle('Do you have a smartphone?')
    .setChoiceValues(['Android', 'iPhone', 'No'])
    .setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle('Can you install new apps on your phone?')
    .setChoiceValues(['Yes', 'No', 'Not sure'])
    .setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle('Do you have an active Gmail account?')
    .setChoiceValues(['Yes', 'No — need help creating'])
    .setRequired(true);
  form.addScaleItem()
    .setTitle('Comfortable typing in English on keyboard?')
    .setBounds(1, 5)
    .setLabels('Very hard', 'Comfortable')
    .setRequired(true);

  // ── Section 3: Word ──
  form.addPageBreakItem()
    .setTitle('Section 3 — Microsoft Word / Google Docs')
    .setHelpText('MS Word বা Google Docs');

  addSkillQuestions(form, skillOpts, [
    'Open a document and type a paragraph',
    'Bold, italic, or change font size',
    'Save file with a new name and find it again',
    'Print or export to PDF',
  ]);

  // ── Section 4: Excel ──
  form.addPageBreakItem()
    .setTitle('Section 4 — Microsoft Excel / Google Sheets')
    .setHelpText('Excel বা Google Sheets');

  addSkillQuestions(form, skillOpts, [
    'Open a spreadsheet and enter data in cells',
    'Use SUM or add numbers in a column',
    'Sort a list or filter rows',
    'Create a simple chart from data',
  ]);

  // ── Section 5: Drive ──
  form.addPageBreakItem()
    .setTitle('Section 5 — Google Drive & cloud')
    .setHelpText('Google Drive, Gmail, file sharing');

  addSkillQuestions(form, skillOpts, [
    'Log into Google Drive in a browser',
    'Upload a file from laptop or phone to Drive',
    'Create a folder and organise files',
    "Share a file with someone's email",
  ]);

  // ── Section 6: General comfort ──
  form.addPageBreakItem().setTitle('Section 6 — General computer comfort');

  form.addMultipleChoiceItem()
    .setTitle('Connect to Wi-Fi on laptop')
    .setChoiceValues(helpOpts)
    .setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle('Copy-paste text between apps')
    .setChoiceValues(helpOpts)
    .setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle('Download a file from internet and open it')
    .setChoiceValues(helpOpts)
    .setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle('Used Zoom or Google Meet before')
    .setChoiceValues(['Never', 'Once or twice', 'Regularly'])
    .setRequired(true);

  // ── Section 7: Commitment ──
  form.addPageBreakItem().setTitle('Section 7 — Commitment & consent');

  form.addCheckboxItem()
    .setTitle('I can attend both Saturdays and both Sundays on 5–6 Jul and 12–13 Jul 2026')
    .setChoiceValues(['Yes, I confirm'])
    .setRequired(true);
  form.addCheckboxItem()
    .setTitle(
      'I will bring my laptop and charger to every session at Near Nilimaloy, Barasat Na Para'
    )
    .setChoiceValues(['Yes, I confirm'])
    .setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle('Parent/guardian consent (if under 18)')
    .setChoiceValues(['Yes', 'N/A — I am 18+'])
    .setRequired(true);
  form.addCheckboxItem()
    .setTitle('I agree to honest AI use and privacy rules taught in class')
    .setChoiceValues(['Yes, I agree'])
    .setRequired(true);
  form.addParagraphTextItem()
    .setTitle('Anything else we should know?')
    .setRequired(false);

  Logger.log('Done! Refresh your Google Form tab. Then: Responses → Link to Sheets.');
}

function addSkillQuestions(form, options, titles) {
  titles.forEach(function (title) {
    form.addMultipleChoiceItem().setTitle(title).setChoiceValues(options).setRequired(true);
  });
}
