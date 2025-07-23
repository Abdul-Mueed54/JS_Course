"use strict"; //treat all js code as newer js
// alert("hello world") // we are using nodejs, not browser

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);
