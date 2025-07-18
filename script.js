function startDigitAnimation(containerSelector, interval = 50) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const digits = container.querySelectorAll('.digit');

  setInterval(() => {
    digits.forEach(digit => {
      const min = parseInt(digit.getAttribute('data-min'), 10);
      const max = parseInt(digit.getAttribute('data-max'), 10);
      const randNum = Math.floor(Math.random() * (max - min + 1)) + min;
      digit.textContent = randNum;
    });
  }, interval);
}

startDigitAnimation('.age-field', 50);

function updateVKTrack(containerSelector, vkUser = "slavya69", endpoint = "https://vk-track-status.slavyano4kaa.workers.dev") {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  function fetchTrack() {
    fetch(`${endpoint}?user=${vkUser}`)
      .then(res => res.json())
      .then(data => {
        if (data.artist && data.title) {
          container.textContent = `Listening: ${data.artist} – ${data.title}`;
        } else {
          container.textContent = ` `;
        }
      })
      .catch(() => {
        container.textContent = `Error`;
      });
  }

  fetchTrack();
  setInterval(fetchTrack, 10000);
}

updateVKTrack('.vk-track');
