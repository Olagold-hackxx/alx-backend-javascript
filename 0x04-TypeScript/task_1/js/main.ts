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
