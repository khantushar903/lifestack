'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Card from '@/components/Card';
import StatCard from '@/components/StatCard';
import ProgressBar from '@/components/ProgressBar';
import Modal from '@/components/Modal';
import { TrendingUp, TrendingDown, Plus, DollarSign, Wallet, PieChart } from 'lucide-react';

export default function FinancePage() {
  const [showAddTransaction, setShowAddTransaction] = useState(false);
  const [transactionData, setTransactionData] = useState({
    type: 'expense',
    category: 'food',
    amount: '',
    description: '',
    date: new Date().toISOString().split('T')[0],
  });

  const handleTransactionChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTransactionData({ ...transactionData, [name]: value });
  };

  const handleAddTransaction = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Adding transaction:', transactionData);
    setShowAddTransaction(false);
    setTransactionData({
      type: 'expense',
      category: 'food',
      amount: '',
      description: '',
      date: new Date().toISOString().split('T')[0],
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <Navbar isAuthenticated userName="John" />

      <main className="flex-1 py-8 md:py-12">
        <div className="container-responsive">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Finance Hub</h1>
              <p className="text-slate-600 dark:text-slate-400">Manage your income and expenses</p>
            </div>
            <button
              onClick={() => setShowAddTransaction(true)}
              className="btn-primary flex items-center gap-2 whitespace-nowrap"
            >
              <Plus className="w-5 h-5" />
              Add Transaction
            </button>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <StatCard
              title="Total Balance"
              value="$12,450"
              icon={<Wallet className="w-6 h-6" />}
              trend={{ value: 8, isPositive: true }}
              color="success"
            />
            <StatCard
              title="This Month Income"
              value="$5,200"
              icon={<TrendingUp className="w-6 h-6" />}
              color="success"
            />
            <StatCard
              title="This Month Spending"
              value="$1,850"
              icon={<TrendingDown className="w-6 h-6" />}
              color="warning"
            />
            <StatCard
              title="Savings Rate"
              value="64.4%"
              icon={<DollarSign className="w-6 h-6" />}
              color="primary"
            />
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {/* Transactions */}
            <Card title="Recent Transactions" className="lg:col-span-2">
              <div className="space-y-3">
                {[
                  { desc: 'Salary Deposit', amount: '+$5,200', category: 'Income', date: 'Today', type: 'income' },
                  { desc: 'Grocery Shopping', amount: '-$145.32', category: 'Food', date: 'Today', type: 'expense' },
                  { desc: 'Utilities Bill', amount: '-$320', category: 'Bills', date: 'Yesterday', type: 'expense' },
                  { desc: 'Freelance Project', amount: '+$850', category: 'Income', date: '2 days ago', type: 'income' },
                  { desc: 'Restaurant', amount: '-$62.50', category: 'Dining', date: '2 days ago', type: 'expense' },
                  { desc: 'Gym Membership', amount: '-$50', category: 'Health', date: '3 days ago', type: 'expense' },
                  { desc: 'Gas Station', amount: '-$45.99', category: 'Transport', date: '3 days ago', type: 'expense' },
                  { desc: 'Coffee', amount: '-$5.50', category: 'Food', date: '4 days ago', type: 'expense' },
                ].map((tx, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 rounded-lg bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          tx.type === 'income'
                            ? 'bg-green-100 dark:bg-green-900/30'
                            : 'bg-red-100 dark:bg-red-900/30'
                        }`}
                      >
                        {tx.type === 'income' ? (
                          <TrendingUp className={`w-5 h-5 text-green-600 dark:text-green-400`} />
                        ) : (
                          <TrendingDown className={`w-5 h-5 text-red-600 dark:text-red-400`} />
                        )}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-white">{tx.desc}</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400">{tx.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p
                        className={`font-bold ${
                          tx.type === 'income'
                            ? 'text-green-600 dark:text-green-400'
                            : 'text-slate-900 dark:text-white'
                        }`}
                      >
                        {tx.amount}
                      </p>
                      <span className="badge badge-primary text-xs">{tx.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Budget Overview */}
            <Card title="Budget Status">
              <div className="space-y-6">
                {[
                  { category: 'Food', spent: 320, limit: 500, color: 'warning' },
                  { category: 'Transport', spent: 150, limit: 200, color: 'primary' },
                  { category: 'Health', spent: 280, limit: 400, color: 'success' },
                  { category: 'Entertainment', spent: 200, limit: 250, color: 'error' },
                ].map((budget, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{budget.category}</span>
                      <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                        ${budget.spent} / ${budget.limit}
                      </span>
                    </div>
                    <ProgressBar
                      percentage={(budget.spent / budget.limit) * 100}
                      showPercentage={false}
                      color={budget.color as 'primary' | 'success' | 'warning' | 'error'}
                    />
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Category Breakdown */}
          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            {/* Spending by Category */}
            <Card title="Spending by Category">
              <div className="space-y-4">
                {[
                  { category: 'Food & Dining', amount: 450, percentage: 24 },
                  { category: 'Transport', amount: 280, percentage: 15 },
                  { category: 'Bills & Utilities', amount: 420, percentage: 23 },
                  { category: 'Entertainment', amount: 320, percentage: 17 },
                  { category: 'Health & Fitness', amount: 200, percentage: 11 },
                  { category: 'Other', amount: 180, percentage: 10 },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600">
                    <div className="flex-1">
                      <p className="font-medium text-slate-900 dark:text-white">{item.category}</p>
                      <ProgressBar percentage={item.percentage} showPercentage={false} color="primary" />
                    </div>
                    <div className="text-right ml-4">
                      <p className="font-bold text-slate-900 dark:text-white">${item.amount}</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400">{item.percentage}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Income vs Expense */}
            <Card title="Monthly Summary">
              <div className="space-y-6">
                {/* Income */}
                <div className="p-4 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-green-700 dark:text-green-300">Total Income</p>
                    <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <p className="text-3xl font-bold text-green-700 dark:text-green-300">$6,050</p>
                </div>

                {/* Expense */}
                <div className="p-4 rounded-lg bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border border-red-200 dark:border-red-800">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-red-700 dark:text-red-300">Total Expense</p>
                    <TrendingDown className="w-5 h-5 text-red-600 dark:text-red-400" />
                  </div>
                  <p className="text-3xl font-bold text-red-700 dark:text-red-300">$1,850</p>
                </div>

                {/* Net Savings */}
                <div className="p-4 rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-200 dark:border-indigo-800">
                  <p className="text-sm font-medium text-indigo-700 dark:text-indigo-300 mb-1">Net Savings</p>
                  <p className="text-3xl font-bold text-indigo-700 dark:text-indigo-300">$4,200</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      {/* Add Transaction Modal */}
      <Modal
        isOpen={showAddTransaction}
        title="Add Transaction"
        onClose={() => setShowAddTransaction(false)}
      >
        <form onSubmit={handleAddTransaction} className="space-y-4">
          {/* Type */}
          <div>
            <label className="label-form">Type</label>
            <select
              name="type"
              value={transactionData.type}
              onChange={handleTransactionChange}
              className="input-field"
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
          </div>

          {/* Category */}
          <div>
            <label className="label-form">Category</label>
            <select
              name="category"
              value={transactionData.category}
              onChange={handleTransactionChange}
              className="input-field"
            >
              <option value="food">Food & Dining</option>
              <option value="transport">Transport</option>
              <option value="bills">Bills & Utilities</option>
              <option value="entertainment">Entertainment</option>
              <option value="health">Health & Fitness</option>
              <option value="shopping">Shopping</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Amount */}
          <div>
            <label className="label-form">Amount</label>
            <input
              type="number"
              name="amount"
              value={transactionData.amount}
              onChange={handleTransactionChange}
              placeholder="0.00"
              step="0.01"
              className="input-field"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="label-form">Description</label>
            <input
              type="text"
              name="description"
              value={transactionData.description}
              onChange={handleTransactionChange}
              placeholder="Transaction details"
              className="input-field"
            />
          </div>

          {/* Date */}
          <div>
            <label className="label-form">Date</label>
            <input
              type="date"
              name="date"
              value={transactionData.date}
              onChange={handleTransactionChange}
              className="input-field"
              required
            />
          </div>

          {/* Submit */}
          <div className="flex gap-3 pt-4">
            <button type="submit" className="btn-primary flex-1">
              Add Transaction
            </button>
            <button
              type="button"
              onClick={() => setShowAddTransaction(false)}
              className="btn-secondary flex-1"
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
