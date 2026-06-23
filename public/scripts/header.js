(function() {
  'use strict';

  const header = document.getElementById('site-header');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  let lastScroll = 0;

  function updateHeader() {
    if (!header) return;
    const scrollY = window.scrollY || window.pageYOffset;

    if (scrollY > 50) {
      header.classList.add('bg-surface-container-low/80', 'backdrop-blur-xl', 'border-b', 'border-border-subtle');
      header.classList.remove('bg-transparent');
    } else {
      header.classList.remove('bg-surface-container-low/80', 'backdrop-blur-xl', 'border-b', 'border-border-subtle');
      header.classList.add('bg-transparent');
    }

    lastScroll = scrollY;
  }

  function toggleMobileMenu() {
    if (!mobileMenu || !mobileToggle) return;
    const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
    
    if (isExpanded) {
      mobileMenu.classList.add('hidden');
      mobileToggle.setAttribute('aria-expanded', 'false');
    } else {
      mobileMenu.classList.remove('hidden');
      mobileToggle.setAttribute('aria-expanded', 'true');
    }
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', toggleMobileMenu);
  }

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();
})();
