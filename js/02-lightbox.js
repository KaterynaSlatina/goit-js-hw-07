import { galleryItems } from './gallery-items.js';
// Change code below this line
const container = document.querySelector('.gallery');
container.insertAdjacentHTML('afterbegin', createMarkup(galleryItems));



function createMarkup(arr) {

    return arr.map(({ preview, original, description }) =>
        `<li class = "gallery__item">
    <a class = "gallery__link" href="${original}">
        <img class = "gallery__image" src="${preview}" data-source= "${original}" alt="${description}">
    </a>
    </li>`).join('');
}

const lightbox = new SimpleLightbox('.gallery a', { captionPosition: 'bottom', captionsData: 'alt', captionDelay: '250' });


console.log(galleryItems);
