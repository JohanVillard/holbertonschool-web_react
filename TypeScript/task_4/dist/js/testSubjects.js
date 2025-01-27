/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />
var Subjects;
(function (Subjects) {
    var teacher = {
        firstName: "John",
        lastName: "Doe",
        experienceTeachingC: 5,
    };
    // Test Cpp
    var cppSubject = new Subjects.Cpp(teacher);
    console.log(cppSubject.getRequirements());
    console.log(cppSubject.getAvailableTeacher());
    // Test React
    var reactTeacher = {
        firstName: "Jane",
        lastName: "Smith",
        experienceTeachingReact: 3,
    };
    var reactSubject = new Subjects.React(reactTeacher);
    console.log(reactSubject.getRequirements());
    console.log(reactSubject.getAvailableTeacher());
    // Test Java
    var javaTeacher = {
        firstName: "James",
        lastName: "Bond",
        experienceTeachingJava: 2,
    };
    var javaSubject = new Subjects.Java(javaTeacher);
    console.log(javaSubject.getRequirements());
    console.log(javaSubject.getAvailableTeacher());
})(Subjects || (Subjects = {}));
//# sourceMappingURL=testSubjects.js.map