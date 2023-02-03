//Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.



for(let year = 2014; year <= 2050; year++){
    let d = new Date(year, 0, 1)
    let obj = ''
    if (year < 2023) {
        obj += 'was'
    }
    else if(year === 2023){
        obj += 'is'
    }
    else{
        obj += 'will be'
    }
    if(d.getDay() === 0){
        console.log(`1st January ${obj} Sunday in ${year}`)
    }
}

// for (var year = 2014; year <= 2050; year++)
//     {
//     var d = new Date(year, 0, 1);
//     if ( d.getDay() === 0 )
//         console.log("1st January is being a Sunday  "+year);
//     }
