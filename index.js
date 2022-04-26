const buttonX = document.querySelector('#buttonX');
const buttonO = document.querySelector('#buttonO');
const buttonPad = document.querySelectorAll('.gameBoxPad')
const winCombinations = ["123", "456", "789", "147", "258", "369", "159", "357"];
const idsPads = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

let optionChosen = {}
let playerShots = []

let option = {}

// Functions
function setOptions(option) {
  if (option === 'X') {
    optionChosen = {
      player: 'X',
      computer: 'O'
    }
  } else {
    optionChosen = {
      player: 'O',
      computer: 'X'
    }
  }
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
  setOptions('X')
})

buttonO.addEventListener('click', (e) => {
  buttonX.setAttribute('disabled', 'disabled');
  setOptions('O')
})

buttonPad.forEach(button => {
  button.addEventListener('click', (e) => {
    let valuePad = e.target.getAttribute('value')
    e.target.innerText = optionChosen.player
    idsPads.splice(idsPads.indexOf(valuePad), 1)
    // pc
    const random = Math.floor(Math.random() * idsPads.length);
    for (button of buttonPad) {
      if (button.getAttribute('value') == idsPads[random]) {
        button.innerText = optionChosen.computer
        idsPads.splice(idsPads.indexOf(idsPads[random]), 1)
        break
      }
    }
    // idsPads.splice(random, 1)
    // playerShots.push(e.target.getAttribute('value'))
    // if (playerShots.length >= 3) {
    //   gameLogic(playerShots)
    // }
  })
})

// console.log(buttonPad)