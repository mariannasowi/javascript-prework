let displayResult = Math.floor(Math.random() * 3 + 1);

console.log('moves:', argComputerMove, argPlayerMove);

let argComputerMove = getMoveName(randomNumber);

if(randomNumber == '1'){
  argComputerMove = 'kamień';
}
printMessage('Mój ruch to: ' + argComputerMove);

if(playerInput == '2'){
  argplayerMove = 'papier';
}
printMessage('Twój ruch to: ' + argComputerMove);

if(playerInput == '3'){
  argPlayerMove = 'nożyce';
}
printMessage('Twój ruch to: ' + argComputerMove);


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

if(playerInput == '1'){
  playerMove = 'kamień';
}
printMessage('Twój ruch to: ' + computerMove);

if(playerInput == '2'){
  playerMove = 'papier';
}
printMessage('Twój ruch to: ' + computerMove);

if(playerInput == '3'){
  playerMove = 'nożyce';
}
printMessage('Twój ruch to: ' + computerMove);


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

function displayResult (moveId){
  if (moveId == 2){
    return 'papier';
  } else if (moveId == 3){
    return 'nożyce';
  }
}
