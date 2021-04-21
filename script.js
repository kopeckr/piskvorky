'use strict';
console.log('funguju');

let naTahu = 'kolecko';

const tah = (event) => {
  if (naTahu === 'kolecko') {
    event.target.classList.add('board__field––circle');
    naTahu = 'krizek';
  } else {
    event.target.classList.add('board__field––cross');
    naTahu = 'kolecko';
  }
};

let btnElm = document.querySelectorAll('#pole');
for (let i = 0; i < btnElm.length; i += 1) {
  btnElm[i].addEventListener('click', tah);
}
