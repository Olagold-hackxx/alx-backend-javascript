export default function setFromArray(array) {
  if (!Array.isArray(array)) {
    throw new Error('Argument is not an array');
  }
  return new Set(array);
}
