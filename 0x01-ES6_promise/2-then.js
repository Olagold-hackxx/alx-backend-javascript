export default function handleResponseFromAPI(promise) {
  promise
    .finally(() => console.log('Got a response from the API'))
    .then((success) => ({
      status: 200,
      body: success,
    }))
    .catch(() => new Error());
}
