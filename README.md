# Employee Transportation Service 🚐

A full-stack web application providing professional employee transportation services for businesses. Built with Next.js frontend and Express.js backend with MongoDB integration.

## 🌟 Features

- **Professional Landing Page** with responsive design
- **Contact Form** with validation and real-time submission
- **Service Showcase** - Employee shuttles, corporate cars, airport transfers, event transportation  
- **Real-time Tracking Features** display
- **Admin Dashboard** for viewing contact submissions
- **REST API** with Swagger documentation
- **MongoDB Integration** for data persistence
- **Modern UI/UX** with Tailwind CSS and Framer Motion animations

## 🛠 Tech Stack

### Frontend
- **Next.js 14** - React framework
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Hook Form + Zod** - Form handling and validation
- **Axios** - HTTP client

### Backend
- **Express.js** - Node.js web framework
- **MongoDB/Mongoose** - Database and ODM
- **Swagger** - API documentation
- **Joi** - Data validation
- **Morgan** - HTTP request logging
- **CORS** - Cross-origin resource sharing

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB database connection string

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd employee-transport-service
```

2. **Install dependencies**
```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

3. **Environment Setup**
```bash
# In the backend directory, create .env file
cd backend
cp .env.example .env
```

Edit `.env` file with your configuration:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
NODE_ENV=development
```

4. **Start the application**

**Option 1: Start both frontend and backend separately**
```bash
# Start backend (from backend directory)
npm run dev

# Start frontend (from frontend directory)  
npm run dev
```

**Option 2: Start from root directory**
```bash
# Start backend
cd backend && npm start &

# Start frontend
cd frontend && npm run dev
```

The application will be available at:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Documentation**: http://localhost:5000/api-docs

## 📁 Project Structure

```
├── backend/
│   ├── config/
│   │   ├── database.js         # MongoDB connection
│   │   └── swagger.js          # Swagger configuration
│   ├── controllers/
│   │   └── contactController.js # Contact form logic
│   ├── middleware/
│   │   └── errorHandler.js     # Error handling middleware
│   ├── models/
│   │   ├── ContactSubmission.js # Mongoose model
│   │   └── ContactSubmission.schema.json
│   ├── routes/
│   │   └── contactRoutes.js    # API routes
│   └── server.js               # Express server setup
├── frontend/
│   ├── components/
│   │   ├── About.jsx           # About section
│   │   ├── ContactForm.jsx     # Contact form component
│   │   ├── Features.jsx        # Features section
│   │   ├── Footer.jsx          # Footer component
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Hero.jsx            # Hero section
│   │   ├── MegaMenu.jsx        # Dropdown menu
│   │   └── Services.jsx        # Services showcase
│   ├── pages/
│   │   ├── _app.jsx            # Next.js app wrapper
│   │   ├── index.jsx           # Home page
│   │   └── submissions.jsx     # Admin submissions view
│   └── styles/
│       └── globals.css         # Global styles
└── README.md
```

## 🔗 API Endpoints

### Contact Submissions
- `POST /api/contact` - Submit contact form
- `GET /api/contact/submissions` - Get all submissions (admin)
- `GET /api/contact/stats` - Get submission statistics

### Documentation
- `GET /api-docs` - Swagger API documentation

## 🎯 Services Offered

1. **Employee Shuttles** - Daily commuter transportation
2. **Corporate Cars** - Executive and business travel
3. **Airport Transfers** - Professional airport transportation
4. **Event Transportation** - Special events and conferences

## 🔧 Configuration

### Frontend Configuration (`frontend/next.config.js`)
```javascript
const nextConfig = {
  reactStrictMode: true,
  env: {
    BACKEND_URL: process.env.BACKEND_URL || 'http://localhost:5000'
  }
}
```

### Backend Configuration
- **Port**: 5000 (configurable via .env)
- **CORS**: Enabled for frontend domain
- **Morgan**: HTTP request logging
- **Swagger**: Available at `/api-docs`

## 📱 Responsive Design

The application is fully responsive and works across:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)  
- Mobile (320px - 767px)

## 🚀 Deployment

### Replit Deployment
This project is optimized for Replit deployment:

1. **Configure run commands**:
   - Backend: `cd backend && npm start`
   - Frontend: `cd frontend && npm start`

2. **Environment variables**: Set up in Replit Secrets
   - `MONGODB_URI`
   - `PORT` (optional, defaults to 5000)

---

**Transportation Service** - Professional employee transportation solutions for modern businesses.
