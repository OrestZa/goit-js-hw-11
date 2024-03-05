import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


import { getImages } from './js/pixabay-api';
import { searchImage } from './js/render-functions';

const formEl = document.querySelector('.search');
const galleryEl = document.querySelector('.gallery');

formEl.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  
  let query = '';

    const lightbox = new SimpleLightbox('.gallery a', {
      nav: true,
      captions: true,
      captionsData: 'alt',
      captionDelay: 150,
    });

  query = formEl.elements.query.value.trim();
    galleryEl.innerHTML = '';

    getImages(query)
      .then(data => {
        const markup = searchImage(data);
        galleryEl.insertAdjacentHTML('beforeend', markup);
        lightbox.refresh();
      })
      .catch(error => {
        console.log('Error:', error);
      });
    formEl.reset();
}