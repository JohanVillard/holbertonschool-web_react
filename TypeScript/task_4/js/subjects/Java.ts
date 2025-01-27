namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java {
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    getAvailableTeacher(teacher: Teacher): string {
      if (teacher.experienceTeachingJava > 0) {
        return `Available Teacher: ${teacher.firstName}`;
      }

      return "No available teacher";
    }
  }
}
