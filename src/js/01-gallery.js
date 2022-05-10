// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const refs = {
  gallery: document.querySelector('.gallery'),
};
function galleryRender(galleryItems) {
  refs.gallery.innerHTML = galleryItems.reduce(
    (acc, { preview, original, description } = galleryItems) =>
      acc +
      `<a class="gallery__item" href=${original}>
<img class="gallery__image" src="${preview}" alt=${description}/>
</a>`,
    '',
  );
}
galleryRender(galleryItems);
const galleryRide = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// console.log(galleryItems);
