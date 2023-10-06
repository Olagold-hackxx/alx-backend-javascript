namespace Subjects {
	export interface Teacher {
		experienceTeachingReact?: number
	}

    export class React extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for React';
        }

        getAvailableTeacher(teacher: Subjects.Teacher): string {
            if (teacher.experienceTeachingReact !== undefined && teacher.experienceTeachingReact > 0) {
                return `Available Teacher: ${teacher.firstName}`;
            } else {
                return 'No available teacher';
            }
        }
    }
}
