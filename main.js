document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.hamburger');
  const menu = document.querySelector('.menuppal');
  const menuLinks = document.querySelectorAll('.menuppal a');

  // method
  function toggleMenu(event) {
      menuToggle.classList.toggle('is-active');
      menu.classList.toggle('is_active');
      event.preventDefault();
  }

  // event for the hamburger icon
  menuToggle.addEventListener('click', toggleMenu, false);

  // event for each link in the menu
  menuLinks.forEach(link => {
      link.addEventListener('click', () => {
          menuToggle.classList.remove('is-active');
          menu.classList.remove('is_active');
      });
  });
});
