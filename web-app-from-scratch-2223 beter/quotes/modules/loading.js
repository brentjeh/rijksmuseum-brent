const loadingElement = document.getElementById("loading");

export function showLoading() {
  loadingElement.style.display = "block";
}

export function hideLoading() {
  loadingElement.style.display = "none";
}
