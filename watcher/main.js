const cards = [...document.querySelectorAll('.screen-card')];
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');
const lightboxCounter = document.querySelector('.lightbox-counter');
const siteHeader = document.querySelector('.site-header');
const screenImages = [];
let activePreviewIndex = 0;

function syncHeader() {
  siteHeader.classList.toggle('is-scrolled', window.scrollY > 24);
}

window.addEventListener('scroll', syncHeader, { passive: true });
syncHeader();
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

cards.forEach((card, index) => {
  const fileNumber = String(index + 1).padStart(2, '0');
  const image = new Image();
  const media = card.querySelector('.screen-media');
  let pngFallbackUsed = false;

  image.alt = card.dataset.screen;
  image.loading = index < 2 ? 'eager' : 'lazy';
  image.decoding = 'async';
  media.prepend(image);
  image.onload = () => {
    card.classList.add('has-image');
  };
  image.onerror = () => {
    if (pngFallbackUsed) return;
    pngFallbackUsed = true;
    image.src = `assets/screens/${fileNumber}.png`;
  };
  image.src = `assets/screens/${fileNumber}.svg`;
  screenImages.push(image);

  card.tabIndex = 0;
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', `Xem trước ${card.dataset.screen}`);
  const openPreview = () => {
    if (!image.currentSrc && !image.src) return;
    activePreviewIndex = index;
    updatePreview();
    lightbox.showModal();
  };
  card.addEventListener('click', openPreview);
  card.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    openPreview();
  });
});

function updatePreview() {
  const image = screenImages[activePreviewIndex];
  const card = cards[activePreviewIndex];
  lightboxImage.src = image.currentSrc || image.src;
  lightboxImage.alt = card.dataset.screen;
  lightboxCounter.textContent = `${String(activePreviewIndex + 1).padStart(2, '0')} / ${String(cards.length).padStart(2, '0')}`;
}

function movePreview(direction) {
  activePreviewIndex = (activePreviewIndex + direction + cards.length) % cards.length;
  updatePreview();
}

lightboxClose.addEventListener('click', () => lightbox.close());
lightboxPrev.addEventListener('click', () => movePreview(-1));
lightboxNext.addEventListener('click', () => movePreview(1));
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) lightbox.close();
});
lightbox.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') movePreview(-1);
  if (event.key === 'ArrowRight') movePreview(1);
});
