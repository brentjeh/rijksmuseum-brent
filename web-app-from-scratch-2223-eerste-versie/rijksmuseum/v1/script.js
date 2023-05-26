const endpoint = 'https://www.rijksmuseum.nl/api/en/collection';
const apiKey = 'JVuYsIPF'; // replace with your own API key

fetch(`${endpoint}?key=${apiKey}&format=json&type=painting&ps=48`)
  .then(response => response.json())
  .then(data => {
    const paintings = data.artObjects;
    const imagesContainer = document.getElementById('images-container');

    // Iterate over the paintings and create image elements for each one
    for (let i = 0; i < paintings.length; i++) {
      const painting = paintings[i];
      const imageUrl = painting.webImage.url;
      const imageTitle = painting.title;
      const imageDescription = painting.longTitle;

      const imageElement = document.createElement('img');
      imageElement.src = imageUrl;
      imageElement.alt = imageTitle;
      imageElement.title = imageTitle;
      imageElement.dataset.description = imageDescription;
      imageElement.loading = 'lazy';

      // Add a click event listener to each image element
      imageElement.addEventListener('click', () => {
        const modalTitle = document.getElementById('modal-title');
        const modalImage = document.getElementById('modal-image');
        const modalDescription = document.getElementById('modal-description');

        modalTitle.textContent = imageTitle;
        modalImage.src = imageUrl;
        modalImage.alt = imageTitle;
        modalDescription.textContent = imageDescription;

        const modal = document.getElementById('modal');
        modal.style.display = 'block';
      });

      imagesContainer.appendChild(imageElement);
    }
  })
  .catch(error => {
    console.error(error); // handle errors
  });

// Define a function to filter the images based on the search query
function filterImages(query) {
  const images = document.querySelectorAll("#images-container img");

  images.forEach((image) => {
    const title = image.getAttribute("title");
    const alt = image.getAttribute("alt");

    if (title && title.toLowerCase().includes(query) ||
        alt && alt.toLowerCase().includes(query)) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });
}

// Add an event listener to the search input field
const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", (event) => {
  const query = event.target.value.toLowerCase();
  filterImages(query);
});

// Add a click event listener to the close button of the modal
const modalCloseButton = document.querySelector('.modal-content .close');
modalCloseButton.addEventListener('click', () => {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
});

// Add a click event listener to the modal itself to close it if the user clicks outside of it
const modal = document.getElementById('modal');
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
