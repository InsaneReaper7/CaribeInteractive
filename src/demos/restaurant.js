// Restaurant Demo Component (Bilingual)
import './restaurant.css';

const t = {
  en: {
    logo_span: "Bistro",
    tab_menu: "Menu",
    tab_reserve: "Book Table",
    tab_spin: "Lucky Spin 🎯",
    cat_app: "Appetizers",
    cat_mains: "Main Entrées",
    cat_drinks: "Drinks",
    res_title: "Table Reservation",
    lbl_name: "Full Name",
    lbl_size: "Party Size",
    lbl_date: "Date",
    lbl_time: "Time",
    btn_reserve: "Reserve Table",
    success_title: "Table Booked!",
    success_desc: "Confirming party of {size} for {date} at {time} under the name {name}. See you soon!",
    spin_title: "Spin to Win Discount",
    spin_desc: "Spin our bistro wheel for free appetizers, desserts, or discounts on your next meal!",
    btn_spin: "Spin the Wheel",
    btn_spinning: "Spinning...",
    btn_claimed: "Code Claimed",
    won_lbl: "You Won!",
    code_lbl: "Use code at check-in:",
    validation_err: "Please fill out all table details.",
    spin_err: "Please spin the wheel.",

    prizes: [
      { text: 'Free Soda', code: 'FREESODA' },
      { text: '10% Off', code: 'BISTRO10' },
      { text: 'Free Appetizer', code: 'FREEAPP' },
      { text: 'No Luck', code: '' },
      { text: '15% Off', code: 'BISTRO15' },
      { text: 'Free Dessert', code: 'SWEETTREAT' }
    ]
  },
  es: {
    logo_span: "Bistro",
    tab_menu: "Menú",
    tab_reserve: "Reservar",
    tab_spin: "Giro de la Suerte 🎯",
    cat_app: "Aperitivos",
    cat_mains: "Platos Fuertes",
    cat_drinks: "Bebidas",
    res_title: "Reservar Mesa",
    lbl_name: "Nombre Completo",
    lbl_size: "Cantidad de Personas",
    lbl_date: "Fecha",
    lbl_time: "Hora",
    btn_reserve: "Reservar Mesa",
    success_title: "¡Mesa Reservada!",
    success_desc: "Confirmando mesa para {size} personas el {date} a las {time} a nombre de {name}. ¡Los esperamos!",
    spin_title: "Gira y Gana un Descuento",
    spin_desc: "¡Gira la ruleta de nuestro bistro para obtener aperitivos gratis, postres o descuentos en su próxima cena!",
    btn_spin: "Girar la Ruleta",
    btn_spinning: "Girando...",
    btn_claimed: "Código Canjeado",
    won_lbl: "¡Ganaste!",
    code_lbl: "Use el código al llegar:",
    validation_err: "Por favor complete todos los detalles de la reserva.",
    spin_err: "Por favor gire la ruleta.",

    prizes: [
      { text: 'Soda Gratis', code: 'FREESODA' },
      { text: '10% Desc.', code: 'BISTRO10' },
      { text: 'Aperitivo Gratis', code: 'FREEAPP' },
      { text: 'Sin Suerte', code: '' },
      { text: '15% Desc.', code: 'BISTRO15' },
      { text: 'Postre Gratis', code: 'SWEETTREAT' }
    ]
  }
};

