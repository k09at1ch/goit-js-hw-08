import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const style=document.querySelector("gallery")
const galleryMarkup = galleryItems
  .map(
    item =>
      `<li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
          <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
        </a>
      </li>`
  )
  .join('');

const galleryContainer = document.querySelector('.gallery');
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery__link', {
    captions: true,
    captionsDelay: 250,
  });
  
console.log(galleryItems);
