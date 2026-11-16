/* Shared Home/About inertial scrolling. Touch input remains native. */
(function () {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  function configure() {
    if (window.homeScroll) window.homeScroll.destroy();
    window.homeScroll = null;
    if (reducedMotion.matches || !window.Lenis) return;
    window.homeScroll = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      lerp: 0.1,
      wheelMultiplier: 1,
      syncTouch: false,
      anchors: true,
      prevent: node => node.closest('.nav') !== null || document.body.classList.contains('nav-open')
    });
  }
  configure();
  reducedMotion.addEventListener('change', configure);
})();
