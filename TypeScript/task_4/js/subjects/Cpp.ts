namespace Subjects {
  export interface Teacher {
    experienceTeachingC: number;
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements of Cpp";
    }

    getAvailableTeacher(teacher: Teacher): string {
      if (teacher.experienceTeachingC > 0) {
        return `Available Teacher: ${teacher.firstName}`;
      }

      return "No available teacher";
    }
  }
}
