Customer Management System
Overview
The Customer Management System is a full-stack web application designed to manage customer information. The application is built using React JS for the front end, ASP.NET MVC and Web API for the back end, and SQL Server for the database. Bootstrap 5.3.3 is used for styling the front-end components. Microsoft Unit Testing is employed for testing the application.

Technologies Used
Front End: React JS
Back End: ASP.NET MVC and Web API
Database: SQL Server
Styling: Bootstrap 5.3.3
Testing: Microsoft Unit Testing
Setup Instructions
Front End
Clone the Repository

bash
Copy code
git clone https://github.com/yourusername/customer-management-system.git
cd customer-management-system
Navigate to the Front-End Directory

bash
Copy code
cd client
Install Dependencies

Ensure you have Node.js and npm installed. Run:

bash
Copy code
npm install
Start the React Application

bash
Copy code
npm start
The application will be available at http://localhost:3000.

Back End
Navigate to the Back-End Directory

bash
Copy code
cd ../server
Setup the Database

Open SQL Server Management Studio.
Create a new database for the application.
Update the connection string in Web.config to point to your SQL Server instance.
Build and Run the ASP.NET Application

Open the solution in Visual Studio.
Restore NuGet packages.
Build the solution.
Start the application. The API will be available at http://localhost:5000/api/customers (or your configured port).
Testing
Run Unit Tests

Open the solution in Visual Studio.
Navigate to the Test Explorer.
Run all tests to ensure everything is functioning correctly.
API Endpoints
Customer Endpoints
Get All Customers

URL: /api/customers
Method: GET
Success Response:
Code: 200
Content: [{ id: 1, firstName: "John", lastName: "Doe", email: "john.doe@example.com", phone: "1234567890", address: "123 Street" }, ...]
Get Customer by ID

URL: /api/customers/{id}
Method: GET
URL Params:
id=[integer]
Success Response:
Code: 200
Content: { id: 1, firstName: "John", lastName: "Doe", email: "john.doe@example.com", phone: "1234567890", address: "123 Street" }
Error Response:
Code: 404
Content: { "message": "Not Found" }
Create a New Customer

URL: /api/customers
Method: POST
Payload: { firstName: "Alice", lastName: "Smith", email: "alice.smith@example.com", phone: "1234567890", address: "789 Road" }
Success Response:
Code: 201
Content: { id: 3, firstName: "Alice", lastName: "Smith", email: "alice.smith@example.com", phone: "1234567890", address: "789 Road" }
Error Response:
Code: 400
Content: { "message": "Bad Request" }
Update a Customer

URL: /api/customers/{id}
Method: PUT
URL Params:
id=[integer]
Payload: { firstName: "John", lastName: "Doe", email: "john.doe@example.com", phone: "1234567890", address: "123 Updated Street" }
Success Response:
Code: 204
Content: None
Error Response:
Code: 400
Content: { "message": "Bad Request" }
Code: 404
Content: { "message": "Not Found" }
Delete a Customer

URL: /api/customers/{id}
Method: DELETE
URL Params:
id=[integer]
Success Response:
Code: 200
Content: { id: 1, firstName: "John", lastName: "Doe", email: "john.doe@example.com", phone: "1234567890", address: "123 Street" }
Error Response:
Code: 404
Content: { "message": "Not Found" }
