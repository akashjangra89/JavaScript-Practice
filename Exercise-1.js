// 1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38


const today = new Date()
const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const day = today.getDay()
let hours = today.getHours()
const minute = today.getMinutes()
const seconds = today.getSeconds()

console.log(`Today is : ${dayList[day]}`)

let prepand = (hours > 12) ? "PM" : "AM"
hours = (hours >= 12) ? hours - 12 : hours

if (hours === 0 && prepand === "PM") {
    if (minute === 0 && seconds === 0) {
        hours = 12
        prepand = "Noon"
    }
    else {
        hours = 12
        prepand = "PM"
    }
}

else if(hours === 0 && prepand === "AM"){
    if (minute === 0 && seconds === 0) {
        hours = 12
        prepand = "Midnight"
    }
    else {
        hours = 12
        prepand = "AM"
    }
}
console.log(`Current time is : ${hours} ${prepand} : ${minute} : ${seconds}`)

