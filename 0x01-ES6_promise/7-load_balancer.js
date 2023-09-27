export default function loadBalancer(chinaDownload, USDownload) {
  const promises = [chinaDownload, USDownload];
  return Promise.race(promises)
    .then((value) => value)
    .catch((error) => error);
}
