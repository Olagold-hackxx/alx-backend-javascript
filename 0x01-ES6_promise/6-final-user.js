import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup() {
  return Promise.allSettled([signUpUser(), uploadPhoto()]).then((value) => value.forEach(() => {
    const result = {
      status: value.status,
      value,
    };
    return result;
  }));
}
