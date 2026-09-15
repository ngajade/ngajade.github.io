const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -70px' });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

document.querySelectorAll('.cap-item button').forEach((button) => {
  button.addEventListener('click', () => {
    const selected = button.closest('.cap-item');
    document.querySelectorAll('.cap-item').forEach((item) => {
      const open = item === selected && !item.classList.contains('is-open');
      item.classList.toggle('is-open', open);
      item.querySelector('button').setAttribute('aria-expanded', String(open));
      item.querySelector('button i').textContent = open ? '−' : '+';
    });
  });
});
