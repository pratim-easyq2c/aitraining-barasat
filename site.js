(function () {
  const cfg = typeof SITE_CONFIG !== 'undefined' ? SITE_CONFIG : {};
  const whatsapp = (cfg.whatsapp || '').replace(/\D/g, '');
  const whatsappDisplay = cfg.whatsappDisplay || 'Contact on WhatsApp';
  const whatsappReady = whatsapp.length >= 10;

  document.querySelectorAll('[data-whatsapp-btn]').forEach(function (el) {
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
  });
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
