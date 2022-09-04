export const getScrollbarWidth = () => {
  const outer = document.createElement('div');

  outer.style.position = 'absolute'
  outer.style.top = '-9999px'
  outer.style.width = '50px'
  outer.style.height = '50px'
  outer.style.overflow = 'scroll'
  outer.style.visibility = 'hidden'

  document.body.appendChild(outer);
  const scrollBarWidth = outer.offsetWidth - outer.clientWidth;
  document.body.removeChild(outer);

  return scrollBarWidth
}


export const hideScroll = () => {
  const scrollWidth = `${getScrollbarWidth()}px`

  document.body.style.paddingRight = scrollWidth
  document.body.style.overflow = 'hidden';

  document.querySelector('.header').style.paddingRight = scrollWidth;
  // document.querySelector('.header__menu').style.right = `${getScrollbarWidth() * -1}px`;
};

export const showScroll = () => {
  document.body.style.paddingRight = '';
  document.body.style.overflow = 'visible';

  document.querySelector('.header').style.paddingRight = '';
  // document.querySelector('.header__menu').style.right = '';
}