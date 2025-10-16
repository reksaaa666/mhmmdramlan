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
const nameText = "Muhammad Ramlan Fahmi Taftazanie";
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

// Dark mode toggle
const toggleBtn = document.getElementById('darkModeToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});