const menuData = {
  en: {
    app: [
      { title: 'Crispy Calamari', desc: 'Lightly breaded squid served with sweet chili sauce.', price: '$12.00' },
      { title: 'Garlic Tostones', desc: 'Twice-fried plantain cups topped with garlic chicken mojo.', price: '$9.50' },
      { title: 'Bistro Empanadas', desc: 'Flaky pastry stuffed with seasoned beef and cilantro dip.', price: '$8.00' }
    ],
    mains: [
      { title: 'Mofongo Relleno', desc: 'Mashed green plantains with garlic oil, stuffed with shrimp.', price: '$22.00' },
      { title: 'Caribe Ribeye', desc: 'Flame-broiled steak served with yuca fries and chimichurri.', price: '$28.00' },
      { title: 'Tropical Salmon', desc: 'Pan-seared salmon with mango salsa and coconut rice.', price: '$24.00' }
    ],
    drinks: [
      { title: 'Classic Piña Colada', desc: 'Fresh coconut cream, pineapple juice, and aged Puerto Rican rum.', price: '$10.00' },
      { title: 'Passion Fruit Mojito', desc: 'Crushed mint, fresh parcha pulp, lime juice, and soda.', price: '$9.00' },
      { title: 'Coco Loco Mocktail', desc: 'Chilled coconut water, pineapple syrup, and lime.', price: '$6.50' }
    ]
  },
  es: {
    app: [
      { title: 'Calamares Crujientes', desc: 'Calamares ligeramente empanados servidos con salsa de chile dulce.', price: '$12.00' },
      { title: 'Tostones al Ajo', desc: 'Copas de tostones de plátano verde con pollo y mojo de ajo.', price: '$9.50' },
      { title: 'Empanadas del Bistro', desc: 'Masa de hojaldre rellena de carne de res sazonada con salsa de cilantro.', price: '$8.00' }
    ],
    mains: [
      { title: 'Mofongo Relleno', desc: 'Plátano verde majado con ajo, relleno de camarones al ajillo.', price: '$22.00' },
      { title: 'Ribeye del Caribe', desc: 'Filete a la parrilla servido con papas de yuca y chimichurri.', price: '$28.00' },
      { title: 'Salmón Tropical', desc: 'Salmón a la plancha con salsa de mango y arroz con coco.', price: '$24.00' }
    ],
    drinks: [
      { title: 'Piña Colada Clásica', desc: 'Crema de coco, jugo de piña fresco y ron puertorriqueño añejo.', price: '$10.00' },
      { title: 'Mojito de Parcha', desc: 'Menta machacada, pulpa de parcha fresca, jugo de limón y soda.', price: '$9.00' },
      { title: 'Mocktail Coco Loco', desc: 'Agua de coco fría, sirope de piña y un toque de limón.', price: '$6.50' }
    ]
  }
};

const colors = ['#ff6b6b', '#1f2833', '#ffbe0b', '#0f172a', '#4facfe', '#ffbe0b'];

