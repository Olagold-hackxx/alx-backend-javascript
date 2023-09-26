import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
	Promise.all([uploadPhoto, createUser])
	.then((result) => console.log(result))
	.catch(() => console.log('Signup system offline'))
}
