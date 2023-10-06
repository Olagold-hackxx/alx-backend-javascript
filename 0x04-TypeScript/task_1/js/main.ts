interface Teacher {
  readonly firstName: string
  readonly lastName: string
  yearsOfExperience?: number
  fullTimeEmployee: boolean
  location: string
  [key: string]: any
}

interface Directors extends Teacher {
  numberOfReports: number
}

interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = function printTeacher (firstName, lastName) {
  return `${firstName[0].toUpperCase()}. ${lastName}`
}

class StudentClass {
	_firstName: string;
	_lastName: string;
	constructor(firstName: string, lastName: string) {
		this._firstName = firstName;
		this._lastName = lastName;
	}

	workOnHomework(): string {
		return 'Currently working';
	}

	displayName(): string {
		return this._firstName;
	}
}

//Test teacher
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false
}

console.log(teacher3)

//Test directors
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17
}
console.log(director1)

//Test printTeacher()
console.log(printTeacher("John", "Doe"))