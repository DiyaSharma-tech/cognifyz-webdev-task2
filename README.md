# Cognifyz Web Development Internship - Task 2

## Inline Styles, Basic Interaction, and Server-Side Validation

---

# Project Overview

This project was developed as part of the Cognifyz Web Development Internship Program.

The objective of this task was to build a dynamic web application using Node.js, Express.js, and EJS while implementing both client-side and server-side form validation.

The application allows users to enter their details through an interactive HTML form. Submitted data is validated on the server side and temporarily stored on the server. The validated information is then dynamically displayed using EJS templating.

---

# Objectives of the Task

- Extend HTML with more complex forms and user interactions

- Utilize inline JavaScript for client-side form validation

- Implement server-side validation for submitted form data

- Store validated data in temporary server-side storage

- Dynamically render submitted data using EJS

---

# Technologies Used

| Technology | Purpose                                   |
| ---------- | ----------------------------------------- |
| HTML5      | Structure of web pages                    |
| Inline CSS | Basic styling                             |
| JavaScript | Client-side interaction                   |
| Node.js    | JavaScript runtime environment            |
| Express.js | Backend framework                         |
| EJS        | Template engine for server-side rendering |

---

# Features

- Interactive user form

- Name, Email, and Age input fields

- Server-side validation

- Temporary server-side data storage

- Dynamic rendering using EJS

- Express.js routing implementation

- Error handling for invalid submissions

---

# Project Structure

```bash
cognifyz-webdev-task2/

│

├── views/

│   ├── index.ejs

│   └── result.ejs

│

├── app.js

├── package.json

├── package-lock.json

└── README.md
```

---

# Working of the Application

## Step 1: Home Page

The user opens the application in the browser.

## Step 2: Form Submission

The user enters:

- Name

- Email Address

- Age

and submits the form.

## Step 3: Server Processing

The form data is sent to the Express.js server using a POST request.

The server validates whether all fields are properly filled.

## Step 4: Temporary Data Storage

Validated user data is stored temporarily on the server using an array.

## Step 5: Dynamic Rendering

The validated data is dynamically displayed using the `result.ejs` page.

---

# Server-Side Validation

The application performs validation before storing user data.

Validation checks include:

- Empty field checking

- Required field validation

Example:

```javascript
if (!name || !email || !age) {

    return res.render("index", {
        error: "All fields are required"
    });
}
```

---

# Temporary Server Storage

Validated user data is stored temporarily in an array.

Example:

```javascript
const users = [];

users.push({
    name,
    email,
    age
});
```

---

# Code Explanation

## app.js

The `app.js` file:

- Creates the Express server

- Configures middleware

- Handles routes

- Processes form submissions

- Performs server-side validation

- Stores validated data temporarily

- Renders EJS pages dynamically

### Main Functionalities

- Express server setup

- Middleware configuration

- GET and POST routes

- Form data handling

- Validation handling

- Dynamic rendering using EJS

---

## index.ejs

The `index.ejs` file contains:

- HTML form structure

- Input fields

- Submit button

- Error message display section

This page acts as the main user interface.

---

## result.ejs

The `result.ejs` file:

- Receives validated user data

- Displays submitted information dynamically

- Displays stored user entries

Example:

```ejs
<%= name %>

<%= email %>

<%= age %>
```

---

# Installation and Setup

## Step 1: Clone the Repository

```bash
git clone <repository-link>
```

---

## Step 2: Navigate to Project Folder

```bash
cd cognifyz-webdev-task2
```

---

## Step 3: Install Dependencies

```bash
npm install
```

---

## Step 4: Run the Application

```bash
node app.js
```

---

## Step 5: Open in Browser

```bash
http://localhost:3000
```

---

# Learning Outcomes

Through this project, the following concepts were learned and implemented:

- Express.js server setup

- Middleware usage

- Handling GET and POST requests

- Form data processing

- Server-side validation

- Temporary server-side data storage

- Dynamic rendering using EJS

- Basic client-server interaction

---

# Future Improvements

Possible enhancements for the project:

- Add better UI styling using CSS

- Connect MongoDB database

- Add authentication system

- Improve validation methods

- Make the application responsive

- Add edit and delete functionality

---

# Author

**Diya Sharma**

Web Development Internship Project Submission
Cognifyz Technologies

---

# Internship Information

This project was completed as part of the Cognifyz Web Development Internship Program under:

**Task 2: Inline Styles, Basic Interaction, and Server-Side Validation**

---
