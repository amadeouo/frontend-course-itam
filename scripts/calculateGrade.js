export function calculateAverageGrade(list) { // среднее
  let acc = 0, counter = 0
  for (const grade of list) {
    acc += grade
    counter += 1
  }
  return Math.round(acc / counter)
}

export function setGrade(scores) { // оценка по среднему
  if (scores >= 90) {
    return "A"
  } else if (scores >= 80) {
    return "B"
  } else if (scores >= 70) {
    return "C"
  } else if (scores < 70) {
    return "F"
  }
}

// Расчет через map (так поудобнее, но немного не по условию задачки)
export function calculateGrade(arr) {
  arr.map((el) => {
    el.average = calculateAverageGrade(el.scores)
    el.grade = setGrade(el.average)
  })
  return arr
}

// Расчет через for
export function calculateGradeWithFor(arr) {
  for (const student of arr) {
    student.average = calculateAverageGrade(student.scores)
    student.grade = setGrade(student.average)
  }
}