import { showScroll, hideScroll } from './sidebarSwitcher'

const burgerMenu = () => {
  // Menu selectors
  const menu = document.querySelector('.js-menu'),
    closeMenuBtns = document.querySelectorAll('.js-close'),
    burger = document.querySelector('.burger')

  // Reset all classes
  const resetNav = () => {
    menu.classList.remove('menu-open');
    burger.classList.remove('active');
    showScroll();
  }

  // Reset all classes on resize
  window.addEventListener('resize', () => {
    if (menu.classList.contains('menu-open')) {
      resetNav()
    }
  });

  // Show/Hide scroll on burger click
  burger.addEventListener('click', () => {
    if (burger.classList.contains('active')) {
      hideScroll()
    } else {
      showScroll()
    }
  })

  // Open/Hide menu on click
  function classToggleHandler() {
    burger.classList.toggle('active');
    menu.classList.toggle('menu-open');
    if (menu.classList.contains('menu-open')) {
      hideScroll()
    } else {
      showScroll()
    }
    return
  }

  // Toggle burger class
  burger.addEventListener('click', () => {
    classToggleHandler();
  })

  // Reset all classes on click js-close buttons
  closeMenuBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      resetNav()
    })
  })
}

export default burgerMenu