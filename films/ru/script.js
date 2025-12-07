document.addEventListener('DOMContentLoaded', () => {
  const hearts = document.querySelectorAll('.heart');
  const popup = document.getElementById('love-popup');
  const offset = 15; // расстояние над сердечком
  let floatingInterval;

  function createFloatingHeart() {
    const heart = document.createElement('span');
    heart.classList.add('floating-heart');
    heart.textContent = '💗';
    heart.style.left = Math.random() * (popup.offsetWidth - 10) + 'px';
    popup.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 2000);
  }

  hearts.forEach(heart => {
    heart.addEventListener('click', (e) => {
      const rect = heart.getBoundingClientRect();

      popup.style.display = 'flex';
      const height = popup.offsetHeight;

      // позиция popup относительно окна
      popup.style.top = (rect.top - height - offset) + 'px';
      popup.style.left = rect.left + 'px';

      // подставляем текст, если есть data-message
      if (heart.dataset.message) {
        popup.querySelector('p').innerHTML = heart.dataset.message.replace(/\n/g, '<br>');
      }

      // запуск непрерывного появления сердечек
      if (floatingInterval) clearInterval(floatingInterval);
      floatingInterval = setInterval(createFloatingHeart, 200);

      e.stopPropagation();
    });
  });

  // закрытие при клике вне popup
  document.addEventListener('click', () => {
    popup.style.display = 'none';
    if (floatingInterval) clearInterval(floatingInterval);
  });

  // клик по popup не закрывает его
  popup.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});
