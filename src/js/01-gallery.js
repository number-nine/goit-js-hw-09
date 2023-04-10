// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
createGalleryMarkup(galleryItems, galleryContainer);
initGalleryInstance();


function createGalleryMarkup(galleryItems, galleryContainer) {
  const galleryContent = galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
          <a class="gallery__link" href="${original}">
             <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>
       </li>`
    )
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', galleryContent);
}

function initGalleryInstance() {
  new SimpleLightbox('.gallery .gallery__link', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}
