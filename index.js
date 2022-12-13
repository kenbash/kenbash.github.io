
window.onload = () => {
  const header = document.getElementById('header-fill');
  const img1 = document.getElementById('img-1');
  const img2 = document.getElementById('img-2');
  const img3 = document.getElementById('img-3');
  const footerText = document.getElementById('footer-text');
  let opacity = 0, didScroll = true;

  function onScroll() {
    opacity = window.scrollY / (screen.height / 2);
    header.style.opacity = Math.min(opacity, 1);
    didScroll = true;
  }

  const scrollTrigger = setInterval(() => {
    if (didScroll && window.scrollY > screen.height / 2) {
      img1.className = 'glow';
      img2.className = 'glow';
      img3.className = 'glow';
      footerText.className = 'slide-up';
      clearInterval(scrollTrigger);
    }
    didScroll = false;
  }, 100);

  window.addEventListener('scroll', onScroll);
};