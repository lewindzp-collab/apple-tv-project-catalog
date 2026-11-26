const titles = ["Atlas", "Lumen", "Harbour City", "Velocity", "Northline", "Sonora"];

const detailDialog = document.querySelector("#detailDialog");
const searchDialog = document.querySelector("#searchDialog");
const profileDialog = document.querySelector("#profileDialog");
const toast = document.querySelector("#toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1800);
}

document.querySelectorAll("[data-dialog]").forEach(button => {
  button.addEventListener("click", () => detailDialog.showModal());
});

document.querySelector("#searchButton").addEventListener("click", () => {
  searchDialog.showModal();
  document.querySelector("#searchInput").value = "";
  renderSearch("");
  setTimeout(() => document.querySelector("#searchInput").focus(), 50);
});

document.querySelector("#profileButton").addEventListener("click", () => profileDialog.showModal());

document.querySelectorAll("[data-close]").forEach(button => {
  button.addEventListener("click", () => button.closest("dialog").close());
});

document.querySelectorAll("[data-toast]").forEach(button => {
  button.addEventListener("click", () => showToast(button.dataset.toast));
});

document.querySelectorAll("dialog").forEach(dialog => {
  dialog.addEventListener("click", event => {
    if (event.target === dialog) dialog.close();
  });
});

document.querySelectorAll(".gallery-card").forEach(card => {
  card.addEventListener("click", () => showToast(`${card.dataset.title} selected`));
});

document.querySelectorAll(".prompt-row button").forEach(button => {
  button.addEventListener("click", () => showToast(`Project heard: ${button.textContent}`));
});

document.querySelector("#searchInput").addEventListener("input", event => renderSearch(event.target.value));

function renderSearch(query) {
  const term = query.trim().toLowerCase();
  const results = term ? titles.filter(title => title.toLowerCase().includes(term)) : titles;
  document.querySelector("#searchResults").innerHTML = results.length
    ? results.map(title => `<button data-result="${title}">${title}</button>`).join("")
    : "<p>No results found.</p>";
}

document.querySelector("#searchResults").addEventListener("click", event => {
  const button = event.target.closest("[data-result]");
  if (!button) return;
  searchDialog.close();
  showToast(`${button.dataset.result} selected`);
});
