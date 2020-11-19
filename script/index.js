const element = document.querySelector('[data-intro="skills"]');

const writeEffect = () => {
  let text = element.innerText;
  element.innerText = '';

  [...text].forEach((letter, index) => {
    setTimeout(() => {
      element.innerText += letter;
    }, 100 * index);
  });

  setTimeout(() => {
    [...element.innerText].forEach((letter, index) => {
      setTimeout(() => {
        element.innerText.substring(0, element.innerText.length - 1);
        element.innerText = element.innerText.substring(
          0,
          element.innerText.length - 1,
        );
      }, 100 * index);
    });
  }, 2000);
};

let i = 0;

const mySkills = ['JavaScript.', 'React.', 'HTML/(S)CSS.', 'Front-End.'];

const interval = setInterval(() => {
  element.innerText = mySkills[i];
  i++;
  if (i === mySkills.length) i = 0;
  writeEffect();
}, 4000);

writeEffect();

// MENU MOBILE ==================================================================

const menu_hamburguer = document.querySelector('.hamburguer__menu');

const nav_list = document.querySelector('.header__nav--list');

menu_hamburguer.addEventListener('click', ({ currentTarget }) => {
  const currentTargetChild = currentTarget.firstElementChild;
  currentTargetChild.classList.toggle('active');
  nav_list.classList.toggle('open');
});

// scroolToSection

const links = document.querySelectorAll('a[href^="#"]');
const scrollToSection = (event) => {
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href);
  section.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
  });
};
links.forEach((link) => {
  link.addEventListener('click', scrollToSection);
});
