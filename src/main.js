import './style.css';
import { initLeadQuiz } from './components/leadQuiz.js';
import { loadRestaurantDemo } from './demos/restaurant.js';
import { loadContractorDemo } from './demos/contractor.js';
import { loadMedicalDemo } from './demos/medical.js';
import { loadGymDemo } from './demos/gym.js';
import { loadLawDemo } from './demos/law.js';
import { translations } from './utils/translations.js';

document.addEventListener('DOMContentLoaded', () => {
  // --- LANGUAGE TRANSLATION (i18n) ORCHESTRATION ---
  
  // Detect language
  function getInitialLanguage() {
    const savedLang = localStorage.getItem('preferred-lang');
    if (savedLang) return savedLang;
    
    const browserLang = navigator.language || navigator.userLanguage || '';
    return browserLang.toLowerCase().startsWith('es') ? 'es' : 'en';
  }

  let currentLang = getInitialLanguage();
  localStorage.setItem('preferred-lang', currentLang);

  function translatePage(lang) {
    currentLang = lang;
    localStorage.setItem('preferred-lang', lang);
    
    // Translate all static elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.dataset.i18n;
      if (translations[lang] && translations[lang][key]) {
        const value = translations[lang][key];
        // Support HTML tags like <span> in translation values
        if (value.includes('<span') || value.includes('<strong>') || value.includes('<b>')) {
          el.innerHTML = value;
        } else {
          el.innerText = value;
        }
      }
    });

    // Translate placeholder attributes if any are tagged
    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (translations[lang] && translations[lang][key]) {
        el.placeholder = translations[lang][key];
      }
    });

    // Update Language Toggle Button label (should offer the alternative option)
    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) {
      langBtn.innerText = lang === 'en' ? 'ES' : 'EN';
    }

    // Update lang attribute on html tag
    document.documentElement.lang = lang;

    // Dispatch global event so other components refresh their translations
    window.dispatchEvent(new Event('language-changed'));
  }

  // Hook Language Switcher Button click
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'en' ? 'es' : 'en';
      translatePage(nextLang);
    });
  }

  // --- STANDARD HEADER & NAVIGATION LOGIC ---
  
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  const hamburger = document.getElementById('hamburger-toggle');
  const navMenu = document.getElementById('nav-menu');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // --- PACKAGES TYPE TOGGLE ---
  const toggleInfoBtn = document.getElementById('pkg-toggle-informative');
  const toggleInterBtn = document.getElementById('pkg-toggle-interactive');
  
  const priceLaunch = document.getElementById('price-val-launch');
  const priceGrowth = document.getElementById('price-val-growth');
  const priceBusiness = document.getElementById('price-val-business');
  
  const btnSelectLaunch = document.getElementById('btn-select-launch');
  const btnSelectGrowth = document.getElementById('btn-select-growth');
  const btnSelectBusiness = document.getElementById('btn-select-business');
  
  const interactiveFeatures = document.querySelectorAll('.interactive-only-feature');

  function setPackageType(type) {
    if (type === 'informative') {
      if (toggleInfoBtn) toggleInfoBtn.classList.add('active');
      if (toggleInterBtn) toggleInterBtn.classList.remove('active');

      if (priceLaunch) priceLaunch.innerText = priceLaunch.dataset.priceInfo;
      if (priceGrowth) priceGrowth.innerText = priceGrowth.dataset.priceInfo;
      if (priceBusiness) priceBusiness.innerText = priceBusiness.dataset.priceInfo;

      if (btnSelectLaunch) btnSelectLaunch.dataset.package = "Launch (Informative)";
      if (btnSelectGrowth) btnSelectGrowth.dataset.package = "Growth (Informative)";
      if (btnSelectBusiness) btnSelectBusiness.dataset.package = "Business+ (Informative)";

      interactiveFeatures.forEach(feat => feat.style.display = 'none');
    } else {
      if (toggleInfoBtn) toggleInfoBtn.classList.remove('active');
      if (toggleInterBtn) toggleInterBtn.classList.add('active');

      if (priceLaunch) priceLaunch.innerText = priceLaunch.dataset.priceInter;
      if (priceGrowth) priceGrowth.innerText = priceGrowth.dataset.priceInter;
      if (priceBusiness) priceBusiness.innerText = priceBusiness.dataset.priceInter;

      if (btnSelectLaunch) btnSelectLaunch.dataset.package = "Launch (Interactive)";
      if (btnSelectGrowth) btnSelectGrowth.dataset.package = "Growth (Interactive)";
      if (btnSelectBusiness) btnSelectBusiness.dataset.package = "Business+ (Interactive)";

      interactiveFeatures.forEach(feat => feat.style.display = 'flex');
    }
  }

  if (toggleInfoBtn && toggleInterBtn) {
    toggleInfoBtn.addEventListener('click', () => setPackageType('informative'));
    toggleInterBtn.addEventListener('click', () => setPackageType('interactive'));
  }

  // --- INITIALIZE LEAD QUIZ ---
  
  initLeadQuiz('quiz-wrapper');

  const selectBtns = document.querySelectorAll('.select-package-btn');
  selectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const packageName = btn.dataset.package;
      if (window.selectQuizPackage) {
        window.selectQuizPackage(packageName);
      }
    });
  });

  // --- INITIALIZE SIMULATORS ---
  
  const demoContainer = document.getElementById('sim-viewport-content');
  const addressBarLabel = document.querySelector('.sim-address span');

  const demos = {
    restaurant: loadRestaurantDemo,
    contractor: loadContractorDemo,
    medical: loadMedicalDemo,
    gym: loadGymDemo,
    law: loadLawDemo
  };

  let activeDemoName = 'restaurant';

  function activeDemoLoader(demoName) {
    if (demos[demoName] && demoContainer) {
      activeDemoName = demoName;
      demoContainer.innerHTML = '';
      demos[demoName](demoContainer);
      if (addressBarLabel) {
        addressBarLabel.innerText = demoName;
      }
    }
  }

  // Reload active demo on language change (to translate the simulator content too!)
  window.addEventListener('language-changed', () => {
    activeDemoLoader(activeDemoName);
  });

  // Load default demo on start
  activeDemoLoader('restaurant');

  // Simulator tabs
  const tabBtns = document.querySelectorAll('.portfolio-tab-btn[data-demo]');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const targetDemo = btn.dataset.demo;
      activeDemoLoader(targetDemo);
    });
  });

  // View sizers
  const deviceBtns = document.querySelectorAll('.sim-device-btn');
  deviceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      deviceBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const targetView = btn.dataset.view;
      if (demoContainer) {
        demoContainer.classList.remove('desktop-view', 'tablet-view', 'mobile-view');
        demoContainer.classList.add(`${targetView}-view`);
      }
    });
  });

  // Trigger initial translation check
  translatePage(currentLang);

  // --- HERO CHART ANIMATION ---
  const chartBars = document.querySelectorAll('.hero-chart-bar');
  setTimeout(() => {
    chartBars.forEach(bar => {
      const height = bar.style.height;
      bar.style.height = '0%';
      setTimeout(() => {
        bar.style.height = height;
      }, 300);
    });
  }, 500);
});
