// Contractor Demo Component (Bilingual)
import './contractor.css';

const t = {
  en: {
    lic: "Lic. #PR-44820",
    slider_title: "Interactive Remodeling Showcase",
    before_title: "Dated Layout (1998)",
    before_desc: "Dark wooden cabinets, old tile countertops, and cramped kitchen structure.",
    before_badge: "BEFORE",
    after_title: "Modern Design (2026)",
    after_desc: "Sleek quartz countertops, neon cove lighting, and open layout.",
    after_badge: "AFTER RENO",
    drag_hint: "← Drag the gold slider handle left and right to reveal the transition →",
    card_title: "Select Remodeling Areas",
    
    srv_kitchen: "Kitchen Remodeling",
    srv_bath: "Bathroom Makeover",
    srv_roofing: "Roofing & Sealing",
    srv_flooring: "Premium Tile Flooring",
    srv_paint: "Interior/Exterior Painting",
    
    lbl_size: "Estimated Area Size",
    lbl_range: "Estimated Range",
    lbl_inspection: "*Subject to formal site inspection",
    btn_quote: "Request Quote",
    alert_quote: "Request logged! We will reach out to schedule an appraisal for your {cost} project estimation."
  },
  es: {
    lic: "Lic. #PR-44820",
    slider_title: "Escenario de Renovación Interactivo",
    before_title: "Diseño Anticuado (1998)",
    before_desc: "Gabinetes de madera oscura, encimeras de azulejos viejos y espacio cerrado.",
    before_badge: "ANTES",
    after_title: "Diseño Moderno (2026)",
    after_desc: "Elegantes encimeras de cuarzo, luces LED empotradas y espacio abierto.",
    after_badge: "RENOVADO",
    drag_hint: "← Arrastre el control dorado a la izquierda y derecha para ver el cambio →",
    card_title: "Seleccione Áreas a Remodelar",
    
    srv_kitchen: "Remodelación de Cocina",
    srv_bath: "Renovación de Baño",
    srv_roofing: "Sellado de Techos",
    srv_flooring: "Pisos de Losas Premium",
    srv_paint: "Pintura Interior/Exterior",
    
    lbl_size: "Tamaño Estimado del Área",
    lbl_range: "Rango Estimado",
    lbl_inspection: "*Sujeto a inspección de campo formal",
    btn_quote: "Pedir Cotización",
    alert_quote: "¡Solicitud registrada! Nos comunicaremos para coordinar una inspección para su estimación de {cost}."
  }
};

const costRates = {
  kitchen: 6500,
  bath: 4500,
  roofing: 7500,
  flooring: 2500,
  paint: 1800
};

