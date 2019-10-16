function catAndMouse(x, y, z) {
    let A = Math.abs(x - z);
    let B = Math.abs(y - z);
    if (A === B) {
        console.log("Mouse C");
    }
    if (A > B) {
        console.log("Cat B");
    } else {
        console.log("Cat A")
    }

}


console.log(catAndMouse(2, 5, 4))