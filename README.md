# Student API (Node.js)

A simple RESTful API built with **Node.js** and **Express.js** to manage student data.
This project demonstrates basic CRUD operations and modular backend structure for learning purposes.

---

## Features

* Get all students
* Add a new student
* Update student details
* Delete a student

---

## Tech Stack

* Node.js
* Express.js
* Postman (for API testing)

---

## Project Structure

```
student-api/
├── backend/
│   ├── controllers/
│   │   └── studentController.js
│   ├── routes/
│   │   └── studentRoutes.js
│   ├── index.js
│   └── package.json
```

---

## Getting Started

### Prerequisites

* Node.js installed (v14+ recommended)
* npm (comes with Node.js)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/student-api.git
cd student-api/backend
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
node index.js
```

The server will run on `http://localhost:3000`.

---

## API Endpoints

| Method | Endpoint       | Description       |
| ------ | -------------- | ----------------- |
| GET    | /students      | Get all students  |
| POST   | /students      | Add a new student |
| PUT    | /students/\:id | Update a student  |
| DELETE | /students/\:id | Delete a student  |

---

## Testing the API

Use Postman or any API client to interact with the endpoints.

**Example: Get all students**

* Method: GET
* URL: `http://localhost:3000/students`

---


