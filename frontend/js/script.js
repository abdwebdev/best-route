/* ==========================================================================
   BEST ROUTE RELOCATION SERVICES - FRONTEND JAVASCRIPT
   Connects to backend REST APIs using native Fetch API
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Page Elements
  initEstimatorWidget();
  initQuoteModal();
  initContactForm();
  initMobileDrawer();
  loadServicesFromApi();
  initEmirateSelector();
  initMovingPrepChecklist();
  initFaqAccordionAndSearch();
});

/* ==========================================================================
   1. COST ESTIMATOR CALCULATOR
   ========================================================================== */
function initEstimatorWidget() {
  const propertySelect = document.getElementById('estimator-property');
  const fromSelect = document.getElementById('estimator-from');
  const toSelect = document.getElementById('estimator-to');
  const packingCheckbox = document.getElementById('estimator-packing');
  const storageCheckbox = document.getElementById('estimator-storage');
  const priceDisplay = document.getElementById('estimator-price-display');

  if (!propertySelect || !priceDisplay) return;

  async function updateEstimate() {
    const propertyType = propertySelect.value;
    const movingFrom = fromSelect ? fromSelect.value : 'Dubai';
    const movingTo = toSelect ? toSelect.value : 'Dubai';
    const needPacking = packingCheckbox ? packingCheckbox.checked : false;
    const needStorage = storageCheckbox ? storageCheckbox.checked : false;

    try {
      // Call Backend REST API for cost estimate
      const response = await fetch(`/api/quotes/estimate?propertyType=${encodeURIComponent(propertyType)}&movingFrom=${encodeURIComponent(movingFrom)}&movingTo=${encodeURIComponent(movingTo)}&needPacking=${needPacking}&needStorage=${needStorage}`);
      const result = await response.json();

      if (result.success && result.estimate) {
        priceDisplay.textContent = `AED ${result.estimate.min} – ${result.estimate.max}`;
      }
    } catch (err) {
      console.warn('API connection offline, calculating fallback estimate');
      // Fallback calculation if backend call fails
      let min = 750;
      let max = 1200;
      if (propertyType.includes('Studio')) { min = 650; max = 1100; }
      else if (propertyType.includes('1 BHK')) { min = 850; max = 1400; }
      else if (propertyType.includes('2 BHK')) { min = 1300; max = 2200; }
      else if (propertyType.includes('3 BHK')) { min = 2000; max = 3300; }
      else if (propertyType.includes('Villa')) { min = 2800; max = 5000; }

      if (movingFrom !== movingTo) { min += 350; max += 600; }
      if (needPacking) { min += 250; max += 450; }
      if (needStorage) { min += 400; max += 700; }

      priceDisplay.textContent = `AED ${min} – ${max}`;
    }
  }

  // Attach event listeners
  [propertySelect, fromSelect, toSelect, packingCheckbox, storageCheckbox].forEach(el => {
    if (el) el.addEventListener('change', updateEstimate);
  });

  updateEstimate();
}

/* ==========================================================================
   2. QUOTE MODAL CONTROLLER
   ========================================================================== */
