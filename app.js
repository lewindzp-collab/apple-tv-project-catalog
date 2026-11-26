const catalog = [
  { id: "atlas", title: "Atlas", kind: "Drama", year: "2026", rating: "TV-MA", duration: "9 Episodes", poster: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85", wide: true, description: "A cartographer follows an impossible coastline and discovers that the most distant places can bring us back to ourselves." },
  { id: "northline", title: "Northline", kind: "Thriller", year: "2025", rating: "16+", duration: "1 hr 48 min", poster: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=85", description: "One night, one train, and a destination that does not appear on any map." },
  { id: "lumen", title: "Lumen", kind: "Sci-Fi", year: "2026", rating: "TV-14", duration: "8 Episodes", poster: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=85", description: "A team at the edge of the solar system receives a signal carrying tomorrow’s memories." },
  { id: "harbour", title: "Harbour City", kind: "Crime", year: "2024", rating: "16+", duration: "1 hr 56 min", poster: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=85", description: "A detective investigates a disappearance that exposes a city built on carefully kept secrets." },
  { id: "stillwater", title: "Stillwater", kind: "Documentary", year: "2026", rating: "G", duration: "52 min", poster: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=85", description: "An intimate portrait of remote communities and the water that connects them." },
  { id: "orbit", title: "Orbit", kind: "Adventure", year: "2025", rating: "PG", duration: "2 hr 4 min", poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85", description: "A rescue mission becomes humanity’s first journey beyond the limits of sight." },
  { id: "wildframe", title: "Wildframe", kind: "Nature", year: "2026", rating: "G", duration: "6 Episodes", poster: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85", description: "Untamed landscapes come alive through extraordinary close-up stories." },
  { id: "midnight", title: "Midnight at Noon", kind: "Romance", year: "2024", rating: "PG-13", duration: "1 hr 42 min", poster: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=85", description: "Two strangers have one perfect day to decide whether to chase a life together." },
  { id: "sonora", title: "Sonora", kind: "Music", year: "2026", rating: "TV-14", duration: "10 Episodes", poster: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=85", description: "Five musicians turn a borrowed rehearsal room into a movement heard around the world." },
  { id: "velocity", title: "Velocity", kind: "Sport", year: "2025", rating: "PG", duration: "1 hr 36 min", poster: "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=1200&q=85", description: "A rookie driver risks everything to reclaim a name from the racing circuit." }
];

const state = {
  view: "watch",
  playing: new Set(JSON.parse(localStorage.getItem("projects-playing") || "[]")),
  library: new Set(JSON.parse(localStorage.getItem("projects-library") || '["atlas","lumen","sonora"]'))
};

const $ = (selector) => document.querySelector(selector);
const hero = $("#hero");
const content = $("#content");

function imageFor(item, poster = false) {
  return item.poster + (poster ? "&w=700" : "");
}

function card(item, poster = false) {
  const progress = state.playing.has(item.id) ? "Continue" : item.year;
  return `<button class="card ${poster ? "poster-card" : ""}" data-detail="${item.id}" aria-label="Open ${item.title}">
    <img src="${imageFor(item, poster)}" alt="">
    <div class="card-info"><strong>${item.title}</strong><span>${progress} · ${item.kind}</span></div>
  </button>`;
}

function rail(title, items, poster = false) {
  return `<section class="rail">
    <div class="rail-head"><h2>${title}</h2><button data-see="${title}">See All</button></div>
    <div class="cards">${items.map(item => card(item, poster)).join("")}</div>
  </section>`;
}

function renderHero(item = catalog[0]) {
  hero.innerHTML = `
    <img class="hero-image" src="${imageFor(item)}" alt="">
    <div class="hero-copy">
      <p class="eyebrow">${item.year} · ${item.kind}</p>
      <h1>${item.title}</h1>
      <div class="hero-meta"><strong>${item.rating}</strong><span>•</span><span>${item.duration}</span></div>
      <div class="hero-actions">
        <button class="primary" data-play="${item.id}">▶  Play</button>
        <button class="secondary" data-detail="${item.id}">Details</button>
        <button class="secondary" data-library="${item.id}">${state.library.has(item.id) ? "✓ In Library" : "+ Add to Library"}</button>
      </div>
    </div>`;
}

function renderWatch() {
  renderHero();
  content.innerHTML =
    rail("Continue Watching", [catalog[1], catalog[3], catalog[7], catalog[9], catalog[4]]) +
    rail("Top Picks", catalog.slice(2, 8)) +
    rail("Award-Worthy Stories", [catalog[4], catalog[6], catalog[0], catalog[8], catalog[3]]) +
    rail("Movies", [catalog[1], catalog[2], catalog[3], catalog[5], catalog[7]], true);
}

function renderMovies() {
  hero.innerHTML = "";
  hero.style.height = "160px";
  hero.style.minHeight = "160px";
  hero.style.background = "linear-gradient(180deg, #17181c, #08090b)";
  hero.innerHTML = `<div class="hero-copy" style="bottom:30px"><p class="eyebrow">Browse</p><h1 style="font-size:64px">Movies</h1></div>`;
  content.innerHTML = rail("All Movies", catalog.filter((_, i) => i % 2 === 0 || i > 5), true) +
    rail("Blockbusters", [catalog[5], catalog[1], catalog[3], catalog[7]], true);
}

function renderShows() {
  hero.innerHTML = "";
  hero.style.height = "160px";
  hero.style.minHeight = "160px";
  hero.style.background = "linear-gradient(180deg, #17181c, #08090b)";
  hero.innerHTML = `<div class="hero-copy" style="bottom:30px"><p class="eyebrow">Browse</p><h1 style="font-size:64px">TV Shows</h1></div>`;
  content.innerHTML = rail("Popular Series", [catalog[0], catalog[2], catalog[6], catalog[8]], true) +
    rail("New Episodes", [catalog[8], catalog[0], catalog[2], catalog[6]], true);
}

function renderLibrary() {
  hero.innerHTML = "";
  hero.style.height = "160px";
  hero.style.minHeight = "160px";
  hero.style.background = "linear-gradient(180deg, #17181c, #08090b)";
  hero.innerHTML = `<div class="hero-copy" style="bottom:30px"><p class="eyebrow">Your Collection</p><h1 style="font-size:64px">Library</h1></div>`;
  const items = catalog.filter(item => state.library.has(item.id));
  content.innerHTML = items.length ? rail("My Library", items, true) : `<div style="padding:70px 7%"><h2>Nothing in your library yet</h2></div>`;
}

function renderStore() {
  hero.innerHTML = "";
  hero.style.height = "160px";
  hero.style.minHeight = "160px";
  hero.style.background = "linear-gradient(180deg, #17181c, #08090b)";
  hero.innerHTML = `<div class="hero-copy" style="bottom:30px"><p class="eyebrow">Discover</p><h1 style="font-size:64px">Store</h1></div>`;
  content.innerHTML = rail("New This Week", [catalog[8], catalog[0], catalog[5], catalog[9]], true) +
    rail("Essentials", catalog, true);
}

function setView(view) {
  state.view = view;
  hero.style.height = "";
  hero.style.minHeight = "";
  hero.style.background = "";
  document.querySelectorAll(".tab").forEach(tab => tab.classList.toggle("active", tab.dataset.view === view));
  if (view === "watch") renderWatch();
  if (view === "movies") renderMovies();
  if (view === "shows") renderShows();
  if (view === "library") renderLibrary();
  if (view === "store") renderStore();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openDetail(id) {
  const item = catalog.find(entry => entry.id === id);
  if (!item) return;
  $("#detailContent").innerHTML = `<div class="detail-hero" style="background-image:url('${imageFor(item)}')">
    <div class="detail-copy">
      <p class="eyebrow">${item.year} · ${item.rating} · ${item.duration}</p>
      <h2>${item.title}</h2>
      <p>${item.description}</p>
      <div class="detail-actions">
        <button class="primary" data-play="${item.id}">▶  Play</button>
        <button class="secondary" data-library="${item.id}">${state.library.has(item.id) ? "✓ In Library" : "+ Add to Library"}</button>
      </div>
    </div>
  </div>`;
  $("#detailDialog").showModal();
}

function toggleLibrary(id) {
  if (state.library.has(id)) state.library.delete(id); else state.library.add(id);
  localStorage.setItem("projects-library", JSON.stringify([...state.library]));
  showToast(state.library.has(id) ? "Added to Library" : "Removed from Library");
  if (state.view === "library") renderLibrary();
  if ($("#detailDialog").open) openDetail(id);
  setView(state.view);
}

function play(id) {
  state.playing.add(id);
  localStorage.setItem("projects-playing", JSON.stringify([...state.playing]));
  showToast("Playing preview");
  if ($("#detailDialog").open) $("#detailDialog").close();
  setView(state.view);
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1800);
}

document.querySelectorAll(".tab").forEach(tab => tab.addEventListener("click", () => setView(tab.dataset.view)));
$("#brandButton").addEventListener("click", () => setView("watch"));
$("#searchButton").addEventListener("click", () => {
  $("#searchDialog").showModal();
  $("#searchInput").value = "";
  renderSearch("");
  setTimeout(() => $("#searchInput").focus(), 50);
});
$("#profileButton").addEventListener("click", () => $("#profileDialog").showModal());

document.querySelectorAll("[data-close]").forEach(button => button.addEventListener("click", () => document.getElementById(button.dataset.close).close()));

document.addEventListener("click", event => {
  const detail = event.target.closest("[data-detail]");
  const playButton = event.target.closest("[data-play]");
  const libraryButton = event.target.closest("[data-library]");
  if (detail) openDetail(detail.dataset.detail);
  if (playButton) play(playButton.dataset.play);
  if (libraryButton) toggleLibrary(libraryButton.dataset.library);
});

$("#searchInput").addEventListener("input", event => renderSearch(event.target.value));

function renderSearch(query) {
  const term = query.trim().toLowerCase();
  const results = term ? catalog.filter(item => `${item.title} ${item.kind} ${item.year}`.toLowerCase().includes(term)) : catalog;
  $("#searchResults").innerHTML = results.length ? results.map(item =>
    `<button class="result" data-detail="${item.id}"><img src="${imageFor(item)}" alt=""><span>${item.title}</span></button>`
  ).join("") : `<p>No results found.</p>`;
}

document.querySelectorAll("dialog").forEach(dialog => {
  dialog.addEventListener("click", event => {
    if (event.target === dialog) dialog.close();
  });
});

document.addEventListener("keydown", event => {
  if (event.key === "/" && !$("#searchDialog").open) $("#searchButton").click();
});

renderWatch();
