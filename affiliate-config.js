// Affiliate Configuration — ai-swipey.net
// Centralized affiliate link for OurDreamersAI
// Modal preference system: Women / Men / Anime

(function() {
  'use strict';

  // Base affiliate link
  const AFFILIATE_BASE = 'https://www.ourdreamersai.com/7S8HPQB/3QQG7/';

  // Offer mapping by preference
  const OFFERS = {
    women:  AFFILIATE_BASE + '?source=swipey_modal_women',
    men:    AFFILIATE_BASE + '?source=swipey_modal_men',
    anime:  AFFILIATE_BASE + '?source=swipey_modal_anime',
    default: AFFILIATE_BASE + '?source=swipey_direct'
  };

  // All CTA buttons use this function
  window.goToOffer = function(preference) {
    const url = OFFERS[preference] || OFFERS.default;
    window.open(url, '_blank');
  };

  // Modal logic
  document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('preference-modal');
    const overlay = document.getElementById('modal-overlay');
    const closeBtn = document.getElementById('modal-close');

    // Open modal
    document.querySelectorAll('[data-open-modal]').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        modal.classList.add('active');
        overlay.classList.add('active');
      });
    });

    // Close modal
    function closeModal() {
      modal.classList.remove('active');
      overlay.classList.remove('active');
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (overlay) overlay.addEventListener('click', closeModal);

    // Preference buttons
    document.querySelectorAll('[data-preference]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        const pref = this.dataset.preference;
        goToOffer(pref);
        closeModal();
      });
    });

    // Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeModal();
    });
  });
})();
