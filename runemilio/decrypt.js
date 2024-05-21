// Import CryptoJS
const CryptoJS = require('crypto-js');

// Set up the key and IV
const key = CryptoJS.enc.Utf8.parse("d27c2505c2bffebcbbb708d153c671f7d0787d1df81aa44171d1798fc3f2c115");
const iv = CryptoJS.enc.Utf8.parse("7a6f9789dfbfc1bc4e83a675a7f39728");

// Set up the encrypted message
const encryptedMessage = "tPKHcoqpmVcL76AIwGknN0UObUsRP+5vmRZW7j/m8H0MnF2B5eAjK1ff9FDGXLYieh9P0WgWzEMMMRzH8bx3iulG3PpkyiSZ9GTBuAwCycU=";

// Decrypt the message
const decrypted = CryptoJS.AES.decrypt(encryptedMessage, key, {
  iv: iv,
  mode: CryptoJS.mode.CBC,
  padding: CryptoJS.pad.Pkcs7
});

// Convert the decrypted message to a string
const decryptedMessage = decrypted.toString(CryptoJS.enc.Utf8);

console.log("Decrypted message:", decryptedMessage);