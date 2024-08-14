var i = 0;
var time = 3000;
var image = [];
image[0] = "image1.png";
image[1] = "image2.png";
image[2] = "image3.png";
image[3] = "image6.png";
image[4] = "image7.png";

function changeImages() {
  document.getElementById("slide").src = image[i];
  i = (i + 1) % image.length; // loop around to 0 when reaching the end
  setTimeout(changeImages, time);
}

function prevImage() {
  i = (i - 1 + image.length) % image.length; // loop around to end when going backwards
  document.getElementById("slide").src = image[i];
}

function nextImage() {
  i = (i + 1) % image.length; // loop around to 0 when reaching the end
  document.getElementById("slide").src = image[i];
}

window.onload = changeImages;

// Add event listeners for prev and next buttons
document.getElementById("prev-btn").addEventListener("click", prevImage);
document.getElementById("next-btn").addEventListener("click", nextImage);