export default function cleanSet(set, startString) {
  if (!startString) { return startString; }
  const filteredValues = Array.from(set).filter((value) => value.startsWith(startString));
  const cleanedValues = filteredValues.map((value) => value.substring(startString.length));
  const resultString = cleanedValues.join('-');

  return resultString;
}
