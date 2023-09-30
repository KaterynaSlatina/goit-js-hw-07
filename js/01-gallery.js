import { galleryItems } from './gallery-items.js';
// Change code below this line
const container = document.querySelector('.gallery');
container.insertAdjacentHTML('afterbegin', createMarkup(galleryItems));
container.addEventListener('click', handlerClick);


function createMarkup(arr) {

    return arr.map(({ preview, original, description }) =>
        `<li class = "gallery__item">
    <a class = "gallery__link" href="${original}">
        <img class = "gallery__image" src="${preview}" data-source= "${original}" alt="${description}">
    </a>
    </li>`).join('');
}

   


function handlerClick(evt) {
    evt.preventDefault();
    // console.log(evt);

    if (!evt.target.classList.contains('.gallery__image')) {
        return
    } else {
     const instance = basicLightbox.create(`
    <img src="" alt="" width = 1000 height = auto>`,
        
     );
        instance.show();
    }


 }
