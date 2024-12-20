import React from 'react';
import { motion } from 'framer-motion';
import { Book, Code, Globe, Calculator, Microscope, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Category } from '../types';

const categories: Category[] = [
  {
    id: '1',
    name: 'Literature',
    description: 'Test your knowledge of classic and modern literature',
    icon: 'Book',
    questionsCount: 20,
  },
  {
    id: '2',
    name: 'Programming',
    description: 'Challenge yourself with coding concepts and problems',
    icon: 'Code',
    questionsCount: 25,
  },
  {
    id: '3',
    name: 'Geography',
    description: 'Explore countries, capitals, and world geography',
    icon: 'Globe',
    questionsCount: 30,
  },
  {
    id: '4',
    name: 'Mathematics',
    description: 'Solve mathematical problems and equations',
    icon: 'Calculator',
    questionsCount: 15,
  },
  {
    id: '5',
    name: 'Science',
    description: 'Discover the wonders of physics, chemistry, and biology',
    icon: 'Microscope',
    questionsCount: 35,
  },
  {
    id: '6',
    name: 'Arts',
    description: 'Test your knowledge of art history and famous artists',
    icon: 'Palette',
    questionsCount: 22,
  },
];

const iconComponents = {
  Book,
  Code,
  Globe,
  Calculator,
  Microscope,
  Palette,
};

export default function Categories() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Quiz Categories</h1>
        <p className="text-lg text-gray-600">Choose a category to start your quiz journey</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {categories.map((category, index) => {
          const Icon = iconComponents[category.icon as keyof typeof iconComponents];
          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-100 rounded-lg">
                  <Icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-900">{category.name}</h3>
              </div>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {category.questionsCount} questions
                </span>
                <Link
                  to={`/quiz/${category.id}`}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
                >
                  Start Quiz
                </Link>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}