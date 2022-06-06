import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

const galleryEl = galleryItems.map(({ preview, original, description }) => {
    const galleryItemEl = document.createElement('div');
    galleryItemEl.classList.add('gallery__item');
    const galleryLinkEl = document.createElement('a');
    galleryLinkEl.classList.add('gallery__link');
    galleryLinkEl.href = `${original}`;
    const galleryImgEl = document.createElement('img');
    galleryImgEl.classList.add('gallery__image');
    galleryImgEl.src = `${preview}`;
    galleryImgEl.setAttribute('data-source', `${original}`);
    galleryImgEl.alt = `${description}`;

    galleryLinkEl.appendChild(galleryImgEl);
    galleryItemEl.appendChild(galleryLinkEl);

    return galleryItemEl;
});

galleryList.append(...galleryEl);

galleryList.addEventListener('click', onImg);

function onImg(event) {
    window.addEventListener('keydown', modalClose);
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    const modal = basicLightbox.create(
        `<img src="${event.target.dataset.source}" width="800" height="600">
`);
    
    modal.show();

function modalClose(event) {
    if (event.code === "Escape") {
        window.removeEventListener('keydown', modalClose);
        modal.close();
        return;
        // После n-кол-ва кликов мышкой и затем выход через Esc срабатывает такое же кол-во событий по Esc (не разобрался почему)
    };
    
};
};


