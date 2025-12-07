document.addEventListener('DOMContentLoaded', () => {
  const hearts = document.querySelectorAll('.heart');
  const popup = document.getElementById('love-popup');
  const container = document.querySelector('.container');
  const offset = 15; // расстояние над сердечком
  let floatingInterval;

  function createFloatingHeart() {
    const heart = document.createElement('span');
    heart.classList.add('floating-heart');
    heart.textContent = '️💗';
    heart.style.left = Math.random() * (popup.offsetWidth - 10) + 'px';
    popup.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 2000); // длительность анимации
  }

  hearts.forEach(heart => {
    heart.addEventListener('click', (e) => {
      const rect = heart.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      popup.style.display = 'flex';

      const height = popup.offsetHeight;
      popup.style.top = (rect.top - containerRect.top - height - offset) + 'px';
      popup.style.left = (rect.left - containerRect.left) + 'px';

      // запускаем непрерывное появление сердечек
      if (floatingInterval) clearInterval(floatingInterval);
      floatingInterval = setInterval(createFloatingHeart, 200); // каждые 200ms новое сердечко

      e.stopPropagation();
    });
  });

  // Закрытие при клике вне popup
  document.addEventListener('click', () => {
    popup.style.display = 'none';
    if (floatingInterval) clearInterval(floatingInterval);
  });

  // Клик по popup не закрывает его
  popup.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});
