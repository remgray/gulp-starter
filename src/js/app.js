import { smoothScroll } from './libs/smoothScroll.js';
import { optimizedResize } from './libs/optimizedResize.js';
import AOS from 'aos';
// import './modules/menu.js'


document.addEventListener('DOMContentLoaded', () => {

  // Smooth scroll init
  let scroll = new SmoothScroll('a[scroll]', {
    offset: function (anchor, toggle) {
      if (toggle.getAttribute("href") === '#hero') {
        return 90;
      } else {
        return 60;
      }

    },
    updateURL: false,
  });

  // Animate on scroll init
  AOS.init({
    once: true,
  });

  // change top margin for header height on ref click 
  optimizedResize.add(function () {
    let scroll = new SmoothScroll('a[scroll]', {
      header: 'header',
      // offset: 60, // if offset another of header
      updateURL: false,
    });
  });
});

