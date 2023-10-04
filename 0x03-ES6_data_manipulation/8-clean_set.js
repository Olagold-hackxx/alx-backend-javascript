export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string') {
    throw new Error('Invalid input types');
  }

  if (!startString) { return ''; }
  const filteredValues = Array.from(set).filter((value) => value.startsWith(startString));
  const cleanedValues = filteredValues.map((value) => value.substring(startString.length));
  const resultString = cleanedValues.join('-');

  return resultString;
}
