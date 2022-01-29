let sample = "The morning had dawned clear and cold, with a crispness that hinted at the end of summer. They set forth at daybreak to see a man beheaded, twenty in all, and Bran rode among them, nervous with excitement. This was the first time he had been deemed old enough to go with his lord father and his brothers to see the king's justice done. It was the ninth year of summer, and the seventh of Bran's life."
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
