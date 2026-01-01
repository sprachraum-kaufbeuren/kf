// ----------------------
// BURGER-MENU
// ----------------------
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');

if (menuBtn && menu && overlay) {
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('open');
    overlay.classList.toggle('active');
  });

  overlay.addEventListener('click', () => {
    menu.classList.remove('open');
    overlay.classList.remove('active');
  });
}

// ----------------------
// LANGUAGE MODAL
// ----------------------
const langBtn = document.getElementById('lang-btn');
const langModal = document.getElementById('lang-modal');

if (langBtn && langModal) {
  langBtn.addEventListener('click', () => {
    langModal.classList.toggle('active');
  });
}

// ----------------------
// DYNAMISCHE INHALTE FÜR INDEX (optional)
// ----------------------
const listCoursesIndex = document.getElementById('listCoursesIndex');
const listSupportIndex = document.getElementById('listSupportIndex');

// Beispiel: Deutsch-Inhalte
const coursesDE = [
  "Deutsch für Anfänger",
  "Deutsch für Fortgeschrittene",
  "Englisch",
  "Französisch",
  "Spanisch",
  "Gebärdensprache"
];

const supportDE = [
  "Hausaufgabenbetreuung",
  "Elterncafé",
  "Kinderbetreuung während Sprachkursen",
  "Sport- und Freizeitangebote",
  "Soziale und sprachliche Integration"
];

if (listCoursesIndex) {
  coursesDE.forEach(course => {
    const li = document.createElement('li');
    li.textContent = course;
    listCoursesIndex.appendChild(li);
  });
}

if (listSupportIndex) {
  supportDE.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    listSupportIndex.appendChild(li);
  });
}
