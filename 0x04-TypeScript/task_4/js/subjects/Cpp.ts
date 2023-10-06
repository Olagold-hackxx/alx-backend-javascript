namespace Subjects {
	export interface Teacher {
		experienceTeachingC?: number
	}

    export class Cpp extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for Cpp';
        }

        getAvailableTeacher(teacher: Subjects.Teacher): string {
            if (teacher.experienceTeachingC !== undefined && teacher.experienceTeachingC > 0) {
                return `Available Teacher: ${teacher.firstName}`;
            } else {
                return 'No available teacher';
            }
        }
    }
}
