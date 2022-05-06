// Controllers
const StudentController = require("./controllers/StudentController");

// Usando objeto express
const express = require("express");

// App de Express
const app = express();

// Use json
app.use(express.json());

// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000;

// Path inicial, responderá a la url localhost:3000
app.get("/", (request, response) => {
    response.json({message: "Visual Partnership API welcome!"});
});

app.get("/v1/students/", (request, response) => {
    const students = StudentController.getAllStudents();
    response.json(students);
});

app.get("/v1/students/emails", (request, response) => {
    const emails = StudentController.getEmailsFromStudentsWithCert();
    response.json(emails);
});

app.get("/v1/students/credits", (request, response) => {
    const studentsWithEnoughCredits = StudentController.getStudentsWithEnoughCredits(500);
    response.json(studentsWithEnoughCredits);
});

// Con esto inicializamos esta app
app.listen(port, () => {
    console.log("FizzBuzz API in localhost:" + port);
});