function initQuoteModal() {
  const modal = document.getElementById('quote-modal');
  const openBtns = document.querySelectorAll('.js-open-quote-modal');
  const closeBtn = document.getElementById('quote-modal-close');
  const quoteForm = document.getElementById('quote-form');
  const modalSuccess = document.getElementById('modal-success');
  const modalFormContainer = document.getElementById('modal-form-container');

  if (!modal) return;

  window.openQuoteModal = (serviceName = 'Home Relocation') => {
    modal.classList.add('open');
    const serviceSelect = document.getElementById('modal-service');
    if (serviceSelect && serviceName) {
      serviceSelect.value = serviceName;
    }
  };

  window.closeQuoteModal = () => {
    modal.classList.remove('open');
    if (modalSuccess) modalSuccess.style.display = 'none';
    if (modalFormContainer) modalFormContainer.style.display = 'block';
  };

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const service = btn.getAttribute('data-service') || 'Home Relocation';
      window.openQuoteModal(service);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', window.closeQuoteModal);
  }

  // Close modal when clicking outside box
  modal.addEventListener('click', (e) => {
    if (e.target === modal) window.closeQuoteModal();
  });

  // Handle Form Submission to Backend REST API
  if (quoteForm) {
    quoteForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const fullName = document.getElementById('modal-name').value;
      const phone = document.getElementById('modal-phone').value;
      const movingFrom = document.getElementById('modal-from').value;
      const movingTo = document.getElementById('modal-to').value;
      const propertyType = document.getElementById('modal-property').value;
      const serviceRequired = document.getElementById('modal-service').value;
      const preferredDate = document.getElementById('modal-date').value;
      const needPacking = document.getElementById('modal-packing').checked;
      const needStorage = document.getElementById('modal-storage').checked;
      const additionalNotes = document.getElementById('modal-notes').value;

      const submitBtn = quoteForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Submitting...';

      try {
        // Send POST request to backend API
        const response = await fetch('/api/quotes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fullName,
            phone,
            movingFrom,
            movingTo,
            propertyType,
            serviceRequired,
            preferredDate,
            needPacking,
            needStorage,
            additionalNotes,
          }),
        });

        const data = await response.json();

        if (data.success) {
          // Hide form, show success container
          if (modalFormContainer) modalFormContainer.style.display = 'none';
          if (modalSuccess) {
            modalSuccess.style.display = 'block';
            const priceSpan = document.getElementById('modal-success-price');
            if (priceSpan && data.estimate) {
              priceSpan.textContent = `AED ${data.estimate.min} – ${data.estimate.max}`;
            }
            const whatsappBtn = document.getElementById('modal-success-whatsapp');
            if (whatsappBtn && data.whatsappUrl) {
              whatsappBtn.href = data.whatsappUrl;
            }
          }

          // Direct launch of WhatsApp chat with prefilled details
          if (data.whatsappUrl) {
            window.open(data.whatsappUrl, '_blank');
          }
        } else {
          alert(data.message || 'Error submitting quote request.');
        }
      } catch (err) {
        console.error('Submission error:', err);
        alert('Network error. Opening WhatsApp directly.');
        // Direct WhatsApp fallback
        const waMsg = `Hello Best Route Relocation Services,%0A%0AI would like to request a moving quote:%0A- *Name:* ${encodeURIComponent(fullName)}%0A- *Phone:* ${encodeURIComponent(phone)}%0A- *From:* ${encodeURIComponent(movingFrom)} -> *To:* ${encodeURIComponent(movingTo)}%0A- *Property:* ${encodeURIComponent(propertyType)}`;
        window.open(`https://wa.me/971581401608?text=${waMsg}`, '_blank');
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
    });
  }
}

/* ==========================================================================
   3. CONTACT FORM CONTROLLER
   ========================================================================== */
function initContactForm() {
  const contactForm = document.getElementById('contact-page-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const fullName = document.getElementById('contact-name').value;
    const phone = document.getElementById('contact-phone').value;
    const email = document.getElementById('contact-email').value;
    const serviceRequired = document.getElementById('contact-service').value;
    const movingFrom = document.getElementById('contact-from').value;
    const movingTo = document.getElementById('contact-to').value;
    const message = document.getElementById('contact-message').value;

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending...';

    try {
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          phone,
          email,
          serviceRequired,
          movingFrom,
          movingTo,
          message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        const successBox = document.getElementById('contact-success-box');
        if (successBox) {
          successBox.style.display = 'block';
          contactForm.style.display = 'none';
        }
        if (data.whatsappUrl) {
          window.open(data.whatsappUrl, '_blank');
        }
      }
    } catch (err) {
      console.error(err);
      alert('Message sent! Launching WhatsApp chat.');
      const waMsg = `Hello Best Route Relocation,%0A%0A- *Name:* ${encodeURIComponent(fullName)}%0A- *Phone:* ${encodeURIComponent(phone)}%0A- *Message:* ${encodeURIComponent(message)}`;
      window.open(`https://wa.me/971581401608?text=${waMsg}`, '_blank');
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = 'Send Message';
    }
  });
}

/* ==========================================================================
   4. MOBILE DRAWER NAVIGATION
   ========================================================================== */
function initMobileDrawer() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const closeBtn = document.getElementById('mobile-drawer-close');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => drawer.classList.add('open'));
  if (closeBtn) closeBtn.addEventListener('click', () => drawer.classList.remove('open'));
}

/* ==========================================================================
   5. LOAD SERVICES FROM API DYNAMICALLY
   ========================================================================== */
