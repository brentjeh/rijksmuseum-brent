import { endpoint, apiKey } from "./script.js";

// Fetchen van de API
export function getData () {
    fetch(`${endpoint}?key=${apiKey}&format=json&type=painting&ps=48`)
    .then(response => response.json())
    .then(data => {
      const paintings = data.artObjects;
      const imagesContainer = document.getElementById('images-container');
  
      // Gaat over elk kunstwerk heen en creert voor elk kunstwerk een image element
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
  
        // Voegt een click event listener toe aan elk plaatje
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
  
      loader.style.display = 'none';
    })
    .catch(error => {
      console.error(error); // handle errors
      const imagesContainer = document.getElementById('images-container');
      imagesContainer.innerHTML = '<p class="error-message">Something went wrong while fetching the data. Please try again later.</p>';
      loader.style.display = 'none';
    });
  }