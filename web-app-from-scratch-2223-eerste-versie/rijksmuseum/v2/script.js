import { router } from "./modules/routie.js";

export const endpoint = 'https://www.rijksmuseum.nl/api/en/collection';
export const apiKey = 'JVuYsIPF';
const loader = document.getElementById('loader');

loader.style.display = 'block';

router()

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
