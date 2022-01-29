let sample = `There was music from my neighbour’s house through the summer
nights. In his blue gardens men and girls came and went like moths
among the whisperings and the champagne and the stars. At high tide
in the afternoon I watched his guests diving from the tower of his raft or
taking the sun on the hot sand of his beach while his two motor-boats
slit the waters, drawing aquaplanes over cataracts of foam.`
let empty = ""

let textArea = document.getElementById("textarea-el")
let userInput = document.getElementById("textareainput-el")

let testButton = document.getElementById("testbutton-el")
let submitButton = document.getElementById("submitbutton-el")
let resetButton = document.getElementById("resetbutton-el")






testButton.addEventListener("click", function(){
    textArea.value = sample
    console.log("Test Test")
})
submitButton.addEventListener("click", function(){

    console.log("Submit Test")
})
resetButton.addEventListener("click", function(){
    console.log("Reset Test")
    textArea.value = ''
})
