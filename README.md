✅ Project information

📥 How to download

💻 How to run

🧪 How to use

📚 Book Management System
This is a full-stack Book Management System built using:

Frontend: React.js (Vite)

Backend: Node.js + Express.js

Database: MySQL

It allows users to perform CRUD operations (Create, Read, Update, Delete) on a list of books. Each book contains:

Publisher Name

Book Title

Published Date

📥 How to Download the Project
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/book-management-system.git
Or download the ZIP from GitHub and extract it.

💻 How to Run the Project Locally
1️⃣ Set Up the MySQL Database
sql
Copy
Edit
CREATE DATABASE crud;

USE crud;

CREATE TABLE book (
  id INT AUTO_INCREMENT PRIMARY KEY,
  publisher VARCHAR(255),
  name VARCHAR(255),
  date DATE
);
2️⃣ Start the Backend
bash
Copy
Edit
cd server
npm install
Create a .env file inside server/ with your DB credentials:

ini
Copy
Edit
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_DATABASE=crud
PORT=3030
Run the server:

bash
Copy
Edit
npm start
Server runs at http://localhost:3030

3️⃣ Start the Frontend
bash
Copy
Edit
cd client
npm install
Create a .env file inside client/:

ini
Copy
Edit
VITE_API_URL=http://localhost:3030
Run the frontend:

bash
Copy
Edit
npm run dev
Frontend opens at http://localhost:5173

🧪 How to Use
🏠 Visit http://localhost:5173 in your browser

📖 View all books in the system

➕ Click "Create Book" to add a new book

✏️ Click "Edit" to update book details

🗑️ Click "Delete" to remove a book

