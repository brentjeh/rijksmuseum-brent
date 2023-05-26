const searchInput = document.getElementById('search-input');

export function getSearchTerm() {
  return searchInput.value.trim();
}

export function setSearchInputChangeListener(listener) {
  searchInput.addEventListener('input', listener);
}
