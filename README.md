# 📝 Task Tracker – Full Stack Application

A full-stack **Task Tracker** web application built using **React + Vite + Tailwind CSS** on the frontend and **Node.js, Express, MongoDB** on the backend.  
The app allows users to create, manage, filter, and track tasks efficiently.

🚀 **Deployed as a single service on Render**

---

## 🔗 Live Demo

👉 Live URL : https://task-tracker-99en.onrender.com/

---

## ✨ Features

### ✅ Core Features
- Create tasks with:
  - Task title (required)
  - Task description (optional)
  - Priority (Low / Medium / High)
  - Due date (Indian date format: DD/MM/YYYY)
- Mark tasks as **Completed / Pending** using a checkbox
- Delete tasks
- Tasks persist using MongoDB

### 🎁 Bonus Features
- Filter tasks by:
  - Status (Pending / Completed)
  - Priority (Low / Medium / High)
- Sort tasks by due date
- Success & error notifications (toast messages)
- Clean UI with Tailwind CSS
- Reusable React components
- Environment variable support
- Single backend serving frontend & API

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Axios
- React Hot Toast

### Backend
- Node.js
- Express
- MongoDB (Mongoose)
- CORS
- dotenv

### Deployment
- Render (single service)
- MongoDB Atlas

---

## 📁 Project Structure
```
Task_Tracker_FullStack/
│
├── backend/
│ ├── server.js
│ ├── routes/
│ │ └── taskRoutes.js
│ ├── models/
│ │ └── Task.js
│ ├── package.json
│ 
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── services/
│ │ └── App.jsx
│ ├── index.html
│ ├── vite.config.js
│ ├── package.json
│ └── .env.production
│
└── README.md
```
---

## ⚙️ Environment Variables

### Backend (`backend/.env.example`)
MONGO_URI=your_mongodb_connection_string
PORT=5000

### Frontend (`frontend/.env.production`)
VITE_API_URL=/api

> ⚠️ Do NOT commit real `.env` files to GitHub  
> Use environment variables in Render Dashboard for production

---

## 🚀 Running the Project Locally

### 1️⃣ Clone the repository
git clone https://github.com/Devingle/Task_Tracker_FullStack.git
cd Task_Tracker_FullStack

### 2️⃣ Install backend dependencies
cd backend
npm install

### 3️⃣ Install frontend dependencies
cd ../frontend
npm install

### 4️⃣ Run backend
cd ../backend
npm start

### 5️⃣ Run frontend
cd ../frontend
npm run dev
Frontend runs on:
http://localhost:5173

Backend runs on:
http://localhost:5000

### 🌐 Deployment (Render – Single Service)
Frontend is built using Vite

Backend serves frontend static files

API available under /api/*

Render Build Command:
npm install --prefix backend &&
npm install --prefix frontend &&
npm run build --prefix frontend

Render Start Command:
node backend/server.js

### 🧠 Key Learnings
Building a full-stack MERN application

Managing frontend & backend in a single repository

Serving a React SPA from Express

Handling SPA routing in production

Debugging production-only issues

Deploying full-stack apps on Render

### 👨‍💻 Developed By
Devingle (Amit Ghanata)

### 📜 License
This project is open-source and available for learning and educational purposes.
