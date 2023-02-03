// Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

let today = new Date()

let month = today.getMonth() + 1
let day = today.getDate()
let year = today.getFullYear()

if(month < 10){
    month = '0'+month
}
if(day < 10) {
    day = '0' + day
}

console.log(`${month}-${day}-${year}`)
console.log(`${month}/${day}/${year}`)
console.log(`${day}-${month}-${year}`)
console.log(`${day}/${month}/${year}`)