export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const  value of array) {
    newArray[idx] = appendString + value;
  }

  return newArray;
}
