// Animasi Scroll
const sections = document.querySelectorAll('section');

const checkScroll = () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;
    if (sectionTop < window.innerHeight * 0.8 && sectionBottom > 0) {
      section.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

// Efek Hover pada Proyek
const projects = document.querySelectorAll('.project');

projects.forEach(project => {
  project.addEventListener('click', () => {
    alert(`Anda mengklik proyek: ${project.querySelector('h3').innerText}`);
  });
});