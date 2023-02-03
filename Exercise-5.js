//Write a JavaScript program to rotate the string 'Hello World' in right direction by periodically removing one letter from the end of the string and attaching it to the front.

let str = "Hello World"
setInterval(function () 
{
str = str.at(-1) + str.substring(0, str.length-1)
console.log(str)
}, 1000)
