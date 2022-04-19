const buttonX = document.querySelector('#buttonX');
const buttonO = document.querySelector('#buttonO');
const buttonPad = document.querySelectorAll('.gameBox')
const winCombinations = ["123", "456", "789", "147", "258", "369", "159", "357"];

let player
let playerShots = []

function checkWin(shots) {
  let formatString = shots.sort().join('')
  if (formatString.length === 3) {
    for (combination of winCombinations) {
      if (formatString.includes(combination)) {
        console.log("win")
      }
    }
  } else {
    console.log("no win") // i am here 
  }
}

buttonX.addEventListener('click', (e) => {
  buttonO.setAttribute('disabled', 'disabled');
  player = 'X';
})

buttonO.addEventListener('click', (e) => {
  buttonX.setAttribute('disabled', 'disabled');
  player = 'O';
})

buttonPad.forEach(button => {
  button.addEventListener('click', (e) => {
    playerShots.push(e.target.getAttribute('value'))
    if (playerShots.length >= 3) {
      checkWin(playerShots)
    }
  })
})
