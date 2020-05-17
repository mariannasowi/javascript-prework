let displayResult = Math.floor(Math.random() * 3 + 1);

console.log('moves:', argComputerMove, argPlayerMove);

let argComputerMove = getMoveName(randomNumber);

if(randomNumber == '1'){
  argComputerMove = 'kamień';
}
printMessage('Mój ruch to: ' + argComputerMove);

if(playerInput == '2'){
  argPlayerMove = 'papier';
}
printMessage('Twój ruch to: ' + argComputerMove);

if(playerInput == '3'){
  argPlayerMove = 'nożyce';
}
printMessage('Twój ruch to: ' + argComputerMove);


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);

if(playerInput == '1'){
  argPlayerMove = 'kamień';
}
printMessage('Twój ruch to: ' + argComputerMove);

if(playerInput == '2'){
  argPlayerMove = 'papier';
}
printMessage('Twój ruch to: ' + argComputerMove);

if(playerInput == '3'){
  argPlayerMove = 'nożyce';
}
printMessage('Twój ruch to: ' + argComputerMove);


const p1 = (argComputerMove == 'kamień' && argPlayerMove == 'papier');
const p2 = (argComputerMove == 'papier' && argPlayerMove == 'nożyce');
const p3 = (argComputerMove == 'nożyce' && argPlayerMove == 'kamień');

const r1 = (argComputerMove == 'kamień' && argPlayerMove == 'kamień');
const r2 = (argComputerMove == 'papier' && argPlayerMove == 'papier');
const r3 = (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce');

const n1 = (argComputerMove == 'kamień' && argPlayerMove == '0')
const n2 = (argComputerMove == 'nożyce' && argPlayerMove == '0')
const n3 = (argComputerMove == 'papier' && argPlayerMove == '0')

if (p1 || p2 || p3){
  printMessage('Ty wygrywasz!');
} else if (r1 || r2 || r3){
  printMessage('Remis!');
} else if (n1 || n2 || n3) {
  printMessage('Przegrywasz!')
} else {
  printMessage('Nieznany ruch!');
}

function displayResult (argComputerMove, argPlayerMove){
  if (argComputerMove, argPlayerMove == 2){
    return 'papier';
  } else if (argComputerMove, argPlayerMove == 3){
    return 'nożyce';
  }
}
