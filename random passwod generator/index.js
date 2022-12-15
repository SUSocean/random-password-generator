const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let passOne = document.getElementById("passOne")
let passTwo = document.getElementById("passTwo")

function getRandomPas() {
    passOne.textContent = ""
    passTwo.textContent = ""
    for (i = 0; i < 15; i++) {
        randomLetterNumberOne = Math.floor(Math.random() * characters.length)
        randomLetterNumberTwo = Math.floor(Math.random() * characters.length)
        passOne.textContent += characters[randomLetterNumberOne]
        passTwo.textContent += characters[randomLetterNumberTwo]
    }
}


var passOneClick = document.getElementById("passOne")

passOneClick.onclick = function () {
    navigator.clipboard.writeText(passOneClick.innerHTML)
    alert("Copied")
}

var passTwoClick = document.getElementById("passTwo")

passTwoClick.onclick = function () {
    navigator.clipboard.writeText(passTwoClick.innerHTML)
    alert("Copied")
}