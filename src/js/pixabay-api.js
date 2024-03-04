import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


const loaderEl = document.querySelector('.loader');



export function getImages(query) {

  const options = {
    base: 'https://pixabay.com/api/',
    key: '42653068-ca30bcafd67c2a07aae2cb182',
    q: '',
    image_type: 'photo',
    oriental: 'horizontal',
    safesearch: 'true',
  };

  options.q = query;
  const params = new URLSearchParams(options);

  loaderEl.style.display = 'block';

  const LINK = `${options.base}?${params}`;
  return fetch(LINK)
    .then(res => {
      if (!res.ok) {
        throw new Error('Image error');
      }
      return res.json();
    })
    .then(data => {
      loaderEl.style.display = 'none';
      if (data.hits.length === 0) {
        iziToast.error({
          timeout: 1500,
          position: 'bottomCenter',
          message:
            'There are no images matching your search query. Please, enter something else!',
        });
      }
      return data;
    })
    .catch(error => {
      console.log('Error fetching data!', error);
    });
}
