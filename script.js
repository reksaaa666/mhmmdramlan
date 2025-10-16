// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Reveal animation
const sections = document.querySelectorAll('section');
function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) section.classList.add('show');
    else section.classList.remove('show');
  });
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Typewriter effect
const nameText = "Muhammad Ramlan";
let index = 0;
const nameEl = document.getElementById('name');
function typeWriter() {
  if(index < nameText.length){
    nameEl.innerHTML += nameText.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();
