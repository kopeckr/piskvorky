'use strict';
console.log('funguju');

let naTahu = 'kolecko';

// const btnElm = document.querySelectorAll('#pole');

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

// const btnElm2 = document.querySelectorAll('#pole');
// for (let i = 0; i < btnElm2.length; i += 2) {
//   btnElm2[i].addEventListener('click', vyberKrizek);
// }
