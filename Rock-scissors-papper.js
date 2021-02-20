const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'papper' || userInput === 'scissors') {
      return userInput;
    } else {
      console.log('!error!');
    }
};
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'papper';
      case 2:
        return 'scissors';
    }
  };
  
    const determineWinner = (userChoice, computerChoice) => {
      if (userChoice === computerChoice) {
        return 'tie';
      }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'paper') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
    if (userChoice === 'papper') {
      if (computerChoice === 'rock') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
    };
  
  
    const playGame = () => {
      const userChoice = getUserChoice('papper');
      const computerChoice = getComputerChoice();
      console.log('You threw: ' + userChoice);
      console.log('The computer threw:' + computerChoice);
      console.log(determineWinner(userChoice, computerChoice));
    };
  
    playGame();