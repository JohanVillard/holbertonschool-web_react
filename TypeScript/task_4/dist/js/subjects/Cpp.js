/// <reference path="Subject.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Subjects;
(function (Subjects) {
    var Cpp = /** @class */ (function (_super) {
        __extends(Cpp, _super);
        function Cpp(teacher) {
            return _super.call(this, teacher) || this;
        }
        Cpp.prototype.getRequirements = function () {
            return "Here is the list of requirements of Cpp";
        };
        Cpp.prototype.getAvailableTeacher = function () {
            if (this.teacher.experienceTeachingC !== undefined &&
                this.teacher.experienceTeachingC > 0) {
                return "Available Teacher: ".concat(this.teacher.firstName);
            }
            return "No available teacher";
        };
        return Cpp;
    }(Subjects.Subject));
    Subjects.Cpp = Cpp;
})(Subjects || (Subjects = {}));
var teacher = {
    firstName: "John",
    lastName: "Doe",
    experienceTeachingC: 2,
};
var subject = new Subjects.Cpp(teacher);
console.log(subject.teacher.experienceTeachingC); // Affiche "2"
console.log(subject.getAvailableTeacher()); // Affiche "Available Teacher: John"
//# sourceMappingURL=Cpp.js.map