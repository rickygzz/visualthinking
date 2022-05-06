const Reader = require("../utils/Reader");
const StudentService = require("../services/StudentService");

class StudentController
{
    static getAllStudents()
    {
        const students = Reader.readJsonFile("visualpartners.json");

        return StudentService.getAllStudents(students);
    }

    static getEmailsFromStudentsWithCert()
    {
        const students = Reader.readJsonFile("visualpartners.json");

        return StudentService.getEmailsFromStudentsWithCert(students);
    }

    static getStudentsWithEnoughCredits(credits)
    {
        const students = Reader.readJsonFile("visualpartners.json");

        return StudentService.getStudentsWithEnoughCredits(students, credits);
    }
}

module.exports = StudentController;