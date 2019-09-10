function gradingStudents(grades) {
    // Write your code here
   let arr = grades.slice(1).map(grade => {
       if (grade % 5 > 2 && grade >= 38){
          return grade + (5 - (grade % 5))
       } else {
          return  grade
       }
    })

    arr.forEach(ele =>{
       console.log(ele)
    })
}
// function gradingStudents(grades) {
//     // Write your code here
//     return grades.map(grade => {
//         if (grade % 5 > 2 && grade >= 38) {
//             return grade + (5 - (73 % 5))
//         } else {
//             return grade
//         }
//     })
// }


console.log(gradingStudents([33, 97, 56, 81, 38, 30, 1 ,9 ,23, 69, 24, 44, 69, 12 ,61, 50, 84, 3, 17, 91]))