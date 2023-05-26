const endpoint = 'https://www.rijksmuseum.nl/api/en/collection';
const apiKey = 'RCZaMbZZ';

const container = document.querySelector("#paintings-container");

async function getPaintings() {
  try {
    showLoading();
    const response = await fetch(`${endpoint}?key=${apiKey}&format=json&type=painting&ps=48`);
    const data = await response.json();
    return data.artObjects;
  } catch (error) {
    console.error(error);
  } finally {
    hideLoading();
  }
}

const loadingElement = document.getElementById("loading");

function showLoading() {
  loadingElement.style.display = "block";
}

function hideLoading() {
  loadingElement.style.display = "none";
}

const searchInput = document.getElementById("search-input");

// Deze code stopt de kunstwerken in HTML elementen, en toont een pop up als op deze geklikt wordt.

function displayPaintings(paintings, searchTerm = '') {
  container.innerHTML = "";
  
  const filteredPaintings = paintings.filter(painting => {
    return painting.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  if (filteredPaintings.length === 0 && searchTerm !== '') {
    const errorMessage = document.getElementById("error-message");
    errorMessage.style.display = "block";
  } else {
    const errorMessage = document.getElementById("error-message");
    errorMessage.style.display = "none";
  }

  filteredPaintings.forEach(painting => {
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
      const popup = document.getElementById("popup");
      const popupImg = document.getElementById("popup-img");
      const popupTitle = document.getElementById("popup-title");
      const popupDescription = document.getElementById("popup-description");

      popupImg.src = painting.webImage.url;
      popupImg.alt = painting.title;
      popupTitle.textContent = painting.title;
      popupDescription.textContent = `Artist: ${painting.principalOrFirstMaker}`;

      popup.style.display = "block";

      const closeButton = document.getElementById("close");
      closeButton.addEventListener("click", () => {
        popup.style.display = "none";
      });
    });

    container.appendChild(paintingContainer);
  });
}

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.trim();
  getPaintings().then(paintings => {
    displayPaintings(paintings, searchTerm);
  });
});

getPaintings().then(paintings => {
  displayPaintings(paintings);
});

