const CryptoJS = require('crypto-js');

const key = CryptoJS.enc.Utf8.parse("d27c2505c2bffebcbbb708d153c671f7d0787d1df81aa44171d1798fc3f2c115");
const iv = CryptoJS.enc.Utf8.parse("7a6f9789dfbfc1bc4e83a675a7f39728");

const message = "MESSAGE_TO_BE_ENCRYPTED";
const encrypted = CryptoJS.AES.encrypt(message, key, {
  iv: iv,
  mode: CryptoJS.mode.CBC,
  padding: CryptoJS.pad.Pkcs7
});
console.log("Encrypted message:", encrypted.toString());