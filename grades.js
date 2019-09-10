function gradingStudents(grades) {
    // Write your code here
   return grades.slice(1).map(grade => {
       if (grade % 5 > 2 && grade >= 38){
          return grade + (5 - (73 % 5))
       } else {
          return  grade
       }
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


console.log(gradingStudents([4,73,67,38,33]))