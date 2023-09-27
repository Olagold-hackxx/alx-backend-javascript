import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(
  firstName,
  lastName,
  fileName,
) {
  return Promise.all([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((value) => {
    const result = [];
    value.forEach((res) => {
      result.push({
        status: res.status,
        value: res.value ? res.value : res.reason.message,
      });
    });
    return result;
  });
}
