# Insurance Policy Manager App
## Table of Contents
#### 1.Introduction
#### 2.Features
#### 3.Installation
#### 4.Usage
#### 5.Folder Structure
#### 6.Technologies Used

### Introduction
The Insurance Policy Manager App is a full-stack application designed to manage insurance policies efficiently. It provides a user-friendly interface and robust backend services to handle CRUD operations for insurance policies. This app helps users and administrators streamline the process of managing and maintaining policy-related data.

### Features
#### - Create, read, update, and delete insurance policies.
#### - User-friendly and responsive interface.
#### - Backend APIs for seamless communication with the database.
#### - Data validation and error handling.
#### - Secure and efficient data management.

### Installation
#### - Prerequisites
#### - Node.js and npm installed.
#### - Java JDK installed.
#### - MySQL Server installed.
### Steps to Install
#### 1. Clone the Repository:
git clone https://github.com/Ahalya0998/insurance-policy-manager.git
cd insurance-policy-manager
#### 2. Set up the Backend:
#### * Navigate to the backend folder.
#### * Configure application.properties with your database credentials:
spring.datasource.url=jdbc:mysql://localhost:3306/insurance_db
spring.datasource.username=your_username
spring.datasource.password=your_password
#### * Run the backend application in your IDE.
#### 3. Set up the Database:
#### * Create a database schema in MySQL Workbench.
#### * Import the provided SQL file (/db/insurance_db.sql).
#### 4. Set up the Frontend:
#### * Navigate to the frontend folder.
#### * Install dependencies:
npm install
#### * Start the development server:
npm start

### Usage
#### 1. Start the backend server (localhost:8080 by default).
#### 2. Open the frontend in your browser (localhost:3000 by default).
#### 3. Use the application to:
#### * Add new policies.
#### * View, update, or delete existing policies.
#### * Manage policy-related data securely and efficiently.

### Folder Structure
#### The project follows a structured organization for ease of navigation:

```plaintext
insurance-policy-manager/
├── frontend/
│   ├── public/
|   |   ├── index.html
|       └── ...
│   ├── src/
│   │   ├── assets/
|   |   |      ├── insurance.jpg
|   |   ├── components/
|   |   |      ├── AddPolicy.js
|   |   |      ├── DeletePolicy.js
|   |   |      ├── UpdatePolicy.js
|   |   |      ├── ViewPolicies.js
│   │   ├── App.js
│   │   └── index.js
│   │   ├──reportWebVitals.js
|   |
│   ├──package-lock.json  
│   └── package.json
|
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/insurance/
│   │   │   │   └── controller
|   |   |   |      └── PolicyController.java
|   |   |   |   └── model
|   |   |   |       └── Policy.java
|   |   |   |   └── repository
|   |   |   |       └── PolicyRepository.java
|   |   |   |   └── service
|   |   |   |       └── PolicyService.java
|   |   |   |       └── PolicyServiceImpl.java
|   |   |   |   └── InsuranceAppApplication.java
│   │   │   ├── resources/
│   │   │   │   └── application.properties
│   │   └── test/java/com/insurance/
|   |   |   └── InsuranceAppApplicationTests.java
│   ├── pom.xml
└── db/
    └── insurance_db.sql


### Technologies Used
#### Frontend:
#### * React JS
#### * HTML5, CSS3
#### * JavaScript (ES6)

#### Backend:
#### * Spring Boot
#### * Java
#### * REST API for communication between the frontend and backend.

#### Database:
#### * MySQL Workbench

#### Tools:
#### * Postman (API testing)
#### * VS Code
#### * STS (Spring Tool Suite)
