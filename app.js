"use strict";

const copyBTn = document.querySelector(".copy-sign");
const passwordBox = document.querySelector(".password-bx");
const generateBtn = document.querySelector(".generate-btn");
const allCharacters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()|/?><{[]}";
// PASSWORD GENERATOR
function passwordGen() {
  let passWord = "";
  while (12 > passWord.length) {
    passWord += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }
  console.log(passWord);
  passwordBox.value = passWord;
}
// PASSWORF BUTTON

generateBtn.addEventListener("click", function () {
  passwordGen();
  passwordBox.style.fontSize = "20px";
  passwordBox.style.letterSpacing = "4px";
});
// COPY THE PASSWORD

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}
// COPY BUTTON
copyBTn.addEventListener("click", function () {
  copyPassword();
});
