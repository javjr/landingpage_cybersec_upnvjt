/**
 * CYBERSEC UPNVJT — Frontend Application Logic
 * Refined with Impeccable & Web Design Guidelines
 */

(() => {
  'use strict';

  const API_ENDPOINT = 'https://script.google.com/macros/s/AKfycbyazYBJ4Hn59lEENDhQxevpgvnLN5RG9oelp_dZH6HANb3PJIonjTanqQunc29mm2xI/exec';

  // ============ Bilingual Dictionary (ID / EN) ============
  const i18n = {
    id: {
      skipLink: 'Langsung ke konten',
      navHome: 'Beranda',
      navForum: 'Forum',
      navPillars: 'Pilar',
      navWhy: 'Kenapa Bergabung',
      navRegister: 'Daftar',
      navContact: 'Kontak',
      heroBadge: 'FORUM MAHASISWA INFORMATIKA',
      heroTitlePrefix: 'FORUM CYBER SECURITY MAHASISWA',
      heroTitleHighlight: 'UPN VETERAN JAWA TIMUR',
      heroLead: 'Wadah kolaborasi dan eksplorasi mendalam seputar dunia keamanan siber untuk mempersiapkan talenta digital masa depan.',
      heroSub: '(Forum terbuka bagi mahasiswa UPN Veteran Jawa Timur)',
      heroCta1: 'Kenali Kami',
      heroCta2: 'Daftar Sekarang',
      forumTitle: 'Pilar Pembelajaran',
      cardDefensiveTitle: 'Defensive Security',
      cardDefensiveDesc: 'Memahami sistem pertahanan cyber, monitoring ancaman, dan respon insiden (Blue Team).',
      cardProgrammingTitle: 'Programming & Scripting',
      cardProgrammingDesc: 'Automasi keamanan, eksploitasi, dan praktik secure coding.',
      cardFundamentalTitle: 'Fundamental Keamanan',
      cardFundamentalDesc: 'Prinsip dasar keamanan siber, enkripsi, CIA Triad, dan tata kelola keamanan.',
      cardRelationTitle: 'Relasi & Networking',
      cardRelationDesc: 'Bangun jaringan penggiat cybersecurity, kolaborasi tim, dan sesi sharing praktisi.',
      cardCloudTitle: 'Cloud Security',
      cardCloudDesc: 'Memahami arsitektur dan keamanan sistem cloud (AWS/GCP/Azure).',
      cardSocialEngTitle: 'Social Engineering',
      cardSocialEngDesc: 'Mempelajari psikologi manusia dan vektor manipulasi aktivitas digital.',
      cardNetworkingTitle: 'Network Security',
      cardNetworkingDesc: 'Analisis jaringan, inspeksi paket, dan routing yang krusial dalam pertahanan.',
      cardCtfTitle: 'CTF (Capture The Flag)',
      cardCtfDesc: 'Asah problem solving melalui kompetisi keamanan siber nasional & global.',
      cardOffensiveTitle: 'Offensive Security',
      cardOffensiveDesc: 'Analisis kerentanan, eksploitasi celah, dan teknik ethical hacking (Red Team).',
      whyTitle: 'Kenapa Harus Bergabung?',
      whyCtfTitle: 'Persiapan Lomba CTF',
      whyCtfDesc: 'Latihan intensif persiapan lomba Capture The Flag (CTF) dari pemula hingga mahir.',
      whyDefensiveTitle: 'Praktik Defensive Security',
      whyDefensiveDesc: 'Belajar langsung mengamankan sistem, memantau, dan memitigasi serangan siber.',
      whyZeroTitle: 'Mulai dari Nol',
      whyZeroDesc: 'Sangat ramah pemula! Tidak wajib memiliki latar belakang IT atau keamanan siber.',
      whyHandsOnTitle: 'Hands-on Lab Bareng',
      whyHandsOnDesc: 'Bukan sekadar teori kaku, kita langsung terjun ke simulasi lab secara bersama-sama.',
      whyOffensiveTitle: 'Eksplorasi Offensive Security',
      whyOffensiveDesc: 'Pencarian celah keamanan dan dasar ethical hacking secara bertanggung jawab.',
      registerTitle: 'Pendaftaran Anggota',
      registerLead: 'Isi formulir di bawah ini untuk bergabung dengan CYBERSEC UPNVJT. Proses cepat dan data dijamin aman.',
      labelEmail: 'Alamat Email',
      labelFullName: 'Nama Lengkap',
      labelNpm: 'NPM (Nomor Pokok Mahasiswa)',
      labelAngkatan: 'Tahun Angkatan',
      selectAngkatanDefault: 'Pilih Tahun Angkatan',
      labelSpecialization: 'Minat Spesialisasi',
      specDefault: 'Belum Yakin / Mengeksplorasi Semua',
      labelWhatsapp: 'Nomor WhatsApp',
      labelGithub: 'GitHub / Portofolio',
      submitBtn: 'KIRIM PENDAFTARAN',
      privacyText: 'Data kamu terenkripsi dan hanya digunakan untuk keperluan internal forum CYBERSEC UPNVJT.',
      toastSuccessTitle: 'Registrasi Berhasil!',
      toastSuccessSub: 'Selamat bergabung! Sampai jumpa di kegiatan kami.',
      footerTagline: 'Forum Cybersecurity Mahasiswa UPN Veteran Jawa Timur',
      footerNavTitle: 'Navigasi',
      footerPillarsTitle: 'Pilar Fokus',
      footerContactTitle: 'Kontak Kami',
      footerCopyright: '© 2026 CYBERSEC UPNVJT. Seluruh Hak Cipta Dilindungi.',
      validationEmail: 'Masukkan alamat email yang valid.',
      validationFullName: 'Nama lengkap minimal 3 karakter.',
      validationNpm: 'NPM hanya boleh berisi angka.',
      validationAngkatan: 'Pilih tahun angkatan.',
      validationWa: 'Masukkan nomor WhatsApp yang valid.',
      submittingText: 'Memproses Data...'
    },
    en: {
      skipLink: 'Skip to content',
      navHome: 'Home',
      navForum: 'Forum',
      navPillars: 'Pillars',
      navWhy: 'Why Us',
      navRegister: 'Register',
      navContact: 'Contact',
      heroBadge: 'INFORMATICS STUDENT FORUM',
      heroTitlePrefix: 'CYBER SECURITY STUDENT FORUM',
      heroTitleHighlight: 'UPN VETERAN JAWA TIMUR',
      heroLead: 'The premier community for UPN Veteran Jawa Timur students dedicated to advancing in Cybersecurity.',
      heroSub: 'An open forum for students of UPN Veteran Jawa Timur.',
      heroCta1: 'What is CYBERSECUPNVJT?',
      heroCta2: 'Register Now',
      forumTitle: 'What is in CYBERSECUPNVJT',
      cardDefensiveTitle: 'Defensive Security',
      cardDefensiveDesc: 'Understanding cyber defense architectures, threat monitoring, and incident response (Blue Team).',
      cardProgrammingTitle: 'Programming',
      cardProgrammingDesc: 'Security automation scripting, exploit analysis, and secure coding for specialized tracks.',
      cardFundamentalTitle: 'Fundamental',
      cardFundamentalDesc: 'Core principles of information security, encryption, CIA Triad, and security governance.',
      cardRelationTitle: 'Relation',
      cardRelationDesc: 'Networking with cybersecurity enthusiasts, peer collaboration, and industry sharing sessions.',
      cardCloudTitle: 'Cloud',
      cardCloudDesc: 'Mastering cloud security architectures (AWS/GCP/Azure) vital in modern enterprise ecosystems.',
      cardSocialEngTitle: 'Social Engineering',
      cardSocialEngDesc: 'Understanding human psychology, deception attack vectors, and psychological manipulation defense.',
      cardNetworkingTitle: 'Networking',
      cardNetworkingDesc: 'Packet inspection, firewall topologies, routing protocols, and secure network infrastructure.',
      cardCtfTitle: 'CTF',
      cardCtfDesc: 'Sharpen adversarial problem-solving skills through national and global Capture The Flag tournaments.',
      cardOffensiveTitle: 'Offensive Security',
      cardOffensiveDesc: 'Deep dive into ethical hacking methodologies, penetration testing, and vulnerability research (Red Team).',
      whyTitle: 'Why Join Us',
      whyCtfTitle: 'CTF & Competition',
      whyCtfDesc: 'Collaborative drill sessions and intensive team formation for national & international CTF competitions.',
      whyDefensiveTitle: 'Defensive Security',
      whyDefensiveDesc: 'Learn live incident response, telemetry, and modern defensive controls hands-on (Blue Team).',
      whyZeroTitle: 'Start from Zero',
      whyZeroDesc: 'Beginner-friendly environment. No previous IT or security background required to start!',
      whyHandsOnTitle: 'Hands-on Practice',
      whyHandsOnDesc: 'Beyond theoretical slides—we explore interactive simulation labs and real-world attack scenarios.',
      whyOffensiveTitle: 'Offensive Security',
      whyOffensiveDesc: 'Learn responsible vulnerability identification, exploit concepts, and ethical hacking (Red Team).',
      registerTitle: 'Register Now',
      registerLead: 'Fill out your details below to join the CYBERSEC UPNVJT forum. Fast process with encrypted transmission.',
      labelEmail: 'Email Address',
      labelFullName: 'Full Name',
      labelNpm: 'NPM / Student ID',
      labelAngkatan: 'Class Year / Batch',
      selectAngkatanDefault: 'Select class year',
      labelSpecialization: 'Specialization Interest',
      specDefault: 'Undecided / Open',
      labelWhatsapp: 'WhatsApp Number',
      labelGithub: 'GitHub / Portfolio',
      submitBtn: 'SUBMIT REGISTRATION',
      privacyText: 'Your data is strictly used for CYBERSEC UPNVJT community communication and never shared.',
      toastSuccessTitle: 'Registration Successful',
      toastSuccessSub: 'See you in the forum, stay secure!',
      footerTagline: 'Informatics Cybersecurity Forum at UPN Veteran Jawa Timur',
      footerNavTitle: 'Navigation',
      footerPillarsTitle: 'Pillars',
      footerContactTitle: 'Contact',
      footerCopyright: '© 2026 CYBERSEC UPNVJT. All rights reserved.',
      validationEmail: 'Please enter a valid email address.',
      validationFullName: 'Full name must be at least 3 characters.',
      validationNpm: 'NPM must contain only digits (5–20 digits).',
      validationAngkatan: 'Please select your class year.',
      validationWa: 'Please enter a valid Indonesian mobile/WhatsApp number.',
      submittingText: 'Processing Encrypted Data...'
    }
  };

  let currentLang = localStorage.getItem('cybersec_lang') || 'id';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('cybersec_lang', lang);
    document.documentElement.lang = lang;

    const dict = i18n[lang] || i18n.id;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll('.lang-toggle__btn').forEach((btn) => {
      const isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });
  }

  // ============ Mobile Navigation ============
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

  // ============ Active Nav Scroll Observer ============
  const sections = ['home', 'forum', 'why', 'register', 'contact']
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  const navAnchors = Array.from(document.querySelectorAll('.nav-link[data-nav]'));

  function setActiveLink(id) {
    navAnchors.forEach((a) => {
      a.classList.toggle('is-active', a.getAttribute('href') === '#' + id);
    });
  }

  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveLink(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: 0 }
    );
    sections.forEach((sec) => observer.observe(sec));
  }

  // ============ Hero Entrance Orchestrator ============
  const heroElements = document.querySelectorAll('[data-hero-enter]');
  if (heroElements.length) {
    // Wait for initial paint to ensure CSS transitions play from state A to B
    window.setTimeout(() => {
      heroElements.forEach((el) => {
        const delay = parseInt(el.getAttribute('data-hero-enter'), 10) || 0;
        window.setTimeout(() => el.classList.add('is-entered'), delay);
      });
    }, 100);
  }

  // ============ Scroll Reveal & Shimmer Observer ============
  const revealElements = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && revealElements.length) {
    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            // Trigger shimmer on the section rule
            if (entry.target.classList.contains('section__title')) {
              const rule = entry.target.nextElementSibling;
              if (rule && rule.classList.contains('section__rule')) {
                rule.classList.add('is-shimmer');
              }
            }
            obs.unobserve(entry.target); // Only play once
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0 }
    );
    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach((el) => el.classList.add('is-revealed'));
  }

  // ============ Navbar Scroll State ============
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const handleScroll = () => {
      navbar.classList.toggle('navbar--scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialize on load
  }

  // ============ Language Toggle Handler ============
  document.querySelectorAll('.lang-toggle__btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetLang = btn.getAttribute('data-lang');
      if (targetLang) applyLanguage(targetLang);
    });
  });

  // Apply initial saved language
  applyLanguage(currentLang);

  // ============ Security & Sanitization ============
  function stripDangerousChars(value) {
    return String(value).replace(/[<>]/g, '');
  }

  function neutralizeFormula(value) {
    const str = String(value);
    return /^[=+\-@]/.test(str) ? '' : str;
  }

  function sanitize(value) {
    return neutralizeFormula(stripDangerousChars(String(value).trim()));
  }

  // ============ Form Validation & Submission ============
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const NPM_RE = /^[0-9]{5,20}$/;
  const WA_RE = /^(?:\+62|62|0)8[1-9][0-9]{6,10}$/; // Indonesian mobile numbers

  function getValidators() {
    const dict = i18n[currentLang] || i18n.id;
    return {
      email: (v) => (EMAIL_RE.test(v) ? '' : dict.validationEmail),
      fullName: (v) => (v.length >= 3 ? '' : dict.validationFullName),
      npm: (v) => (NPM_RE.test(v) ? '' : dict.validationNpm),
      angkatan: (v) => (v ? '' : dict.validationAngkatan),
      whatsapp: (v) => (WA_RE.test(v.replace(/[\s-]/g, '')) ? '' : dict.validationWa),
    };
  }

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
 const validators = getValidators();
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
 if (!toast) return;
 toast.classList.add('is-visible');
 window.clearTimeout(showToast._t);
 showToast._t = window.setTimeout(() => {
 toast.classList.remove('is-visible');
 }, 5000);
 }

 function setLoading(isLoading) {
 if (!submitBtn) return;
 submitBtn.classList.toggle('is-loading', isLoading);
 submitBtn.disabled = isLoading;
 const labelEl = submitBtn.querySelector('.btn__label');
 if (labelEl) {
 const dict = i18n[currentLang] || i18n.id;
 labelEl.textContent = isLoading ? dict.submittingText : dict.submitBtn;
 }
 }

 if (form) {
 form.addEventListener('submit', async (event) => {
 event.preventDefault();
 if (submitBtn && submitBtn.disabled) return; // debounce double-clicks

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
 headers: { 'Content-Type': 'text/plain;charset=utf-8' },
 body: JSON.stringify(payload),
 });

 if (!response.ok && response.status !== 0) {
 throw new Error('Server responded with ' + response.status);
 }

 form.reset();
 const validators = getValidators();
 Object.keys(validators).forEach((name) => showFieldError(name, ''));
 showToast();
 } catch (err) {
 console.error('Registration submit failed:', err);
 showFieldError('email', '');
 alert(currentLang === 'en'
 ? 'Failed to submit registration. Please check your network and try again.'
 : 'Gagal mengirim data. Periksa koneksi kamu dan coba lagi.');
 } finally {
 setLoading(false);
 }
 });

 // Clear error dynamically as user types
 form.querySelectorAll('input, select').forEach((el) => {
 el.addEventListener('input', () => {
 if (el.name) {
 const validators = getValidators();
 if (validators[el.name]) {
 const message = validators[el.name](el.value.trim());
 if (!message) showFieldError(el.name, '');
 }
 }
 });
 });
 }
})();
