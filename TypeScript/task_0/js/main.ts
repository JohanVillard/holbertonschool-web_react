interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

let student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  location: "Bordeaux",
};
let student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 24,
  location: "Cenon",
};

const studentList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement("table");
const tableBody: HTMLTableSectionElement = document.createElement("tbody");

studentList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement("tr");

  const firstNameCell: HTMLTableCellElement = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell: HTMLTableCellElement = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);
