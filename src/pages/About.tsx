import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, BookOpen } from 'lucide-react';
import PageHeader from '../components/PageHeader';

export default function About() {
  const features = [
    {
      icon: BookOpen,
      title: 'Comprehensive Learning',
      description: 'Access a vast library of quizzes across multiple subjects and difficulty levels.'
    },
    {
      icon: Target,
      title: 'Personalized Goals',
      description: 'Set and track your learning objectives with detailed progress analytics.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Join a community of learners and share your knowledge and experiences.'
    },
    {
      icon: Award,
      title: 'Achievement System',
      description: 'Earn badges and certificates as you master different topics and skills.'
    }
  ];

  return (
    <div className="space-y-12">
      <PageHeader
        title="About QuizMaster"
        description="Empowering learners through interactive quizzes and comprehensive knowledge assessment"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid md:grid-cols-2 gap-8"
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-100 rounded-lg">
                  <Icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-primary-50 rounded-2xl p-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          At QuizMaster, we believe in making learning engaging and accessible to everyone. Our platform
          is designed to help you test and improve your knowledge through interactive quizzes, while
          tracking your progress and celebrating your achievements. Whether you're a student, professional,
          or lifelong learner, QuizMaster is here to support your educational journey.
        </p>
      </motion.section>
    </div>
  );
}