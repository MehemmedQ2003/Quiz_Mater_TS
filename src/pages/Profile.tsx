import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Clock, BarChart } from 'lucide-react';
import PageHeader from '../components/PageHeader';

export default function Profile() {
  const stats = [
    { icon: Trophy, label: 'Quizzes Completed', value: '42' },
    { icon: Star, label: 'Average Score', value: '85%' },
    { icon: Clock, label: 'Total Time', value: '12h' },
    { icon: BarChart, label: 'Current Streak', value: '7 days' },
  ];

  const recentQuizzes = [
    { category: 'Mathematics', score: '90%', date: '2024-03-15' },
    { category: 'Science', score: '85%', date: '2024-03-14' },
    { category: 'Literature', score: '95%', date: '2024-03-13' },
  ];

  return (
    <div className="space-y-8">
      <PageHeader title="Your Profile" />

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="flex items-center space-x-4 mb-6">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="h-16 w-16 rounded-full"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">John Doe</h2>
              <p className="text-gray-600">john.doe@example.com</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Icon className="h-5 w-5 text-primary-600 mr-2" />
                    <span className="text-sm text-gray-600">{stat.label}</span>
                  </div>
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Quizzes</h3>
          <div className="space-y-4">
            {recentQuizzes.map((quiz, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{quiz.category}</p>
                  <p className="text-sm text-gray-600">{quiz.date}</p>
                </div>
                <div className="text-primary-600 font-semibold">{quiz.score}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}