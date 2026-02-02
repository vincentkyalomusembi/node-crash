// // // load the filesystem module
// // import * as fs from 'fs';

// // // read the contents of a file asynchronously
// // fs.readFile('example.txt', 'utf8', (err, data) => {
// //     if (err) {
// //         console.error('Error reading file:', err);
// //         return;
// //     }
// //     console.log('File contents:', data);
// // });

// // import { createServer } from 'http';
// // createServer((req, res) => {
// //     res.writeHead(200, {'Content-Type' : 'text/plain'});
// //     res.end('Hello, world!');
// // }).listen(3000)

// let name = 'Node.js';
// const version = 20;

// // function 
// function greet(user) {
//     return `Hello, ${user}!`;
// }
// //arrow function
// const add = (a, b) => a + b;

// console.log(greet('developer'));
// console.log(add(5, 3));

// Global object
//console.log(global)


global.setTimeout (() =>{
    console.log("in the timeout");
}, 3000)


const int = setInterval(() => {
    console.log("in the timeout")
}, 1000)