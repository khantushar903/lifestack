'use client';

import Link from 'next/link';
import { ArrowRight, Activity, TrendingUp, BookOpen, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="border-b border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container-responsive flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              LifeStack
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/auth/login" className="btn-secondary text-sm">
              Sign In
            </Link>
            <Link href="/auth/signup" className="btn-primary text-sm">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 container-responsive flex items-center justify-center py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center animate-slideUp">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Manage Your <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Complete Life</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Track your fitness goals, manage your finances, and boost your productivity—all in one beautiful, intuitive platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup" className="btn-primary flex items-center justify-center gap-2">
              Start Free
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="#features" className="btn-outline flex items-center justify-center gap-2">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 bg-white/50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-slate-600 dark:text-slate-400">Everything you need to succeed</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="card-elevated p-6 hover:shadow-xl animate-slideUp">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-500 flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Fitness Tracking</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Track workouts, monitor BMI, and log daily calories
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card-elevated p-6 hover:shadow-xl animate-slideUp" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-600 to-emerald-500 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Finance Management</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Categorized transactions and spending insights
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card-elevated p-6 hover:shadow-xl animate-slideUp" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Study Hub</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Task management with deadlines and focus timer
              </p>
            </div>

            {/* Feature 4 */}
            <div className="card-elevated p-6 hover:shadow-xl animate-slideUp" style={{ animationDelay: '0.3s' }}>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-600 to-orange-500 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Real-time Insights</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Comprehensive dashboard with actionable data
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24">
        <div className="container-responsive">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-indigo-600">10K+</p>
              <p className="text-slate-600 dark:text-slate-400 mt-2">Active Users</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-purple-600">50M+</p>
              <p className="text-slate-600 dark:text-slate-400 mt-2">Logs Tracked</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-pink-600">99.9%</p>
              <p className="text-slate-600 dark:text-slate-400 mt-2">Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container-responsive text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Life?</h2>
          <p className="text-lg text-white/80 mb-8">Join thousands managing their health, wealth, and productivity</p>
          <Link href="/auth/signup" className="inline-flex items-center px-8 py-3 rounded-lg bg-white text-indigo-600 font-semibold hover:bg-slate-100 transition-all duration-200 gap-2">
            Start Your Journey
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 py-12 mt-auto">
        <div className="container-responsive">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold">L</span>
                </div>
                <span className="font-bold">LifeStack</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Your personal life management hub</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Fitness</a></li>
                <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Finance</a></li>
                <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Study</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">About</a></li>
                <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Blog</a></li>
                <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Privacy</a></li>
                <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 dark:border-slate-700 pt-8 text-center text-slate-600 dark:text-slate-400 text-sm">
            <p>&copy; 2026 LifeStack. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
