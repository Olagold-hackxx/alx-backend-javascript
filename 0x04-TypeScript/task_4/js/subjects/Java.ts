namespace Subjects {
	export interface Teacher {
		experienceTeachingJava?: number
	}

    export class Java extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for Java';
        }

        getAvailableTeacher(teacher: Subjects.Teacher): string {
            if (teacher.experienceTeachingJava !== undefined && teacher.experienceTeachingJava > 0) {
                return `Available Teacher: ${teacher.firstName}`;
            } else {
                return 'No available teacher';
            }
        }
    }
}
