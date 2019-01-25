const crypto=require('crypto'); 
const fs=require('fs');
console.log(crypto.publicDecrypt(fs.readFileSync('./key'),fs.readFileSync('./secret')).toString());