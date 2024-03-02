const BASE_API = 'https://pixabay.com/api/';
const KEY = '42653068-ca30bcafd67c2a07aae2cb182';


function getImages(query) {
    const LINK = `${BASE_API}?key=${KEY}&q=${query}`;
  return fetch(LINK)
    .then(res => {
      if (!res.ok) {
        throw new Error('Image error');
      }
      return res.json();
    })
}

getImages().then(data => console.log(data));
