document.addEventListener('DOMContentLoaded', () => {
  const hearts = document.querySelectorAll('.heart');
  const popup = document.getElementById('love-popup');
  const offset = 15;
  let floatingInterval;

  function createFloatingHeart() {
    const heart = document.createElement('span');
    heart.classList.add('floating-heart');
    heart.textContent = '💗';
    heart.style.left = Math.random() * (popup.offsetWidth - 10) + 'px';
    popup.appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
  }

  hearts.forEach(heart => {
    heart.addEventListener('click', (e) => {
      const rect = heart.getBoundingClientRect();

      popup.style.display = 'flex';
      const height = popup.offsetHeight;

      // учитываем scroll, чтобы popup не съезжал
      popup.style.top =
        (rect.top + window.scrollY - height - offset) + 'px';

      popup.style.left =
        (rect.left + window.scrollX + rect.width / 2 - popup.offsetWidth / 2) + 'px';

      if (heart.dataset.message) {
        popup.querySelector('p').innerHTML =
          heart.dataset.message.replace(/\n/g, '<br>');
      }

      if (floatingInterval) clearInterval(floatingInterval);
      floatingInterval = setInterval(createFloatingHeart, 200);

      e.stopPropagation();
    });
  });

  document.addEventListener('click', () => {
    popup.style.display = 'none';
    if (floatingInterval) clearInterval(floatingInterval);
  });

  popup.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});
