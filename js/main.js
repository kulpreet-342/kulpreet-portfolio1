/**
 * ===================================================================
 * MAIN PORTFOLIO CONTROLLER - KULPREET KAUR
 * Handles: Customization modal, live updates, localStorage persistence,
 * theme toggle, copy to clipboard, and mobile navigation.
 * ===================================================================
 */

(function () {
  'use strict';

  // Storage key for customizer
  const STORAGE_KEY = 'kulpreet_portfolio_data';
  const THEME_KEY = 'kulpreet_portfolio_theme';

  // Get current active profile data
  function getActiveData() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return Object.assign({}, window.PORTFOLIO_CONFIG, parsed);
      } catch (e) {
        console.error('Error parsing stored config', e);
      }
    }
    return window.PORTFOLIO_CONFIG || {};
  }

  // Save updated data
  function saveActiveData(newData) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    applyDataToPage();
    showToast('✨ Details updated across your portfolio!');
  }

  // Reset to original config
  function resetToDefaults() {
    if (confirm('Reset all details back to the default configuration?')) {
      localStorage.removeItem(STORAGE_KEY);
      applyDataToPage();
      populateCustomizerInputs();
      showToast('🔄 Restored default details.');
    }
  }

  // Apply data to DOM elements
  function applyDataToPage() {
    const data = getActiveData();

    // Text content updates
    document.querySelectorAll('[data-config]').forEach(el => {
      const key = el.getAttribute('data-config');
      if (key.includes('.')) {
        const parts = key.split('.');
        if (data[parts[0]] && data[parts[0]][parts[1]]) {
          el.textContent = data[parts[0]][parts[1]];
        }
      } else if (data[key] !== undefined) {
        el.textContent = data[key];
      }
    });

    // Href links updates (tel, mailto, url)
    document.querySelectorAll('[data-config-href]').forEach(el => {
      const key = el.getAttribute('data-config-href');
      const prefix = el.getAttribute('data-href-prefix') || '';
      let val = '';
      if (key.includes('.')) {
        const parts = key.split('.');
        if (data[parts[0]] && data[parts[0]][parts[1]]) {
          val = data[parts[0]][parts[1]];
        }
      } else if (data[key] !== undefined) {
        val = data[key];
      }

      if (val) {
        el.setAttribute('href', prefix + val);
      }
    });

    // Update page title if name exists
    if (data.name && !document.title.includes(data.name)) {
      const currentPageName = document.title.split(' - ')[0] || 'Portfolio';
      document.title = `${currentPageName} - ${data.name}`;
    }
  }

  // Toast notification
  function showToast(message) {
    let toast = document.getElementById('toastNotification');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toastNotification';
      toast.className = 'toast-notification';
      document.body.appendChild(toast);
    }
    toast.innerHTML = message;
    toast.classList.add('active');
    setTimeout(() => {
      toast.classList.remove('active');
    }, 3200);
  }

  // Populate Customizer Inputs
  function populateCustomizerInputs() {
    const data = getActiveData();
    const setVal = (id, val) => {
      const input = document.getElementById(id);
      if (input && val !== undefined) input.value = val;
    };

    setVal('cfgName', data.name);
    setVal('cfgRole', data.headlineRole);
    setVal('cfgIntro1', data.introLine1);
    setVal('cfgIntro2', data.introLine2);
    setVal('cfgPhone', data.contact ? data.contact.phone : '');
    setVal('cfgEmail', data.contact ? data.contact.email : '');
    setVal('cfgLinkedin', data.contact ? data.contact.linkedin : '');
    setVal('cfgLinkedinDisplay', data.contact ? data.contact.linkedinDisplay : '');
    setVal('cfgUniversity', data.university);
    setVal('cfgSchool', data.school);
    setVal('cfgHometown', data.hometown);
  }

  // Setup Modal
  function setupCustomizerModal() {
    const modalBackdrop = document.getElementById('customizerModalBackdrop');
    const openBtns = document.querySelectorAll('.open-customizer-btn');
    const closeBtn = document.getElementById('closeCustomizerBtn');
    const cancelBtn = document.getElementById('cancelCustomizerBtn');
    const saveBtn = document.getElementById('saveCustomizerBtn');
    const resetBtn = document.getElementById('resetCustomizerBtn');
    const exportBtn = document.getElementById('exportConfigBtn');

    if (!modalBackdrop) return;

    openBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        populateCustomizerInputs();
        modalBackdrop.classList.add('active');
      });
    });

    const closeModal = () => modalBackdrop.classList.remove('active');

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });

    if (saveBtn) {
      saveBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const current = getActiveData();
        const getVal = (id) => {
          const el = document.getElementById(id);
          return el ? el.value.trim() : '';
        };

        const phoneVal = getVal('cfgPhone');
        const phoneRaw = phoneVal.replace(/[^0-9+]/g, '');

        const updated = Object.assign({}, current, {
          name: getVal('cfgName') || current.name,
          headlineRole: getVal('cfgRole') || current.headlineRole,
          introLine1: getVal('cfgIntro1') || current.introLine1,
          introLine2: getVal('cfgIntro2') || current.introLine2,
          university: getVal('cfgUniversity') || current.university,
          school: getVal('cfgSchool') || current.school,
          hometown: getVal('cfgHometown') || current.hometown,
          contact: Object.assign({}, current.contact, {
            phone: phoneVal || current.contact.phone,
            phoneRaw: phoneRaw ? (phoneRaw.startsWith('+') ? phoneRaw : '+91' + phoneRaw) : current.contact.phoneRaw,
            email: getVal('cfgEmail') || current.contact.email,
            linkedin: getVal('cfgLinkedin') || current.contact.linkedin,
            linkedinDisplay: getVal('cfgLinkedinDisplay') || current.contact.linkedinDisplay || 'LinkedIn Profile'
          })
        });

        saveActiveData(updated);
        closeModal();
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', resetToDefaults);
    }

    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        const active = getActiveData();
        const codeSnippet = `const PORTFOLIO_CONFIG = ${JSON.stringify(active, null, 2)};`;
        navigator.clipboard.writeText(codeSnippet).then(() => {
          showToast('📋 Copied updated config JSON to clipboard!');
        }).catch(() => {
          prompt('Copy your updated configuration:', codeSnippet);
        });
      });
    }
  }

  // Setup Theme Toggle
  function setupTheme() {
    const themeBtn = document.getElementById('themeToggleBtn');
    const savedTheme = localStorage.getItem(THEME_KEY) || 'dark';

    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'dark';
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem(THEME_KEY, next);
        updateThemeIcon(next);
      });
    }
  }

  function updateThemeIcon(theme) {
    const themeBtn = document.getElementById('themeToggleBtn');
    if (!themeBtn) return;
    if (theme === 'light') {
      themeBtn.innerHTML = '🌙';
      themeBtn.setAttribute('title', 'Switch to Dark Mode');
      themeBtn.setAttribute('aria-label', 'Switch to Dark Mode');
    } else {
      themeBtn.innerHTML = '☀️';
      themeBtn.setAttribute('title', 'Switch to Light Mode');
      themeBtn.setAttribute('aria-label', 'Switch to Light Mode');
    }
  }

  // Setup Mobile Navigation
  function setupMobileNav() {
    const toggle = document.querySelector('.mobile-toggle');
    const menu = document.querySelector('.nav-menu');
    if (toggle && menu) {
      toggle.addEventListener('click', () => {
        menu.classList.toggle('open');
        toggle.textContent = menu.classList.contains('open') ? '✕' : '☰';
      });
    }
  }

  // Copy to clipboard buttons
  function setupCopyButtons() {
    document.querySelectorAll('.copy-trigger').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetConfigKey = btn.getAttribute('data-copy-target');
        const data = getActiveData();
        let textToCopy = '';

        if (targetConfigKey) {
          if (targetConfigKey.includes('.')) {
            const parts = targetConfigKey.split('.');
            textToCopy = data[parts[0]] ? data[parts[0]][parts[1]] : '';
          } else {
            textToCopy = data[targetConfigKey] || '';
          }
        } else {
          textToCopy = btn.getAttribute('data-copy-val') || '';
        }

        if (textToCopy) {
          navigator.clipboard.writeText(textToCopy).then(() => {
            showToast(`📋 Copied "${textToCopy}" to clipboard!`);
          }).catch(err => {
            prompt('Copy to clipboard: Ctrl+C, Enter', textToCopy);
          });
        }
      });
    });
  }

  // Initialize
  document.addEventListener('DOMContentLoaded', () => {
    applyDataToPage();
    setupTheme();
    setupMobileNav();
    setupCustomizerModal();
    setupCopyButtons();
  });

  // Export helper globally if needed
  window.PortfolioApp = {
    getActiveData,
    saveActiveData,
    resetToDefaults,
    showToast
  };
})();
