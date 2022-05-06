const StudentService = require("../../lib/services/StudentService");

describe("Tests para StudentService", () => 
{
    test("Requerimiento 1: Obtener todos los estudiantes con todos los campos", () => {
        const students = [{ "name": "Student1" },
            { "name": "Student2" },
            { "name": "Student3" }];

        const retStudents = StudentService.getAllStudents(students);

        expect(retStudents.length).toBe(3);
    });

    test("Requerimiento 2: Consultar los emails de todos los estudiantes que tengan certificación", () => {
        const students = [{ "name": "Student1", "email": "student1@visual.com", "haveCertification": true },
            { "name": "Student2", "email": "student2@visual.com", "haveCertification": false },
            { "name": "Student3", "email": "student3@visual.com", "haveCertification": true }];

        const emails = StudentService.getEmailsFromStudentsWithCert(students);

        expect(emails).toStrictEqual(["student1@visual.com", "student3@visual.com"]);
    });

    test("Requerimiento 3: Consultar todos los estudiantes que tengan creditos mayor a 500", () => {
        const students = [{ "name": "Student1", "credits": 200 },
            { "name": "Student2", "credits": 508 },
            { "name": "Student3", "credits": 500 }];

        const studentsWithEnoughCredits = StudentService.getStudentsWithEnoughCredits(students, 500);

        expect(studentsWithEnoughCredits).toStrictEqual([{"name": "Student2", "credits": 508}, {"name": "Student3", "credits": 500}]);
    });
});