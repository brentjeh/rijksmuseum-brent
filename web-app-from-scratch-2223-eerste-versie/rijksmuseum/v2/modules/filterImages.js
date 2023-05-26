// Filter images door zoekfunctie
export function filterImages(query) {
  const images = document.querySelectorAll("#images-container img");
  const message = document.getElementById("message");
  let numDisplayed = 0;

  images.forEach((image) => {
    const title = image.getAttribute("title");
    const alt = image.getAttribute("alt");

    if (title && title.toLowerCase().includes(query) ||
        alt && alt.toLowerCase().includes(query)) {
      image.style.display = "block";
      numDisplayed++;
    } else {
      image.style.display = "none";
    }
  });

  if (numDisplayed === 0) {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }
}

// Voegt een event listener toe aan de search bar
const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", (event) => {
  const query = event.target.value.toLowerCase();
  window.location.hash = "#search/" + query;
  filterImages(query);
});
