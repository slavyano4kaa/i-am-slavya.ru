const program = {
  arms: [
    {
	  title: "Бицепс",
	  sets: 5,
	  reps: [15, 12, 12, 10, 8],
	  image: "images/arms_biceps.png",
	  levels: [
		[14, 14, 18, 18, 23],
		[14, 18, 18, 23, 23],
		[18, 23, 23, 30, 30],
		[23, 23, 30, 30, 36],
		[23, 30, 30, 36, 43],
		[30, 36, 36, 43, 50]
	  ]
	},
    {
      title: "Молотки",
      sets: 5,
      reps: [15, 12, 12, 10, 8],
      image: "images/arms_crossover.png",
      levels: [
        [14, 14, 18, 18, 23],
        [14, 18, 18, 23, 23],
        [18, 18, 23, 23, 30],
        [18, 23, 23, 30, 30],
        [23, 23, 30, 30, 36],
        [23, 30, 30, 36, 36]
      ]
    },
    {
	  title: "Трицепс (EZ-штанга)",
	  sets: 5,
	  reps: [15, 12, 12, 10, 8],
	  image: "images/arms_biceps.png",
	  levels: [
		[14, 18, 18, 23, 23],
		[18, 18, 23, 23, 30],
		[18, 23, 23, 30, 30],
		[23, 23, 30, 30, 36],
		[23, 30, 30, 36, 43],
		[30, 30, 36, 43, 50]
	  ]
	},
    {
	  title: "Французский жим",
	  sets: 5,
	  reps: [15, 12, 12, 10, 8],
	  image: "images/arms_france.png",
	  levels: [
		[5, 5, 7.5, 7.5, 10],
		[7.5, 7.5, 10, 10, 12.5],
		[10, 10, 12.5, 12.5, 15],
		[10, 12.5, 12.5, 15, 15],
		[12.5, 12.5, 15, 15, 17.5],
		[12.5, 15, 15, 17.5, 20]
	  ]
	},
    {
	  title: "Брусья",
	  sets: 4,
	  reps: [12, 10, 8, 8],
	  image: "images/arms_assisted_dips.png",
	  assisted: true,
	  levels: [
		[57, 50, 43, 36],
		[50, 43, 36, 30],
		[43, 36, 30, 23],
		[36, 30, 23, 23],
		[30, 23, 23, 23],
		[23, 23, 23, 23]
	  ]
	},
  ],

  body: [
    {
	  title: "Жим груди",
	  sets: 5,
	  reps: [15, 12, 12, 10, 8],
	  image: "images/body_chest_press.png",
	  levels: [
		[0, 2.5, 2.5, 5, 5],
		[2.5, 2.5, 5, 5, 10],
		[2.5, 5, 5, 10, 15],
		[5, 5, 10, 15, 20],
		[5, 10, 15, 20, 25],
		[10, 15, 20, 25, 30]
	  ]
	},
    {
	  title: "Бабочка",
	  sets: 5,
	  reps: [15, 12, 12, 10, 10],
	  image: "images/body_pec_deck.png",
	  levels: [
		[9, 14, 14, 20, 20],
		[14, 14, 20, 20, 27],
		[14, 20, 20, 27, 34],
		[20, 27, 27, 34, 43],
		[27, 34, 43, 52, 61],
		[34, 43, 52, 61, 70]
	  ]
	},
    {
	  title: "Верхний блок",
	  sets: 5,
	  reps: [15, 12, 12, 10, 8],
	  image: "images/body_lat_pulldown.png",
	  levels: [
		[14, 20, 20, 27, 27],
		[20, 20, 27, 27, 34],
		[20, 27, 27, 34, 43],
		[27, 34, 34, 43, 52],
		[34, 43, 52, 61, 70],
		[43, 52, 61, 70, 79]
	  ]
	},
    {
	  title: "Горизонтальная тяга",
	  sets: 5,
	  reps: [15, 12, 12, 10, 8],
	  image: "images/body_horizontal_thrust.png",
	  levels: [
		[14, 20, 20, 27, 27],
		[20, 20, 27, 27, 34],
		[20, 27, 27, 34, 43],
		[27, 34, 34, 43, 52],
		[34, 43, 52, 61, 70],
		[43, 52, 61, 70, 79]
	  ]
	},
    {
	  title: "Подтягивания",
	  sets: 4,
	  reps: [10, 8, 8, 6],
	  image: "images/arms_assisted_dips.png",
	  assisted: true,
	  levels: [
		[64, 57, 50, 43],
		[57, 50, 43, 36],
		[50, 43, 36, 30],
		[43, 36, 30, 23],
		[36, 30, 23, 23],
		[30, 23, 23, 23]
	  ]
	},
  ],

  legs: [
    {
	  title: "Жим ногами",
	  sets: 5,
	  reps: [15, 12, 12, 10, 8],
	  image: "images/legs_leg_press.png",
	  levels: [
		[0, 10, 10, 20, 20],
		[10, 10, 20, 20, 30],
		[10, 20, 20, 30, 40],
		[20, 20, 30, 40, 50],
		[20, 30, 40, 50, 70],
		[30, 40, 50, 70, 100]
	  ],
	  plateLoaded: true
	},
    {
      title: "Разгибание ног",
      sets: 5,
      reps: [15, 12, 12, 10, 8],
      image: "images/legs_leg_extension.jpg",
      levels: [
        [20, 20, 27, 27, 34],
        [20, 27, 27, 34, 34],
        [27, 27, 34, 34, 43],
        [27, 34, 34, 43, 43],
        [34, 34, 43, 43, 52],
        [34, 43, 43, 52, 61]
      ]
    },
    {
      title: "Сгибание ног",
      sets: 5,
      reps: [15, 12, 12, 10, 8],
      image: "images/legs_leg_curl.png",
      levels: [
        [14, 18, 18, 23, 23],
        [18, 18, 23, 23, 30],
        [18, 23, 23, 30, 30],
        [23, 23, 30, 30, 36],
        [23, 30, 30, 36, 43],
        [30, 30, 36, 43, 50]
      ]
    },
    {
      title: "Разведение ног",
      sets: 5,
      reps: [18, 15, 15, 12, 12],
      image: "images/legs_abductor.png",
      levels: [
        [18, 20, 20, 25, 25],
        [20, 20, 25, 25, 30],
        [20, 25, 25, 30, 34],
        [25, 25, 30, 34, 41],
        [25, 30, 34, 41, 48],
        [30, 34, 41, 48, 55]
      ]
    },
    {
	  title: "Ягодичный",
	  sets: 4,
	  reps: [15, 12, 12, 10],
	  image: "images/legs_glute.png",
	  levels: [
		[0, 0, 10, 10],
		[0, 10, 10, 20],
		[10, 10, 20, 30],
		[10, 20, 30, 40],
		[20, 30, 40, 50],
		[30, 40, 50, 70]
	  ],
	  plateLoaded: true,
	  baseWeight: 20
	}
  ]
};

