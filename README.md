# 🌍 TravelNest: Tour & Travel Planning Management System

TravelNest is a comprehensive, full-stack web application designed to streamline tour and travel management. It features a robust Role-Based Access Control (RBAC) system providing distinct, secure interfaces for both Tourists and Tour Providers. 

This project was developed as a comprehensive Summer Project, showcasing modern web development practices, RESTful API design, and cloud deployment.

---

## ✨ Key Features

### 🎒 For Tourists
- **Browse Curated Tours:** Explore a wide variety of travel packages with detailed descriptions, itineraries, and pricing.
- **Secure Booking:** Book tours with ease, specify the number of travelers, and add special requests or dietary restrictions.
- **My Bookings Dashboard:** Track pending, confirmed, and cancelled bookings in a personalized, real-time dashboard.
- **Custom Itineraries:** Request custom daily itineraries during the booking process.

### 🏢 For Tour Providers (Admins)
- **Tour Management:** Create, update, and delete tour packages seamlessly directly from the user interface.
- **Centralized Booking System:** View and manage all user bookings across the entire platform in one master dashboard.
- **Dynamic Controls:** Administrative tools are exclusively visible and accessible only to verified Tour Provider accounts.

### 🔒 Security & Architecture
- **Role-Based Access Control (RBAC):** UI elements and backend API routes are strictly protected based on the user's role (`tourist` vs `provider`). The backend automatically rejects unauthorized administrative actions.
- **JWT Authentication:** Secure, stateless user sessions managed via JSON Web Tokens.
- **Password Encryption:** Passwords are mathematically hashed and salted using `bcryptjs` before entering the database.

---

## 🛠️ Technology Stack

**Frontend:**
- React.js (Bootstrapped with Vite)
- Tailwind CSS (For responsive, modern UI design)
- React Router DOM
- Axios (Configured with global auth interceptors)

**Backend:**
- Node.js
- Express.js
- MongoDB & Mongoose (NoSQL Database architecture)
- JSON Web Tokens (JWT)

**Deployment Architecture:**
- **Frontend:** Hosted globally on Vercel
- **Backend API:** Hosted on Render web services
- **Database:** Hosted on MongoDB Atlas cloud clusters

---

## 💻 Local Setup Instructions

If you want to run this project locally on your machine, follow these steps:

### 1. Clone the repository:
```bash
git clone https://github.com/PriyangshuSaha1/Tour-and-Travel-Planning-Management-System-Project.git
cd Tour-and-Travel-Planning-Management-System-Project
```

### 2. Backend Setup:
Open a terminal and navigate to the backend folder:
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` directory and add your variables:
```env
PORT=5600
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
CLIENT_URL=http://localhost:5173
```
Start the backend server:
```bash
npm run dev
```

### 3. Frontend Setup:
Open a new terminal and navigate to the frontend folder:
```bash
cd frontend
npm install
```
Create a `.env` file in the `frontend` directory:
```env
VITE_API_URL=http://localhost:5600/api
```
Start the frontend development server:
```bash
npm run dev
```

---
*Built with ❤️ for a Summer Academic Project.*