'use strict';
console.log('funguju');

let naTahu = 'kolecko';

let hraje = document.querySelector('.kolecko');

const tah = (event) => {
  if (naTahu === 'kolecko') {
    event.target.classList.add('board__field––circle');
    naTahu = 'krizek';
    hraje.src = 'img/cross.svg';
  } else {
    event.target.classList.add('board__field––cross');
    naTahu = 'kolecko';
    hraje.src = 'img/circle.svg';
  }
};

let btnElm = document.querySelectorAll('#pole');
for (let i = 0; i < btnElm.length; i += 1) {
  btnElm[i].addEventListener('click', tah);
}
