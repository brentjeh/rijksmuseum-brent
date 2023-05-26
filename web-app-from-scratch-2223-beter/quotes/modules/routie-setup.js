import { fetchPaintings } from './api.js';
import { displayPaintings } from './render.js';
import { getSearchTerm, setSearchInputChangeListener } from './search.js';

function handleHome() {
  const query = '';
  fetchPaintings()
    .then(paintings => {
      displayPaintings(paintings);
    })
    .catch(error => {
      console.error(error);
    });

  // Reset de zoekbalk
  const searchInput = document.getElementById('search-input');
  searchInput.value = '';
}

function handleSearch(params) {
  const query = params.query || '';
  fetchPaintings()
    .then(paintings => {
      displayPaintings(paintings, query);
    })
    .catch(error => {
      console.error(error);
    });
}

function handleHashChange() {
  const hash = window.location.hash.substring(1); // Verwijder het '#' symbool

  if (hash === '') {
    handleHome();
  } else if (hash.startsWith('search/')) {
    const query = hash.substring(7); // Verwijder 'search/' uit de hash
    handleSearch({ query });
  }
}

// Voeg een eventlistener toe aan het zoekveld om de URL bij te werken
setSearchInputChangeListener(() => {
  const query = getSearchTerm();
  const newHash = query ? `#search/${query}` : '';
  window.location.hash = newHash;
});

// Eventlistener voor de homepage link
const homeLink = document.getElementById('home-link');
homeLink.addEventListener('click', () => {
  window.location.hash = '';
});

window.addEventListener('hashchange', handleHashChange);
window.addEventListener('DOMContentLoaded', handleHashChange);
