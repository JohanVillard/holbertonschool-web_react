interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

interface StudentConstructor {
  firstName: string;
  lastName: string;
}

interface StudentInterface extends StudentConstructor {
  workOnHomework(): string;
  displayName(): string;
}

class Student implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

console.log("P0T1");
const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "Paris",
  contract: false,
};
console.log("\nTEACHER");
console.log(teacher3);

console.log("P0T2");
const director1: Directors = {
  firstName: "Annie",
  lastName: "Snith",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log("\nDIRECTOR");
console.log(director1);

console.log("P0T3");
console.log(`\nFormatted teacher name: ${printTeacher("John", "Doe")}`);

console.log("P0T4");
console.log("\nSTUDENT");
const student1 = new Student({ firstName: "Mark", lastName: "Singer" });
console.log(`The new student name is ${student1.displayName()}`);
console.log(`His status is: ${student1.workOnHomework()}`);
