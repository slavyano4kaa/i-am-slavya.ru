  document.addEventListener('DOMContentLoaded', () => {
    // === Sparkle Effect ===
    document.querySelectorAll('.sparkle-btn').forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        const sparkleInterval = setInterval(() => {
          const star = document.createElement('span');
          star.classList.add('sparkle');
          star.style.left = `${Math.random() * 100}%`;
          star.style.bottom = `${Math.random() * 10}px`;
          star.style.animationDelay = `${Math.random() * 0.3}s`;
          star.style.background = ['#fff', '#ddd', '#c69', '#9cf'][Math.floor(Math.random() * 4)];
          star.style.width = `${Math.random() * 4 + 2}px`;
          star.style.height = star.style.width;
          star.style.animation = 'sparkleUp 0.8s forwards ease-out';
          btn.appendChild(star);
          setTimeout(() => star.remove(), 1000);
        }, 50);
        btn.addEventListener('mouseleave', () => clearInterval(sparkleInterval), { once: true });
      });
    });

    // === Rain Effect ===
    const canvas = document.createElement('canvas');
    canvas.id = 'rain-canvas';

    const OFFSET_X = 300; // Насколько правее должно сместиться
    const canvasStyles = {
      position: 'fixed',
      top: '0',
      left: `-${OFFSET_X}px`,
      width: `calc(100% + ${OFFSET_X * 2}px)`,
      height: '100%',
      zIndex: 9999,
      pointerEvents: 'none'
    };
    Object.assign(canvas.style, canvasStyles);
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    let width = window.innerWidth + OFFSET_X * 2;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const raindrops = [];
    const dropCount = 500;
    const angle = -20 * Math.PI / 180;

    for (let i = 0; i < dropCount; i++) {
      raindrops.push({
        x: Math.random() * width,
        y: Math.random() * height,
        length: Math.random() * 15 + 10,
        speed: Math.random() * 8 + 10
      });
    }

    function drawRain() {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = 'rgba(174,194,224,0.6)';
      ctx.lineWidth = 1.2;

      raindrops.forEach(drop => {
        const dx = drop.length * Math.sin(angle);
        const dy = drop.length * Math.cos(angle);

        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x + dx, drop.y + dy);
        ctx.stroke();

        drop.x += Math.sin(angle) * drop.speed;
        drop.y += Math.cos(angle) * drop.speed;

        if (drop.y > height) {
          // "взрыв" снизу
          ctx.beginPath();
          ctx.arc(drop.x, height - 2, 3 + Math.random() * 2, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(200, 200, 255, 0.8)';
          ctx.fill();

          drop.x = Math.random() * width;
          drop.y = -20;
          drop.length = Math.random() * 15 + 10;
          drop.speed = Math.random() * 8 + 10;
        }
      });

      requestAnimationFrame(drawRain);
    }

    drawRain();

    window.addEventListener('resize', () => {
      width = window.innerWidth + OFFSET_X * 2;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    });
  });
  // Звук дождя
const rainSound = document.getElementById('rain-sound');
const toggleBtn = document.getElementById('toggle-sound');

// Устанавливаем громкость
rainSound.volume = 0.5; // 50% громкости

// Изначально выключен звук
let soundOn = false;
toggleBtn.classList.add('red');
toggleBtn.textContent = '🔇 Звук на сайте';

// Логика для кнопки включения/выключения звука
toggleBtn.addEventListener('click', () => {
  soundOn = !soundOn;
  if (soundOn) {
    rainSound.play();
    toggleBtn.textContent = '🔊 Звук на сайте';
    toggleBtn.classList.remove('red');
  } else {
    rainSound.pause();
    toggleBtn.textContent = '🔇 Звук на сайте';
    toggleBtn.classList.add('red');
  }
});