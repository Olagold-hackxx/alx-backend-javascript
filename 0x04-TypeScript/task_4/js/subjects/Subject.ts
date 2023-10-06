namespace Subjects {
    export class Subject {
        _teacher: Subjects.Teacher | undefined;

        setTeacher(teacher: Subjects.Teacher): void {
            this._teacher = teacher;
        }
    }
}
