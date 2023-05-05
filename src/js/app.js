import AOS from 'aos';
import smoothScroll from './libs/smoothScroll';

document.addEventListener('DOMContentLoaded', () => {
	// Animate on scroll init
	AOS.init({
		once: true,
	});
	// scrolling
	new smoothScroll('a[href^="#"]', {
		// header: 'header',
		offset: 0, // if offset another of header
		updateURL: false,
	});
});

