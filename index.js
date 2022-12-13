
window.onload = () => {
  const header = document.getElementById('header-fill');
  let opacity = 0, animTriggered = false;

  function setHeaderOpacity() {
    opacity = window.scrollY / (screen.height / 2);
    header.style.opacity = Math.min(opacity, 1);
  }

  function onScroll() {
    if (animTriggered) return;
    if (window.scrollY > (screen.height / 2)) {
      document.getElementById('img-1').classList.add('glow');
      document.getElementById('img-2').classList.add('glow');
      document.getElementById('img-3').classList.add('glow');
      document.getElementById('footer-text').classList.add('slide-up');
      animTriggered = true;
    }
  }

  window.addEventListener('scroll', setHeaderOpacity);
  window.addEventListener('scroll', onScroll);
};