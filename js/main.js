document.addEventListener('DOMContentLoaded', () => {
  initAOS();
  initMobileMenu();
  initFAQ();
  initSmoothScroll();
  initWhatsAppLinks();
  initMapEmbed();
  initReviewsHeader();
});

function initAOS() {
  if (typeof AOS === 'undefined') return;
  AOS.init({
    once: true,
    offset: 60,
    duration: 700,
    easing: 'ease-out-cubic',
    disable: function () {
      return window.innerWidth < 480;
    }
  });
}

function initMobileMenu() {
  const menuBtn = document.getElementById('menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const overlay = document.getElementById('mobile-overlay');
  const closeBtn = document.getElementById('menu-close');
  if (!menuBtn || !mobileNav) return;

  function openMenu() {
    mobileNav.classList.remove('translate-x-full');
    mobileNav.classList.add('translate-x-0');
    overlay && overlay.classList.remove('hidden');
    menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileNav.classList.add('translate-x-full');
    mobileNav.classList.remove('translate-x-0');
    overlay && overlay.classList.add('hidden');
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  menuBtn.addEventListener('click', openMenu);
  closeBtn && closeBtn.addEventListener('click', closeMenu);
  overlay && overlay.addEventListener('click', closeMenu);

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

function initFAQ() {
  const items = document.querySelectorAll('.faq-item');

  items.forEach(item => {
    const btn = item.querySelector('.faq-question');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('is-active');

      items.forEach(i => {
        i.classList.remove('is-active');
        const q = i.querySelector('.faq-question');
        if (q) q.setAttribute('aria-expanded', 'false');
      });

      if (!isActive) {
        item.classList.add('is-active');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    if (anchor.hasAttribute('data-wa') || anchor.hasAttribute('data-wa-service')) return;

    anchor.addEventListener('click', e => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

function initWhatsAppLinks() {
  if (typeof window.buildWhatsAppLink !== 'function') return;

  document.querySelectorAll('[data-wa="general"]').forEach(el => {
    el.href = window.buildWhatsAppLink();
  });

  document.querySelectorAll('[data-wa-service]').forEach(el => {
    el.href = window.buildWhatsAppLink(el.getAttribute('data-wa-service'));
  });
}

function initMapEmbed() {
  const cfg = window.SITE_CONFIG;
  const iframe = document.getElementById('map-iframe');
  if (cfg && cfg.mapsEmbedSrc && iframe) {
    iframe.src = cfg.mapsEmbedSrc;
  }
}

function initReviewsHeader() {
  const cfg = window.SITE_CONFIG;
  if (!cfg) return;

  const scoreEl = document.querySelector('[data-google-score]');
  if (scoreEl) {
    scoreEl.textContent = String(cfg.googleRating).replace('.', ',') + ' · ' + cfg.googleReviewCount + ' avaliações';
  }
}
