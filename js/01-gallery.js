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

   const instance = basicLightbox.create(`
    <img src="" alt="" width = 1000 height = auto>`,
       {
           onShow: () => window.addEventListener('keydown', onEscape),
           onClose: () => window.addEventListener('keydown', onEscape),
       }
       
     );
       


function handlerClick(evt) {
    evt.preventDefault();
    // console.log(evt);

    const dataSource = evt.target.dataset.source;
    if (!dataSource)
        return;

    instance.element().querySelector('img').src = dataSource;
    
    instance.show();
    document.addEventListener('keydown', onEscape);   
 }


function onEscape(evt) {
    if (evt.code !== "Escape")
        return
    
    instance.close();

    document.removeEventListener('keydown', onEscape);
 }

