interface DirectoryInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorsTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectoryInterface {
  workFromHome() {
    return "Working from home";
  }

  getCoffeeBreak() {
    return "Getting a coffe break";
  }

  workDirectorsTasks() {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome() {
    return "Cannot work from home";
  }

  getCoffeeBreak() {
    return "Cannot have break";
  }

  workTeacherTasks() {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary !== "number" && typeof salary === "string") {
    salary = parseInt(salary.replace("$", ""));
  }

  if (salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorsTasks();
  }

  return employee.workTeacherTasks();
}

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects) {
  if (todayClass === "Math") {
    return "Teaching Math";
  }

  if (todayClass === "History") {
    return "Teaching History";
  }
}

console.log("P0T5");
const employee1 = createEmployee(200);
console.log(employee1);
console.log(employee1.workFromHome());
const employee2 = createEmployee(1000);
console.log(employee2);
console.log(employee2.workFromHome());
const employee3 = createEmployee("$500");
console.log(employee3);
console.log(employee3.getCoffeeBreak());

console.log("POT6");
executeWork(createEmployee(200));
executeWork(createEmployee(1000));
