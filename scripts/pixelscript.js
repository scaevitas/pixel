let redInput = document.getElementById("red-input")
let greenInput = document.getElementById("green-input")
let blueInput = document.getElementById("blue-input")
let sampleColour = document.getElementById("samplecolour-el")
let randomButton = document.getElementById("random-el")

let zeroZero = document.getElementById("0,0")
let zeroOne = document.getElementById("0,1")
let zeroTwo = document.getElementById("0,2")
let zeroThree = document.getElementById("0,3")
let zeroFour = document.getElementById("0,4")
let zeroFive = document.getElementById("0,5")
let zeroSix = document.getElementById("0,6")
let zeroSeven = document.getElementById("0,7")

let oneZero = document.getElementById("1,0")
let oneOne = document.getElementById("1,1")
let oneTwo = document.getElementById("1,2")
let oneThree = document.getElementById("1,3")
let oneFour = document.getElementById("1,4")
let oneFive = document.getElementById("1,5")
let oneSix = document.getElementById("1,6")
let oneSeven = document.getElementById("1,7")

let twoZero = document.getElementById("2,0")
let twoOne = document.getElementById("2,1")
let twoTwo = document.getElementById("2,2")
let twoThree = document.getElementById("2,3")
let twoFour = document.getElementById("2,4")
let twoFive = document.getElementById("2,5")
let twoSix = document.getElementById("2,6")
let twoSeven = document.getElementById("2,7")

let threeZero = document.getElementById("3,0")
let threeOne = document.getElementById("3,1")
let threeTwo = document.getElementById("3,2")
let threeThree = document.getElementById("3,3")
let threeFour = document.getElementById("3,4")
let threeFive = document.getElementById("3,5")
let threeSix = document.getElementById("3,6")
let threeSeven = document.getElementById("3,7")

let fourZero = document.getElementById("4,0")
let fourOne = document.getElementById("4,1")
let fourTwo = document.getElementById("4,2")
let fourThree = document.getElementById("4,3")
let fourFour = document.getElementById("4,4")
let fourFive = document.getElementById("4,5")
let fourSix = document.getElementById("4,6")
let fourSeven = document.getElementById("4,7")

let fiveZero = document.getElementById("5,0")
let fiveOne = document.getElementById("5,1")
let fiveTwo = document.getElementById("5,2")
let fiveThree = document.getElementById("5,3")
let fiveFour = document.getElementById("5,4")
let fiveFive = document.getElementById("5,5")
let fiveSix = document.getElementById("5,6")
let fiveSeven = document.getElementById("5,7")

let sixZero = document.getElementById("6,0")
let sixOne = document.getElementById("6,1")
let sixTwo = document.getElementById("6,2")
let sixThree = document.getElementById("6,3")
let sixFour = document.getElementById("6,4")
let sixFive = document.getElementById("6,5")
let sixSix = document.getElementById("6,6")
let sixSeven = document.getElementById("6,7")

let sevenZero = document.getElementById("7,0")
let sevenOne = document.getElementById("7,1")
let sevenTwo = document.getElementById("7,2")
let sevenThree = document.getElementById("7,3")
let sevenFour = document.getElementById("7,4")
let sevenFive = document.getElementById("7,5")
let sevenSix = document.getElementById("7,6")
let sevenSeven = document.getElementById("7,7")

function getColor(r, g, b){
  return `rgba(${r}, ${g}, ${b}, 1)`
}
function sample(){
  sampleColour.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
}

randomButton.addEventListener("click", function(){
  redInput.value = Math.floor(Math.random()*255)+1
  greenInput.value = Math.floor(Math.random()*255)+1
  blueInput.value = Math.floor(Math.random()*255)+1
  sample()
})


redInput.addEventListener("input", function(){
  sample()
})
greenInput.addEventListener("input", function(){
  sample()
})
blueInput.addEventListener("input", function(){
  sample()
})

