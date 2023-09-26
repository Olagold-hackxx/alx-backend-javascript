export default function iterateThroughObject(reportWithIterator) {
  let employees = '';
  let idx = 0;
  for (const employee of reportWithIterator) {
    if (idx !== 0) {
      employees += ' | ';
    }
    employees += employee;
    idx += 1;
  }
  return employees;
}
