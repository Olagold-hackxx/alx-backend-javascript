import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((result) => {
      const value = `${result[0].body} ${result[1].firstName} ${result[1].lastName}`;
      console.log(value);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
