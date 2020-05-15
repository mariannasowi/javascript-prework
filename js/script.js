let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

if(randomNumber == 1){
  computerMove = 'kamień';
}
printMessage('Mój ruch to: ' + computerMove);

if(playerInput == '2'){
  playerMove = 'papier';
}
printMessage('Twój ruch to: ' + computerMove);

if(playerInput == '3'){
  playerMove = 'nożyce';
}
printMessage('Twój ruch to: ' + computerMove);


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(randomNumber);

if(playerInput == '1'){
  playerMove = 'kamień';
}
printMessage('Twój ruch to: ' + playerMove);

if(playerInput == '2'){
  playerMove = 'papier';
}
printMessage('Twój ruch to: ' + computerMove);

if(playerInput == '3'){
  playerMove = 'nożyce';
}
printMessage('Twój ruch to: ' + computerMove);


const p1 = (computerMove == 'kamień' && playerMove == 'papier');
const p2 = (computerMove == 'papier' && playerMove == 'nożyce');
const p3 = (computerMove == 'nożyce' && playerMove == 'kamień');

const r1 = (computerMove == 'kamień' && playerMove == 'kamień');
const r2 = (computerMove == 'papier' && playerMove == 'papier');
const r3 = (computerMove == 'nożyce' && playerMove == 'nożyce');

const n1 = (computerMove == 'kamień' && playerMove == '0')
const n2 = (computerMove == 'nożyce' && playerMove == '0')
const n3 = (computerMove == 'papier' && playerMove == '0')

/*if(p1 || p2 || p3){
  printMessage('Ty wygrywasz!');
} else if (r1 || r2 || r3 || n1 || n2 || n3){
  printMessage('Remis!');
  printMessage('Przegrywasz!')
} else {
  printMessage('Nieznany ruch!');
}*/

function getMoveName(MoveId){
  if(MoveId == 2){
    return 'papier';
  }

function getMoveName(MoveId){
  if(MoveId == 3){
    return 'nożyce';
  }
