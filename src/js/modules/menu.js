import { getScrollbarWidth, showScroll, hideScroll } from './sidebarSwitcher.js'

getScrollbarWidth();

// Menu
// const burger = document.querySelector('.burger'),
//   menu = document.querySelector('.js-menu'),
//   closeMenuBtns = document.querySelectorAll('.js-close-btn')

// const resetNav = () => {
//   menu.classList.remove('menu-open');
//   burger.classList.remove('active');
//   showScroll();
// }
const burger = document.querySelector('.burger')
// window.addEventListener('resize', resetNav);
burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  if (burger.classList.contains('active')){
    hideScroll()
  } else {
    showScroll()
  }
})
// function classToggleHandler() {
//   burger.classList.toggle('active');
//   menu.classList.toggle('menu-open');
//   if (menu.classList.contains('menu-open')) {
//     hideScroll()
//   } else {
//     showScroll()
//   }
//   return
// }

// burger.addEventListener('click', () => {
//   classToggleHandler();
// })

// closeMenuBtns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     resetNav()
//   })
// })