var printTeacher = function (firstName, lastName) {
    return "".concat(firstName[0], ". ").concat(lastName);
};
var Student = /** @class */ (function () {
    function Student(_a) {
        var firstName = _a.firstName, lastName = _a.lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Student.prototype.workOnHomework = function () {
        return "Currently working";
    };
    Student.prototype.displayName = function () {
        return this.firstName;
    };
    return Student;
}());
var teacher3 = {
    firstName: "John",
    fullTimeEmployee: false,
    lastName: "Doe",
    location: "Paris",
    contract: false,
};
console.log("\nTEACHER");
console.log(teacher3);
var director1 = {
    firstName: "Annie",
    lastName: "Snith",
    location: "London",
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log("\nDIRECTOR");
console.log(director1);
console.log("\nFormatted teacher name: ".concat(printTeacher("John", "Doe")));
console.log("\nSTUDENT");
var student1 = new Student({ firstName: "Mark", lastName: "Singer" });
console.log("The new student name is ".concat(student1.displayName()));
console.log("His status is: ".concat(student1.workOnHomework()));
