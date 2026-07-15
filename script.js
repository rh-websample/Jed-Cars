// ---------- year ----------
document.getElementById('year').textContent = new Date().getFullYear();

// ---------- mobile nav toggle ----------
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
});
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ---------- inventory filter ----------
const filterChips = document.querySelectorAll('.filter-chip');
const carCards = document.querySelectorAll('.car-card');
filterChips.forEach(chip => {
  chip.addEventListener('click', () => {
    filterChips.forEach(c => c.classList.remove('is-active'));
    chip.classList.add('is-active');
    const filter = chip.dataset.filter;
    carCards.forEach(card => {
      const match = filter === 'all' || card.dataset.type === filter;
      card.classList.toggle('is-hidden', !match);
    });
  });
});

// ---------- "inquire about this unit" buttons ----------
const carSelect = document.getElementById('carSelect');
document.querySelectorAll('.js-inquire').forEach(btn => {
  btn.addEventListener('click', () => {
    const carName = btn.dataset.car;
    // select matching option if present
    [...carSelect.options].forEach(opt => {
      if (opt.value === carName) carSelect.value = carName;
    });
    document.getElementById('inquire').scrollIntoView({ behavior: 'smooth' });
    document.querySelector('.inquiry-form [name="name"]').focus({ preventScroll: true });
  });
});

// ---------- inquiry form (demo — no backend wired up) ----------
const inquiryForm = document.getElementById('inquiryForm');
const formStatus = document.getElementById('formStatus');

inquiryForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(inquiryForm);
  const name = data.get('name');

  // NOTE: This is a static demo. To actually receive inquiries, connect this
  // form to a service (Formspree, EmailJS, Getform) or your own backend —
  // see README.md for instructions.
  formStatus.textContent = `Thanks, ${name}! Your inquiry is ready to send — connect a form backend (see README) to make this live.`;
  formStatus.classList.add('is-visible');
  inquiryForm.reset();

  setTimeout(() => formStatus.classList.remove('is-visible'), 6000);
});