const cardsEl = document.getElementById("cards");
const tabs = document.querySelectorAll(".tab");

const dropdown = document.getElementById("dropdown");
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownItems = document.querySelectorAll(".dropdown-item");

let currentDay = "arms";
let currentDifficulty = 1;

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    currentDay = tab.dataset.day;
    tabs.forEach((item) => item.classList.remove("is-active"));
    tab.classList.add("is-active");
    render();
  });
});

dropdownBtn.addEventListener("click", () => {
  dropdown.classList.toggle("open");
});

dropdownItems.forEach((item) => {
  item.addEventListener("click", () => {
    dropdownItems.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");

    dropdownBtn.textContent = item.textContent;
    currentDifficulty = Number(item.dataset.value);

    dropdown.classList.remove("open");
    render();
  });
});

document.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove("open");
  }
});

function getZoneColor(weight) {
  if (weight <= 23) return "green";
  if (weight <= 57) return "yellow";
  return "red";
}

function countWeightGroups(weights) {
  let count = 0;
  let start = 0;

  while (start < weights.length) {
    let end = start;
    while (end + 1 < weights.length && weights[end + 1] === weights[start]) {
      end++;
    }
    count++;
    start = end + 1;
  }

  return count;
}

function renderWeightSummary(weights, reps, assisted = false, plateLoaded = false) {
  const groups = [];
  let start = 0;

  while (start < weights.length) {
    let end = start;
    while (end + 1 < weights.length && weights[end + 1] === weights[start]) {
      end++;
    }

    groups.push({
      from: start + 1,
      to: end + 1,
      weight: weights[start],
      reps: reps.slice(start, end + 1)
    });

    start = end + 1;
  }

  return groups
    .map((group, index) => {
      const colorClass = `color-${plateLoaded ? "red" : getZoneColor(group.weight)}`;
      const rangeText =
        group.from === group.to
          ? `${group.from} подх.`
          : `${group.from}-${group.to} подх.`;

      const valueText = plateLoaded
        ? `${group.weight} KG`
        : `${group.weight} KGS`;

      const prefix = assisted ? "помощь " : "";

      const repsText =
        group.reps.length === 1
          ? `${group.reps[0]} повт.`
          : `${group.reps.join(", ")} повт.`;

      return `
        <div class="weight-pill">
          <span class="color-bar ${colorClass}"></span>
          <span class="weight-copy">
            <small>${rangeText}</small>
            <strong>${prefix}${valueText}</strong>
            <small>${repsText}</small>
          </span>
        </div>
        ${index < groups.length - 1 ? `<span class="arrow">→</span>` : ``}
      `;
    })
    .join("");
}

