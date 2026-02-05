# 💰 SmartExpense - Personal Finance Tracker

A full-stack web application for tracking personal income and expenses with beautiful charts, analytics, and cloud data storage.

![SmartExpense Dashboard](https://img.shields.io/badge/Status-Active-brightgreen)
![MongoDB](https://img.shields.io/badge/Database-MongoDB%20Atlas-green)
![React](https://img.shields.io/badge/Frontend-React%2018-blue)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green)

## 🚀 Features

### 💼 User Management
- **User Registration & Authentication** with JWT tokens
- **Profile Management** with image upload support
- **Secure Password Hashing** using bcrypt

### 📊 Financial Tracking
- **Income Tracking** - Record multiple income sources
- **Expense Management** - Categorize and track expenses
- **Real-time Dashboard** with financial overview
- **Interactive Charts** using Recharts library
- **Date-based Filtering** and sorting

### 📈 Analytics & Reports
- **Visual Charts** - Bar charts, line charts, and pie charts
- **Financial Overview** - Total balance, income, and expenses
- **Last 30/60 Days Analysis** - Recent transaction trends
- **Excel Export** - Download income and expense reports

### 🎨 Modern UI/UX
- **Responsive Design** - Works on desktop and mobile
- **Tailwind CSS** - Modern and clean interface
- **React Hot Toast** - Beautiful notifications
- **Emoji Picker** - Fun category icons
- **Dark/Light Theme Support**

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **Recharts** - Chart library for data visualization
- **React Hot Toast** - Toast notifications
- **Moment.js** - Date manipulation

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB Atlas** - Cloud database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt** - Password hashing
- **Multer** - File upload handling
- **XLSX** - Excel file generation
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
SmartExpense/
├── backend/                 # Node.js backend
│   ├── config/             # Database configuration
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Custom middleware
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── upload/            # File uploads
│   ├── .env               # Environment variables
│   ├── server.js          # Main server file
│   └── package.json       # Backend dependencies
├── frontend/
│   └── expense-tracker/    # React frontend
│       ├── src/
│       │   ├── components/ # Reusable components
│       │   ├── pages/     # Page components
│       │   ├── context/   # React context
│       │   ├── hooks/     # Custom hooks
│       │   └── utils/     # Utility functions
│       ├── public/        # Static assets
│       └── package.json   # Frontend dependencies
└── README.md              # Project documentation
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Kamran4074/Expense-Tracker.git
   cd Expense-Tracker
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install backend dependencies
   cd backend
   npm install
   
   # Install frontend dependencies
   cd ../frontend/expense-tracker
   npm install
   ```

3. **Environment Setup**
   
   Create `.env` file in the `backend` directory:
   ```env
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/smartexpense
   PORT=5000
   CLIENT_URL=http://localhost:5173
   JWT_SECRET=your_jwt_secret_key_here
   ```

4. **Run the application**
   
   **Backend (Terminal 1):**
   ```bash
   cd backend
   npm run dev
   ```
   
   **Frontend (Terminal 2):**
   ```bash
   cd frontend/expense-tracker
   npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## 📱 Usage

1. **Register/Login** - Create an account or login with existing credentials
2. **Dashboard** - View your financial overview with charts and statistics
3. **Add Income** - Record income from various sources
4. **Track Expenses** - Categorize and monitor your spending
5. **View Analytics** - Analyze spending patterns with interactive charts
6. **Export Data** - Download Excel reports for your records

## 🔧 API Endpoints

### Authentication
- `POST /api/v1/auth/register` - User registration
- `POST /api/v1/auth/login` - User login
- `GET /api/v1/auth/getUser` - Get user info
- `POST /api/v1/auth/upload-image` - Upload profile image

### Income Management
- `POST /api/v1/income/add` - Add income
- `GET /api/v1/income/get` - Get all income
- `DELETE /api/v1/income/:id` - Delete income
- `GET /api/v1/income/downloadexcel` - Download income Excel

### Expense Management
- `POST /api/v1/expense/add` - Add expense
- `GET /api/v1/expense/get` - Get all expenses
- `DELETE /api/v1/expense/:id` - Delete expense
- `GET /api/v1/expense/downloadexcel` - Download expense Excel

### Dashboard
- `GET /api/v1/dashboard` - Get dashboard data

## 🔒 Security Features

- **JWT Authentication** - Secure token-based authentication
- **Password Hashing** - Bcrypt for secure password storage
- **CORS Protection** - Cross-origin request handling
- **Input Validation** - Server-side data validation
- **File Upload Security** - Restricted file types and sizes

## 🌟 Key Components

### Frontend Components
- **Dashboard** - Financial overview with charts
- **Income/Expense Forms** - Add and manage transactions
- **Charts** - Bar, line, and pie charts for data visualization
- **Authentication** - Login and registration forms
- **Profile Management** - User profile with image upload

### Backend Features
- **RESTful API** - Clean and organized API structure
- **Database Models** - User, Income, and Expense models
- **File Handling** - Image upload and Excel generation
- **Error Handling** - Comprehensive error management

## 📊 Database Schema

### User Model
```javascript
{
  fullName: String,
  email: String (unique),
  password: String (hashed),
  profileImageUrl: String,
  timestamps: true
}
```

### Income Model
```javascript
{
  userId: ObjectId (ref: User),
  icon: String,
  source: String,
  amount: Number,
  date: Date,
  timestamps: true
}
```

### Expense Model
```javascript
{
  userId: ObjectId (ref: User),
  icon: String,
  category: String,
  amount: Number,
  date: Date,
  timestamps: true
}
```

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)
1. Build the frontend: `npm run build`
2. Deploy the `dist` folder to your hosting platform

### Backend Deployment (Heroku/Railway)
1. Set environment variables on your hosting platform
2. Deploy the backend folder
3. Update the `CLIENT_URL` in your environment variables

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Kamran**
- GitHub: [@Kamran4074](https://github.com/Kamran4074)
- Email: kamran@example.com

## 🙏 Acknowledgments

- React team for the amazing framework
- MongoDB for the excellent database service
- Tailwind CSS for the utility-first CSS framework
- All the open-source contributors who made this project possible

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact me directly.

---

⭐ **Star this repository if you found it helpful!**