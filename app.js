// Import express
const express = require("express");

// Create express app
const app = express();

// Set port number
const PORT = 3000;

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));

// Set EJS view engine
app.set("view engine", "ejs");

// Temporary server-side storage
const users = [];

// Home route
app.get("/", (req, res) => {

    // Render form page
    res.render("index", { error: null });

});

// Handle form submission
app.post("/submit", (req, res) => {

    // Get data from form
    const { name, email, age } = req.body;

    // Server-side validation
    if (!name || !email || !age) {

        return res.render("index", {
            error: "All fields are required"
        });
    }

    // Store validated data temporarily
    users.push({
        name,
        email,
        age
    });

    // Render result page
    res.render("result", {
        name,
        email,
        age,
        users
    });

});

// Start server
app.listen(PORT, () => {

    console.log(`Server running on http://localhost:${PORT}`);

});