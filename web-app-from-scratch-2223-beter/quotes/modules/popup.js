const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const popupTitle = document.getElementById("popup-title");
const popupDescription = document.getElementById("popup-description");
const closeButton = document.getElementById("close");

export function openPopup(painting) {
  popupImg.src = painting.webImage.url;
  popupImg.alt = painting.title;
  popupTitle.textContent = painting.title;
  popupDescription.textContent = `Artist: ${painting.principalOrFirstMaker}`;

  popup.style.display = "block";
}

export function closePopup() {
  popup.style.display = "none";
}

closeButton.addEventListener("click", () => {
  closePopup();
});
