# LifeStack - Your Personal Life Management Hub

A comprehensive, professional, and fully responsive web application designed to help you manage your fitness, finances, and productivity all in one beautifully designed platform.

## 🎯 Features

### 1. **Fitness & Health Module** 💪
- **Activity Logging**: Track different types of workouts (running, cycling, swimming, etc.)
- **Calorie Management**: Log daily meals and track calorie intake
- **Health Profile**: Store and update personal metrics (height, weight)
- **BMI Calculator**: Real-time BMI calculation with health status indicator
- **Workout Statistics**: Weekly activity charts and performance trends
- **Health Insights**: Progress tracking and personalized recommendations

### 2. **Finance & Budgeting Module** 💰
- **Categorized Transactions**: Organize income and expenses by categories (Food, Transport, Bills, etc.)
- **Spending History**: Detailed transaction logs with descriptions and dates
- **Financial Summaries**: Visual charts and insights into spending patterns
- **Budget Tracking**: Set and monitor budgets for different expense categories
- **Income/Expense Analytics**: Comprehensive financial overview
- **Monthly Summaries**: Track savings rate and financial progress

### 3. **Study & Productivity Hub** 📚
- **Task Management**: Create and manage study tasks with priorities and deadlines
- **Focus Timer**: Built-in Pomodoro timer (25-minute focus sessions)
- **Deadline Reminders**: Visual indicators for upcoming task deadlines
- **Study Sessions**: Track study hours by subject
- **Task Progress**: Monitor completion status and productivity metrics
- **Subject Organization**: Organize tasks by subject or course

### 4. **Core System Features** 🎛️
- **User Authentication**: Signup and login with secure password handling
- **Personal Dashboard**: Centralized hub with quick overview of all life areas
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark Mode Support**: Full dark mode implementation with smooth transitions
- **Real-time Updates**: Modals and interactive components for seamless UX

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Navigate to project directory**:
```bash
cd lifestack
```

2. **Install dependencies**:
```bash
npm install
```

3. **Run the development server**:
```bash
npm run dev
```

4. **Open your browser**:
Navigate to `http://localhost:3000`

## 📁 Project Structure

```
lifestack/
├── src/
│   ├── app/
│   │   ├── auth/
│   │   │   ├── login/page.tsx          # Login page
│   │   │   └── signup/page.tsx         # Signup page
│   │   ├── dashboard/page.tsx          # Main dashboard
│   │   ├── fitness/page.tsx            # Fitness module
│   │   ├── finance/page.tsx            # Finance module
│   │   ├── study/page.tsx              # Study module
│   │   ├── settings/page.tsx           # Settings page
│   │   ├── globals.css                 # Global styles with Tailwind
│   │   └── layout.tsx                  # Root layout
│   ├── components/
│   │   ├── Navbar.tsx                  # Navigation component
│   │   ├── StatCard.tsx                # Statistics card component
│   │   ├── Card.tsx                    # Reusable card component
│   │   ├── Modal.tsx                   # Modal dialog component
│   │   └── ProgressBar.tsx             # Progress indicator component
│   └── lib/
│       └── (utility functions)
├── public/                              # Static assets
├── package.json                         # Dependencies
├── tsconfig.json                        # TypeScript configuration
└── README.md                            # This file
```

## 🎨 Design & UI/UX

### Color Scheme
- **Primary**: Indigo (#6366f1) - Main brand color
- **Success**: Green (#10b981) - Positive actions
- **Warning**: Amber (#f59e0b) - Caution/alerts
- **Error**: Red (#ef4444) - Destructive actions

### Responsive Design
- Mobile-first approach
- Touch-friendly interfaces
- Optimized typography
- Flexible grid layouts
- Collapsible navigation
- Smooth animations

## 🔧 Technology Stack

- **Framework**: Next.js 16.2.2
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React 0.344.0
- **Runtime**: React 19.2.4

## 📱 Key Pages

| Route | Purpose |
|-------|---------|
| `/` | Landing page with features |
| `/auth/login` | User login |
| `/auth/signup` | User registration |
| `/dashboard` | Main overview |
| `/fitness` | Health tracking |
| `/finance` | Budget management |
| `/study` | Task & focus management |
| `/settings` | User preferences |

## 🚀 Build & Deploy

```bash
npm run build
npm run start
```

Deploy to [Vercel](https://vercel.com) for best results.

## 📝 Notes for Backend Integration

- Authentication endpoints ready to be connected
- Modal forms prepared for API submissions
- State management structure in place
- Error handling templates provided

## 📞 Support

For issues or questions, refer to the in-app help section or documentation.
