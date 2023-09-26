export default function createIteratorObject(report) {
  const employees = report.allEmployees;
  let n = 0;
  let idx = 0;
  return {
    [Symbol.iterator]() {
      return {
        next: () => {
          let result;
          if (n < Object.keys(employees).length) {
            result = {
              value: Object.values(employees)[n][idx],
              done: false,
            };
            if (idx < Object.values(employees)[n].length - 1) {
              idx += 1;
            } else {
              idx = 0;
              n += 1;
            }
            return result;
          }
          return {
            value: undefined,
            done: true,
          };
        },
      };
    },
  };
}
