// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryImg = document.querySelector('.gallery');

const markup = galleryImg.map(
  ({ preview, original, description }) =>
    '<div class = "gallery_item">< a class = "gallery_link" href = "$(original)" ><img class="gallery_image" src="$(preview)" data-source="$(description)" /></ ></div > '
);

// console.log(galleryItems);
