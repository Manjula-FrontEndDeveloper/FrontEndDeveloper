// let myRandomNum=(parseInt(Math.random()*10+1));

// const mySubmit=document.querySelector('#subt')
// const myGuessfld=document.querySelector('.guessField')
// const myGuess=document.querySelector('.guesses')
// const myLastResult=document.querySelector('.lastResult')
// const myResultP=document.querySelector('.resultParas')
// const mylowHi=document.querySelector('.lowOrHi')


// const myPar=document.createElement('p')

// let preGuess=[]
// let numGuess=1

// let playGame=true

// if(playGame){
//     mySubmit.addEventListener('click', function(e){
//         e.preventDefault()
//        const guessVal=parseInt(myGuessfld.value)
//        console.log(guessVal);       
//        validateGuess(guessVal)
//     })
// }

// function validateGuess(guessVal){
//     if(guessVal<1 || guessVal>100 || isNaN(guessVal)){
//         displayMess(`Please enter valued number`)
// //alert('Please enter valued number')
//     }else{
//         preGuess.push(guessVal)
//         if(guessVal === 11)   {
//             displayGuess(guessVal)
//             displayMess(`Game over, random number was ${myRandomNum}`)
//             endGame()
//         }else{
//             displayGuess(guessVal)
//             checkGuess(guessVal)            
//         }
//     }

// }

// function checkGuess(guessVal){
//     if(guessVal === myRandomNum){
//         displayMess(`Yes you guessed it right`)  
// endGame()
//     }else if(guessVal < myRandomNum){
//         displayMess(`Your guessed value is too low`)  
//     }else if(guessVal > myRandomNum){
//         displayMess(`Your guessed value is too high`)  
//     }

// }

// function displayGuess(guessVal){
//     myGuessfld.value=''
//     myGuess.innerHTML+= `${guessVal}   `
//     numGuess++
//     myLastResult.innerHTML=`${11-numGuess}`

// }

// function displayMess(message){
//     mylowHi.innerHTML=`<h2>${message}</h2>`
// }

// function endGame(){
//  myGuessfld.value=''
//  myGuessfld.setAttribute('disabled', '')
//  myPar.classList.add('button')
//  myPar.innerHTML=`<h3 id='newGame'>Start new game</h3>`
//  myResultP.appendChild(myPar)
// playGame=false
// newGame()

// }

// function newGame(){
//     const myNewGame=document.querySelector('#newGame')
//     myNewGame.addEventListener('click', function(e){
//         myRandomNum=(parseInt(Math.random()*10+1));
//         preGuess=[];
//         numGuess=1;
//         myGuess.innerHTML='';
//          myLastResult.innerHTML=`${11-numGuess}`;
//          myGuessfld.removeAttribute('disabled');
//          myResultP.removeChild(myPar)
//          playGame=true
//     })
    
// }



//------------------------------------

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}