zeroZero.addEventListener("click", function(){
  zeroZero.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
zeroOne.addEventListener("click", function(){
  zeroOne.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
zeroTwo.addEventListener("click", function(){
  zeroTwo.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
zeroThree.addEventListener("click", function(){
  zeroThree.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
zeroFour.addEventListener("click", function(){
  zeroFour.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
zeroFive.addEventListener("click", function(){
  zeroFive.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
zeroSix.addEventListener("click", function(){
  zeroSix.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
zeroSeven.addEventListener("click", function(){
  zeroSeven.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})

oneZero.addEventListener("click", function(){
  oneZero.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
oneOne.addEventListener("click", function(){
  oneOne.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
oneTwo.addEventListener("click", function(){
  oneTwo.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
oneThree.addEventListener("click", function(){
  oneThree.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
oneFour.addEventListener("click", function(){
  oneFour.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
oneFive.addEventListener("click", function(){
  oneFive.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
oneSix.addEventListener("click", function(){
  oneSix.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
oneSeven.addEventListener("click", function(){
  oneSeven.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})

twoZero.addEventListener("click", function(){
  twoZero.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
twoOne.addEventListener("click", function(){
  twoOne.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
twoTwo.addEventListener("click", function(){
  twoTwo.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
twoThree.addEventListener("click", function(){
  twoThree.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
twoFour.addEventListener("click", function(){
  twoFour.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
twoFive.addEventListener("click", function(){
  twoFive.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
twoSix.addEventListener("click", function(){
  twoSix.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
twoSeven.addEventListener("click", function(){
  twoSeven.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})

threeZero.addEventListener("click", function(){
  threeZero.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
threeOne.addEventListener("click", function(){
  threeOne.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
threeTwo.addEventListener("click", function(){
  threeTwo.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
threeThree.addEventListener("click", function(){
  threeThree.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
threeFour.addEventListener("click", function(){
  threeFour.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
threeFive.addEventListener("click", function(){
  threeFive.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
threeSix.addEventListener("click", function(){
  threeSix.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
threeSeven.addEventListener("click", function(){
  threeSeven.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})

fourZero.addEventListener("click", function(){
  fourZero.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
fourOne.addEventListener("click", function(){
  fourOne.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
fourTwo.addEventListener("click", function(){
  fourTwo.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
fourThree.addEventListener("click", function(){
  fourThree.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
fourFour.addEventListener("click", function(){
  fourFour.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
fourFive.addEventListener("click", function(){
  fourFive.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
fourSix.addEventListener("click", function(){
  fourSix.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
fourSeven.addEventListener("click", function(){
  fourSeven.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})

fiveZero.addEventListener("click", function(){
  fiveZero.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
fiveOne.addEventListener("click", function(){
  fiveOne.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
fiveTwo.addEventListener("click", function(){
  fiveTwo.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
fiveThree.addEventListener("click", function(){
  fiveThree.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
fiveFour.addEventListener("click", function(){
  fiveFour.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
fiveFive.addEventListener("click", function(){
  fiveFive.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
fiveSix.addEventListener("click", function(){
  fiveSix.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
fiveSeven.addEventListener("click", function(){
  fiveSeven.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})

sixZero.addEventListener("click", function(){
  sixZero.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
sixOne.addEventListener("click", function(){
  sixOne.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
sixTwo.addEventListener("click", function(){
  sixTwo.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
sixThree.addEventListener("click", function(){
  sixThree.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
sixFour.addEventListener("click", function(){
  sixFour.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
sixFive.addEventListener("click", function(){
  sixFive.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
sixSix.addEventListener("click", function(){
  sixSix.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
sixSeven.addEventListener("click", function(){
  sixSeven.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})

sevenZero.addEventListener("click", function(){
  sevenZero.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
sevenOne.addEventListener("click", function(){
  sevenOne.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
sevenTwo.addEventListener("click", function(){
  sevenTwo.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
sevenThree.addEventListener("click", function(){
  sevenThree.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
sevenFour.addEventListener("click", function(){
  sevenFour.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
sevenFive.addEventListener("click", function(){
  sevenFive.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
sevenSix.addEventListener("click", function(){
  sevenSix.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
sevenSeven.addEventListener("click", function(){
  sevenSeven.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
})
