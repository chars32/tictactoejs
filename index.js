const buttonX = document.querySelector('#buttonX');
const buttonO = document.querySelector('#buttonO');
const buttonPad = document.querySelectorAll('.gameBoxPad')
const winCombinations = ["123", "456", "789", "147", "258", "369", "159", "357"];

let player
let playerShots = []

// Functions
function setPlayer(choose) {
  player = choose
}

function usePlayer() {
  return player
}

function checkCombination(winCombinations, formatString) {
  for (combination of winCombinations) {
    if (formatString.includes(combination)) {
      console.log("win")
    }
  }
}

function gameLogic(shots) {
  let formatString = shots.sort().join('')
  // console.log(formatString)
  if (formatString.length === 3) {
    checkCombination(winCombinations, formatString)
  } else {
    let diference = parseInt(formatString[1]) - parseInt(formatString[0])
    let secondNumber = parseInt(formatString[0]) + diference
    let thirdNumber = parseInt(secondNumber) + diference

    let differenceString = formatString[0] + secondNumber.toString() + thirdNumber.toString()

    checkCombination(winCombinations, differenceString)
  }
}

// DOM events
buttonX.addEventListener('click', (e) => {
  buttonO.setAttribute('disabled', 'disabled');
  player = 'X';
  setPlayer('X')
})

buttonO.addEventListener('click', (e) => {
  buttonX.setAttribute('disabled', 'disabled');
  player = 'O';
  setPlayer('O')
})

buttonPad.forEach(button => {
  button.addEventListener('click', (e) => {
    console.log(usePlayer())
    e.target.innerText = usePlayer()
    playerShots.push(e.target.getAttribute('value'))
    if (playerShots.length >= 3) {
      gameLogic(playerShots)
    }
  })
})

console.log(buttonPad)