# nodejs-ejs-form
My first Node.js EJS form project
# User Registration Form - Node.js & EJS Project

This is a simple **User Registration Form** web application built using **Node.js**, **Express**, **EJS**, **HTML**, **CSS**, and **JavaScript**.  

The project demonstrates how to create a basic form to collect user details, process the form data on the server, and display a success message after submission.

---

## **Features**
- Responsive and styled form using **CSS**.
- User inputs include:
  - First Name
  - Middle Name
  - Last Name
  - Email Address
  - Phone Number
  - Gender selection
- Form validation using the `required` attribute.
- Success page after form submission.
- Form data is logged in the server console (no database integration in this version).

---

## **Folder Structure**
first-form/
│

├── public/

│ └── style.css # CSS file for styling the form and success page

│
├── views/

│ ├── form.ejs # User registration form template

│ └── success.ejs # Success page template

│

├── server.js # Main Node.js server file

└── package.json # Node.js project dependencies



---

## **Technologies Used**
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for Node.js
- **EJS** - Embedded JavaScript templating engine
- **HTML / CSS / JS** - Front-end for form layout and styling

---

## **Installation & Usage**
1. Clone the repository:
```bash
git clone https://github.com/tups0211-code/ejs-form.git
