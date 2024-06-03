export default function updateStudentGradeBytempp2(tempp, tempp2, tempp3) {
  const defaultGrade = { grade: 'N/A' };

  if (tempp instanceof Array) {
    return tempp
      .filter((student) => student.location === tempp2)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (tempp3
          .filter((grade) => grade.studentId === student.id)
          .pop() || defaultGrade).grade,
      }));
  }
  return [];
}
