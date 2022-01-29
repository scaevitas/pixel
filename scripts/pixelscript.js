let redInput = document.getElementById("red-input")
let greenInput = document.getElementById("green-input")
let blueInput = document.getElementById("blue-input")
let sampleColour = document.getElementById("samplecolour-el")
let randomButton = document.getElementById("random-el")
const hover = document.querySelector(':root');

//this part adds the pixel divs, I was too lazy to actually write them by hand
let container = document.querySelector(".grid-container")
let pixel = document.createElement("div")
pixel.setAttribute("class", "grid-box")
for (let x =0; x<8;x++){//you don't actually have to do two nested for loops, you could just do it as x<64. 
  for (let y =0; y<8;y++){//I just did the x y thing because your original code you had x y coordinates
    pixel.setAttribute("id", `${x},${y}`)
    pixel.setAttribute("onClick", `fill('${x},${y}')`) //instead of adding event listeners for every div, I made every div have an onclick function
    //because of the onclick attribute, when the div gets clicked, it calls the fill() function and gives the id of which div got clicked
    container.appendChild(pixel.cloneNode(true)) //this .cloneNode(true) is important, because it allows you to add the same element over and over again
  }
}

function getColor(r, g, b){
  return `rgb(${r}, ${g}, ${b})`
}
function sample(){
  sampleColour.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value)
  hover.style.setProperty("--currentColor",  getColor(redInput.value, greenInput.value, blueInput.value))
  //this changes the variable in the css file
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

function fill(div){ //the fill function takes in the id of the div
  const selected = document.getElementById(div) //this finds which div should be filled in
  selected.style.backgroundColor = getColor(redInput.value, greenInput.value, blueInput.value) //and this is your own code :)
}
