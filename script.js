// Import necessary modules
const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'HappyBirthdaybyDps@gmail.com', // Your email
        pass: 'birthaybydps' // Your password
    }
});

// Sample student data (you would fetch this from a database)
const students = [
    { name: 'Parth Dube', email: 'parth.dube@dpsnashik.in', birthday: '2024-02-26' },
    { name: 'Jane Smith', email: 'jane@example.com', birthday: '1999-08-15' }
    // Add more student data as needed
];

// Function to send birthday emails
function sendBirthdayEmails() {
    const today = new Date();
    const todayStr = today.toISOString().slice(0, 10); // Get today's date in YYYY-MM-DD format

    students.forEach(student => {
        if (student.birthday === todayStr) {
            // Send email
            let mailOptions = {
                from: 'your-email@gmail.com',
                to: student.email,
                subject: 'Happy Birthday!',
                text: `Dear ${student.name},\n\nHappy birthday! We hope you have a fantastic day.\n\nBest regards,\nYour School`
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log('Error sending email:', error);
                } else {
                    console.log('Email sent:', info.response);
                }
            });
        }
    });
}

// Call the function to send birthday emails
sendBirthdayEmails();
