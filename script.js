'use strict';
console.log('funguju');

let naTahu = 'kolecko';

const vyberPole = (event) => {
  event.target.classList.add('board__field--circle');
};

const btnElm = document.querySelectorAll('#pole');
for (let i = 0; i < btnElm.length; i += 1) {
  btnElm[i].addEventListener('click', vyberPole);
}
