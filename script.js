const heading = document.getElementById('main-heading');
const popup = document.getElementById('popup-message');
const overlay = document.getElementById('mobile-overlay');
const overlayTop = overlay.querySelector('.top-half');

const popupMessages = [
  'Catch me if you can!',
  'Too slow!',
  'You missed me!',
  'Nice try 😜',
  'Almost had me!',
  'Oops, I jumped!'
];

const isMobile = window.innerWidth <= 900;

function randomPosition() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const left = Math.random() * (vw - 200);
  const top = Math.random() * (vh - 150);
  return { top, left };
}

heading.addEventListener('click', () => {
  if (isMobile) {
    overlay.style.display = 'flex';
    overlayTop.querySelector('h1').innerText = popupMessages[Math.floor(Math.random() * popupMessages.length)];
    return;
  }

  const { top, left } = randomPosition();
  heading.style.position = 'absolute';
  heading.style.top = `${top}px`;
  heading.style.left = `${left}px`;

  const msg = popupMessages[Math.floor(Math.random() * popupMessages.length)];
  popup.innerText = msg;
  popup.style.display = 'block';
  popup.style.top = `${top - 30}px`;
  popup.style.left = `${left + 40}px`;

  setTimeout(() => {
    heading.style.top = '50%';
    heading.style.left = '50%';
    heading.style.transform = 'translate(-50%, -50%)';
    popup.style.display = 'none';
  }, 2000);
});

// Optional: Close overlay when clicked outside
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.style.display = 'none';
  }
});

// Gallery Button Zoom
document.getElementById('gallery-btn').addEventListener('click', () => {
  const btn = document.getElementById('gallery-btn');
  btn.style.transform = 'scale(1.3)';
  setTimeout(() => {
    btn.style.transform = 'scale(1)';
    window.location.href = "#gallery"; // Replace with actual page later
  }, 400);
});
