console.log("script version 17 - FULL");

const program = {
  arms: {
    A: [
      { title: "Бицепс", sets: 5, reps: [15, 12, 12, 10, 8], image: "images/arms_biceps.jpg", levels: [[14, 14, 18, 18, 23], [14, 18, 18, 23, 23], [18, 23, 23, 30, 30], [23, 23, 30, 30, 36], [23, 30, 30, 36, 43], [30, 36, 36, 43, 50]] },
      { title: "Молотки", sets: 5, reps: [15, 12, 12, 10, 8], image: "images/arms_crossover.jpg", levels: [[14, 14, 18, 18, 23], [14, 18, 18, 23, 23], [18, 18, 23, 23, 30], [18, 23, 23, 30, 30], [23, 23, 30, 30, 36], [23, 30, 30, 36, 36]] },
      { title: "Трицепс (V-образный)", sets: 5, reps: [15, 12, 12, 10, 8], image: "images/arms_biceps.jpg", levels: [[14, 18, 18, 23, 23], [18, 18, 23, 23, 30], [18, 23, 23, 30, 30], [23, 23, 30, 30, 36], [23, 30, 30, 36, 43], [30, 30, 36, 43, 50]] },
      { title: "Французский жим", sets: 5, reps: [15, 12, 12, 10, 8], image: "images/arms_france.jpg", levels: [[5, 5, 7.5, 7.5, 10], [7.5, 7.5, 10, 10, 12.5], [10, 10, 12.5, 12.5, 15], [10, 12.5, 12.5, 15, 15], [12.5, 12.5, 15, 15, 17.5], [12.5, 15, 15, 17.5, 20]] },
      { title: "Брусья", sets: 4, reps: [12, 10, 8, 8], image: "images/arms_assisted_dips.jpg", assisted: true, levels: [[57, 50, 43, 36], [50, 43, 36, 30], [43, 36, 30, 23], [36, 30, 23, 23], [30, 23, 23, 23], [23, 23, 23, 23]] }
    ],
    B: [
      { title: "Бицепс узким хватом", sets: 5, reps: [15, 12, 12, 10, 8], image: "images/arms_uzkiy_biceps.jpg", levels: [[0, 0, 2.5, 2.5, 5], [0, 2.5, 2.5, 5, 7.5], [2.5, 2.5, 5, 7.5, 10], [2.5, 5, 7.5, 10, 12.5], [5, 7.5, 10, 12.5, 15], [7.5, 10, 12.5, 15, 20]], machineLevels: [[5, 7.5, 10, 12.5, 15], [7.5, 10, 12.5, 15, 20], [12.5, 15, 17.5, 20, 22.5], [20, 25, 30, 35, 40], [25, 30, 35, 40, 42.5], [30, 35, 40, 45, 50]], plateLoaded: true, baseWeight: 10, isMachine: false },
      { title: "Трицепс канат", sets: 5, reps: [15, 12, 12, 10, 8], image: "images/arms_biceps.jpg", levels: [[14, 18, 18, 23, 23], [18, 18, 23, 23, 30], [18, 23, 23, 30, 30], [23, 23, 30, 30, 36], [23, 30, 30, 36, 43], [30, 30, 36, 43, 50]] },
      { title: "Бицепс канат", sets: 5, reps: [15, 12, 12, 10, 8], image: "images/arms_biceps.jpg", levels: [[14, 14, 18, 18, 23], [14, 18, 18, 23, 23], [18, 23, 23, 30, 30], [23, 23, 30, 30, 36], [23, 30, 30, 36, 43], [30, 36, 36, 43, 50]] },
      { title: "Французский жим", sets: 5, reps: [15, 12, 12, 10, 8], image: "images/arms_france.jpg", levels: [[5, 5, 7.5, 7.5, 10], [7.5, 7.5, 10, 10, 12.5], [10, 10, 12.5, 12.5, 15], [10, 12.5, 12.5, 15, 15], [12.5, 12.5, 15, 15, 17.5], [12.5, 15, 15, 17.5, 20]] },
      { title: "Брусья", sets: 4, reps: [12, 10, 8, 8], image: "images/arms_assisted_dips.jpg", assisted: true, levels: [[57, 50, 43, 36], [50, 43, 36, 30], [43, 36, 30, 23], [36, 30, 23, 23], [30, 23, 23, 23], [23, 23, 23, 23]] }
    ]
  },
  body: {
    A: [
      { title: "Жим груди", sets: 5, reps: [15, 12, 12, 10, 8], image: "images/body_chest_press.jpg", levels: [[0, 2.5, 2.5, 5, 5], [2.5, 2.5, 5, 5, 10], [2.5, 5, 5, 10, 15], [5, 5, 10, 15, 20], [5, 10, 15, 20, 25], [10, 15, 20, 25, 30]], plateLoaded: true, baseWeight: 15 },
      { title: "Бабочка", sets: 5, reps: [15, 12, 12, 10, 10], image: "images/body_pec_deck2.jpg", levels: [[9, 14, 14, 20, 20], [14, 14, 20, 20, 27], [14, 20, 20, 27, 34], [20, 27, 27, 34, 43], [27, 34, 43, 52, 61], [34, 43, 52, 61, 70]] },
      { title: "Верхний блок", sets: 5, reps: [15, 12, 12, 10, 8], image: "images/body_lat_pulldown.jpg", levels: [[14, 20, 20, 27, 27], [20, 20, 27, 27, 34], [20, 27, 27, 34, 43], [27, 34, 34, 43, 52], [34, 43, 52, 61, 70], [43, 52, 61, 70, 79]] },
      { title: "Горизонтальная тяга", sets: 5, reps: [15, 12, 12, 10, 8], image: "images/body_horizontal_thrust.jpg", levels: [[14, 20, 20, 27, 27], [20, 20, 27, 27, 34], [20, 27, 27, 34, 43], [27, 34, 34, 43, 52], [34, 43, 52, 61, 70], [43, 52, 61, 70, 79]] },
      { title: "Подтягивания", sets: 4, reps: [10, 8, 8, 6], image: "images/arms_assisted_dips.jpg", assisted: true, levels: [[64, 57, 50, 43], [57, 50, 43, 36], [50, 43, 36, 30], [43, 36, 30, 23], [36, 30, 23, 23], [30, 23, 23, 23]] }
    ],
    B: [
      { title: "Жим груди", sets: 5, reps: [15, 12, 12, 10, 8], image: "images/body_chest_press.jpg", levels: [[0, 2.5, 2.5, 5, 5], [2.5, 2.5, 5, 5, 10], [2.5, 5, 5, 10, 15], [5, 5, 10, 15, 20], [5, 10, 15, 20, 25], [10, 15, 20, 25, 30]], plateLoaded: true, baseWeight: 15 },
      { title: "Сведение в бабочке", sets: 5, reps: [15, 12, 12, 10, 10], image: "images/body_pec_deck.jpg", levels: [[9, 14, 14, 20, 20], [14, 14, 20, 20, 27], [14, 20, 20, 27, 34], [20, 27, 27, 34, 43], [27, 34, 43, 52, 61], [34, 43, 52, 61, 70]] },
      { title: "Тяга сверху широким", sets: 5, reps: [15, 12, 12, 10, 8], image: "images/body_lat_pulldown.jpg", levels: [[14, 20, 20, 27, 27], [20, 20, 27, 27, 34], [20, 27, 27, 34, 43], [27, 34, 34, 43, 52], [34, 43, 52, 61, 70], [43, 52, 61, 70, 79]] },
      { title: "Тяга узким хватом", sets: 5, reps: [15, 12, 12, 10, 8], image: "images/body_lat_pulldown.jpg", levels: [[14, 20, 20, 27, 27], [20, 20, 27, 27, 34], [20, 27, 27, 34, 43], [27, 34, 34, 43, 52], [34, 43, 52, 61, 70], [43, 52, 61, 70, 79]] },
      { title: "Подтягивания", sets: 4, reps: [10, 8, 8, 6], image: "images/arms_assisted_dips.jpg", assisted: true, levels: [[64, 57, 50, 43], [57, 50, 43, 36], [50, 43, 36, 30], [43, 36, 30, 23], [36, 30, 23, 23], [30, 23, 23, 23]] }
    ]
  },
  legs: {
    A: [
      { title: "Жим ногами", sets: 5, reps: [15, 12, 12, 10, 8], image: "images/legs_leg_press.jpg", plateLoaded: true, baseWeight: 20, levels: [[0, 10, 10, 20, 20], [10, 10, 20, 20, 30], [10, 20, 20, 30, 40], [20, 20, 30, 40, 50], [20, 30, 40, 50, 70], [30, 40, 50, 70, 100]] },
      { title: "Разгибание ног", sets: 5, reps: [15, 12, 12, 10, 8], image: "images/legs_leg_extension.jpg", levels: [[20, 20, 27, 27, 34], [20, 27, 27, 34, 34], [27, 27, 34, 34, 43], [27, 34, 34, 43, 43], [34, 34, 43, 43, 52], [34, 43, 43, 52, 61]] },
      { title: "Сгибание ног", sets: 5, reps: [15, 12, 12, 10, 8], image: "images/legs_leg_curl.jpg", levels: [[14, 18, 18, 23, 23], [18, 18, 23, 23, 30], [18, 23, 23, 30, 30], [23, 23, 30, 30, 36], [23, 30, 30, 36, 43], [30, 30, 36, 43, 50]] },
      { title: "Разведение ног", sets: 5, reps: [18, 15, 15, 12, 12], image: "images/legs_abductor.jpg", levels: [[18, 20, 20, 25, 25], [20, 20, 25, 25, 30], [20, 25, 25, 30, 34], [25, 25, 30, 34, 41], [25, 30, 34, 41, 48], [30, 34, 41, 48, 55]] },
      { title: "Ягодичный", sets: 4, reps: [15, 12, 12, 10], image: "images/legs_glute.jpg", plateLoaded: true, baseWeight: 20, levels: [[0, 0, 10, 10], [0, 10, 10, 20], [10, 10, 20, 30], [10, 20, 30, 40], [20, 30, 40, 50], [30, 40, 50, 70]] }
    ],
    B: [
      { title: "Разгибание с паузой", sets: 5, reps: [15, 12, 12, 10, 8], image: "images/legs_leg_extension.jpg", levels: [[20, 20, 27, 27, 34], [20, 27, 27, 34, 34], [27, 27, 34, 34, 43], [27, 34, 34, 43, 43], [34, 34, 43, 43, 52], [34, 43, 43, 52, 61]] },
      { title: "Сгибание ног", sets: 5, reps: [15, 12, 12, 10, 8], image: "images/legs_leg_curl.jpg", levels: [[14, 18, 18, 23, 23], [18, 18, 23, 23, 30], [18, 23, 23, 30, 30], [23, 23, 30, 30, 36], [23, 30, 30, 36, 43], [30, 30, 36, 43, 50]] },
      { title: "Жим ногами узко", sets: 5, reps: [15, 12, 12, 10, 8], image: "images/legs_leg_press.jpg", plateLoaded: true, baseWeight: 20, levels: [[0, 10, 10, 20, 20], [10, 10, 20, 20, 30], [10, 20, 20, 30, 40], [20, 20, 30, 40, 50], [20, 30, 40, 50, 70], [30, 40, 50, 70, 100]] },
      { title: "Ягодичный", sets: 4, reps: [15, 12, 12, 10], image: "images/legs_glute.jpg", plateLoaded: true, baseWeight: 20, levels: [[0, 0, 10, 10], [0, 10, 10, 20], [10, 10, 20, 30], [10, 20, 30, 40], [20, 30, 40, 50], [30, 40, 50, 70]] },
      { title: "Разведение ног", sets: 5, reps: [18, 15, 15, 12, 12], image: "images/legs_abductor.jpg", levels: [[18, 20, 20, 25, 25], [20, 20, 25, 25, 30], [20, 25, 25, 30, 34], [25, 25, 30, 34, 41], [25, 30, 34, 41, 48], [30, 34, 41, 48, 55]] }
    ]
  }
};

