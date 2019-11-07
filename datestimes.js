// console.log("Today's date: " + Date.now());
// console.log(Date.now());
// let d = new Date();
// let t = d.getTime();

// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());

// console.log("-------")

// console.log(d.getFullYear());
// console.log(d.getMonth());
// console.log(d.getDay());
// console.log(d.getMinutes());
// console.log(d.getSeconds());
// console.log(d.getMilliseconds());

// var dd = Date.parse("March 21, 2012");
// var minutes = 1000 * 60;
// var hours = minutes * 60;
// var days = hours * 24;
// var years = days * 365;

// var y = Math.round(dd / years);

// let num = 99 / 39
// console.log ( Math.floor(num))
// console.log ( Math.ceil(num))
// console.log ( Math.random(2))


function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

// July
daysInMonth(7, 2009); // 31
// February
daysInMonth(2, 2009); // 28
daysInMonth(2, 2008); // 29


let d = new Date(2019, 7, 0).getDate();

let month = "2019-01"
month = month.split("-")
// console.log(daysInMonth(month[1], month[0]))
// console.log(d)
// console.log(d)

let gg =   new Date('2018-12-04')

console.log(gg.getFullYear())
let date = ""
console.log(date)