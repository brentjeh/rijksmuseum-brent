const errorMessage = document.getElementById("error-message");

export function showErrorMessage() {
  errorMessage.style.display = "block";
}

export function hideErrorMessage() {
  errorMessage.style.display = "none";
}
