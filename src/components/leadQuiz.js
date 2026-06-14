// Onboarding Lead Quiz Component for Caribe Interactive (Bilingual)
import './leadQuiz.css';

const quizTranslations = {
  en: {
    step1_title: "Who are we working with?",
    step1_desc: "Let's get some basic details so we can tailor our follow-up consultation.",
    label_name: "Your Name *",
    label_biz: "Business Name",
    label_email: "Email Address *",
    label_phone: "Phone Number *",
    placeholder_name: "John Doe",
    placeholder_biz: "My Local Shop Inc.",
    placeholder_email: "you@company.com",
    placeholder_phone: "(787) 396-3677",
    
    step2_title: "What services do you need?",
    step2_desc: "Select everything that applies to your current project scope.",
    service_web: "Web Design",
    service_app: "Mobile Apps",
    service_software: "Custom Software",
    service_game: "Game Dev",
    service_branding: "Logo & Branding",
    service_care: "Care Support",
    error_service: "Please select at least one service.",
    
    step3_title: "Budget & Project Brief",
    step3_desc: "Drag the slider to your approximate investment level and outline your goals.",
    label_budget: "Estimated Project Budget",
    budget_starter: "Starter",
    budget_growth: "Growth",
    budget_enterprise: "Enterprise",
    label_desc: "Brief Project Description *",
    placeholder_desc: "Tell us about your business goals, references websites you like, or special features you need...",
    
    step4_title: "Roadmap Blueprint Generated!",
    step4_desc: "Thanks <strong>{name}</strong>, we've logged your query under ticket number <strong>#C-{ticket}</strong>. A digital architect will reach out to you at <strong>{email}</strong> within 12 hours.",
    blueprint_title: "Custom Project Blueprint",
    
    btn_back: "Back",
    btn_next: "Next Step",
    btn_submit: "Generate Roadmap",
    
    // Roadmap phases (English)
    roadmap: {
      web: {
        p1_title: "Visual Prototyping & Design",
        p1_desc: "Mockups created for main screens, aligning layout, color schemes, and branding.",
        p2_title: "Core Interface Development",
        p2_desc: "Coding HTML/CSS structures, configuring responsive sizing, and adding micro-animations.",
        p3_title: "WhatsApp & Contact Launch",
        p3_desc: "Setting up WhatsApp integrations, contact forms, and domain SSL deployment."
      },
      app: {
        p1_title: "App UI/UX Wireframing",
        p1_desc: "Detailing database schema, user login structures, and dashboard layout mockups.",
        p2_title: "API & Core Logic Systems",
        p2_desc: "Developing administrative control boards, booking handlers, and third-party integrations.",
        p3_title: "Production & Stores Submission",
        p3_desc: "Registering app store developer license channels and deploying live builds for production."
      },
      game: {
        p1_title: "Game Mechanics & Assets Art",
        p1_desc: "Creating graphical backgrounds, spinning wheels, or trivia card visual layouts.",
        p2_title: "Web Physics & Gameplay Coding",
        p2_desc: "Writing random-logic generators, scoring functions, and trigger-win scripts.",
        p3_title: "Embed Playtesting & Campaign Start",
        p3_desc: "Deploying the interactive experience inside your website and launching discount triggers."
      }
    }
  },
  es: {
    step1_title: "¿Con quién estaremos trabajando?",
    step1_desc: "Obtengamos algunos detalles básicos para adaptar nuestra consulta de seguimiento.",
    label_name: "Su Nombre *",
    label_biz: "Nombre del Negocio",
    label_email: "Correo Electrónico *",
    label_phone: "Número de Teléfono *",
    placeholder_name: "Juan Pérez",
    placeholder_biz: "Mi Tienda Local Inc.",
    placeholder_email: "tu@empresa.com",
    placeholder_phone: "(787) 396-3677",
    
    step2_title: "¿Qué servicios necesita?",
    step2_desc: "Seleccione todo lo que se aplique al alcance de su proyecto.",
    service_web: "Diseño Web",
    service_app: "Apps Móviles",
    service_software: "Software a la Medida",
    service_game: "Juegos Web",
    service_branding: "Logo y Branding",
    service_care: "Plan de Cuidado",
    error_service: "Por favor seleccione al menos un servicio.",
    
    step3_title: "Presupuesto y Descripción",
    step3_desc: "Arrastre el control deslizante a su nivel de inversión aproximado y describa sus metas.",
    label_budget: "Presupuesto Estimado del Proyecto",
    budget_starter: "Básico",
    budget_growth: "Crecimiento",
    budget_enterprise: "Empresarial",
    label_desc: "Breve Descripción del Proyecto *",
    placeholder_desc: "Cuéntenos sobre las metas de su negocio, sitios web de referencia que le gusten, o funciones especiales que necesite...",
    
    step4_title: "¡Hoja de Ruta Generada!",
    step4_desc: "Gracias <strong>{name}</strong>, hemos registrado su consulta bajo el número de ticket <strong>#C-{ticket}</strong>. Un arquitecto digital se comunicará con usted a <strong>{email}</strong> en las próximas 12 horas.",
    blueprint_title: "Propuesta Visual de Hoja de Ruta",
    
    btn_back: "Atrás",
    btn_next: "Siguiente",
    btn_submit: "Generar Hoja de Ruta",
    
    // Roadmap phases (Spanish)
    roadmap: {
      web: {
        p1_title: "Prototipado Visual y Diseño",
        p1_desc: "Diseño de pantallas principales, alineación de colores, logotipos y aprobación de marca.",
        p2_title: "Desarrollo y Código Base",
        p2_desc: "Programación de estructuras HTML/CSS, adaptabilidad a móviles e interactividad.",
        p3_title: "Integraciones y Lanzamiento",
        p3_desc: "Configuración de WhatsApp, formularios de contacto, dominio y seguridad SSL."
      },
      app: {
        p1_title: "Estructura de Interfaz App",
        p1_desc: "Diseño de flujos, base de datos de usuarios y pantallas principales de la app.",
        p2_title: "Desarrollo de API y Servidor",
        p2_desc: "Conexión de bases de datos, paneles de control administrativos y flujos lógicos.",
        p3_title: "Lanzamiento y Publicación",
        p3_desc: "Configuración de cuentas de desarrollador de Apple/Google y publicación en las tiendas."
      },
      game: {
        p1_title: "Concepto y Arte del Juego",
        p1_desc: "Diseño de mecánicas de juego, ilustraciones de ruletas, cartas o elementos visuales.",
        p2_title: "Código de Física e Interactividad",
        p2_desc: "Programación de lógica de premios aleatorios, puntuaciones y transiciones dinámicas.",
        p3_title: "Lanzamiento e Integración Web",
        p3_desc: "Incrustación del minijuego dentro del sitio web y lanzamiento de campañas promocionales."
      }
    }
  }
};

