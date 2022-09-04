import * as flsFunctions from './modules/testWbp.js';
import { smoothScroll } from './modules/smoothScroll.js';
import { optimizedResize } from './modules/optimizedResize.js';
import './modules/menu.js'

// test if browser supports webp
flsFunctions.isWebp();

document.addEventListener('DOMContentLoaded', () => {
  const headerHeight = document.querySelector('header').clientHeight;
  smoothScroll(headerHeight);

  // change top margin for header height on ref click 
  optimizedResize.add(function () {
    const headerHeight = document.querySelector('header').clientHeight;
    smoothScroll(headerHeight);
  });

}); 