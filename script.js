// Smooth scroll saat klik link anchor
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Efek muncul saat scroll (reveal animation)
const sections = document.querySelectorAll('section');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add('show');
    } else {
      section.classList.remove('show');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // efek muncul dari awal
