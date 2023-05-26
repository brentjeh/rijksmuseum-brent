import { fetchPaintings } from './api.js';
import { showLoading, hideLoading } from './loading.js';
import { displayPaintings } from './render.js';
import { getSearchTerm, setSearchInputChangeListener } from './search.js';
import { showErrorMessage, hideErrorMessage } from './error.js';
import { openPopup, closePopup } from './popup.js';

setSearchInputChangeListener(() => {
  const searchTerm = getSearchTerm();
  showLoading();
  hideErrorMessage();
  fetchPaintings()
    .then(paintings => {
      hideLoading();
      displayPaintings(paintings, searchTerm);
    })
    .catch(error => {
      hideLoading();
      showErrorMessage();
      console.error(error);
    });
});

showLoading();
hideErrorMessage();
fetchPaintings()
  .then(paintings => {
    hideLoading();
    displayPaintings(paintings);
  })
  .catch(error => {
    hideLoading();
    showErrorMessage();
    console.error(error);
  });
