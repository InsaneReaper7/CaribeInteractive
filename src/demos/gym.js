// Gym Demo Component (Bilingual)
import './gym.css';

const t = {
  en: {
    tagline: "Join the Movement",
    calc_title: "Customize Membership",
    lbl_sessions: "Personal Training Sessions",
    lbl_per_session: "$25.00 per 1-on-1 private session",
    lbl_addons: "Add-on Features",
    
    addon_classes: "Group Classes Access (+$15/mo)",
    addon_nutrition: "Monthly Nutrition Coaching (+$20/mo)",
    addon_spa: "Spa & Hydrotherapy Access (+$15/mo)",
    
    lbl_total: "Total Membership Rate",
    lbl_terms: "Billed monthly • Cancel anytime",
    btn_start: "Start Membership",
    alert_start: "Thank you! Starting your customized gym subscription at {cost}/month.",
    
    days_mwf: "Mon / Wed / Fri",
    days_tts: "Tue / Thu / Sat",
    
    coach: "Coach",
    classes: {
      spin: "Spin Cycle",
      yoga: "Power Yoga",
      crossfit: "Crossfit Blast",
      zumba: "Zumba Dance",
      pilates: "Pilates Core",
      bodypump: "BodyPump Strength",
      kickbox: "Kickboxing Cardio",
      mma: "MMA Grappling"
    }
  },
  es: {
    tagline: "Únete al Movimiento",
    calc_title: "Personaliza tu Membresía",
    lbl_sessions: "Sesiones de Entrenador Personal",
    lbl_per_session: "$25.00 por sesión privada de 1-a-1",
    lbl_addons: "Características Adicionales",
    
    addon_classes: "Acceso a Clases Grupales (+$15/mes)",
    addon_nutrition: "Coaching Nutricional Mensual (+$20/mes)",
    addon_spa: "Acceso a Spa e Hidroterapia (+$15/mes)",
    
    lbl_total: "Tarifa Mensual Total",
    lbl_terms: "Facturado mensual • Cancela cuando quieras",
    btn_start: "Iniciar Membresía",
    alert_start: "¡Gracias! Iniciando su suscripción personalizada de gimnasio a {cost}/mes.",
    
    days_mwf: "Lun / Mié / Vie",
    days_tts: "Mar / Jue / Sáb",
    
    coach: "Entrenador",
    classes: {
      spin: "Ciclismo Indoor",
      yoga: "Power Yoga",
      crossfit: "Explosión Crossfit",
      zumba: "Zumba Fitness",
      pilates: "Pilates para Abdomen",
      bodypump: "Fuerza BodyPump",
      kickbox: "Cardio Kickboxing",
      mma: "Grappling MMA"
    }
  }
};

