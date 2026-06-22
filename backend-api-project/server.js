const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let students = [
  {
    id: 1,
    name: "Kajal",
    course: "Full Stack Development"
  }
];

app.get("/", (req, res) => {
  res.send("Backend API Running Successfully");
});

app.get("/students", (req, res) => {
  res.json(students);
});

app.post("/students", (req, res) => {

  const { name, course } = req.body;

  if (!name || !course) {
    return res.status(400).json({
      message: "Name and Course are required"
    });
  }

  const newStudent = {
    id: students.length + 1,
    name,
    course
  };

  students.push(newStudent);

  res.status(201).json({
    message: "Student Added Successfully",
    student: newStudent
  });

});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});