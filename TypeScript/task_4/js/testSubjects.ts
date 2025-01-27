/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />

namespace Subjects {
  const teacher: Teacher = {
    firstName: "John",
    lastName: "Doe",
    experienceTeachingC: 5,
  };

  // Test Cpp
  const cppSubject = new Subjects.Cpp(teacher);
  console.log(
    `${cppSubject.teacher.firstName} ${cppSubject.teacher.lastName} has ${cppSubject.teacher.experienceTeachingC} years of experience in C`,
  );
  console.log(cppSubject.getRequirements());
  console.log(cppSubject.getAvailableTeacher());

  // Test React
  const reactTeacher: Teacher = {
    firstName: "Jane",
    lastName: "Smith",
    experienceTeachingReact: 3,
  };
  const reactSubject = new React(reactTeacher);
  console.log(
    `${reactSubject.teacher.firstName} ${reactSubject.teacher.lastName} has ${reactSubject.teacher.experienceTeachingReact} years of experience in React`,
  );
  console.log(reactSubject.getRequirements());
  console.log(reactSubject.getAvailableTeacher());

  // Test Java
  const javaTeacher: Teacher = {
    firstName: "James",
    lastName: "Bond",
    experienceTeachingJava: 2,
  };
  const javaSubject = new Java(javaTeacher);
  console.log(
    `${javaSubject.teacher.firstName} ${javaSubject.teacher.lastName} has ${javaSubject.teacher.experienceTeachingReact} years of experience in Java`,
  );
  console.log(javaSubject.getRequirements());
  console.log(javaSubject.getAvailableTeacher());
}
