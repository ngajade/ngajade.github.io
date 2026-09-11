const screenGrid = document.querySelector('#screen-grid');
const screenCount = document.querySelector('#screen-count');
const dialog = document.querySelector('.lightbox');
const closeButton = document.querySelector('.lightbox-close');
const lightboxPreview = document.querySelector('.lightbox-preview');
const lightboxImage = document.querySelector('#lightbox-image');
const previousButton = document.querySelector('.lightbox-prev');
const nextButton = document.querySelector('.lightbox-next');
let currentIndex = 0;
const cards = [];

function loadImage(source) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = source;
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

function showScreen(index) {
  currentIndex = (index + cards.length) % cards.length;
  const card = cards[currentIndex];
  const sourceImage = card.querySelector('img');

  lightboxPreview.classList.add('has-image');
  lightboxImage.src = sourceImage.src;
  lightboxImage.alt = sourceImage.alt;
}

function appendScreen(image, index) {
  const number = String(index + 1).padStart(2, '0');
  const card = document.createElement('button');
  card.className = 'screen-card reveal';
  card.type = 'button';
  card.dataset.screen = `Màn hình ${number}`;
  card.setAttribute('aria-label', `Mở màn hình ${number}`);
  image.alt = `Màn hình ${number} của WhispZone`;
  card.appendChild(image);
  screenGrid.appendChild(card);
  cards.push(card);
  observer.observe(card);
  card.addEventListener('click', () => {
    showScreen(index);
    dialog.showModal();
  });
}

async function loadScreens() {
  let index = 1;
  while (true) {
    const number = String(index).padStart(2, '0');
    try {
      const image = await loadImage(`assets/screens/${number}.png`);
      appendScreen(image, index - 1);
      screenCount.textContent = String(cards.length);
      index += 1;
    } catch {
      break;
    }
  }
}

loadScreens();

previousButton.addEventListener('click', () => showScreen(currentIndex - 1));
nextButton.addEventListener('click', () => showScreen(currentIndex + 1));
closeButton.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});
dialog.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') showScreen(currentIndex - 1);
  if (event.key === 'ArrowRight') showScreen(currentIndex + 1);
});
