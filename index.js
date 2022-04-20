const buttonX = document.querySelector('#buttonX');
const buttonO = document.querySelector('#buttonO');
const buttonPad = document.querySelectorAll('.gameBox')
const winCombinations = ["123", "456", "789", "147", "258", "369", "159", "357"];
// const winCombinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]

let player
let playerShots = []

function checkCombination(winCombinations, formatString) {
  for (combination of winCombinations) {
    if (formatString.includes(combination)) {
      console.log("win")
    }
  }
}

function gameLogic(shots) {
  let formatString = shots.sort().join('')
  console.log(formatString)
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
      gameLogic(playerShots)
    }
  })
})
