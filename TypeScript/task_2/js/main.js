var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffe break";
    };
    Director.prototype.workDirectorsTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary !== "number" && typeof salary === "string") {
        salary = parseInt(salary.replace("$", ""));
    }
    if (salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
function isDirector(employee) {
    return employee instanceof Director;
}
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorsTasks();
    }
    return employee.workTeacherTasks();
}
function teachClass(todayClass) {
    if (todayClass === "Math") {
        return "Teaching Math";
    }
    if (todayClass === "History") {
        return "Teaching History";
    }
}
console.log("P0T5");
var employee1 = createEmployee(200);
console.log(employee1); // Teacher
console.log(employee1.workFromHome());
var employee2 = createEmployee(1000);
console.log(employee2); // Director
console.log(employee2.workFromHome());
var employee3 = createEmployee("$500");
console.log(employee3); // Director
console.log(employee3.getCoffeeBreak());
console.log("POT6");
executeWork(createEmployee(200));
executeWork(createEmployee(1000));
