
window.onload = () => {
  const header = document.getElementById('header-fill');
  let opacity;

  function setHeaderOpacity() {
    opacity = window.scrollY / (screen.height / 2);
    header.style.opacity = Math.min(opacity, 1);
  }

  window.addEventListener('scroll', setHeaderOpacity);
};