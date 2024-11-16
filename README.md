# Hotel Reservation System

A modern hotel reservation system built with Next.js 14, featuring a sleek UI and robust functionality for managing hotel bookings.

## 🚀 Features

### Hotel Management
- Hotel listing and details
- Room management
- Room availability checking
- Real-time booking system

### Booking System
- Date range selection with React Day Picker
- Room type selection
- Booking confirmation
- Booking history
- Booking management

### User Interface
- Responsive design
- Dark/Light mode toggle
- Toast notifications
- Loading states
- Form validation with Zod
- Error handling
- Mobile-friendly interface
- Accessible components with Radix UI

### Components
- Custom Navigation Menu
- User Avatar
- Modal Dialogs
- Toast Notifications
- Form Controls
- Dropdown Menus
- Cards
- Tabs
- Tooltips
- Breadcrumbs
- Carousels

## 🛠 Technologies Used

### Frontend
- Next.js 14 with App Router
- React 18
- TypeScript
- Tailwind CSS
- Radix UI Components
- React Hook Form
- Zod Validation

### Backend
- Prisma ORM with MongoDB
- Redis (ioredis) for caching
- Next.js API Routes
- bcryptjs for password hashing
- NextAuth.js for authentication

## 🏗 Project Structure

├── app/ # Next.js app directory
│ ├── api/ # API routes
│ ├── auth/ # Authentication pages
│ └── (routes)/ # App routes
├── components/ # React components
│ ├── ui/ # UI components
│ └── providers/ # Context providers
├── lib/ # Utility functions
│ ├── prisma.ts # Prisma client
│ └── utils.ts # Helper functions
├── prisma/ # Prisma configuration
│ └── schema.prisma # Database schema
└── public/ # Static assets

## 🚀 Installation

1. Clone the repository:

git clone https://github.com/yourusername/hotel-reservation-system.git

2. Install dependencies:

cd hotel-reservation-system

npm install

3. Set up environment variables:

Create a `.env.local` file and add:

```env
DATABASE_URL="mongodb://localhost:27017/hotel-reservation"
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
REDIS_URL=redis://localhost:6379
```

4. Initialize Prisma:

```bash
# Generate Prisma Client
npm run prisma:generate

# Push schema to database
npm run prisma:push
```

5. Start the development server:

```bash
npm run dev
```

### 🐳 Using Docker

1. Build and start the containers:

```bash
# Build the containers
npm run docker:build

# Start the services
npm run docker:dev
```

2. Stop the containers:

```bash
npm run docker:down
```

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint        # Run ESLint

# Prisma
npm run prisma:generate  # Generate Prisma Client
npm run prisma:push      # Push schema to database
npm run prisma:studio    # Open Prisma Studio

# Docker
npm run docker:dev    # Start Docker development environment
npm run docker:build  # Build Docker containers
npm run docker:down   # Stop Docker containers
```

## 🔒 Authentication

The system uses NextAuth.js for authentication with the following features:
- Email/Password authentication
- Role-based authorization (User, Manager, Admin)
- Protected API routes
- Secure session management

## 💾 Database Schema

The application uses Prisma with MongoDB and includes the following models:
- User
- Hotel
- Room
- Booking
- Review

For detailed schema information, check `prisma/schema.prisma`.

## 🚀 Deployment

The application can be deployed to any platform that supports Node.js. Recommended platforms:
- Vercel
- Railway
- DigitalOcean
- AWS

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - Initial work - [YourGithub](https://github.com/yourusername)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for the deployment platform
- MongoDB for the database
- All contributors who have helped this project grow

```

This README now:
1. Reflects the Prisma migration
2. Includes comprehensive installation instructions
3. Details the project structure
4. Lists all available scripts
5. Provides clear deployment guidance
6. Maintains all existing feature documentation
7. Includes sections for contributing and acknowledgments

Remember to:
1. Replace `yourusername` with your actual GitHub username
2. Update the license section if you're using a different license
3. Add your name and GitHub profile in the Authors section
4. Customize the acknowledgments as needed

