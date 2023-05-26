import { showErrorMessage, hideErrorMessage } from './error.js';
import { openPopup, closePopup } from './popup.js';

const container = document.querySelector("#paintings-container");

export function displayPainting(painting) {
  const paintingContainer = document.createElement("div");
  paintingContainer.classList.add("painting-container");

  const img = document.createElement("img");
  img.src = painting.webImage.url;
  img.alt = painting.title;

  const title = document.createElement("h2");
  title.textContent = painting.title;

  paintingContainer.appendChild(img);
  paintingContainer.appendChild(title);

  paintingContainer.addEventListener("click", () => {
    openPopup(painting);
  });

  container.appendChild(paintingContainer);
}

export function clearPaintings() {
  container.innerHTML = "";
}

export function displayPaintings(paintings, searchTerm = '') {
  clearPaintings();

  const filteredPaintings = paintings.filter(painting => {
    return painting.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  if (filteredPaintings.length === 0 && searchTerm !== '') {
    showErrorMessage();
  } else {
    hideErrorMessage();
  }

  filteredPaintings.forEach(painting => {
    displayPainting(painting);
  });
}