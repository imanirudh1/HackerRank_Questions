function gradingStudents(grades) {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 38) {
      let roundOff = grades[i] + 5 - (grades[i] % 5)
      if (roundOff - grades[i] < 3) {
        grades[i] = roundOff
      }
    }
  }
  return grades
}
const grades = [73, 67, 38, 33]
console.log(gradingStudents(grades))