async function loadServicesFromApi() {
  const container = document.getElementById('dynamic-services-list');
  if (!container) return;

  try {
    const response = await fetch('/api/services');
    const result = await response.json();

    if (result.success && result.data && result.data.length > 0) {
      container.innerHTML = result.data.map(service => `
        <div class="card">
          <div>
            <div class="card-icon">🚚</div>
            <h3>${service.title}</h3>
            <p>${service.shortDesc}</p>
          </div>
          <div>
            <div class="card-meta">Starting from AED ${service.startingPrice}</div>
            <button class="btn btn-secondary js-open-quote-modal" data-service="${service.title}" style="width: 100%; margin-top: 1rem;">
              Request Quote
            </button>
          </div>
        </div>
      `).join('');

      // Re-attach modal trigger events for dynamically generated buttons
      document.querySelectorAll('.js-open-quote-modal').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const service = btn.getAttribute('data-service') || 'Home Relocation';
          if (window.openQuoteModal) window.openQuoteModal(service);
        });
      });
    }
  } catch (err) {
    console.warn('Unable to fetch services from API', err);
  }
}

/* ==========================================================================
   6. INTERACTIVE EMIRATE SELECTOR
   ========================================================================== */
function initEmirateSelector() {
  const tabs = document.querySelectorAll('.js-emirate-tab');
  const titleEl = document.getElementById('emirate-title');
  const taglineEl = document.getElementById('emirate-tagline');
  const fleetBadgeEl = document.getElementById('emirate-fleet-badge');
  const neighborhoodsEl = document.getElementById('emirate-neighborhoods');
  const btnNameEl = document.getElementById('emirate-btn-name');

  if (!tabs.length || !titleEl) return;

  const emirateData = {
    dubai: {
      name: 'Dubai',
      badge: '12 Enclosed Fleet Trucks Active',
      title: 'Dubai Relocation Hub',
      tagline: 'Premier house, villa, and corporate movers covering all iconic residential and business communities.',
      areas: ['Dubai Marina', 'Downtown Dubai', 'Palm Jumeirah', 'JVC / JLT', 'Business Bay', 'Arabian Ranches', 'Mirdif']
    },
    abudhabi: {
      name: 'Abu Dhabi',
      badge: '8 Active Trucks in Capital',
      title: 'Abu Dhabi & Al Ain Logistics',
      tagline: 'Specialized capital relocations with full Musanada and government entity access clearances.',
      areas: ['Corniche', 'Saadiyat Island', 'Yas Island', 'Al Reem Island', 'Khalifa City', 'Mohammed Bin Zayed City']
    },
    sharjah: {
      name: 'Sharjah',
      badge: '6 Dedicated Express Trucks',
      title: 'Sharjah Relocation Network',
      tagline: 'Fast, efficient apartment and villa moving tailored for families across Sharjah.',
      areas: ['Al Majaz', 'Al Nahda', 'Al Taawun', 'Muwaileh', 'Al Khan', 'University City']
    },
    ajman: {
      name: 'Ajman',
      badge: '5 Daily Shuttle Fleets',
      title: 'Ajman Coastal Movers',
      tagline: 'Affordable high-quality house and furniture relocations with quick dispatch times.',
      areas: ['Ajman Corniche', 'Al Nuaimia', 'Al Rashidiya', 'Al Yasmeen', 'Emirates City']
    },
    rak: {
      name: 'Ras Al Khaimah',
      badge: '4 Inter-Emirate Units',
      title: 'Ras Al Khaimah Relocation',
      tagline: 'Full villa and resort moving services across northern emirate communities.',
      areas: ['Al Hamra Village', 'Mina Al Arab', 'Marjan Island', 'Al Nakheel', 'Khuzam']
    },
    fujairah: {
      name: 'Fujairah',
      badge: 'East Coast Express Crew',
      title: 'Fujairah & Kalba Relocations',
      tagline: 'Safe transit through mountainous corridors with heavy padding protection.',
      areas: ['Dibba', 'Fujairah City', 'Al Aqah', 'Mirbah', 'Qidfa']
    },
    uaq: {
      name: 'Umm Al Quwain',
      badge: '3 Express Moving Vans',
      title: 'Umm Al Quwain Services',
      tagline: 'Reliable residential relocations for villas, apartments, and private estates.',
      areas: ['Al Salama', 'Umm Al Quwain Marina', 'Al Rauda', 'Falaj Al Mualla']
    }
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const emKey = tab.getAttribute('data-emirate');
      const data = emirateData[emKey] || emirateData.dubai;

      // Update active tab styling
      tabs.forEach(t => {
        t.style.backgroundColor = 'var(--bg-dark)';
        t.style.color = 'var(--text-slate)';
        t.classList.remove('active');
      });
      tab.style.backgroundColor = 'var(--primary-orange)';
      tab.style.color = '#000';
      tab.classList.add('active');

      // Update contents
      if (titleEl) titleEl.textContent = data.title;
      if (taglineEl) taglineEl.textContent = data.tagline;
      if (fleetBadgeEl) fleetBadgeEl.textContent = data.badge;
      if (btnNameEl) btnNameEl.textContent = data.name;

      if (neighborhoodsEl) {
        neighborhoodsEl.innerHTML = data.areas.map(area => `
          <span style="background-color: var(--bg-card); border: 1px solid var(--border-color); padding: 0.3rem 0.75rem; border-radius: 0.5rem; font-size: 0.75rem;">${area}</span>
        `).join('');
      }
    });
  });
}

