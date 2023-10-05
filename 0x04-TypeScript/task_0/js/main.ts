interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const alxStudent: Student = {
	firstName: 'Abdul',
	lastName: 'Aileru',
	age: 19,
	location: 'Nigeria'
}

const holbertonStudent: Student = {
	firstName: 'Julien',
	lastName: 'Barber',
	age: 30,
	location: 'United States'
}

const studentsList: Student[] = [
	alxStudent, holbertonStudent
]