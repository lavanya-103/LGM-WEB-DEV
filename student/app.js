// DOM Elements
const studentForm = document.getElementById("studentForm");
const studentsContainer = document.querySelector(".students");
const nameInput = studentForm["name"];
const ageInput = studentForm["age"];
const rollInput = studentForm["roll"];
const inclassInput = studentForm["inclass"];
const students = JSON.parse(localStorage.getItem("students")) || [];
localStorage.clear();
const addStudent = (name, age, roll,inclass) => {
  students.push({
    name,
    age,
    roll,
    inclass,
  });

  localStorage.setItem("students", JSON.stringify(students));

  return { name, age, roll,inclass };
};

const createStudentElement = ({ name, age, roll,inclass}) => {
  // Create elements
  const studentDiv = document.createElement("div");
  const studentName = document.createElement("h2");
  const studentAge = document.createElement("p");
  const studentRoll = document.createElement("p");
  const studentInclass = document.createElement("p");
  // Fill the content
  studentName.innerText = "Student name: " + name;
  studentAge.innerText = "Student age: " + age;
  studentRoll.innerText = "Student roll: " + roll;
  studentInclass.innerText = "Student roll: " + inclass;
  // Add to the DOM
  studentDiv.append(studentName, studentAge, studentRoll, studentInclass);
  studentsContainer.appendChild(studentDiv);

  studentsContainer.style.display = students.length === 0 ? "none" : "flex";
};

studentsContainer.style.display = students.length === 0 ? "none" : "flex";

students.forEach(createStudentElement);

studentForm.onsubmit = e => {
  e.preventDefault();

  const newStudent = addStudent(
    nameInput.value,
    ageInput.value,
    rollInput.value,
    inclassInput.value
  );

  createStudentElement(newStudent);

  nameInput.value = "";
  ageInput.value = "";
  rollInput.value = "";
  inclassInput.value="";
};