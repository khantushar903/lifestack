# LifeStack Frontend - Quick Reference Guide

## 🎨 Component Library

### **Navbar Component** (`src/components/Navbar.tsx`)
Navigation bar with responsive mobile menu. Supports authenticated and non-authenticated states.

```tsx
<Navbar isAuthenticated={true} userName="John" />
```

### **StatCard Component** (`src/components/StatCard.tsx`)
Displays statistics with icon, value, title, and optional trend indicator.

```tsx
<StatCard
  title="Total Steps"
  value="8,234"
  icon={<Activity className="w-6 h-6" />}
  trend={{ value: 12, isPositive: true }}
  color="primary"
/>
```

### **Card Component** (`src/components/Card.tsx`)
Reusable container component with optional title and hover effects.

```tsx
<Card title="My Title" hoverable>
  {/* Content */}
</Card>
```

### **Modal Component** (`src/components/Modal.tsx`)
Dialog box for forms or important information.

```tsx
<Modal isOpen={isOpen} title="Title" onClose={handleClose}>
  {/* Content */}
</Modal>
```

### **ProgressBar Component** (`src/components/ProgressBar.tsx`)
Visual progress indicator with customizable colors.

```tsx
<ProgressBar percentage={65} label="Progress" color="success" />
```

## 🎯 Styling Classes

### Utility Classes (defined in globals.css)
- `.container-responsive` - Max-width container with responsive padding
- `.btn-primary` - Primary action button
- `.btn-secondary` - Secondary action button
- `.btn-outline` - Outlined button style
- `.input-field` - Styled form input
- `.label-form` - Form label styling
- `.card-elevated` - Card with shadow elevation
- `.card-glass` - Glassmorphism card effect
- `.badge` - Badge component (use with color variants)
- `.badge-primary`, `.badge-success`, `.badge-warning`, `.badge-error`

### Color Utilities
- `.gradient-primary` - Indigo to purple gradient
- `.gradient-success` - Green to emerald gradient
- `.gradient-warning` - Amber to orange gradient
- `.text-muted` - Muted text color

### Animations
- `.animate-fadeIn` - Fade in animation
- `.animate-slideUp` - Slide up animation
- `.animate-slideInLeft` - Slide in from left animation

## 📊 Data Structure Examples

### Workout Log Format
```ts
{
  type: 'running',
  duration: 45,
  calories: 520,
  date: '2024-01-15'
}
```

### Transaction Format
```ts
{
  type: 'expense' | 'income',
  category: 'food' | 'transport' | 'bills',
  amount: 49.99,
  description: 'Grocery shopping',
  date: '2024-01-15'
}
```

### Task Format
```ts
{
  title: 'Math Problem Set',
  subject: 'math',
  priority: 'high' | 'medium' | 'low',
  dueDate: '2024-01-20',
  completed: false,
  description: 'Chapter 5-8'
}
```

## 🔐 Authentication Flow

1. **Signup Page** (`/auth/signup`)
   - User creates account
   - Form validation
   - Redirects to dashboard

2. **Login Page** (`/auth/login`)
   - User enters credentials
   - Remember me option
   - Password recovery link
   - Redirects to dashboard

3. **Protected Pages**
   - Dashboard, Fitness, Finance, Study pages show authenticated UI
   - Navbar shows user name and logout option

## 📱 Responsive Breakpoints

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

Use Tailwind's responsive prefixes:
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-4">
```

## 🎨 Color Palette

| Use Case | Color | Hex |
|----------|-------|-----|
| Primary | Indigo | #6366f1 |
| Success | Green | #10b981 |
| Warning | Amber | #f59e0b |
| Error | Red | #ef4444 |
| Secondary | Purple | #8b5cf6 |
| Accent | Cyan | #06b6d4 |

## 📦 Used Icons (Lucide React)

- `Activity` - Fitness/workouts
- `TrendingUp` - Finance/growth
- `BookOpen` - Study/education
- `Plus` - Add actions
- `Trash2` - Delete actions
- `Menu`, `X` - Mobile menu
- `Check`, `Circle` - Checkboxes
- `LogOut` - Logout
- And many more...

## 🔄 State Management Example

```tsx
const [showModal, setShowModal] = useState(false);
const [formData, setFormData] = useState({
  field1: '',
  field2: ''
});

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // API call here
  setShowModal(false);
};
```

## 🚀 Adding New Features

### 1. Create New Page
```tsx
// src/app/new-feature/page.tsx
'use client';

import Navbar from '@/components/Navbar';
import Card from '@/components/Card';

export default function NewFeaturePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <Navbar isAuthenticated />
      {/* Your content */}
    </div>
  );
}
```

### 2. Create New Component
```tsx
// src/components/NewComponent.tsx
interface Props {
  title: string;
  children: React.ReactNode;
}

export default function NewComponent({ title, children }: Props) {
  return (
    <div className="card-elevated p-6">
      <h3 className="font-bold text-lg mb-4">{title}</h3>
      {children}
    </div>
  );
}
```

## 🔗 Navigation Links

All navigations use `next/link` for optimized performance:
```tsx
import Link from 'next/link';

<Link href="/fitness" className="btn-primary">
  Go to Fitness
</Link>
```

## 📝 Form Patterns

All forms follow this pattern:
1. State for form data
2. Change handler for updates
3. Submit handler for API calls
4. Modal for display (optional)

## 🎓 Best Practices

- Use semantic HTML
- Keep components DRY (Don't Repeat Yourself)
- Use TypeScript interfaces for props
- Apply Tailwind classes for styling
- Use responsive classes for mobile optimization
- Add 'use client' to interactive components
- Handle loading and error states
- Validate form inputs

## 🔄 API Integration Ready

The frontend is structured to easily connect to backend APIs:
- Form data is console.logged (ready for API calls)
- Modal forms prepared for submission
- Error handling templates available
- Authentication flow ready

## 📞 Need Help?

1. Check the component examples in this guide
2. Review existing pages for patterns
3. Use Tailwind CSS documentation: tailwindcss.com
4. Check Lucide React icons: lucide.dev
5. Next.js documentation: nextjs.org/docs
