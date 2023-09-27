import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((result) => {
      const value = `${result[0].body} ${result[1].firstName} ${result[1].lastName}`;
      console.log(value);
	  return result;
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
