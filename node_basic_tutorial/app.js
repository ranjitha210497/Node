// console.log("Welcome");


// var time = 0;
// var timer = setInterval(function() {
//     time+=2;
//     console.log(time +'seconds have passed');
//     if(time > 5) {
//         clearInterval(timer);
//     }
// }, 2000);


const fs = require('fs');
console.log(__dirname);
// fs.unlink('./test.txt', (err) => console.log(err));
fs.open('./test.txt', 'w', (err, fd) => {console.log(err);
fs.appendFileSync(fd, 'hi goobe', 'utf8', (err) => console.log(err)) });
