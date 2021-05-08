'use strict';

let naTahu = 'kolecko';

let hraje = document.querySelector('.kolecko');

document.querySelectorAll('.policko').forEach((field) => {
  field.addEventListener('click', () => {
    if (naTahu === 'kolecko') {
      field.classList.add('policko__kolecko');
      naTahu = 'krizek';
      hraje.src = 'img/cross.svg';
    } else {
      field.classList.add('policko__krizek');
      naTahu = 'kolecko';
      hraje.src = 'img/circle.svg';
    }

    const pozice = getPosition(field);
    const policko = getField(pozice.row, pozice.column);

    if (isWinningMove(policko) === true) {
      setTimeout(function () {
        let result;
        if (getSymbol(policko) === 'kolecko') {
          result = confirm('Vyhrálo kolečko. Spustit novou hru?');
          if (result === true) {
            location.reload();
          }
        } else {
          result = confirm('Vyhrál křížek. Spustit novou hru?');
          if (result === true) {
            location.reload();
          }
        }
      }, 400);
    }
  });
});

//================ Připravené funkce ===================

const getSymbol = (field) => {
  if (field.classList.contains('policko__krizek')) {
    return 'krizek';
  } else if (field.classList.contains('policko__kolecko')) {
    return 'kolecko';
  }
};

const boardSize = 10;
const fields = document.querySelectorAll('.policko');

const getField = (row, column) => fields[row * boardSize + column];

const getPosition = (field) => {
  let fieldIndex = 0;
  while (fieldIndex < fields.length && field !== fields[fieldIndex]) {
    fieldIndex++;
  }
  return {
    row: Math.floor(fieldIndex / boardSize),
    column: fieldIndex % boardSize,
  };
};

//pravidla pro výhru
const symbolsToWin = 5;
const isWinningMove = (field) => {
  const origin = getPosition(field);
  const symbol = getSymbol(field);

  let i;
  let c;

  let inRow = 1; // Jednička pro právě vybrané políčko
  let inDiag = 1;
  let inDiag2 = 1;

  //Diagonálně doleva nahoru
  i = origin.row;
  c = origin.column;
  while (i > 0 && c > 0 && symbol === getSymbol(getField(i - 1, c - 1))) {
    inDiag++;
    i--;
    c--;
  }
  if (inDiag >= symbolsToWin) {
    return true;
  }

  //Diagonálně doprava nahoru
  c = origin.column;
  i = origin.row;
  while (
    i > 0 &&
    c < boardSize - 1 &&
    symbol === getSymbol(getField(i - 1, c + 1))
  ) {
    inDiag2++;
    i--;
    c++;
  }
  if (inDiag2 >= symbolsToWin) {
    return true;
  }

  //Diagonálně doleva dolu
  i = origin.row;
  c = origin.column;
  while (
    i < boardSize - 1 &&
    c > 0 &&
    symbol === getSymbol(getField(i + 1, c - 1))
  ) {
    inDiag2++;
    i++;
    c--;
  }
  if (inDiag2 >= symbolsToWin) {
    return true;
  }

  //Diagonálně doprava dolu
  i = origin.row;
  c = origin.column;
  while (
    i < boardSize - 1 &&
    c < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, c + 1))
  ) {
    inDiag++;
    i++;
    c++;
  }
  if (inDiag >= symbolsToWin) {
    return true;
  }

  // Koukni doleva
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++;
    i--;
  }

  // Koukni doprava
  i = origin.column;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }
  if (inRow >= symbolsToWin) {
    return true;
  }

  let inColumn = 1;
  // Koukni nahoru
  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++;
    i--;
  }

  // Koukni dolu
  i = origin.row;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn++;
    i++;
  }
  if (inColumn >= symbolsToWin) {
    return true;
  }
  return false;
};
