// Law Firm Demo Component (Bilingual)
import './law.css';

const t = {
  en: {
    title: "Practice Areas",
    form_title: "Book 15-Min Free Consultation",
    lbl_name: "Your Full Name",
    lbl_date: "Date",
    lbl_format: "Format",
    btn_book: "Schedule Intro Call",
    
    lead_counsel: "Lead Counsel",
    format_phone: "Phone Call",
    format_zoom: "Video Zoom",
    
    err_name: "Please enter your name.",
    err_date: "Please select a date.",
    success_title: "Consultation Scheduled!",
    success_desc: "Confirming a free 15-minute introductory <strong>{format}</strong> with <strong>{lawyer}</strong> on <strong>{date}</strong> under the name of <strong>{name}</strong>. A calendar invite has been sent.",
    
    areas: {
      business: {
        title: "Business & Act 60 Law",
        desc: "Protect your commercial assets. We assist with LLC formation, local Act 60 compliance, tax exemptions, and corporate contract drafting.",
        lawyer: "Atty. Maria Rivera",
        initials: "MR"
      },
      estate: {
        title: "Estate Planning & Wills",
        desc: "Safeguard your family inheritance. We draft custom testament declarations, trust structures, and establish durable powers of attorney.",
        lawyer: "Atty. Carlos Ortiz",
        initials: "CO"
      },
      realestate: {
        title: "Real Estate & Closings",
        desc: "Secure your property investments. We review purchase deeds, verify registry liens, draft escrow agreements, and conduct title audits.",
        lawyer: "Atty. Carlos Ortiz",
        initials: "CO"
      },
      family: {
        title: "Family & Civil Law",
        desc: "Compassionate representation for civil matters. We guide clients through prenuptial agreements, divorces, custody filings, and civil dispute trials.",
        lawyer: "Atty. Ana Delgado",
        initials: "AD"
      }
    }
  },
  es: {
    title: "Áreas de Práctica",
    form_title: "Agende una Consulta Gratis (15 min)",
    lbl_name: "Su Nombre Completo",
    lbl_date: "Fecha",
    lbl_format: "Formato",
    btn_book: "Programar Cita de Intro",
    
    lead_counsel: "Abogado Principal",
    format_phone: "Llamada Telefónica",
    format_zoom: "Videollamada Zoom",
    
    err_name: "Por favor ingrese su nombre.",
    err_date: "Por favor seleccione una fecha.",
    success_title: "¡Consulta Programada!",
    success_desc: "Confirmando una llamada de 15 minutos en formato <strong>{format}</strong> con <strong>{lawyer}</strong> el <strong>{date}</strong> a nombre de <strong>{name}</strong>. Se ha enviado una invitación a su calendario.",
    
    areas: {
      business: {
        title: "Ley Comercial y Ley 60",
        desc: "Proteja sus activos comerciales. Le asistimos con la formación de LLC, cumplimiento local de la Ley 60, exenciones fiscales y redacción de contratos corporativos.",
        lawyer: "Lcda. María Rivera",
        initials: "MR"
      },
      estate: {
        title: "Herencias y Testamentos",
        desc: "Asegure su patrimonio familiar. Redactamos testamentos personalizados, fideicomisos y poderes notariales duraderos.",
        lawyer: "Lcdo. Carlos Ortiz",
        initials: "CO"
      },
      realestate: {
        title: "Bienes Raíces y Cierres",
        desc: "Asegure su inversión inmobiliaria. Revisamos escrituras de compraventa, verificamos gravámenes, redactamos contratos de custodia (escrow) y auditoría de títulos.",
        lawyer: "Lcdo. Carlos Ortiz",
        initials: "CO"
      },
      family: {
        title: "Derecho Civil y de Familia",
        desc: "Representación compasiva para asuntos civiles. Guiamos a clientes en capitulaciones matrimoniales, divorcios, custodia de menores y litigios civiles.",
        lawyer: "Lcda. Ana Delgado",
        initials: "AD"
      }
    }
  }
};