export function loadContractorDemo(container) {
  let sliderPos = 50;
  let servicesSelected = ['kitchen'];
  let sqFootage = 1200;
  let isDragging = false;

  function getLang() {
    return localStorage.getItem('preferred-lang') || 'en';
  }

  function calculateTotal() {
    let serviceCost = servicesSelected.reduce((sum, item) => sum + (costRates[item] || 0), 0);
    let sqFtCost = sqFootage * 4.5; 
    return serviceCost === 0 ? 0 : serviceCost + sqFtCost;
  }

  function render() {
    const lang = getLang();
    const trans = t[lang];

    container.innerHTML = `
      <div class="contractor-body">
        <!-- Header -->
        <div class="contractor-header">
          <div class="contractor-logo">Caribe<span>Builders</span></div>
          <div style="font-size:12px; color:#ffb300; font-weight:600;">${trans.lic}</div>
        </div>

        <!-- Before/After Drag Slider Visual -->
        <h4 style="font-family:'Outfit',sans-serif; font-size:15px; color:#ffffff; margin-bottom:12px; text-align:left;">${trans.slider_title}</h4>
        <div class="comparison-slider-container" id="slider-wrap-box">
          <!-- Before Panel (Background) -->
          <div class="comparison-panel panel-before">
            <div class="panel-content-wrap">
              <div class="panel-title">${trans.before_title}</div>
              <div style="font-size:12px; max-width:200px;">${trans.before_desc}</div>
              <span class="panel-badge">${trans.before_badge}</span>
            </div>
          </div>
          
          <!-- After Panel (Overlay sliding width) -->
          <div class="comparison-panel panel-after" id="after-slide-panel" style="width: ${sliderPos}%">
            <div class="panel-content-wrap">
              <div class="panel-title">${trans.after_title}</div>
              <div style="font-size:12px; max-width:200px;">${trans.after_desc}</div>
              <span class="panel-badge">${trans.after_badge}</span>
            </div>
          </div>

          <!-- Drag Handle Bar -->
          <div class="comparison-slider-handle" id="slider-handle-bar" style="left: ${sliderPos}%">
            <div class="comparison-slider-button">↔</div>
          </div>
        </div>
        <p style="font-size:11px; color:#8892b0; margin-top:8px; text-align:left;">${trans.drag_hint}</p>

        <!-- Dynamic Cost Estimator -->
        <div class="contractor-estimator-container">
          <!-- Selection Checklist -->
          <div class="contractor-card">
            <h5 style="font-family:'Outfit',sans-serif; color:#ffffff; font-size:14px; margin-bottom:12px;">${trans.card_title}</h5>
            <div class="estimator-checkbox-group">
              <label class="estimator-check">
                <input type="checkbox" data-service="kitchen" ${servicesSelected.includes('kitchen') ? 'checked' : ''} />
                ${trans.srv_kitchen}
              </label>
              <label class="estimator-check">
                <input type="checkbox" data-service="bath" ${servicesSelected.includes('bath') ? 'checked' : ''} />
                ${trans.srv_bath}
              </label>
              <label class="estimator-check">
                <input type="checkbox" data-service="roofing" ${servicesSelected.includes('roofing') ? 'checked' : ''} />
                ${trans.srv_roofing}
              </label>
              <label class="estimator-check">
                <input type="checkbox" data-service="flooring" ${servicesSelected.includes('flooring') ? 'checked' : ''} />
                ${trans.srv_flooring}
              </label>
              <label class="estimator-check">
                <input type="checkbox" data-service="paint" ${servicesSelected.includes('paint') ? 'checked' : ''} />
                ${trans.srv_paint}
              </label>
            </div>

            <!-- Square Footage Slider -->
            <div style="margin-top:16px;">
              <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:6px;">
                <span>${trans.lbl_size}</span>
                <span style="color:#00f2fe; font-weight:700;">${sqFootage} SQ FT</span>
              </div>
              <input type="range" id="sqft-estimator-slider" min="300" max="3000" step="50" value="${sqFootage}" style="width:100%; height:4px; accent-color:#00f2fe;" />
            </div>
          </div>

          <!-- Total Calculation Card -->
          <div class="est-val-box">
            <div style="font-size:11px; text-transform:uppercase; letter-spacing:0.5px;">${trans.lbl_range}</div>
            <div class="est-cost-val" id="est-cost-display">$${calculateTotal().toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
            <div style="font-size:10px; color:#8892b0; margin-bottom:12px;">${trans.lbl_inspection}</div>
            <button class="btn btn-primary btn-sm" id="contractor-quote-btn" style="width:100%; font-size:12px; padding:10px;">${trans.btn_quote}</button>
          </div>
        </div>
      </div>
    `;

    setupListeners(trans);
  }

  function setupListeners(trans) {
    const sliderWrap = container.querySelector('#slider-wrap-box');
    const afterPanel = container.querySelector('#after-slide-panel');
    const handle = container.querySelector('#slider-handle-bar');

    function updateSlider(clientX) {
      const rect = sliderWrap.getBoundingClientRect();
      const x = clientX - rect.left;
      let percentage = (x / rect.width) * 100;
      if (percentage < 0) percentage = 0;
      if (percentage > 100) percentage = 100;

      sliderPos = percentage;
      afterPanel.style.width = `${percentage}%`;
      handle.style.left = `${percentage}%`;
    }

    sliderWrap.addEventListener('mousedown', (e) => {
      isDragging = true;
      updateSlider(e.clientX);
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      updateSlider(e.clientX);
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });

    sliderWrap.addEventListener('touchstart', (e) => {
      isDragging = true;
      updateSlider(e.touches[0].clientX);
    });

    window.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      updateSlider(e.touches[0].clientX);
    });

    window.addEventListener('touchend', () => {
      isDragging = false;
    });

    const checks = container.querySelectorAll('.estimator-check input');
    checks.forEach(check => {
      check.addEventListener('change', () => {
        const service = check.dataset.service;
        if (check.checked) {
          if (!servicesSelected.includes(service)) {
            servicesSelected.push(service);
          }
        } else {
          servicesSelected = servicesSelected.filter(item => item !== service);
        }
        updateCostDisplay();
      });
    });

    const sqftSlider = container.querySelector('#sqft-estimator-slider');
    if (sqftSlider) {
      sqftSlider.addEventListener('input', (e) => {
        sqFootage = parseInt(e.target.value);
        container.querySelector('span[style*="color:#00f2fe"]').innerText = `${sqFootage} SQ FT`;
        updateCostDisplay();
      });
    }

    function updateCostDisplay() {
      const display = container.querySelector('#est-cost-display');
      if (display) {
        display.innerText = `$${calculateTotal().toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      }
    }

    const quoteBtn = container.querySelector('#contractor-quote-btn');
    if (quoteBtn) {
      quoteBtn.addEventListener('click', () => {
        alert(trans.alert_quote.replace('{cost}', `$${calculateTotal().toLocaleString()}`));
      });
    }
  }

  render();
}
