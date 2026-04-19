// Hamburger menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
}

function closeMobileMenu() {
  if (hamburger) hamburger.classList.remove('open');
  if (mobileMenu) mobileMenu.classList.remove('open');
}

// Close mobile menu on nav link click
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

// FAQ Accordion
document.querySelectorAll('.accordion-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const body = btn.nextElementSibling;
    const isOpen = btn.classList.contains('active');

    // Close all
    document.querySelectorAll('.accordion-btn').forEach(b => {
      b.classList.remove('active');
      b.nextElementSibling.style.maxHeight = null;
    });

    // Open clicked if it was closed
    if (!isOpen) {
      btn.classList.add('active');
      body.style.maxHeight = body.scrollHeight + 'px';
    }
  });
});
