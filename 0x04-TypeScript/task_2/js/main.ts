interface DirectorInterface {
  workFromHome(): string
  getCoffeeBreak(): string
  workDirectorTasks(): string
}

interface TeacherInterface {
  workFromHome(): string
  getCoffeeBreak(): string
  workTeacherTasks(): string
}

class Director implements DirectorInterface {
  workFromHome (): string {
    return 'Working from home.'
  }

  getCoffeeBreak (): string {
    return 'Getting a coffee break.'
  }

  workDirectorTasks (): string {
    return 'Getting to director tasks'
  }
}

class Teacher implements TeacherInterface {
  workFromHome (): string {
    return 'Cannot work from home.'
  }

  getCoffeeBreak (): string {
    return 'Cannot have a break.'
  }

  workTeacherTasks (): string {
    return 'Getting to work'
  }
}

function createEmployee (salary: number | string): Teacher | Director {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher()
  } else {
    return new Director()
  }
}

function isDirector (employee: Teacher | Director): boolean {
  if (employee instanceof Director) {
    return true
  }
  return false
}

function executeWork (employee: Teacher | Director) {
  if (isDirector(employee)) {
    console.log((employee as Director).workDirectorTasks())
    return
  }
  console.log((employee as Teacher).workTeacherTasks())
  return
}

type Subjects = 'Math' | 'History'

function teachClass (todayClass: Subjects) {
  if (todayClass === 'Math') {
    console.log('Teaching Math');
  } else if (todayClass === 'History') {
    console.log('Teaching History');
  } else {
    console.log('Wrong Subject');
  }
}

//Test
console.log(createEmployee(200))
console.log(createEmployee(1000))
console.log(createEmployee('$500'))
executeWork(createEmployee(200))
executeWork(createEmployee(1000))
teachClass('Math');
teachClass('History');
