import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Trophy, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-16">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-8"
      >
        <h1 className="text-5xl font-bold text-gray-900">
          Test Your Knowledge with{' '}
          <span className="text-primary-600">QuizMaster</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Challenge yourself with our diverse range of quizzes. Learn, compete, and track your progress!
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/categories"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
          >
            Start Quiz <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center px-6 py-3 border border-primary-600 text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50"
          >
            Learn More
          </Link>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid md:grid-cols-3 gap-8"
      >
        {[
          {
            icon: Brain,
            title: 'Multiple Categories',
            description: 'Choose from various topics that interest you',
          },
          {
            icon: Trophy,
            title: 'Track Progress',
            description: 'Monitor your performance and improvement',
          },
          {
            icon: Clock,
            title: 'Timed Quizzes',
            description: 'Challenge yourself with time-based questions',
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <feature.icon className="h-12 w-12 text-primary-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-primary-50 rounded-2xl p-8 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
        <p className="text-lg text-gray-600 mb-6">
          Join thousands of users who are already improving their knowledge with QuizMaster.
        </p>
        <Link
          to="/signup"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
        >
          Sign Up Now <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </motion.section>
    </div>
  );
}