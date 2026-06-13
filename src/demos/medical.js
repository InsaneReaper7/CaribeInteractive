// Medical Demo Component (Bilingual)
import './medical.css';

const t = {
  en: {
    title: "Patient Scheduler",
    month: "July 2026",
    availability: "Mon - Fri availability",
    slots_title: "Available Slots: July {day}, 2026",
    form_title: "Schedule Appointment",
    lbl_name: "Patient Full Name",
    lbl_reason: "Reason for Visit",
    btn_book: "Book Appointment",
    
    reason_1: "General Checkup",
    reason_2: "Dental Cleaning",
    reason_3: "Physical Exam",
    reason_4: "Follow-up Consult",
    
    err_name: "Please enter patient name.",
    err_slot: "Please select a timeslot first.",
    success: "Appointment booked successfully!\nDate: July {day}, 2026\nTime: {time}\nPatient: {name}\nReason: {reason}",
    prebook: "Pre-booked",
    days: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
  },
  es: {
    title: "Agenda de Pacientes",
    month: "Julio 2026",
    availability: "Disponibilidad Lu - Vi",
    slots_title: "Turnos Disponibles: {day} de Julio de 2026",
    form_title: "Programar Cita Médica",
    lbl_name: "Nombre Completo del Paciente",
    lbl_reason: "Motivo de la Visita",
    btn_book: "Reservar Cita",
    
    reason_1: "Chequeo General",
    reason_2: "Limpieza Dental",
    reason_3: "Examen Físico",
    reason_4: "Consulta de Seguimiento",
    
    err_name: "Por favor ingrese el nombre del paciente.",
    err_slot: "Por favor seleccione un turno primero.",
    success: "¡Cita reservada con éxito!\nFecha: {day} de Julio de 2026\nHora: {time}\nPaciente: {name}\nMotivo: {reason}",
    prebook: "Reservado",
    days: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"]
  }
};

const slots = [
  "09:00 AM", "10:15 AM", "11:30 AM",
  "01:30 PM", "02:45 PM", "04:00 PM"
];

