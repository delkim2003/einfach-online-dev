(function() {
  'use strict';

  const STORAGE_KEY = 'cookie-consent';
  const banner = document.getElementById('cookie-banner');
  const btnAccept = document.getElementById('cookie-accept');
  const btnDecline = document.getElementById('cookie-decline');

  function getConsent() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function setConsent(value) {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch (e) {
      // silent fail
    }
  }

  function hideBanner() {
    if (!banner) return;
    banner.classList.add('translate-y-full', 'opacity-0');
    banner.classList.remove('translate-y-0', 'opacity-100');
    setTimeout(() => {
      banner.hidden = true;
    }, 300);
  }

  function showBanner() {
    if (!banner) return;
    banner.hidden = false;
    // Force reflow
    void banner.offsetWidth;
    banner.classList.remove('translate-y-full', 'opacity-0');
    banner.classList.add('translate-y-0', 'opacity-100');
  }

  function init() {
    const consent = getConsent();
    if (consent === null) {
      showBanner();
    }
  }

  if (btnAccept) {
    btnAccept.addEventListener('click', function() {
      setConsent('all');
      hideBanner();
      // Trigger Plausible analytics init if available
      if (typeof window.plausible === 'function') {
        window.plausible('pageview');
      }
    });
  }

  if (btnDecline) {
    btnDecline.addEventListener('click', function() {
      setConsent('necessary');
      hideBanner();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