export function loadRestaurantDemo(container) {
  let activeTab = 'menu';
  let menuCategory = 'mains';
  let spinState = {
    isSpinning: false,
    hasSpun: false,
    result: ''
  };

  function getLang() {
    return localStorage.getItem('preferred-lang') || 'en';
  }

  function render() {
    const lang = getLang();
    const trans = t[lang];

    container.innerHTML = `
      <div class="rest-body">
        <div class="rest-header">
          <div class="rest-logo">El Caribe <span>${trans.logo_span}</span></div>
          <div class="rest-nav">
            <button class="rest-nav-btn ${activeTab === 'menu' ? 'active' : ''}" data-tab="menu">${trans.tab_menu}</button>
            <button class="rest-nav-btn ${activeTab === 'reserve' ? 'active' : ''}" data-tab="reserve">${trans.tab_reserve}</button>
            <button class="rest-nav-btn ${activeTab === 'spin' ? 'active' : ''}" data-tab="spin">${trans.tab_spin}</button>
          </div>
        </div>

        <div id="rest-tab-content">
          ${renderTabContent(lang, trans)}
        </div>
      </div>
    `;

    setupListeners(lang, trans);
  }

  function renderTabContent(lang, trans) {
    if (activeTab === 'menu') {
      return `
        <div style="display:flex; justify-content:center; gap:10px; margin-bottom:20px;">
          <button class="rest-nav-btn ${menuCategory === 'app' ? 'active' : ''}" data-cat="app" style="font-size:12px;">${trans.cat_app}</button>
          <button class="rest-nav-btn ${menuCategory === 'mains' ? 'active' : ''}" data-cat="mains" style="font-size:12px;">${trans.cat_mains}</button>
          <button class="rest-nav-btn ${menuCategory === 'drinks' ? 'active' : ''}" data-cat="drinks" style="font-size:12px;">${trans.cat_drinks}</button>
        </div>
        <div class="rest-menu-grid">
          ${menuData[lang][menuCategory].map(item => `
            <div class="menu-item-card">
              <div class="menu-item-info">
                <div class="menu-item-title">${item.title}</div>
                <div class="menu-item-desc">${item.desc}</div>
              </div>
              <div class="menu-item-price">${item.price}</div>
            </div>
          `).join('')}
        </div>
      `;
    }

    if (activeTab === 'reserve') {
      return `
        <div class="rest-reserve-form" id="reserve-form-container">
          <h4 style="font-family:'Outfit',sans-serif; color:#ffffff; font-size:18px; margin-bottom:12px; text-align:center;">${trans.res_title}</h4>
          <div class="rest-form-group">
            <label>${trans.lbl_name}</label>
            <input type="text" class="rest-input" id="rest-res-name" placeholder="John Doe" required />
          </div>
          <div class="rest-form-group">
            <label>${trans.lbl_size}</label>
            <input type="number" class="rest-input" id="rest-res-size" min="1" max="10" value="2" required />
          </div>
          <div class="rest-form-group" style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
            <div>
              <label>${trans.lbl_date}</label>
              <input type="date" class="rest-input" id="rest-res-date" required />
            </div>
            <div>
              <label>${trans.lbl_time}</label>
              <input type="time" class="rest-input" id="rest-res-time" required />
            </div>
          </div>
          <button class="btn-rest" id="rest-book-submit-btn">${trans.btn_reserve}</button>
        </div>
      `;
    }

    if (activeTab === 'spin') {
      return `
        <div class="lucky-spin-container">
          <h4 style="font-family:'Outfit',sans-serif; color:#ffffff; font-size:18px; margin-bottom:6px; text-align:center;">${trans.spin_title}</h4>
          <p style="color:#8892b0; font-size:12px; text-align:center; margin-bottom:20px; max-width:280px;">${trans.spin_desc}</p>
          
          <div class="wheel-wrapper">
            <div class="wheel-marker"></div>
            <div class="wheel-outer" id="spin-wheel-circle">
              <svg class="wheel-svg" viewBox="0 0 200 200">
                ${renderWheelPaths(trans)}
              </svg>
              <div class="wheel-center-pin"></div>
            </div>
          </div>

          <button class="btn-rest" id="spin-wheel-btn" style="max-width:180px;" ${spinState.isSpinning || spinState.hasSpun ? 'disabled' : ''}>
            ${spinState.isSpinning ? trans.btn_spinning : (spinState.hasSpun ? trans.btn_claimed : trans.btn_spin)}
          </button>
          
          <div id="spin-result-container" style="display:${spinState.result ? 'block' : 'none'}; width:100%; max-width:280px;">
            ${spinState.result}
          </div>
        </div>
      `;
    }

    return '';
  }

  function renderWheelPaths(trans) {
    let svg = '';
    const sliceCount = 6;
    const angle = 360 / sliceCount;
    
    for (let i = 0; i < sliceCount; i++) {
      const startAngle = i * angle;
      const endAngle = (i + 1) * angle;
      
      const x1 = 100 + 100 * Math.cos((Math.PI * startAngle) / 180);
      const y1 = 100 + 100 * Math.sin((Math.PI * startAngle) / 180);
      const x2 = 100 + 100 * Math.cos((Math.PI * endAngle) / 180);
      const y2 = 100 + 100 * Math.sin((Math.PI * endAngle) / 180);
      
      const pathData = `M 100 100 L ${x1} ${y1} A 100 100 0 0 1 ${x2} ${y2} Z`;
      
      const midAngle = startAngle + angle / 2;
      const textX = 100 + 55 * Math.cos((Math.PI * midAngle) / 180);
      const textY = 100 + 55 * Math.sin((Math.PI * midAngle) / 180);
      
      svg += `
        <path d="${pathData}" fill="${colors[i]}"></path>
        <text x="${textX}" y="${textY}" fill="#ffffff" font-family="'Outfit'" font-size="8" font-weight="700" text-anchor="middle" transform="rotate(${midAngle}, ${textX}, ${textY})">
          ${trans.prizes[i].text}
        </text>
      `;
    }
    return svg;
  }

  function setupListeners(lang, trans) {
    const tabBtns = container.querySelectorAll('.rest-nav-btn[data-tab]');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        activeTab = btn.dataset.tab;
        render();
      });
    });

    const catBtns = container.querySelectorAll('.rest-nav-btn[data-cat]');
    catBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        menuCategory = btn.dataset.cat;
        render();
      });
    });

    const bookBtn = container.querySelector('#rest-book-submit-btn');
    if (bookBtn) {
      bookBtn.addEventListener('click', () => {
        const name = container.querySelector('#rest-res-name').value;
        const size = container.querySelector('#rest-res-size').value;
        const date = container.querySelector('#rest-res-date').value;
        const time = container.querySelector('#rest-res-time').value;

        if (!name || !date || !time) {
          alert(trans.validation_err);
          return;
        }

        container.querySelector('#reserve-form-container').innerHTML = `
          <div style="text-align:center; padding: 30px 10px;">
            <div style="font-size:36px; color:#ffbe0b; margin-bottom:12px;">✓</div>
            <h4 style="color:#ffffff; font-family:'Outfit',sans-serif; margin-bottom:8px;">${trans.success_title}</h4>
            <p style="color:#8892b0; font-size:13px; max-width:240px; margin:0 auto; line-height:1.5;">
              ${trans.success_desc.replace('{size}', size).replace('{date}', date).replace('{time}', time).replace('{name}', name)}
            </p>
          </div>
        `;
      });
    }

    const spinBtn = container.querySelector('#spin-wheel-btn');
    if (spinBtn) {
      spinBtn.addEventListener('click', () => {
        if (spinState.isSpinning || spinState.hasSpun) return;

        spinState.isSpinning = true;
        render();

        const wheel = container.querySelector('#spin-wheel-circle');
        let prizeIndex = Math.floor(Math.random() * trans.prizes.length);
        if (prizeIndex === 3) prizeIndex = 4; // Force a win for engagement

        const degreesPerSlice = 60;
        const segmentAngle = 360 - (prizeIndex * degreesPerSlice + degreesPerSlice / 2);
        const totalRotations = 1440 + segmentAngle;

        wheel.style.transform = `rotate(${totalRotations}deg)`;

        setTimeout(() => {
          spinState.isSpinning = false;
          spinState.hasSpun = true;
          
          const prize = trans.prizes[prizeIndex];
          spinState.result = `
            <div class="spin-result-box">
              <div style="font-size:12px; color:#ffbe0b; text-transform:uppercase; letter-spacing:1px; margin-bottom:4px;">${trans.won_lbl}</div>
              <div style="font-weight:700; color:#ffffff; font-size:18px; margin-bottom:8px;">${prize.text}</div>
              <div style="font-size:11px; color:#8892b0; margin-bottom:6px;">${trans.code_lbl}</div>
              <code style="background:#0b0c10; padding:4px 10px; border-radius:4px; border:1px solid #ffbe0b; color:#ffbe0b; font-size:14px; font-weight:700; display:inline-block; letter-spacing:1px;">${prize.code}</code>
            </div>
          `;
          render();
        }, 4000);
      });
    }
  }

  render();
}
