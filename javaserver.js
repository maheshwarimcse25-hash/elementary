const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Simple API route
app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;

    console.log("New Contact Form Submission:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    res.json({ message: "Form submitted successfully!" });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});