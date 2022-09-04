export const smoothScroll = (headerHeight) => {
  const links = document.querySelectorAll('a[href*="#"]');

  for (const link of links) {
    link.addEventListener("click", clickHandler);
  }

  function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
      top: offsetTop - headerHeight,
      behavior: "smooth"
    })
  }
}