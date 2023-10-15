// Start Global Variables
const navList = document.querySelector('#navbar__list');
let navLinks = [];
const sections = document.querySelectorAll('.section');
// End Global Variables

// Start Helper Functions
const navLinksArray = function(li) {
  const navLink = li.querySelector('.menu__link');
  navLinks.push(navLink);
}

const addActiveClass = function() {
  sections.forEach(section => {
    const sectionBox = section.getBoundingClientRect();
    const relatedNavLink = document.querySelector(`.menu__link[href="#${section.id}"]`);
    if (sectionBox.top <= 150 && sectionBox.bottom >= 150) {
      section.classList.add('section--active');
      relatedNavLink.classList.add('menu__link--active');
    } else {
      section.classList.remove('section--active');
      relatedNavLink.classList.remove('menu__link--active');
    }
  })
}
// End Helper Functions

// Start build the nav
sections.forEach(section => {
  const li = document.createElement("li");
  li.innerHTML = `<a class="menu__link" href="#${section.id}">${section.id}</a>`;
  navList.append(li);
  navLinksArray(li);
})
// End build the nav

// Start active class
document.addEventListener('scroll', addActiveClass);
// End active class

// Start smooth scroll to section
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    const relatedSection = document.querySelector(link.getAttribute('href'));
    e.preventDefault();
    relatedSection.scrollIntoView({ behavior: "smooth"});
  })
})
// End smooth scroll to section