var min = 0
var max = 10000
var tries = 0

// rNum is the computer generated random number!
rNum = Math.floor(Math.random() * max + 1)
//document.getElementsByTagName('title')[0].innerText = rNum

//range is the span found on the html page
var range = document.getElementById('range')
// sets the text inside
range.innerText = "Please guess a number."

var userInput = document.getElementById('userInput')
userInput.focus()
userInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    submitGuess()
  }
});

var buttons = document.getElementsByClassName('container')[0].children
console.log(buttons)

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    console.log(this.innerText)
    if(this.innerText == "Del"){
      console.log(userInput.value.slice(0, -1))
      userInput.value = userInput.value.slice(0, -1)
    }else if(this.innerText == "Enter"){
      submitGuess()
    }else{
      userInput.value += this.innerText
    }


  })
}

function submitGuess(){

  var myGuess = userInput.value
  if (myGuess > rNum) {
    if (myGuess > max) {
      alert("That guess is too high, dummy")
    } else {
      max = myGuess
    }
    //range.innerText = `Too high`
  } else if (myGuess < rNum) {
    if (myGuess < min) {
      alert("That guess is too low, idiot")
    } else {
      min = myGuess
    }
    //range.value = `${min} - ${max}`
  } else if (myGuess == rNum) {
    alert("You got the right number, for once")
    location.reload();
  }
  tries++
  range.innerText = `${min} - ${max}`
  console.log(`${i}: ${min} - ${max}`)
  document.getElementById('Tries').innerText = `Tries: ${tries}`
  userInput.value = ''
}