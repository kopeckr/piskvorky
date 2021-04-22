'use strict';
console.log('funguju');

let naTahu = 'kolecko';

let hraje = document.querySelector('.kolecko');

const tah = (event) => {
  if (naTahu === 'kolecko') {
    event.target.classList.add('policko__kolecko');
    naTahu = 'krizek';
    hraje.src = 'img/cross.svg';
  } else {
    event.target.classList.add('policko__krizek');
    naTahu = 'kolecko';
    hraje.src = 'img/circle.svg';
  }
  event.target.removeEventListener('click', tah);
  event.target.disabled = true;
};

let btnElm = document.querySelectorAll('#policko-id');
for (let i = 0; i < btnElm.length; i += 1) {
  btnElm[i].addEventListener('click', tah);
}
