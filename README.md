# Analog Archive

A modern e-commerce platform for vintage analog cameras and photography equipment built with Next.js 15, MongoDB, and NextAuth.

## Features

- **Authentication System** - Secure login with NextAuth.js and MongoDB adapter
- **Product Management** - Add, view, and manage vintage camera inventory
- **Dark/Light Theme** - Smooth theme toggle with persistent preferences
- **Responsive Design** - Mobile-first design with Tailwind CSS
- **Protected Routes** - Middleware-based route protection for authenticated users
- **Form Handling** - React Hook Form with validation
- **Database** - MongoDB integration for data persistence
- **Sweet Alerts** - Beautiful notifications with SweetAlert2

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Authentication:** NextAuth.js v5
- **Database:** MongoDB with official Node.js driver
- **Styling:** Tailwind CSS with custom theme
- **Form Management:** React Hook Form
- **Icons:** React Icons
- **Notifications:** SweetAlert2

## Getting Started

### Prerequisites

- Node.js 18+ installed
- MongoDB database (local or MongoDB Atlas)
- Git

### Installation

1. Clone the repository

```bash
git clone https://github.com/Amin-ur-Rahman/analog-archive.git
cd analog-archive
```

2. Install dependencies

```bash
npm install
```

3. Create environment variables

Create a `.env.local` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

To generate a secure `NEXTAUTH_SECRET`:

```bash
openssl rand -base64 32
```

4. Run the development server

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
analog-archive/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/          # NextAuth configuration
│   │   │   ├── items/         # Items CRUD endpoints
│   │   │   └── get/           # Get items endpoint
│   │   ├── items/
│   │   │   └── add/           # Add item page
│   │   ├── login/             # Login page
│   │   ├── profile/           # User profile
│   │   ├── globals.css        # Global styles and theme
│   │   └── layout.js          # Root layout
│   ├── components/            # Reusable components
│   ├── lib/
│   │   └── connectDB.js       # MongoDB connection utility
│   └── middleware.js          # Route protection
├── .env.local                 # Environment variables
├── tailwind.config.js         # Tailwind configuration
└── package.json
```

## Environment Variables

| Variable          | Description                       |
| ----------------- | --------------------------------- |
| `MONGODB_URI`     | MongoDB connection string         |
| `NEXTAUTH_SECRET` | Secret for NextAuth.js encryption |
| `NEXTAUTH_URL`    | Base URL of your application      |

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

## Features in Detail

### Theme System

The application includes a sophisticated dark/light theme system:

- Automatic system preference detection
- Manual toggle with localStorage persistence
- Smooth transitions between themes
- Custom color palette for both modes

### Authentication

- Email/password authentication
- Session management with NextAuth.js
- Protected routes with middleware
- MongoDB adapter for user data

### Product Management

- Add new items with detailed properties
- Image URL support
- Category organization
- Stock management
- Featured items system

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Important Notes

- Ensure MongoDB v6 compatibility with `@auth/mongodb-adapter`
- Add `.npmrc` with `legacy-peer-deps=true` if needed
- Set all environment variables before deployment

## MongoDB Setup

### Local MongoDB

```bash
# Start MongoDB
mongod
```

### MongoDB Atlas

1. Create a free cluster at [mongodb.com](https://www.mongodb.com)
2. Create a database user
3. Whitelist your IP address
4. Get connection string and add to `.env.local`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Author

**Amin ur Rahman**

- GitHub: [@Amin-ur-Rahman](https://github.com/Amin-ur-Rahman)

## Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting platform
- MongoDB for database solution
- Tailwind CSS for styling utilities