/* ==========================================================================
   7. INTERACTIVE MOVING PREP CHECKLIST
   ========================================================================== */
function initMovingPrepChecklist() {
  const checkboxes = document.querySelectorAll('.js-checklist-item');
  const progressText = document.getElementById('checklist-progress-text');

  if (!checkboxes.length || !progressText) return;

  function updateChecklistProgress() {
    let checkedCount = 0;
    checkboxes.forEach(chk => {
      if (chk.checked) {
        checkedCount++;
        chk.parentElement.style.opacity = '0.6';
        chk.parentElement.style.textDecoration = 'line-through';
      } else {
        chk.parentElement.style.opacity = '1';
        chk.parentElement.style.textDecoration = 'none';
      }
    });

    progressText.textContent = `${checkedCount} / ${checkboxes.length} Completed`;
    if (checkedCount === checkboxes.length) {
      progressText.textContent = `🎉 All Ready for Moving Day!`;
    }
  }

  checkboxes.forEach(chk => chk.addEventListener('change', updateChecklistProgress));
  updateChecklistProgress();
}

/* ==========================================================================
   8. FAQ ACCORDION AND LIVE SEARCH FILTER
   ========================================================================== */
function initFaqAccordionAndSearch() {
  const faqToggles = document.querySelectorAll('.js-faq-toggle');
  const searchInput = document.getElementById('faq-search-input');
  const catPills = document.querySelectorAll('.js-faq-cat-pill');
  const faqItems = document.querySelectorAll('.faq-item');

  // Accordion Expand/Collapse
  faqToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const content = toggle.nextElementSibling;
      const icon = toggle.querySelector('.faq-icon');
      const isOpen = content.style.display === 'block';

      // Close all other FAQs
      document.querySelectorAll('.faq-content').forEach(c => c.style.display = 'none');
      document.querySelectorAll('.faq-icon').forEach(i => i.textContent = '+');

      if (!isOpen) {
        content.style.display = 'block';
        if (icon) icon.textContent = '−';
      }
    });
  });

  // Category Filtering
  let activeCat = 'all';
  catPills.forEach(pill => {
    pill.addEventListener('click', () => {
      catPills.forEach(p => {
        p.style.backgroundColor = 'var(--bg-card)';
        p.style.color = 'var(--text-slate)';
        p.classList.remove('active');
      });
      pill.style.backgroundColor = 'var(--primary-orange)';
      pill.style.color = '#000';
      pill.classList.add('active');

      activeCat = pill.getAttribute('data-category');
      filterFaqItems();
    });
  });

  // Live Search Filtering
  if (searchInput) {
    searchInput.addEventListener('input', filterFaqItems);
  }

  function filterFaqItems() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

    faqItems.forEach(item => {
      const itemCat = item.getAttribute('data-category');
      const text = item.textContent.toLowerCase();

      const matchesCat = (activeCat === 'all' || itemCat === activeCat);
      const matchesQuery = (!query || text.includes(query));

      if (matchesCat && matchesQuery) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
}