// --- DOM Элементы ---
const cardsEl = document.getElementById("cards");
const dayDropdown = document.getElementById("dayDropdown");
const dayDropdownBtn = document.getElementById("dayDropdownBtn");
const dayDropdownItems = document.querySelectorAll(".day-dropdown-item");
const typeTabs = document.querySelectorAll(".tab[data-type]");
const diffDropdown = document.getElementById("dropdown");
const diffDropdownBtn = document.getElementById("dropdownBtn");
const diffDropdownItems = document.querySelectorAll(".dropdown-item");

let currentDay = "arms";
let currentType = "A";
let currentDifficulty = 1;

// --- Обработчики интерфейса ---
dayDropdownBtn.addEventListener("click", (e) => { e.stopPropagation(); dayDropdown.classList.toggle("open"); });
dayDropdownItems.forEach(item => {
  item.addEventListener("click", () => {
    dayDropdownItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
    currentDay = item.dataset.day;
    dayDropdownBtn.textContent = item.textContent;
    dayDropdown.classList.remove("open");
    render();
  });
});

typeTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    currentType = tab.dataset.type;
    typeTabs.forEach(t => t.classList.remove("is-active"));
    tab.classList.add("is-active");
    render();
  });
});

diffDropdownBtn.addEventListener("click", (e) => { e.stopPropagation(); diffDropdown.classList.toggle("open"); });
diffDropdownItems.forEach(item => {
  item.addEventListener("click", () => {
    diffDropdownItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
    currentDifficulty = Number(item.dataset.value);
    diffDropdownBtn.textContent = item.textContent;
    diffDropdown.classList.remove("open");
    render();
  });
});

