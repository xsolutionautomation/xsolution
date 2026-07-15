// Expertise expand/collapse
const expertiseToggle = document.getElementById('expertiseToggle');
const expertiseDetail = document.getElementById('expertiseDetail');
if (expertiseToggle && expertiseDetail) {
  expertiseToggle.addEventListener('click', () => {
    const isOpen = expertiseToggle.getAttribute('aria-expanded') === 'true';
    expertiseToggle.setAttribute('aria-expanded', String(!isOpen));
    expertiseDetail.hidden = isOpen;
    expertiseToggle.firstChild.textContent = isOpen ? 'Xem chi tiết từng mảng ' : 'Thu gọn ';
  });
}

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Scroll reveal for project cards
const revealEls = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in-view'));
}

// Contact form (demo only — replace with real handler / Formspree / mailto before publishing)
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(contactForm);
    const name = data.get('name');
    formNote.textContent = `Cảm ơn ${name}! Đây là bản demo — hãy kết nối form này với email hoặc dịch vụ như Formspree để nhận liên hệ thật.`;
    contactForm.reset();
  });
}
