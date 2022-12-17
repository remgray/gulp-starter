import smoothScroll from './libs/smoothScroll';
import AOS from 'aos';
// import burgerMenu from './modules/menu.js'


document.addEventListener('DOMContentLoaded', () => {
  // Animate on scroll init
  AOS.init({
    once: true,
  });


  const smoothScrollPage = () => {
    let scroll = new smoothScroll('a[scroll]', {
      header: 'header',
      // offset: 60, // if offset another of header
      updateURL: false,
    });
  }
  
  smoothScrollPage()
});

