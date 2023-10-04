export default function hasValuesFromArray(set, array) {
  if (!(set instanceof Set) || !Array.isArray(array)) {
    throw new Error('Invalid input types');
  }

  for (const value of array) {
    if (!set.has(value)) {
      return false;
    }
  }

  return true;
}
