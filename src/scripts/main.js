'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.tagName === 'IMG') {
    const href = e.target.parentElement.href;

    largeImg.src = href;
  }

  if (e.target.tagName === 'A') {
    const href = e.target.href;

    largeImg.src = href;
  }
});
