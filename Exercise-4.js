//Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

const a = 5
const b = 6
const c = 7

const semi = (a+b+c)/2

const area = Math.sqrt(semi*(semi-a)*(semi-b)*(semi-c))

console.log(`Area of Triangle is ${area}`)