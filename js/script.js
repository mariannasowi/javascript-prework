let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

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

let playerMove = 'nieznany ruch';

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



if/else( computerMove || 'kamień' && playerMove || 'papier'){
  printMessage('Ty wygrywasz!');
}

if/else( computerMove || 'kamień' && playerMove || 'kamień'){
  printMessage('Remis!');
}

if/else( computerMove || 'kamień' && playerMove || 'nożyce'){
  printMessage('Przegrywasz!');
}

if/else( computerMove || 'papier' && playerMove || 'kamień'){
  printMessage('Ty wygrywasz!');
}

if/else( computerMove || 'papier' && playerMove || 'papier'){
  printMessage('Remis!');
}

if/else( computerMove || 'kamień' && playerMove || 'nożyce'){
  printMessage('Przegrywasz!');
}

if/else( computerMove || 'nożyce' && playerMove || 'kamień'){
  printMessage('Przegrywasz!');
}

if/else( computerMove || 'nożyce' && playerMove || 'nożyce'){
  printMessage('Remis!');
}

if/else( computerMove || 'nożyce' && playerMove || 'papier'){
  printMessage('Ty wygrywasz!');
}

if/else( computerMove || 'kamień' && playerMove || '0'){
  printMessage('Nieznany ruch!');
}

if/else( computerMove || 'nożyce' && playerMove || '0'){
  printMessage('Nieznany ruch!');
}

if/else( computerMove || 'papier' && playerMove || '0'){
  printMessage('Nieznany ruch!');
}
