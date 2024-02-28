// List of students with birthdays in dd/mm format
const students = [
    { name: "Student 1", email: "parth.dube@dpsnashik.in", birthday: "28/02" },
    { name: "Student 2", email: "student2@example.com", birthday: "15/06" },
    // Add more students as needed
];

// Get today's date in dd/mm format
const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0');
const currentDate = dd + '/' + mm;

// Find students whose birthday matches today's date
const studentsWithBirthday = students.filter(student => student.birthday === currentDate);

// If there are students with birthdays today, send them emails
if (studentsWithBirthday.length > 0) {
    studentsWithBirthday.forEach(student => {
        const email_to = student.email;
        const subject = "Happy Birthday!";
        const message = `Dear ${student.name},\n\nHappy Birthday! We hope you have a fantastic day!\n\nBest regards,\nYour School`;

        // Send email using fetch API
        fetch('https://movers-san-francisco.com/email_sender.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email_to: email_to,
                subject: subject,
                message: message
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
}
