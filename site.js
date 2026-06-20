(function () {
  const cfg = typeof SITE_CONFIG !== 'undefined' ? SITE_CONFIG : {};
  const formUrl = (cfg.formUrl || '').trim();
  const whatsapp = (cfg.whatsapp || '').replace(/\D/g, '');
  const whatsappDisplay = cfg.whatsappDisplay || 'Contact on WhatsApp';

  const formReady = formUrl.startsWith('http://') || formUrl.startsWith('https://');
  const whatsappReady = whatsapp.length >= 10;

  function wireFormButton(el) {
    if (!el) return;
    if (formReady) {
      el.href = formUrl;
      el.target = '_blank';
      el.rel = 'noopener';
      el.removeAttribute('aria-disabled');
    } else {
      el.href = '#enroll';
      el.removeAttribute('target');
      el.addEventListener('click', function (e) {
        e.preventDefault();
        const notice = document.getElementById('formPendingNotice');
        if (notice) {
          notice.scrollIntoView({ behavior: 'smooth', block: 'center' });
          notice.classList.add('notice-pulse');
          setTimeout(() => notice.classList.remove('notice-pulse'), 2000);
        }
      });
    }
  }

  function wireWhatsAppButton(el) {
    if (!el) return;
    if (whatsappReady) {
      el.href = 'https://wa.me/' + whatsapp;
      el.target = '_blank';
      el.rel = 'noopener';
      el.textContent = 'WhatsApp ' + whatsappDisplay;
      el.style.display = '';
    } else {
      el.style.display = 'none';
    }
  }

  document.querySelectorAll('[data-form-btn]').forEach(wireFormButton);
  document.querySelectorAll('[data-whatsapp-btn]').forEach(wireWhatsAppButton);

  const pendingNotice = document.getElementById('formPendingNotice');
  if (pendingNotice) {
    pendingNotice.style.display = formReady ? 'none' : 'block';
  }
})();

// Mobile nav
const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('navLinks');
if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => nav.classList.remove('open'))
  );
}

const headerCta = document.getElementById('headerCtaDesktop');
function updateHeaderCta() {
  if (headerCta) {
    headerCta.style.display = window.innerWidth >= 900 ? 'inline-flex' : 'none';
  }
}
updateHeaderCta();
window.addEventListener('resize', updateHeaderCta);
