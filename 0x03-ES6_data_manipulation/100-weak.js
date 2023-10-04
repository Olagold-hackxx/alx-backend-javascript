const weakMap = new WeakMap();

function queryAPI(endpoint) {
  const { protocol, name } = endpoint;
  const key = `${protocol}-${name}`;

  if (!weakMap.has(key)) {
    weakMap.set(key, 0);
  }

  const queryCount = weakMap.get(key);
  weakMap.set(key, queryCount + 1);

  if (queryCount >= 4) {
    throw new Error('Endpoint load is high');
  }
}

export { weakMap, queryAPI };
