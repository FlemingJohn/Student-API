let students = [
  { id: 1, name: "Fleming John", age: 20 },
  { id: 2, name: "Sam", age: 22 },
  { id: 3, name: "Anbu", age: 22 },
  { id: 4, name: "Akash", age: 22 },
  { id: 5, name: "Alan", age: 22 }
];
let nextId = 6;

// Display Method
const getAllStudents = (req, res) => {
  res.json(students);
};

// Add method
const addStudent = (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({ message: "Name and age are required" });
  }

  const newStudent = {
    id: nextId++,
    name,
    age
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
};

// Update Method
const updateStudent = (req, res) => {
  const studentId = parseInt(req.params.id);
  const { name, age } = req.body;

  const student = students.find(s => s.id === studentId);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  if (name) student.name = name;
  if (age) student.age = age;

  res.json({ message: "Student updated", student });
};

// Delete method
const deleteStudent = (req, res) => {
  const studentId = parseInt(req.params.id);
  const index = students.findIndex(s => s.id === studentId);

  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  const deletedStudent = students.splice(index, 1); // remove 1 item at index

  res.json({
    message: "Student deleted successfully",
    student: deletedStudent[0]
  });
};


module.exports = {
  getAllStudents,
  addStudent,
  updateStudent,
  deleteStudent
};