export function loadLawDemo(container) {
  let activeArea = 'business';
  let selectedCallType = 'Phone Call';
  let consultDate = '';
  let clientName = '';

  function getLang() {
    return localStorage.getItem('preferred-lang') || 'en';
  }

  function render() {
    const lang = getLang();
    const trans = t[lang];
    const activeData = trans.areas[activeArea];
    
    container.innerHTML = `
      <div class="law-body">
        <!-- Header -->
        <div class="law-header">
          <div class="law-logo">Rivera & Ortiz <span>Associates</span></div>
          <div style="font-size:11px; color:#b39167; font-weight:600; text-transform:uppercase;">Abogados</div>
        </div>

        <div class="law-grid">
          <!-- Left: Practice Areas List -->
          <div class="law-sidebar-list">
            <h5 style="font-family:'Outfit',sans-serif; color:#ffffff; font-size:13px; text-align:left; margin-bottom:6px;">${trans.title}</h5>
            
            <button class="law-practice-btn ${activeArea === 'business' ? 'active' : ''}" data-area="business">
              ${trans.areas.business.title} <span>→</span>
            </button>
            
            <button class="law-practice-btn ${activeArea === 'estate' ? 'active' : ''}" data-area="estate">
              ${trans.areas.estate.title} <span>→</span>
            </button>
            
            <button class="law-practice-btn ${activeArea === 'realestate' ? 'active' : ''}" data-area="realestate">
              ${trans.areas.realestate.title} <span>→</span>
            </button>
            
            <button class="law-practice-btn ${activeArea === 'family' ? 'active' : ''}" data-area="family">
              ${trans.areas.family.title} <span>→</span>
            </button>
          </div>

          <!-- Right: Details Card & Onboard Booking Form -->
          <div class="law-detail-card" id="lawyer-card-container">
            <h4 style="font-family:'Outfit',sans-serif; color:#ffffff; font-size:16px; margin-bottom:8px;">${activeData.title}</h4>
            <p style="font-size:12px; line-height:1.5; color:#a0aab8; margin-bottom:12px;">${activeData.desc}</p>
            
            <!-- Assigned Lawyer Badge -->
            <div class="law-lawyer-badge">
              <div class="law-lawyer-avatar">${activeData.initials}</div>
              <div style="text-align:left;">
                <div style="font-size:12px; color:#ffffff; font-weight:600;">${activeData.lawyer}</div>
                <div style="font-size:10px; color:#b39167;">${trans.lead_counsel}</div>
              </div>
            </div>

            <!-- Booking Section -->
            <div style="border-top:1px solid rgba(255,255,255,0.05); padding-top:14px;">
              <h5 style="font-family:'Outfit',sans-serif; color:#ffffff; font-size:13px; margin-bottom:12px;">${trans.form_title}</h5>
              
              <div class="rest-form-group">
                <label style="font-size:9px; color:#a0aab8;">${trans.lbl_name}</label>
                <input type="text" class="rest-input" id="law-client-name" placeholder="John Doe" value="${clientName}" style="padding:8px 12px; font-size:13px;" required />
              </div>
              
              <div class="rest-form-group" style="display:grid; grid-template-columns: 1.1fr 0.9fr; gap:10px;">
                <div>
                  <label style="font-size:9px; color:#a0aab8;">${trans.lbl_date}</label>
                  <input type="date" class="rest-input" id="law-consult-date" value="${consultDate}" style="padding:8px 12px; font-size:13px;" required />
                </div>
                <div>
                  <label style="font-size:9px; color:#a0aab8;">${trans.lbl_format}</label>
                  <select class="rest-input" id="law-call-type" style="padding:8px 12px; font-size:13px;">
                    <option value="Phone Call" ${selectedCallType === 'Phone Call' ? 'selected' : ''}>${trans.format_phone}</option>
                    <option value="Video Zoom" ${selectedCallType === 'Video Zoom' ? 'selected' : ''}>${trans.format_zoom}</option>
                  </select>
                </div>
              </div>

              <button class="btn-law" id="law-book-consult-btn">${trans.btn_book}</button>
            </div>
          </div>
        </div>
      </div>
    `;

    setupListeners(trans);
  }

  function setupListeners(trans) {
    const areaBtns = container.querySelectorAll('.law-practice-btn');
    areaBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        activeArea = btn.dataset.area;
        render();
      });
    });

    const nameInput = container.querySelector('#law-client-name');
    if (nameInput) {
      nameInput.addEventListener('input', (e) => {
        clientName = e.target.value;
      });
    }

    const dateInput = container.querySelector('#law-consult-date');
    if (dateInput) {
      dateInput.addEventListener('input', (e) => {
        consultDate = e.target.value;
      });
    }

    const typeSelect = container.querySelector('#law-call-type');
    if (typeSelect) {
      typeSelect.addEventListener('change', (e) => {
        selectedCallType = e.target.value;
      });
    }

    const scheduleBtn = container.querySelector('#law-book-consult-btn');
    if (scheduleBtn) {
      scheduleBtn.addEventListener('click', () => {
        if (!clientName) {
          alert(trans.err_name);
          return;
        }
        if (!consultDate) {
          alert(trans.err_date);
          return;
        }

        const activeData = trans.areas[activeArea];
        const formatName = selectedCallType === 'Phone Call' ? trans.format_phone : trans.format_zoom;

        container.querySelector('#lawyer-card-container').innerHTML = `
          <div style="text-align:center; padding: 40px 10px;">
            <div style="font-size:48px; color:#b39167; margin-bottom:16px;">✓</div>
            <h4 style="color:#ffffff; font-family:'Outfit',sans-serif; margin-bottom:8px;">${trans.success_title}</h4>
            <p style="color:#a0aab8; font-size:13px; max-width:280px; margin:0 auto; line-height:1.5;">
              ${trans.success_desc
                .replace('{format}', formatName)
                .replace('{lawyer}', activeData.lawyer)
                .replace('{date}', consultDate)
                .replace('{name}', clientName)}
            </p>
          </div>
        `;
      });
    }
  }

  render();
}
