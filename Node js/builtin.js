const fs = require('fs');
let text = fs.readFileSync("aditya.txt","utf-8")
text = text.replace("aditya","hello")
console.log(text);

// fs.writeFileSync("adityaaaaa.txt","mangal")
