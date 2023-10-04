export default function updateStudentGradeByCity(students, city, grade) {
  const stdInLocation = students.filter((std) => std.location === city);
  return stdInLocation.map((std) => {
    const newGrade = std;
    const grd = grade.filter((grd) => grd.studentId === std.id);
    const stdGrade = grd[0];
    if (stdGrade && stdGrade.grade) {
      newGrade.grade = stdGrade.grade;
    } else {
      newGrade.grade = 'N/A';
    }
    return newGrade;
  });
}
