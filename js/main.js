import galleryItems from './app.js'; //2) імпорт елментів
console.log(galleryItems);

const refs = {
    //3) ссилки на елемент
    galleryListRef: document.querySelector('.js-gallery'),
    backdropRef: document.querySelector('.js-lightbox'),
    lightboxOverlay: document.querySelector('.lightbox__overlay'),
    modal: document.querySelector('.lightbox__content'),
    lightboxImg: document.querySelector('.lightbox__image'),
    btnModalClose: document.querySelector('[data-action="close-lightbox"]'),
};

function createGallery(gallery) {
    return gallery
        .map(({ preview, original, description }, index) => {
            return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="https://cdn.pixabay.com/photo/2019/05/14/16/43/flower-4202825_1280.jpg"
  >
    <img
      class="gallery__image"
      src="https://cdn.pixabay.com/photo/2019/05/14/16/43/flower-4202825_1280.jpg"
      data-source="https://cdn.pixabay.com/photo/2019/05/14/16/43/flower-4202825_1280.jpg"
      alt="Tulips"
    />
  </a>
</li>`;
        })
        .join('');
}

const imgGallery = createGallery(galleryItems); 
refs.galleryListRef.insertAdjacentHTML('beforeend', imgGallery);


refs.galleryListRef.addEventListener('click', onClickGalleryItem);
refs.btnModalClose.addEventListener('click', onCloseButtonClick);