document.addEventListener("click", () => {
  dayDropdown.classList.remove("open");
  diffDropdown.classList.remove("open");
});

// --- Вспомогательные функции ---
function getZoneColor(w) { return w <= 23 ? "green" : w <= 57 ? "yellow" : "red"; }
function formatWeight(w) { return Number.isInteger(w) ? String(w) : String(w).replace(".", ","); }

function getBaseWeightText(ex) {
  if (!ex.baseWeight || ex.isMachine) return "";
  const t = ex.title.toLowerCase();
  if (t.includes("жим ногами")) return `Вес платформы: ${ex.baseWeight} KGS`;
  if (t.includes("жим груди") || t.includes("ягодич")) return `Базовый вес: ${ex.baseWeight} KGS`;
  return `Вес штанги: ${ex.baseWeight} KGS`;
}

// Умные блины (логика накопления)
function getSmartPlates(target, isMachine) {
  if (target <= 0) return "без блинов";
  const weight = isMachine ? target : target / 2;
  let remaining = weight;
  let result = [];

  // Если вес большой (30+), можно использовать тяжелые блины, но 10 - приоритет
  while (remaining >= 10 - 0.0001) { result.push(10); remaining -= 10; }
  const small = [5, 2.5, 1.25];
  for (let p of small) { while (remaining >= p - 0.0001) { result.push(p); remaining -= p; } }
  
  const str = result.sort((a,b)=>b-a).map(formatWeight).join(" + ");
  return isMachine ? `Блины: ${str} KGS` : `${str} × ${str} KGS`;
}

