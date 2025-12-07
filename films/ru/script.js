document.addEventListener('DOMContentLoaded', () => {
  const hearts = document.querySelectorAll('.heart');
  const popup = document.getElementById('love-popup');
  const offset = 15; // расстояние над сердечком
  let floatingInterval;

  function createFloatingHeart() {
    const heart = document.createElement('span');
    heart.classList.add('floating-heart');
    heart.textContent = '💗';

    // случайное положение внутри popup
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

      // ставим popup над сердечком
      popup.style.top = (rect.top - height - offset) + 'px';

      // центрируем popup по сердечку
      popup.style.left =
        (rect.left + rect.width / 2 - popup.offsetWidth / 2) + 'px';

      // подставляем текст, если у сердечка есть data-message
      if (heart.dataset.message) {
        popup.querySelector('p').innerHTML =
          heart.dataset.message.replace(/\n/g, '<br>');
      }

      // запускаем непрерывное появление сердечек
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
