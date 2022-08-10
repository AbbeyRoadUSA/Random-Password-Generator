const characters = [
    "A", "B", "C", "D", "E", "F", "G", "H",
    "I", "J", "K", "L", "M", "N", "O", "P",
    "Q", "R", "S", "T", "U", "V", "W", "X",
    "Y", "Z", "a", "b", "c", "d", "e", "f",
    "g", "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u", "v",
    "w", "x", "y", "z", "0", "1", "2", "3",
    "4", "5", "6", "7", "8", "9", "~", "`",
    "!", "@", "#", "$", "%", "^", "&", "*",
    "(", ")", "_", "-", "+", "=", "{", "[",
    "}", "]", ",", "|", ":", ";", "<", ">",
    ".", "?", "/"
];

let generateButton = document.getElementById("btn");
let resetButton = document.getElementById("reset");
let passwordOne = document.getElementById("password-one-text");
let passwordTwo = document.getElementById("password-two-text");

function getRandomPassword() {
    passwordOne.textContent = ""
    passwordTwo.textContent = ""

    for (let passwordLength = 0; passwordLength < 15; passwordLength++) {
        let randIndex = Math.floor(Math.random() * characters.length)
        passwordOne.textContent += characters[randIndex]
    }

    for (let passwordLength = 0; passwordLength < 15; passwordLength++) {
        let randIndex = Math.floor(Math.random() * characters.length)
        passwordTwo.textContent += characters[randIndex]
    }
};

function resetGenerator() {
    passwordOne.textContent = "";
    passwordTwo.textContent = "";
}