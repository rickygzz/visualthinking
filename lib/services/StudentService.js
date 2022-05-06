class StudentService
{
    static getAllStudents(students)
    {
        return students;
    }

    static getEmailsFromStudentsWithCert(students)
    {
        return students.filter(
            (student) => student.haveCertification == true).map((student) => student.email);
    }

    static getStudentsWithEnoughCredits(students, credits)
    {
        return students.filter((student) => student.credits >= credits);
    }
}

module.exports = StudentService;