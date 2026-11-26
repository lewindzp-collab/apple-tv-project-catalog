const features = [
  {
    title: "Severance",
    type: "Award-winning series",
    meta: "TV-MA · Drama · Sci-Fi",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=92"
  },
  {
    title: "Severance",
    type: "Award-winning series",
    meta: "TV-MA · Sci-Fi · Thriller",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=92"
  },
  {
    title: "Northline",
    type: "New movie",
    meta: "PG-13 · Thriller",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=92"
  }
];

const posters = [
  ["Atlas", "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=90"],
  ["Severance", "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=90"],
  ["Your Friends", "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=90"],
  ["Solo", "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=90"],
  ["Formation", "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=900&q=90"],
  ["Orbital", "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=90"],
  ["Harbour", "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=900&q=90"]
];

let heroIndex = 0;
const heroImage = document.querySelector("#heroImage");
const heroTitle = document.querySelector("#heroTitle");
const heroType = document.querySelector("#heroType");
const heroMeta = document.querySelector("#heroMeta");

function renderDots() {
  document.querySelector("#heroDots").innerHTML = features.map((_, index) =>
    `<button class="${index === heroIndex ? "active" : ""}" data-feature="${index}" aria-label="Show feature ${index + 1}"></button>`
  ).join("");
}

function showFeature(index) {
  heroIndex = (index + features.length) % features.length;
  const feature = features[heroIndex];
  heroImage.style.opacity = "0";
  document.querySelector(".hero-copy").style.opacity = "0";
  setTimeout(() => {
    heroImage.src = feature.image;
    heroTitle.textContent = feature.title;
    heroType.textContent = feature.type;
    heroMeta.textContent = feature.meta;
    heroImage.style.opacity = ".88";
    document.querySelector(".hero-copy").style.opacity = "1";
    renderDots();
  }, 220);
}

document.querySelector("#nextButton").addEventListener("click", () => showFeature(heroIndex + 1));
document.querySelector("#playButton").addEventListener("click", () => showToast(`Playing ${features[heroIndex].title}`));
document.querySelector("#heroDots").addEventListener("click", event => {
  const button = event.target.closest("[data-feature]");
  if (button) showFeature(Number(button.dataset.feature));
});

document.querySelector("#railTrack").innerHTML = posters.map(([title, image]) =>
  `<button class="poster" data-poster="${title}" aria-label="Open ${title}">
    <img src="${image}" alt="">
    <strong>${title}</strong>
  </button>`
).join("");

document.querySelector("#railTrack").addEventListener("click", event => {
  const poster = event.target.closest("[data-poster]");
  if (poster) showToast(`${poster.dataset.poster} selected`);
});

document.querySelectorAll(".nav-row").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".nav-row").forEach(row => row.classList.remove("active"));
    button.classList.add("active");
    if (button.dataset.nav === "Search") document.querySelector("#searchDialog").showModal();
    else showToast(button.dataset.nav);
  });
});

document.querySelectorAll(".nav-row").forEach(row => row.classList.remove("active"));
document.querySelector('.nav-row[data-nav="TV"]')?.classList.add("active");

const searchDialog = document.querySelector("#searchDialog");
const profileDialog = document.querySelector("#profileDialog");
document.querySelector("#profileButton").addEventListener("click", () => profileDialog.showModal());
document.querySelectorAll("[data-close]").forEach(button =>
  button.addEventListener("click", () => button.closest("dialog").close())
);
document.querySelectorAll("dialog").forEach(dialog =>
  dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); })
);

document.querySelector("#searchInput").addEventListener("input", event => renderSearch(event.target.value));
function renderSearch(query) {
  const term = query.trim().toLowerCase();
  const results = term ? posters.filter(([title]) => title.toLowerCase().includes(term)) : posters;
  document.querySelector("#searchResults").innerHTML = results.length
    ? results.map(([title]) => `<button data-result="${title}">${title}</button>`).join("")
    : "<p>No results found.</p>";
}
document.querySelector("#searchResults").addEventListener("click", event => {
  const result = event.target.closest("[data-result]");
  if (!result) return;
  searchDialog.close();
  showToast(`${result.dataset.result} selected`);
});

const toast = document.querySelector("#toast");
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1800);
}

renderDots();
