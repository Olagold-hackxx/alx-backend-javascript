
const Cpp = Subjects.Cpp;
const React = Subjects.React;
const Java = Subjects.Java;

const cTeacher: Subjects.Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    experienceTeachingC: 10,
};

export const cpp: Subjects.Cpp = new Cpp();
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements);
console.log(cpp.getAvailableTeacher);

export const java: Subjects.Java = new Java();
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements);
console.log(java.getAvailableTeacher);

export const react: Subjects.React= new React();
console.log("Java");
react.setTeacher(cTeacher);
console.log(react.getRequirements);
console.log(react.getAvailableTeacher);