function renderWeightSummary(ex, weights, reps) {
  const groups = [];
  for (let i = 0; i < weights.length; i++) {
    if (i > 0 && weights[i] === weights[i-1]) {
      groups[groups.length-1].to++;
      groups[groups.length-1].reps.push(reps[i]);
    } else {
      groups.push({ from: i+1, to: i+1, weight: weights[i], reps: [reps[i]] });
    }
  }

  return groups.map(g => {
    const range = g.from === g.to ? `${g.from} подх.` : `${g.from}-${g.to} подх.`;
    const val = ex.assisted ? `помощь ${formatWeight(g.weight)}` : `${formatWeight(g.weight)} KGS`;
    const plates = (ex.plateLoaded || ex.baseWeight) ? `<small>${getSmartPlates(g.weight, ex.isMachine)}</small>` : "";
    return `
      <div class="weight-pill">
        <span class="color-bar color-${getZoneColor(g.weight)}"></span>
        <span class="weight-copy">
          <small>${range}</small><strong>${val}</strong><small>${g.reps.join(", ")} повт.</small>${plates}
        </span>
      </div>`;
  }).join("");
}

function makeImageMarkup(src, title) {
  return `
    <div class="card-image">
      <img src="${src}" alt="${title}" class="exercise-image" data-fullsrc="${src}" onerror="this.style.display='none'; this.parentNode.innerHTML='<div class=&quot;empty-image&quot;>Добавь фото</div>';"/>
    </div>`;
}

