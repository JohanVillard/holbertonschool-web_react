/// <reference path="Subject.ts" />

namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    getAvailableTeacher(): string {
      if (
        this.teacher.experienceTeachingC !== undefined &&
        this.teacher.experienceTeachingC > 0
      ) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }

      return "No available teacher";
    }
  }
}
