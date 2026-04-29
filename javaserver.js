const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "your_email@gmail.com",        
        pass: "your_app_password"            
    }
});

app.post("/contact", async (req, res) => {
    const { name, email, message } = req.body;

    try {
        // Email content
        const mailOptions = {
            from: email,
            to: "your_email@gmail.com",   
            subject: "New Contact Form Message",
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        };

        // Send email
        await transporter.sendMail(mailOptions);

        console.log("Email sent successfully!");

        res.json({ message: "Message sent successfully!" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error sending message" });
    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