export function loadGymDemo(container) {
  let sessionsCount = 4;
  let addons = ['classes'];
  let scheduleDay = 'mwf';

  const rates = {
    base: 29.99,
    session: 25.00,
    classes: 15.00,
    nutrition: 20.00,
    spa: 15.00
  };

  function getLang() {
    return localStorage.getItem('preferred-lang') || 'en';
  }

  function calculateTotal() {
    let total = rates.base;
    total += sessionsCount * rates.session;
    if (addons.includes('classes')) total += rates.classes;
    if (addons.includes('nutrition')) total += rates.nutrition;
    if (addons.includes('spa')) total += rates.spa;
    return total;
  }

  function render() {
    const lang = getLang();
    const trans = t[lang];
    const cLabel = trans.coach;

    // Localized classes schedule list
    const classesData = {
      mwf: [
        { name: trans.classes.spin, coach: `${cLabel} Hector`, time: '7:00 AM' },
        { name: trans.classes.yoga, coach: `${cLabel} Sofia`, time: '9:00 AM' },
        { name: trans.classes.crossfit, coach: `${cLabel} Marcos`, time: '6:00 PM' },
        { name: trans.classes.zumba, coach: `${cLabel} Valerie`, time: '7:30 PM' }
      ],
      tts: [
        { name: trans.classes.pilates, coach: `${cLabel} Sofia`, time: '8:00 AM' },
        { name: trans.classes.bodypump, coach: `${cLabel} Hector`, time: '10:00 AM' },
        { name: trans.classes.kickbox, coach: `${cLabel} Marcos`, time: '5:30 PM' },
        { name: trans.classes.mma, coach: `${cLabel} Carlos`, time: '7:00 PM' }
      ]
    };

    container.innerHTML = `
      <div class="gym-body">
        <!-- Header -->
        <div class="gym-header">
          <div class="gym-logo">Caribe<span>Athletics</span></div>
          <div style="font-size:11px; font-weight:600; color:#ea580c;">${trans.tagline}</div>
        </div>

        <div class="gym-split">
          <!-- Left: Membership Calculator -->
          <div class="gym-card">
            <div class="gym-calc-title">${trans.calc_title}</div>
            
            <!-- Trainer sessions slider -->
            <div style="margin-bottom:18px;">
              <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:6px; color:#ffffff;">
                <span>${trans.lbl_sessions}</span>
                <span style="color:#ea580c; font-weight:700;">${sessionsCount} / mo</span>
              </div>
              <input type="range" id="gym-sessions-slider" min="0" max="16" step="2" value="${sessionsCount}" style="width:100%; height:4px; accent-color:#ea580c;" />
              <div style="font-size:10px; color:#607080; margin-top:2px;">${trans.lbl_per_session}</div>
            </div>

            <!-- Checkbox Addons -->
            <div class="estimator-checkbox-group" style="border-top:1px solid rgba(255,255,255,0.03); padding-top:14px;">
              <div style="font-size:11px; font-weight:600; text-transform:uppercase; color:#ffffff; margin-bottom:4px;">${trans.lbl_addons}</div>
              
              <label class="estimator-check">
                <input type="checkbox" data-addon="classes" ${addons.includes('classes') ? 'checked' : ''} />
                ${trans.addon_classes}
              </label>
              
              <label class="estimator-check">
                <input type="checkbox" data-addon="nutrition" ${addons.includes('nutrition') ? 'checked' : ''} />
                ${trans.addon_nutrition}
              </label>
              
              <label class="estimator-check">
                <input type="checkbox" data-addon="spa" ${addons.includes('spa') ? 'checked' : ''} />
                ${trans.addon_spa}
              </label>
            </div>
          </div>

          <!-- Right: Calculator Display & Weekly Schedule -->
          <div style="display:flex; flex-direction:column; gap:16px;">
            <!-- Total Calc Display -->
            <div class="gym-total-box">
              <div style="font-size:10px; text-transform:uppercase; letter-spacing:1px; color:#90a0b0;">${trans.lbl_total}</div>
              <div class="gym-total-val" id="gym-cost-display">$${calculateTotal().toFixed(2)}</div>
              <div style="font-size:10px; color:#607080;">${trans.lbl_terms}</div>
              <button class="btn-rest" id="gym-signup-btn" style="background:#ea580c; color:#ffffff; font-size:12px; padding:10px; border-radius:4px; font-weight:700; margin-top:10px;">
                ${trans.btn_start}
              </button>
            </div>

            <!-- Class Schedule preview -->
            <div class="gym-card" style="padding:14px;">
              <div class="gym-schedule-tabs">
                <button class="gym-schedule-tab ${scheduleDay === 'mwf' ? 'active' : ''}" data-day="mwf">${trans.days_mwf}</button>
                <button class="gym-schedule-tab ${scheduleDay === 'tts' ? 'active' : ''}" data-day="tts">${trans.days_tts}</button>
              </div>

              <div class="gym-classes-list">
                ${classesData[scheduleDay].map(cls => `
                  <div class="gym-class-item">
                    <div class="gym-class-info">
                      <div class="gym-class-name">${cls.name}</div>
                      <div class="gym-class-instructor">${cls.coach}</div>
                    </div>
                    <div class="gym-class-time">${cls.time}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    setupListeners(trans);
  }

  function setupListeners(trans) {
    const sessionsSlider = container.querySelector('#gym-sessions-slider');
    if (sessionsSlider) {
      sessionsSlider.addEventListener('input', (e) => {
        sessionsCount = parseInt(e.target.value);
        render();
      });
    }

    const checks = container.querySelectorAll('.estimator-check input');
    checks.forEach(check => {
      check.addEventListener('change', () => {
        const addon = check.dataset.addon;
        if (check.checked) {
          if (!addons.includes(addon)) {
            addons.push(addon);
          }
        } else {
          addons = addons.filter(item => item !== addon);
        }
        updateCost();
      });
    });

    function updateCost() {
      const display = container.querySelector('#gym-cost-display');
      if (display) {
        display.innerText = `$${calculateTotal().toFixed(2)}`;
      }
    }

    const scheduleBtns = container.querySelectorAll('.gym-schedule-tab');
    scheduleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        scheduleDay = btn.dataset.day;
        render();
      });
    });

    const signupBtn = container.querySelector('#gym-signup-btn');
    if (signupBtn) {
      signupBtn.addEventListener('click', () => {
        alert(trans.alert_start.replace('{cost}', `$${calculateTotal().toFixed(2)}`));
      });
    }
  }

  render();
}
