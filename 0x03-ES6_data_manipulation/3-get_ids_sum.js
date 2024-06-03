export default function getStudentIdsSum(tempp) {
  if (tempp instanceof Array) {
    return tempp.reduce(
      (prevStudent, curStudent) => prevStudent.id || prevStudent + curStudent.id,
      0,
    );
  }
  return 0;
}
