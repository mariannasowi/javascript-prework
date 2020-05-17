function clearMessages playGame (arg1){
  if (arg1 == 1){
    return 'papier';
  }
  else (arg1 == 2){
    return 'papier';
  } else if (arg1 == 3){
    return 'nożyce';
  }
}

console.log('Gracz wpisał: ' + playerInput);

let arg1 = getMoveName(playerInput);

if(playerInput == '1'){
  argPlayerMove = 'kamień';
}
printMessage('Twój ruch to: ' + arg1);

if(playerInput == '2'){
  argPlayerMove = 'papier';
}
printMessage('Twój ruch to: ' + arg1);

if(playerInput == '3'){
  argPlayerMove = 'nożyce';
}
printMessage('Twój ruch to: ' + arg1);


playGame(3);

let playRockButton = document.getElementById (playRock-button);
playRockButton.addEventListener('click', clearMessages);

let playPaperButton = document.getElementById (playPaper-button);
buttonsPlayPaper.addEventListener('click', clearMessages);

let playScissorsButton = document.getElementById (playScissors-button);
buttonsPlayScissors.addEventListener('click', clearMessages);
