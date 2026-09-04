const grid = document.querySelector("#grid");
const status = document.querySelector("#status");

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function card(item) {
  const path = `./library/${item.relative_path}`;
  const gif = item.gif
    ? `<img src="${path}/${encodeURIComponent(item.gif)}" alt="${escapeHtml(item.name)} GIF preview" loading="lazy">`
    : "";

  const description = item.description
    ? escapeHtml(item.description)
    : "Interactive browser-motion study.";

  return `
    <article class="card">
      <div class="preview">${gif}</div>
      <div class="body">
        <div class="category">${escapeHtml(item.category)}</div>
        <h2>${escapeHtml(item.name)}</h2>
        <p class="description">${description}</p>
        <a class="open" href="${path}/index.html">Open Preview</a>
      </div>
    </article>
  `;
}

async function loadCatalogue() {
  try {
    const response = await fetch("./catalogue.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`Catalogue request failed: ${response.status}`);

    const items = await response.json();
    status.textContent = `${items.length} interactive motion preview${items.length === 1 ? "" : "s"}`;
    grid.innerHTML = items.map(card).join("");
  } catch (error) {
    console.error(error);
    status.textContent = "The motion catalogue could not be loaded.";
  }
}

loadCatalogue();