// --- Лайтбокс ---
function ensureLightbox() {
  if (document.getElementById("imageLightbox")) return;
  const lb = document.createElement("div");
  lb.id = "imageLightbox";
  lb.innerHTML = `<div class="lightbox-backdrop"></div><img class="lightbox-image" id="lightboxImage" />`;
  document.body.appendChild(lb);
  lb.addEventListener("click", () => lb.classList.remove("is-open"));
}

function bindActions() {
  // Картинки
  document.querySelectorAll(".exercise-image").forEach(img => {
    img.addEventListener("click", () => {
      const lb = document.getElementById("imageLightbox");
      document.getElementById("lightboxImage").src = img.dataset.fullsrc;
      lb.classList.add("is-open");
    });
  });
  // Переключатели режимов
  document.querySelectorAll(".card-toggle-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = btn.closest(".card").dataset.index;
      program[currentDay][currentType][idx].isMachine = (btn.dataset.mode === "machine");
      render();
    });
  });
}

// --- Основной рендер ---
function render() {
  const dayData = program[currentDay][currentType];
  if (!dayData) { cardsEl.innerHTML = "Ошибка данных"; return; }

  cardsEl.innerHTML = dayData.map((ex, idx) => {
    const weights = (ex.isMachine && ex.machineLevels) ? ex.machineLevels[currentDifficulty] : ex.levels[currentDifficulty];
    
    let toggle = "";
    if (ex.title.toLowerCase().includes("бицепс узким хватом")) {
      toggle = `
        <div class="card-toggle">
          <button class="card-toggle-btn ${!ex.isMachine ? 'active' : ''}" data-mode="barbell">Штанга</button>
          <button class="card-toggle-btn ${ex.isMachine ? 'active' : ''}" data-mode="machine">Тренажер</button>
        </div>`;
    }

    return `
      <article class="card" data-index="${idx}" style="animation-delay:${idx*50}ms">
        ${makeImageMarkup(ex.image, ex.title)}
        <div class="card-body">
          <h2 class="card-title">${ex.title}</h2>
          <div class="card-meta">${ex.sets} подходов</div>
          ${getBaseWeightText(ex) ? `<div class="card-meta">${getBaseWeightText(ex)}</div>` : ""}
          ${toggle}
          <div class="weight-row weight-row-stack">${renderWeightSummary(ex, weights, ex.reps)}</div>
        </div>
      </article>`;
  }).join("");

  bindActions();
}

ensureLightbox();
render();