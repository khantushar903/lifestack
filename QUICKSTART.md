# LifeStack Frontend - Quick Start Guide

## 🚀 Get Running in 60 Seconds

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

### Step 3: Open Browser
Navigate to: **http://localhost:3000**

## 📍 What You'll See

1. **Landing Page** - Professional homepage with features
2. **Navigation** - Click "Get Started" to explore
3. **Auth Pages** - Try login/signup flows
4. **Dashboard** - Overview of all modules
5. **Modules** - Fitness, Finance, Study hubs

## 🔗 Page URLs

|URL|Purpose|
|---|-------|
|`/`|Landing page|
|`/auth/login`|Login page|
|`/auth/signup`|Signup page|
|`/dashboard`|Main dashboard|
|`/fitness`|Fitness tracking|
|`/finance`|Finance management|
|`/study`|Study & tasks|
|`/settings`|User settings|

## 🛠️ Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Start production build
npm run start

# Run linter
npm run lint
```

## 📂 File Organization

```
src/
├── app/                 # Pages
├── components/          # Reusable components
└── lib/                # Utilities (expand as needed)
```

## 🎨 Using Components

### Import components:
```tsx
import Card from '@/components/Card';
import StatCard from '@/components/StatCard';
import Modal from '@/components/Modal';
import ProgressBar from '@/components/ProgressBar';
import Navbar from '@/components/Navbar';
```

### Example usage:
```tsx
<Card title="My Card">
  <p>Content here</p>
</Card>

<StatCard
  title="Stat Title"
  value="123"
  icon={<IconComponent />}
  color="primary"
/>

<ProgressBar percentage={75} label="Progress" />
```

## 🎯 Styling Guide

### Use Tailwind Classes:
```tsx
// Buttons
<button className="btn-primary">Primary</button>
<button className="btn-secondary">Secondary</button>
<button className="btn-outline">Outline</button>

// Containers
<div className="card-elevated">Elevated card</div>
<div className="card-glass">Glass effect</div>

// Text
<p className="text-muted">Muted text</p>

// Badges
<span className="badge badge-primary">Badge</span>
<span className="badge badge-success">Success</span>
```

## 🔌 Adding an API Call

```tsx
import { useState } from 'react';

export default function MyComponent() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/endpoint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      const result = await response.json();
      // Handle success
    } catch (error) {
      // Handle error
    } finally {
      setLoading(false);
    }
  };

  return <form onSubmit={handleSubmit}>{/* form */}</form>;
}
```

## 💾 Common Patterns

### Modal + Form:
```tsx
const [showModal, setShowModal] = useState(false);
const [formData, setFormData] = useState({});

return (
  <>
    <button onClick={() => setShowModal(true)}>Open</button>
    
    <Modal isOpen={showModal} title="Title" onClose={() => setShowModal(false)}>
      <form onSubmit={handleSubmit}>{/* form fields */}</form>
    </Modal>
  </>
);
```

### State Management:
```tsx
const [data, setData] = useState({
  field1: '',
  field2: ''
});

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setData({ ...data, [name]: value });
};
```

## 🎨 Color System

| Name | Hex | Use |
|------|-----|-----|
| Primary | #6366f1 | Main actions |
| Success | #10b981 | Positive |
| Warning | #f59e0b | Caution |
| Error | #ef4444 | Destructive |
| Secondary | #8b5cf6 | Alternative |
| Accent | #06b6d4 | Highlights |

## 📱 Responsive Tips

```tsx
// Mobile first
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  {/* Stacks on mobile, 2 cols on tablet, 4 on desktop */}
</div>

// Hide/show elements
<div className="hidden md:block">Desktop only</div>
<div className="md:hidden">Mobile only</div>

// Responsive text
<h1 className="text-2xl md:text-4xl">Heading</h1>
```

## 🔍 Debugging Tips

1. **Check TypeScript errors** - VS Code will show them
2. **Browser DevTools** - F12 for debugging
3. **Console logs** - Use `console.log()` in components
4. **React DevTools** - Extension for React debugging
5. **Network tab** - Check API calls

## 📦 Adding New Dependencies

```bash
npm install package-name
```

Already included:
- ✅ Next.js 16.2.2
- ✅ React 19.2.4
- ✅ TypeScript 5
- ✅ Tailwind CSS 4
- ✅ Lucide React 0.344.0

## 🚀 Creating New Page

1. Create folder: `src/app/new-page/`
2. Create file: `src/app/new-page/page.tsx`
3. Add code:

```tsx
'use client';

import Navbar from '@/components/Navbar';

export default function NewPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <Navbar isAuthenticated />
      {/* Your content */}
    </div>
  );
}
```

## 🧩 Creating New Component

1. Create file: `src/components/MyComponent.tsx`
2. Add code:

```tsx
interface MyComponentProps {
  title: string;
  children: React.ReactNode;
}

export default function MyComponent({ title, children }: MyComponentProps) {
  return (
    <div className="card-elevated p-6">
      <h3 className="font-bold">{title}</h3>
      {children}
    </div>
  );
}
```

3. Import and use:

```tsx
import MyComponent from '@/components/MyComponent';

<MyComponent title="Example">
  Content here
</MyComponent>
```

## 📚 Best Practices

- ✅ Use TypeScript interfaces for props
- ✅ Use `'use client'` for interactive components
- ✅ Keep components small and focused
- ✅ Reuse components from `src/components/`
- ✅ Use Tailwind classes for styling
- ✅ Mobile-first responsive design
- ✅ Add proper error handling
- ✅ Use semantic HTML

## 🔗 Resources

- **Tailwind Docs**: https://tailwindcss.com
- **Next.js Docs**: https://nextjs.org/docs
- **React Docs**: https://react.dev
- **Lucide Icons**: https://lucide.dev

## 💡 Tips & Tricks

- Icons from lucide-react: `import { IconName } from 'lucide-react'`
- Animations: Use `.animate-fadeIn`, `.animate-slideUp`, `.animate-slideInLeft`
- Colors: Use `from-indigo-600 to-purple-600` for gradients
- Dark mode: Prefix with `dark:` (e.g., `dark:bg-slate-800`)
- Spacing: Use `mb-4`, `p-6`, `gap-3` etc.

## ⚡ Performance Tips

- Use `next/link` for internal navigation
- Lazy load images with `next/image`
- Split large components
- Use React.memo for expensive components
- Avoid inline function definitions

## 🐛 Common Issues & Solutions

### Port 3000 in use
```bash
# Use different port
npm run dev -- -p 3001
```

### TypeScript errors
- Check imports are correct
- Ensure props have proper types
- Check file names match exports

### Styling not applying
- Clear cache: Delete `.next` folder
- Restart dev server
- Check class names are correct

---

**Happy coding! 🚀**
