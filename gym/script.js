const program = {
  arms: {
    A: [
      {
        title: "Бицепс",
        sets: 5,
        reps: [15, 12, 12, 10, 8],
        image: "images/arms_biceps.jpg",
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
        image: "images/arms_crossover.jpg",
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
        title: "Трицепс (V-образный)",
        sets: 5,
        reps: [15, 12, 12, 10, 8],
        image: "images/arms_biceps.jpg",
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
        image: "images/arms_france.jpg",
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
        image: "images/arms_assisted_dips.jpg",
        assisted: true,
        levels: [
          [57, 50, 43, 36],
          [50, 43, 36, 30],
          [43, 36, 30, 23],
          [36, 30, 23, 23],
          [30, 23, 23, 23],
          [23, 23, 23, 23]
        ]
      }
    ],

    B: [
      {
        title: "Бицепс узким хватом",
        sets: 5,
        reps: [15, 12, 12, 10, 8],
        image: "images/arms_uzkiy_biceps.jpg",
        levels: [
          [0, 0, 2.5, 2.5, 5],
          [0, 2.5, 2.5, 5, 7.5],
          [2.5, 2.5, 5, 7.5, 10],
          [2.5, 5, 7.5, 10, 12.5],
          [5, 7.5, 10, 12.5, 15],
          [7.5, 10, 12.5, 15, 20]
        ],
        plateLoaded: true,
        baseWeight: 10
      },
      {
        title: "Трицепс канат",
        sets: 5,
        reps: [15, 12, 12, 10, 8],
        image: "images/arms_biceps.jpg",
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
        title: "Бицепс канат",
        sets: 5,
        reps: [15, 12, 12, 10, 8],
        image: "images/arms_biceps.jpg",
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
        title: "Французский жим",
        sets: 5,
        reps: [15, 12, 12, 10, 8],
        image: "images/arms_france.jpg",
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
        image: "images/arms_assisted_dips.jpg",
        assisted: true,
        levels: [
          [57, 50, 43, 36],
          [50, 43, 36, 30],
          [43, 36, 30, 23],
          [36, 30, 23, 23],
          [30, 23, 23, 23],
          [23, 23, 23, 23]
        ]
      }
    ]
  },

  body: {
    A: [
      {
        title: "Жим груди",
        sets: 5,
        reps: [15, 12, 12, 10, 8],
        image: "images/body_chest_press.jpg",
        levels: [
          [0, 2.5, 2.5, 5, 5],
          [2.5, 2.5, 5, 5, 10],
          [2.5, 5, 5, 10, 15],
          [5, 5, 10, 15, 20],
          [5, 10, 15, 20, 25],
          [10, 15, 20, 25, 30]
        ],
        plateLoaded: true,
        baseWeight: 15
      },
      {
        title: "Бабочка",
        sets: 5,
        reps: [15, 12, 12, 10, 10],
        image: "images/body_pec_deck2.jpg",
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
        image: "images/body_lat_pulldown.jpg",
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
        image: "images/body_horizontal_thrust.jpg",
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
        image: "images/arms_assisted_dips.jpg",
        assisted: true,
        levels: [
          [64, 57, 50, 43],
          [57, 50, 43, 36],
          [50, 43, 36, 30],
          [43, 36, 30, 23],
          [36, 30, 23, 23],
          [30, 23, 23, 23]
        ]
      }
    ],

    B: [
      {
        title: "Жим груди",
        sets: 5,
        reps: [15, 12, 12, 10, 8],
        image: "images/body_chest_press.jpg",
        levels: [
          [0, 2.5, 2.5, 5, 5],
          [2.5, 2.5, 5, 5, 10],
          [2.5, 5, 5, 10, 15],
          [5, 5, 10, 15, 20],
          [5, 10, 15, 20, 25],
          [10, 15, 20, 25, 30]
        ],
        plateLoaded: true,
        baseWeight: 15
      },
      {
        title: "Сведение в бабочке",
        sets: 5,
        reps: [15, 12, 12, 10, 10],
        image: "images/body_pec_deck.jpg",
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
        title: "Тяга сверху широким хватом",
        sets: 5,
        reps: [15, 12, 12, 10, 8],
        image: "images/body_lat_pulldown.jpg",
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
        title: "Горизонтальная тяга узким хватом",
        sets: 5,
        reps: [15, 12, 12, 10, 8],
        image: "images/body_lat_pulldown.jpg",
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
        image: "images/arms_assisted_dips.jpg",
        assisted: true,
        levels: [
          [64, 57, 50, 43],
          [57, 50, 43, 36],
          [50, 43, 36, 30],
          [43, 36, 30, 23],
          [36, 30, 23, 23],
          [30, 23, 23, 23]
        ]
      }
    ]
  },

  legs: {
    A: [
      {
        title: "Жим ногами",
        sets: 5,
        reps: [15, 12, 12, 10, 8],
        image: "images/legs_leg_press.jpg",
        levels: [
          [0, 10, 10, 20, 20],
          [10, 10, 20, 20, 30],
          [10, 20, 20, 30, 40],
          [20, 20, 30, 40, 50],
          [20, 30, 40, 50, 70],
          [30, 40, 50, 70, 100]
        ],
        plateLoaded: true,
        baseWeight: 20
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
        image: "images/legs_leg_curl.jpg",
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
        image: "images/legs_abductor.jpg",
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
        image: "images/legs_glute.jpg",
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
    ],

    B: [
      {
        title: "Разгибание ног с паузой",
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
        image: "images/legs_leg_curl.jpg",
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
        title: "Жим ногами узкой постановкой",
        sets: 5,
        reps: [15, 12, 12, 10, 8],
        image: "images/legs_leg_press.jpg",
        levels: [
          [0, 10, 10, 20, 20],
          [10, 10, 20, 20, 30],
          [10, 20, 20, 30, 40],
          [20, 20, 30, 40, 50],
          [20, 30, 40, 50, 70],
          [30, 40, 50, 70, 100]
        ],
        plateLoaded: true,
        baseWeight: 20
      },
      {
        title: "Ягодичный",
        sets: 4,
        reps: [15, 12, 12, 10],
        image: "images/legs_glute.jpg",
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
      },
      {
        title: "Разведение ног",
        sets: 5,
        reps: [18, 15, 15, 12, 12],
        image: "images/legs_abductor.jpg",
        levels: [
          [18, 20, 20, 25, 25],
          [20, 20, 25, 25, 30],
          [20, 25, 25, 30, 34],
          [25, 25, 30, 34, 41],
          [25, 30, 34, 41, 48],
          [30, 34, 41, 48, 55]
        ]
      }
    ]
  }
};

const cardsEl = document.getElementById("cards");
const tabs = document.querySelectorAll(".tab[data-day]");
const typeTabs = document.querySelectorAll(".tab[data-type]");

const dropdown = document.getElementById("dropdown");
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownItems = document.querySelectorAll(".dropdown-item");

let currentDay = "arms";
let currentType = "A";
let currentDifficulty = 1;

const AVAILABLE_PLATES = [25, 20, 15, 10, 5, 2.5, 1.25];

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    currentDay = tab.dataset.day;
    tabs.forEach((item) => item.classList.remove("is-active"));
    tab.classList.add("is-active");
    render();
  });
});

typeTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    currentType = tab.dataset.type;
    typeTabs.forEach((item) => item.classList.remove("is-active"));
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

function formatWeight(weight) {
  return Number.isInteger(weight) ? String(weight) : String(weight).replace(".", ",");
}

function getBaseWeightText(exercise) {
  if (!exercise.baseWeight) return "";

  const lowerTitle = exercise.title.toLowerCase();

  if (lowerTitle.includes("жим ногами")) {
    return `Вес платформы: ${formatWeight(exercise.baseWeight)} KGS`;
  }

  if (lowerTitle.includes("жим груди")) {
    return `Базовый вес: ${formatWeight(exercise.baseWeight)} KGS`;
  }

  if (lowerTitle.includes("ягодич")) {
    return `Базовый вес: ${formatWeight(exercise.baseWeight)} KGS`;
  }

  return `Вес штанги: ${formatWeight(exercise.baseWeight)} KGS`;
}

function buildPlateBreakdown(totalWeight) {
  if (!totalWeight || totalWeight <= 0) {
    return "без блинов";
  }

  const perSide = totalWeight / 2;
  let remaining = perSide;
  const sidePlates = [];

  for (const plate of AVAILABLE_PLATES) {
    while (remaining >= plate - 0.0001) {
      sidePlates.push(plate);
      remaining = Number((remaining - plate).toFixed(2));
    }
  }

  if (remaining > 0.001) {
    return `добавь ${formatWeight(totalWeight)} KGS`;
  }

  const sideText = sidePlates.map(formatWeight).join(" + ");
  return `${sideText} × ${sideText} KGS`;
}

function shouldShowPlateBreakdown(exercise) {
  if (!exercise.plateLoaded) return false;
  if (!exercise.baseWeight) return false;

  const lowerTitle = exercise.title.toLowerCase();

  if (lowerTitle.includes("жим груди")) return true;
  if (lowerTitle.includes("жим ногами")) return true;
  if (lowerTitle.includes("узким хватом")) return true;
  if (lowerTitle.includes("ez-штанга")) return true;

  return false;
}

function renderWeightSummary(exercise, weights, reps) {
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
      const colorBaseWeight = exercise.assisted ? group.weight : group.weight;
      const colorClass = `color-${getZoneColor(colorBaseWeight)}`;

      const rangeText =
        group.from === group.to
          ? `${group.from} подх.`
          : `${group.from}-${group.to} подх.`;

      const valueText = exercise.assisted
        ? `помощь ${formatWeight(group.weight)} KGS`
        : `${formatWeight(group.weight)} KGS`;

      const repsText =
        group.reps.length === 1
          ? `${group.reps[0]} повт.`
          : `${group.reps.join(", ")} повт.`;

      const extraPlateMarkup = shouldShowPlateBreakdown(exercise)
        ? `<small>${buildPlateBreakdown(group.weight)}</small>`
        : "";

      return `
	  <div class="weight-pill">
		<span class="color-bar ${colorClass}"></span>
		<span class="weight-copy">
		  <small>${rangeText}</small>
		  <strong>${valueText}</strong>
		  <small>${repsText}</small>
		  ${extraPlateMarkup}
		</span>
	  </div>
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
  const dayData = program[currentDay][currentType];

  cardsEl.innerHTML = dayData
    .map((exercise, index) => {
      const weights = exercise.levels[currentDifficulty];
      const repsLine = `${exercise.sets} подходов`;
      const groupCount = countWeightGroups(weights);
      const shouldStack = true;
      const baseWeightText = getBaseWeightText(exercise);

      return `
        <article class="card ${shouldStack ? "card-stack" : ""}" style="animation-delay:${index * 60}ms">
          ${makeImageMarkup(exercise.image, exercise.title)}

          <div class="card-body">
            <h2 class="card-title">${exercise.title}</h2>
            <div class="card-meta">${repsLine}</div>
            ${baseWeightText ? `<div class="card-meta">${baseWeightText}</div>` : ""}

            <div class="weight-row ${shouldStack ? "weight-row-stack" : ""}">
              ${renderWeightSummary(exercise, weights, exercise.reps)}
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
