interface Student {
  firstName: string
  lastName: string
  age: number
  location: string
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

const studentsList: Student[] = [alxStudent, holbertonStudent]

// Render table rows dynamically using Vanilla JavaScript
const table = document.createElement('table');
const tableBody = document.createElement('tbody')
table.appendChild(tableBody);



studentsList.forEach(student => {
  const row = document.createElement('tr')
  row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`
  tableBody.appendChild(row)
  console.log(tableBody)
})

document.body.appendChild(table)