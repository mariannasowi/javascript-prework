function getMoveName(arg1) {
  if (arg1 == 1) {
    return 'kamień';
  } else if (arg1 == 2) {
    return 'papier';
  } else if (arg1 == 3) {
    return 'nożyce';
  } else {
    return 'nieznany ruch';
  }
}

function playGame (playerInput){
  clearMessages();
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let argComputerMove = getMoveName(randomNumber);
  //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
  let argPlayerMove = getMoveName(playerInput);

  printMessage('Twój ruch to: ' + argPlayerMove);
  printMessage('Komputera ruch to: ' + argComputerMove);

  const p1 = (argComputerMove == 'kamień' && argPlayerMove == 'papier');
  const p2 = (argComputerMove == 'papier' && argPlayerMove == 'nożyce');
  const p3 = (argComputerMove == 'nożyce' && argPlayerMove == 'kamień');

  const r1 = (argComputerMove == 'kamień' && argPlayerMove == 'kamień');
  const r2 = (argComputerMove == 'papier' && argPlayerMove == 'papier');
  const r3 = (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce');

  const n1 = (argComputerMove == 'kamień' && argPlayerMove == '0');
  const n2 = (argComputerMove == 'nożyce' && argPlayerMove == '0');
  const n3 = (argComputerMove == 'papier' && argPlayerMove == '0');

  if(p1 || p2 || p3){
    printMessage('Ty wygrywasz!');
  } else if (r1 || r2 || r3){
    printMessage('Remis!');
  } else if (n1 || n2 || n3) {
    printMessage('Przegrywasz!')
  } else {
    printMessage('Nieznany ruch!');
  }
}

let playRockButton = document.getElementById ("play-rock");
playRockButton.addEventListener('click', function(){
  playGame('1');
});

let playPaperButton = document.getElementById ("play-paper");
playPaperButton.addEventListener('click', function(){
  playGame('2');
});

let playScissorsButton = document.getElementById ("play-scissors");
playScissorsButton.addEventListener('click', function(){
  playGame('3');
});
