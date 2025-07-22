const headingGroup = document.querySelector('.heading-group');
const popup = document.querySelector('.popup');
const overlay = document.querySelector('.mobile-overlay');
const overlayTop = document.querySelector('.mobile-top');

const popupMessages = [
  'Catch me if you can!',
  'Too slow!',
  'You missed me!',
  'Nice try 😜',
  'Almost had me!',
  'Oops, I jumped!'
];

let isMobile = window.innerWidth <= 900;

function randomPosition() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const left = Math.random() * (vw - 150);
  const top = Math.random() * (vh - 100);
  return { top, left };
}

headingGroup.addEventListener('click', () => {
  if (isMobile) {
    overlay.style.display = 'flex';
    overlayTop.innerText = popupMessages[Math.floor(Math.random() * popupMessages.length)];
    return;
  }

  const { top, left } = randomPosition();
  headingGroup.style.top = `${top}px`;
  headingGroup.style.left = `${left}px`;

  const msg = popupMessages[Math.floor(Math.random() * popupMessages.length)];
  popup.innerText = msg;
  popup.style.top = `${top - 40}px`;
  popup.style.left = `${left + 50}px`;
  popup.style.display = 'block';

  setTimeout(() => {
    headingGroup.style.top = '50%';
    headingGroup.style.left = '50%';
    headingGroup.style.transform = 'translate(-50%, -50%)';
    popup.style.display = 'none';
  }, 2000);
});

// Optional: Close mobile overlay when clicking outside buttons
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.style.display = 'none';
  }
});

// Optional: Zoom effect for Gallery button
document.getElementById('gallery-btn').addEventListener('click', () => {
  document.getElementById('gallery-btn').style.transform = 'scale(1.5)';
  setTimeout(() => {
    window.location.href = "#gallery"; // Link to your gallery section/page
  }, 500);
});