function makeImageMarkup(src, title) {
  return `
    <div class="card-image">
      <img
        src="${src}"
        alt="${title}"
        class="exercise-image"
        data-fullsrc="${src}"
        data-title="${title}"
        onerror="this.style.display='none'; this.parentNode.innerHTML='<div class=&quot;empty-image&quot;>Добавь фото<br>${title}</div>';"
      />
    </div>
  `;
}

function ensureLightbox() {
  if (document.getElementById("imageLightbox")) return;

  const lightbox = document.createElement("div");
  lightbox.id = "imageLightbox";
  lightbox.innerHTML = `
    <div class="lightbox-backdrop"></div>
    <img class="lightbox-image" id="lightboxImage" alt="" />
  `;
  document.body.appendChild(lightbox);

  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("is-open");
  });
}

function bindImageClicks() {
  const lightbox = document.getElementById("imageLightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const images = document.querySelectorAll(".exercise-image");

  images.forEach((img) => {
    img.addEventListener("click", () => {
      lightboxImage.src = img.dataset.fullsrc;
      lightboxImage.alt = img.dataset.title || "";
      lightbox.classList.add("is-open");
    });
  });
}

function render() {
  const dayData = program[currentDay];

  cardsEl.innerHTML = dayData
    .map((exercise, index) => {
      const weights = exercise.levels[currentDifficulty];
      const repsLine = `${exercise.sets} подходов`;
      const groupCount = countWeightGroups(weights);

      return `
        <article class="card ${groupCount > 3 ? "card-stack" : ""}" style="animation-delay:${index * 60}ms">
          ${makeImageMarkup(exercise.image, exercise.title)}

          <div class="card-body">
            <h2 class="card-title">${exercise.title}</h2>
            <div class="card-meta">${repsLine}</div>

            <div class="weight-row ${groupCount > 3 ? "weight-row-stack" : ""}">
              ${renderWeightSummary(
                weights,
                exercise.reps,
                exercise.assisted,
                exercise.plateLoaded
              )}
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  bindImageClicks();
}

ensureLightbox();
render();
