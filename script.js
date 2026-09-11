
(() => {
  'use strict';


  const API_ENDPOINT = 'https://script.google.com/macros/s/AKfycbyazYBJ4Hn59lEENDhQxevpgvnLN5RG9oelp_dZH6HANb3PJIonjTanqQunc29mm2xI/exec';

  
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('[data-nav]').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const sections = ['home', 'forum', 'why', 'register', 'contact']
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  const navAnchors = Array.from(document.querySelectorAll('.nav-link[data-nav]'));

  function setActiveLink(id) {
    navAnchors.forEach((a) => {
      a.classList.toggle('is-active', a.getAttribute('href') === `#${id}`);
    });
  }

  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveLink(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((sec) => observer.observe(sec));
  }

  
  document.querySelectorAll('.lang-toggle__btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.lang-toggle__btn').forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
    });
  });

  
  function stripDangerousChars(value) {
    return String(value).replace(/[<>]/g, '');
  }

  function neutralizeFormula(value) {
    const str = String(value);
    return /^[=+\-@]/.test(str) ? `'${str}` : str;
  }

  function sanitize(value) {
    return neutralizeFormula(stripDangerousChars(String(value).trim()));
  }


  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const NPM_RE = /^[0-9]{5,20}$/;
  const WA_RE = /^(?:\+62|62|0)8[1-9][0-9]{6,10}$/; // Indonesian mobile numbers

  const validators = {
    email: (v) => (EMAIL_RE.test(v) ? '' : 'Masukkan alamat email yang valid.'),
    fullName: (v) => (v.length >= 3 ? '' : 'Nama lengkap minimal 3 karakter.'),
    npm: (v) => (NPM_RE.test(v) ? '' : 'NPM hanya boleh berisi angka (5–20 digit).'),
    angkatan: (v) => (v ? '' : 'Pilih angkatan kamu.'),
    whatsapp: (v) => (WA_RE.test(v.replace(/[\s-]/g, '')) ? '' : 'Masukkan nomor WhatsApp Indonesia yang valid.'),
  };

  const form = document.getElementById('cybersecForm');
  const submitBtn = document.getElementById('submitBtn');
  const toast = document.getElementById('successToast');

  function showFieldError(name, message) {
    const input = form.elements[name];
    const field = input ? input.closest('.field') : null;
    const errorEl = form.querySelector(`[data-error-for="${name}"]`);
    if (field) field.classList.toggle('has-error', Boolean(message));
    if (errorEl) errorEl.textContent = message;
  }

  function validateForm(data) {
    let firstInvalid = null;
    let valid = true;

    Object.entries(validators).forEach(([name, check]) => {
      const message = check(data[name] || '');
      showFieldError(name, message);
      if (message && !firstInvalid) firstInvalid = name;
      if (message) valid = false;
    });

    return { valid, firstInvalid };
  }

  function showToast() {
    toast.classList.add('is-visible');
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(() => {
      toast.classList.remove('is-visible');
    }, 5000);
  }

  function setLoading(isLoading) {
    submitBtn.classList.toggle('is-loading', isLoading);
    submitBtn.disabled = isLoading;
    submitBtn.querySelector('.btn__label').textContent = isLoading
      ? 'Processing Encrypted Data...'
      : 'SUBMIT REGISTRATION';
  }

  if (form) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (submitBtn.disabled) return; // debounce: ignore repeat clicks mid-submit

      const raw = Object.fromEntries(new FormData(form).entries());
      const { valid, firstInvalid } = validateForm(raw);

      if (!valid) {
        const el = form.elements[firstInvalid];
        if (el) el.focus();
        return;
      }

      const payload = {
        email: sanitize(raw.email),
        fullName: sanitize(raw.fullName),
        npm: sanitize(raw.npm),
        angkatan: sanitize(raw.angkatan),
        specialization: sanitize(raw.specialization || ''),
        whatsapp: sanitize(raw.whatsapp),
        github: sanitize(raw.github || ''),
        submittedAt: new Date().toISOString(),
      };

      setLoading(true);

      try {
        const response = await fetch(API_ENDPOINT, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' }, // avoids CORS preflight on Apps Script
          body: JSON.stringify(payload),
        });

        // Apps Script web apps may return a redirect; treat any
        // resolved fetch without a network error as a success.
        if (!response.ok && response.status !== 0) {
          throw new Error(`Server responded with ${response.status}`);
        }

        form.reset();
        Object.keys(validators).forEach((name) => showFieldError(name, ''));
        showToast();
      } catch (err) {
        console.error('Registration submit failed:', err);
        showFieldError('email', '');
        alert('Gagal mengirim data. Periksa koneksi kamu dan coba lagi.');
      } finally {
        setLoading(false);
      }
    });

    // Clear a field's error as soon as the user starts fixing it
    form.querySelectorAll('input, select').forEach((el) => {
      el.addEventListener('input', () => {
        if (el.name && validators[el.name]) {
          const message = validators[el.name](el.value.trim());
          if (!message) showFieldError(el.name, '');
        }
      });
    });
  }
})();