export function loadMedicalDemo(container) {
  let selectedDay = 15;
  let selectedSlot = '';
  let patientName = '';
  let visitReason = 'General Checkup';
  
  function getLang() {
    return localStorage.getItem('preferred-lang') || 'en';
  }

  // Pre-booked list
  const lang = getLang();
  const prebookLbl = t[lang].prebook;
  let bookings = {
    '15-09:00 AM': `Maria Rivera (${prebookLbl})`,
    '15-02:45 PM': `Carlos Ortiz (${prebookLbl})`,
    '16-11:30 AM': `Ana Delgado (${prebookLbl})`
  };

  function render() {
    const activeLang = getLang();
    const trans = t[activeLang];

    container.innerHTML = `
      <div class="medical-body">
        <!-- Header -->
        <div class="medical-header">
          <div class="medical-logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00f2fe" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
            Caribe<span>Health</span> Clinic
          </div>
          <div style="font-size:11px; color:#a4b3c6;">${trans.title}</div>
        </div>

        <div class="med-split">
          <!-- Calendar Card -->
          <div class="med-calendar-container">
            <div class="med-cal-header">
              <span>${trans.month}</span>
              <span style="font-size:11px; font-weight:normal; color:#a4b3c6;">${trans.availability}</span>
            </div>
            
            <div class="med-cal-grid">
              <!-- Weekday Labels -->
              ${trans.days.map(d => `<span class="med-cal-day-lbl">${d}</span>`).join('')}

              <!-- July 2026 starts on Wednesday (3 empty spots: Su, Mo, Tu) -->
              <span class="med-cal-cell empty"></span>
              <span class="med-cal-cell empty"></span>
              <span class="med-cal-cell empty"></span>

              ${renderCalendarDays()}
            </div>
          </div>

          <!-- Slots and Booking Details Panel -->
          <div class="med-right-panel">
            <div class="med-slots-title">${trans.slots_title.replace('{day}', selectedDay)}</div>
            <div class="med-slots-grid">
              ${slots.map(slot => {
                const isBooked = !!bookings[`${selectedDay}-${slot}`];
                const isSelected = selectedSlot === slot;
                return `
                  <button class="med-slot-btn ${isBooked ? 'booked' : ''} ${isSelected ? 'selected' : ''}" 
                          data-slot="${slot}" ${isBooked ? 'disabled' : ''}>
                    ${slot}
                  </button>
                `;
              }).join('')}
            </div>

            <!-- Patient Booking form -->
            <div style="background:#14213d; border-radius:8px; padding:16px; border:1px solid rgba(255,255,255,0.03);">
              <h5 style="font-family:'Outfit',sans-serif; color:#ffffff; font-size:13px; margin-bottom:12px; text-transform:uppercase; letter-spacing:0.5px;">${trans.form_title}</h5>
              
              <div class="rest-form-group">
                <label style="font-size:10px; color:#a4b3c6;">${trans.lbl_name}</label>
                <input type="text" class="rest-input" id="med-patient-name" placeholder="John Doe" value="${patientName}" style="padding:8px 12px; font-size:13px;" required />
              </div>
              
              <div class="rest-form-group">
                <label style="font-size:10px; color:#a4b3c6;">${trans.lbl_reason}</label>
                <select class="rest-input" id="med-visit-reason" style="padding:8px 12px; font-size:13px;">
                  <option value="General Checkup" ${visitReason === 'General Checkup' ? 'selected' : ''}>${trans.reason_1}</option>
                  <option value="Dental Cleaning" ${visitReason === 'Dental Cleaning' ? 'selected' : ''}>${trans.reason_2}</option>
                  <option value="Physical Exam" ${visitReason === 'Physical Exam' ? 'selected' : ''}>${trans.reason_3}</option>
                  <option value="Follow-up Consult" ${visitReason === 'Follow-up Consult' ? 'selected' : ''}>${trans.reason_4}</option>
                </select>
              </div>

              <button class="btn-rest" id="med-book-btn" style="background:#00f2fe; color:#0c1524; font-size:13px; padding:10px; border-radius:4px; font-weight:700;">
                ${trans.btn_book}
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    setupListeners(trans);
  }

  function renderCalendarDays() {
    let cells = '';
    const daysInMonth = 31;
    
    for (let day = 1; day <= daysInMonth; day++) {
      const dayOfWeek = (day + 2) % 7; 
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
      const isSelected = selectedDay === day;

      if (isWeekend) {
        cells += `<span class="med-cal-cell disabled">${day}</span>`;
      } else {
        cells += `
          <span class="med-cal-cell ${isSelected ? 'selected' : ''}" data-day="${day}">
            ${day}
          </span>
        `;
      }
    }
    return cells;
  }

  function setupListeners(trans) {
    const dayCells = container.querySelectorAll('.med-cal-cell[data-day]');
    dayCells.forEach(cell => {
      cell.addEventListener('click', () => {
        selectedDay = parseInt(cell.dataset.day);
        selectedSlot = '';
        render();
      });
    });

    const slotBtns = container.querySelectorAll('.med-slot-btn[data-slot]');
    slotBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        selectedSlot = btn.dataset.slot;
        render();
      });
    });

    const nameInput = container.querySelector('#med-patient-name');
    if (nameInput) {
      nameInput.addEventListener('input', (e) => {
        patientName = e.target.value;
      });
    }

    const reasonSelect = container.querySelector('#med-visit-reason');
    if (reasonSelect) {
      reasonSelect.addEventListener('change', (e) => {
        visitReason = e.target.value;
      });
    }

    const bookBtn = container.querySelector('#med-book-btn');
    if (bookBtn) {
      bookBtn.addEventListener('click', () => {
        if (!patientName) {
          alert(trans.err_name);
          return;
        }
        if (!selectedSlot) {
          alert(trans.err_slot);
          return;
        }

        const key = `${selectedDay}-${selectedSlot}`;
        bookings[key] = `${patientName} (${visitReason})`;

        alert(trans.success
          .replace('{day}', selectedDay)
          .replace('{time}', selectedSlot)
          .replace('{name}', patientName)
          .replace('{reason}', visitReason)
        );
        
        patientName = '';
        selectedSlot = '';
        render();
      });
    }
  }

  render();
}
