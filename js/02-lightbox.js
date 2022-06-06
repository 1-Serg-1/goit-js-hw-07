import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

const galleryEl = galleryItems.map(({ preview, original, description }) => {
    const galleryItemEl = document.createElement('a');
    galleryItemEl.classList.add('gallery__item');
    galleryItemEl.href = `${original}`;
    const galleryImgEl = document.createElement('img');
    galleryImgEl.classList.add('gallery__image');
    galleryImgEl.src = `${preview}`;
    galleryImgEl.alt = `${description}`;
    
    galleryItemEl.appendChild(galleryImgEl);

    return galleryItemEl;
});

galleryList.append(...galleryEl);

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt',
    captionDelay: 250 });

