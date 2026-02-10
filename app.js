let button = document.getElementById('btn')
let output = document.getElementById('display')

function ageCalculator()  {
    
    let bdaystring = document.getElementById('date').value

    let todayDate = new Date()
    let bday = new Date(bdaystring)

    let todayYear = todayDate.getFullYear()
    let bdayYear = bday.getFullYear()

    let year = todayYear - bdayYear;

    let month

    let todayMonth = todayDate.getMonth()
    let bdayMonth = bday.getMonth()

    if (todayMonth >= bdayMonth) {
        month = todayMonth - bdayMonth
    } else {
        month = 12 + todayMonth - bdayMonth 
        year--
    }

    let day
    let todayDay = todayDate.getDate()
    let bdayDay = bday.getDate()
    
    let daysInMonth = new Date(year, month, 0).getDate();

    if (todayDay >= bdayDay) {
        day = todayDay - bdayDay
    } else {
        day = daysInMonth + todayDay - bdayDay
        month--
    }
    
    if (month < 0) {
        year--;
        month += 12;
    }

    output.innerHTML = `Your age is ${year} years and ${month} months ${day} days`
}

