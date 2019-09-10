let timeS = "12:45:54PM";


function timeConversion(timeS) {
    let pm;
    let am;
    if (timeS.includes("PM")){
        pm = true;
    } else {
        am = true;
    }
    timeS = timeS.split(":")
    let hours = parseInt(timeS[0]);
    let mins = timeS[1];
    let seconds = timeS[2].slice(0, 2);

    if (pm) {
        if (hours !== 12){

            hours+=12;
        }

    } else {
        if (hours === 12){

            hours = '00'
        } else {
            hours = `0${hours}`
        }
    }
    return `${hours}:${mins}:${seconds}`
}


console.log(timeConversion(timeS))