export function initLeadQuiz(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const budgetTiers = [
    { label: '$500 - $1,000', min: 500, max: 1000 },
    { label: '$1,000 - $2,500', min: 1000, max: 2500 },
    { label: '$2,500 - $5,000', min: 2500, max: 5000 },
    { label: '$5,000 - $10,000', min: 5000, max: 10000 },
    { label: '$10,000 - $20,000', min: 10000, max: 20000 },
    { label: '$20,000+', min: 20000, max: null }
  ];

  // State Manager
  let state = {
    currentStep: 1,
    name: '',
    businessName: '',
    email: '',
    phone: '',
    services: [],
    budgetIndex: 1, // Default $1k-$2.5k
    description: '',
    ticketNumber: Math.floor(100000 + Math.random() * 900000)
  };

  function getLang() {
    return localStorage.getItem('preferred-lang') || 'en';
  }

  function render() {
    const lang = getLang();
    const t = quizTranslations[lang];

    container.innerHTML = `
      <div class="quiz-card glass-card">
        <!-- Progress Steps Header -->
        <div class="quiz-progress-container">
          <div class="quiz-progress-bar-bg"></div>
          <div class="quiz-progress-bar-fill" style="width: ${((state.currentStep - 1) / 3) * 100}%"></div>
          
          <div class="quiz-step-dot ${state.currentStep >= 1 ? (state.currentStep > 1 ? 'completed' : 'active') : ''}">
            ${state.currentStep > 1 ? '✓' : '1'}
          </div>
          <div class="quiz-step-dot ${state.currentStep >= 2 ? (state.currentStep > 2 ? 'completed' : 'active') : ''}">
            ${state.currentStep > 2 ? '✓' : '2'}
          </div>
          <div class="quiz-step-dot ${state.currentStep >= 3 ? (state.currentStep > 3 ? 'completed' : 'active') : ''}">
            ${state.currentStep > 3 ? '✓' : '3'}
          </div>
          <div class="quiz-step-dot ${state.currentStep >= 4 ? 'completed' : ''}">
            4
          </div>
        </div>

        <form id="quiz-form-element" onsubmit="event.preventDefault();">
          <!-- STEP 1: Basic Info -->
          <div class="quiz-step-pane ${state.currentStep === 1 ? 'active' : ''}">
            <h3 style="font-size:24px; margin-bottom:8px;">${t.step1_title}</h3>
            <p style="color:var(--text-muted); margin-bottom:32px;">${t.step1_desc}</p>
            
            <div class="quiz-form-grid">
              <div class="quiz-form-group">
                <label class="quiz-label" for="quiz-name">${t.label_name}</label>
                <input class="quiz-input" type="text" id="quiz-name" value="${state.name}" placeholder="${t.placeholder_name}" required />
              </div>
              <div class="quiz-form-group">
                <label class="quiz-label" for="quiz-biz">${t.label_biz}</label>
                <input class="quiz-input" type="text" id="quiz-biz" value="${state.businessName}" placeholder="${t.placeholder_biz}" />
              </div>
            </div>
            
            <div class="quiz-form-grid">
              <div class="quiz-form-group">
                <label class="quiz-label" for="quiz-email">${t.label_email}</label>
                <input class="quiz-input" type="email" id="quiz-email" value="${state.email}" placeholder="${t.placeholder_email}" required />
              </div>
              <div class="quiz-form-group">
                <label class="quiz-label" for="quiz-phone">${t.label_phone}</label>
                <input class="quiz-input" type="tel" id="quiz-phone" value="${state.phone}" placeholder="${t.placeholder_phone}" required />
              </div>
            </div>
          </div>

          <!-- STEP 2: Services Checkboxes -->
          <div class="quiz-step-pane ${state.currentStep === 2 ? 'active' : ''}">
            <h3 style="font-size:24px; margin-bottom:8px;">${t.step2_title}</h3>
            <p style="color:var(--text-muted); margin-bottom:24px;">${t.step2_desc}</p>
            
            <div class="quiz-options-grid">
              <div class="quiz-check-card ${state.services.includes('web-design') ? 'checked' : ''}" data-service="web-design">
                <input type="checkbox" ${state.services.includes('web-design') ? 'checked' : ''} />
                <div class="quiz-check-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                </div>
                <div class="quiz-check-title">${t.service_web}</div>
              </div>

              <div class="quiz-check-card ${state.services.includes('app-dev') ? 'checked' : ''}" data-service="app-dev">
                <input type="checkbox" ${state.services.includes('app-dev') ? 'checked' : ''} />
                <div class="quiz-check-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                </div>
                <div class="quiz-check-title">${t.service_app}</div>
              </div>

              <div class="quiz-check-card ${state.services.includes('custom-software') ? 'checked' : ''}" data-service="custom-software">
                <input type="checkbox" ${state.services.includes('custom-software') ? 'checked' : ''} />
                <div class="quiz-check-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                </div>
                <div class="quiz-check-title">${t.service_software}</div>
              </div>

              <div class="quiz-check-card ${state.services.includes('game-dev') ? 'checked' : ''}" data-service="game-dev">
                <input type="checkbox" ${state.services.includes('game-dev') ? 'checked' : ''} />
                <div class="quiz-check-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"></rect><path d="M6 12h4m-2-2v4M15 11h.01M18 13h.01"></path></svg>
                </div>
                <div class="quiz-check-title">${t.service_game}</div>
              </div>

              <div class="quiz-check-card ${state.services.includes('branding') ? 'checked' : ''}" data-service="branding">
                <input type="checkbox" ${state.services.includes('branding') ? 'checked' : ''} />
                <div class="quiz-check-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path></svg>
                </div>
                <div class="quiz-check-title">${t.service_branding}</div>
              </div>

              <div class="quiz-check-card ${state.services.includes('maintenance') ? 'checked' : ''}" data-service="maintenance">
                <input type="checkbox" ${state.services.includes('maintenance') ? 'checked' : ''} />
                <div class="quiz-check-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                </div>
                <div class="quiz-check-title">${t.service_care}</div>
              </div>
            </div>
            <div id="service-error-msg" style="color:#f87171; font-size:14px; margin-top:12px; display:none; text-align:left;">${t.error_service}</div>
          </div>

          <!-- STEP 3: Budget & Project Description -->
          <div class="quiz-step-pane ${state.currentStep === 3 ? 'active' : ''}">
            <h3 style="font-size:24px; margin-bottom:8px;">${t.step3_title}</h3>
            <p style="color:var(--text-muted); margin-bottom:32px;">${t.step3_desc}</p>
            
            <div class="quiz-slider-container">
              <div class="quiz-label">${t.label_budget}</div>
              <div class="quiz-slider-value" id="slider-val-lbl">${budgetTiers[state.budgetIndex].label}</div>
              <input class="quiz-slider" type="range" id="quiz-budget-slider" min="0" max="5" value="${state.budgetIndex}" step="1" />
              <div class="quiz-slider-labels">
                <span>${t.budget_starter}</span>
                <span>${t.budget_growth}</span>
                <span>${t.budget_enterprise}</span>
              </div>
            </div>

            <div class="quiz-form-group" style="margin-top:20px;">
              <label class="quiz-label" for="quiz-desc">${t.label_desc}</label>
              <textarea class="quiz-textarea" id="quiz-desc" placeholder="${t.placeholder_desc}" required>${state.description}</textarea>
            </div>
          </div>

          <!-- STEP 4: Success Screen & Generated Roadmap -->
          <div class="quiz-step-pane ${state.currentStep === 4 ? 'active' : ''}">
            <div class="quiz-success-container">
              <div class="quiz-success-icon">✓</div>
              <h3>${t.step4_title}</h3>
              <p>${t.step4_desc.replace('{name}', state.name).replace('{ticket}', state.ticketNumber).replace('{email}', state.email)}</p>
              
              <!-- Dynamic Generated Roadmap Mockup -->
              <div class="roadmap-card">
                <div class="roadmap-title">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  ${t.blueprint_title}
                </div>
                <div class="roadmap-timeline">
                  ${generateRoadmapMarkup(lang, t)}
                </div>
              </div>
            </div>
          </div>

          <!-- Buttons Footer -->
          ${
            state.currentStep < 4
              ? `
            <div class="quiz-footer">
              <button class="btn btn-back" id="quiz-prev-btn" style="visibility: ${state.currentStep === 1 ? 'hidden' : 'visible'}">
                ${t.btn_back}
              </button>
              <button class="btn btn-primary" id="quiz-next-btn">
                ${state.currentStep === 3 ? t.btn_submit : t.btn_next}
              </button>
            </div>
          `
              : ''
          }
        </form>
      </div>
    `;

    setupQuizListeners();
  }

  function generateRoadmapMarkup(lang, t) {
    const servicesChecked = state.services;
    const isAppOrSoftware = servicesChecked.includes('app-dev') || servicesChecked.includes('custom-software');
    const isGame = servicesChecked.includes('game-dev');

    let roadmapData = t.roadmap.web;
    if (isAppOrSoftware) {
      roadmapData = t.roadmap.app;
    } else if (isGame) {
      roadmapData = t.roadmap.game;
    }

    return `
      <div class="roadmap-node active">
        <div class="roadmap-node-title">Phase 1: ${roadmapData.p1_title}</div>
        <div class="roadmap-node-desc">${roadmapData.p1_desc}</div>
      </div>
      <div class="roadmap-node">
        <div class="roadmap-node-title">Phase 2: ${roadmapData.p2_title}</div>
        <div class="roadmap-node-desc">${roadmapData.p2_desc}</div>
      </div>
      <div class="roadmap-node">
        <div class="roadmap-node-title">Phase 3: ${roadmapData.p3_title}</div>
        <div class="roadmap-node-desc">${roadmapData.p3_desc}</div>
      </div>
    `;
  }

  async function sendEmailNotification() {
    const key = import.meta.env.VITE_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE";
    if (!key || key === "YOUR_ACCESS_KEY_HERE") {
      console.warn("Web3Forms access key not configured. Email notification skipped.");
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: key,
          subject: `New Lead: ${state.name} - Ticket #C-${state.ticketNumber}`,
          from_name: "Caribe Interactive Leads",
          name: state.name,
          email: state.email,
          phone: state.phone,
          business: state.businessName || "Not provided",
          services: state.services.join(', '),
          budget: budgetTiers[state.budgetIndex].label,
          description: state.description,
          ticket: state.ticketNumber,
          language: getLang()
        })
      });
      const result = await response.json();
      if (result.success) {
        console.log("Lead email sent successfully via Web3Forms.");
      } else {
        console.error("Web3Forms error:", result.message);
      }
    } catch (error) {
      console.error("Failed to send lead email:", error);
    }
  }

  function setupQuizListeners() {
    const form = document.getElementById('quiz-form-element');
    if (!form) return;

    // Cache input values on change
    const nameInput = document.getElementById('quiz-name');
    if (nameInput) {
      nameInput.addEventListener('input', (e) => { state.name = e.target.value; });
    }

    const bizInput = document.getElementById('quiz-biz');
    if (bizInput) {
      bizInput.addEventListener('input', (e) => { state.businessName = e.target.value; });
    }

    const emailInput = document.getElementById('quiz-email');
    if (emailInput) {
      emailInput.addEventListener('input', (e) => { state.email = e.target.value; });
    }

    const phoneInput = document.getElementById('quiz-phone');
    if (phoneInput) {
      phoneInput.addEventListener('input', (e) => { state.phone = e.target.value; });
    }

    const descInput = document.getElementById('quiz-desc');
    if (descInput) {
      descInput.addEventListener('input', (e) => { state.description = e.target.value; });
    }

    // Step 2 Card Toggles
    const checkCards = document.querySelectorAll('.quiz-check-card');
    checkCards.forEach((card) => {
      card.addEventListener('click', () => {
        const service = card.dataset.service;
        const index = state.services.indexOf(service);
        const checkbox = card.querySelector('input[type="checkbox"]');

        if (index > -1) {
          state.services.splice(index, 1);
          card.classList.remove('checked');
          checkbox.checked = false;
        } else {
          state.services.push(service);
          card.classList.add('checked');
          checkbox.checked = true;
        }
        const err = document.getElementById('service-error-msg');
        if (err) err.style.display = 'none';
      });
    });

    // Step 3 Range Slider
    const budgetSlider = document.getElementById('quiz-budget-slider');
    if (budgetSlider) {
      budgetSlider.addEventListener('input', (e) => {
        state.budgetIndex = parseInt(e.target.value);
        document.getElementById('slider-val-lbl').innerText = budgetTiers[state.budgetIndex].label;
      });
    }

    // Prev Button
    const prevBtn = document.getElementById('quiz-prev-btn');
    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (state.currentStep > 1) {
          state.currentStep--;
          render();
        }
      });
    }

    // Next Button (or Submit)
    const nextBtn = document.getElementById('quiz-next-btn');
    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Input Validation
        if (state.currentStep === 1) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!state.name || !state.email || !state.phone) {
            form.reportValidity();
            return;
          }
          if (!emailRegex.test(state.email)) {
            const errorMsg = getLang() === 'es' ? 'Por favor ingrese un correo electrónico válido.' : 'Please enter a valid email address.';
            alert(errorMsg);
            return;
          }
          state.currentStep = 2;
          render();
        } else if (state.currentStep === 2) {
          if (state.services.length === 0) {
            const err = document.getElementById('service-error-msg');
            if (err) err.style.display = 'block';
            return;
          }
          state.currentStep = 3;
          render();
        } else if (state.currentStep === 3) {
          if (!state.description) {
            form.reportValidity();
            return;
          }
          
          // Trigger email notification in background
          sendEmailNotification();

          state.currentStep = 4;
          render();
        }
      });
    }
  }

  // Exposed API to trigger external selectors
  window.selectQuizPackage = function (packageName) {
    state.currentStep = 1;
    state.services = [];
    
    const isInteractive = packageName.includes('Interactive');
    
    if (packageName.includes('Launch')) {
      state.services.push('web-design');
      if (isInteractive) {
        state.services.push('custom-software');
        state.budgetIndex = 1; // $1,000 - $2,500 due to $300 cost increase
      } else {
        state.budgetIndex = 0; // $500 - $1,000
      }
    } else if (packageName.includes('Growth')) {
      state.services.push('web-design', 'maintenance');
      if (isInteractive) {
        state.services.push('custom-software');
        state.budgetIndex = 2; // $2,500 - $5,000
      } else {
        state.budgetIndex = 1; // $1,000 - $2,500
      }
    } else if (packageName.includes('Business')) {
      state.services.push('web-design', 'branding', 'maintenance');
      if (isInteractive) {
        state.services.push('custom-software');
        state.budgetIndex = 2; // $2,500 - $5,000
      } else {
        state.budgetIndex = 2; // $2,500 - $5,000
      }
    } else if (packageName.includes('Web App')) {
      state.services.push('custom-software');
      state.budgetIndex = 2; // $2,500 - $5,000
    } else if (packageName.includes('Mobile App')) {
      state.services.push('app-dev');
      state.budgetIndex = 3; // $5,000 - $10,000
    } else if (packageName.includes('Interactive')) {
      state.services.push('game-dev');
      state.budgetIndex = 2; // $2,500 - $5,000
    } else {
      state.services.push('web-design');
      state.budgetIndex = 1;
    }

    render();
    document.getElementById('quote').scrollIntoView({ behavior: 'smooth' });
  };

  // Listen for language updates from parent orchestrator
  window.addEventListener('language-changed', () => {
    render();
  });

  // Initial Draw
  render();
}
