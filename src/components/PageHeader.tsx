import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-8"
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
      {description && <p className="text-lg text-gray-600">{description}</p>}
    </motion.div>
  );
}