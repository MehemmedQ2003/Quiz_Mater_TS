import React from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
  icon?: React.ReactNode;
  href?: string;
}

export default function Button({
  children,
  variant = 'primary',
  isLoading,
  icon,
  href,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors";
  const variants = {
    primary: "border-transparent text-white bg-primary-600 hover:bg-primary-700 focus:ring-primary-500",
    secondary: "border-primary-600 text-primary-600 bg-white hover:bg-primary-50 focus:ring-primary-500"
  };

  const classes = clsx(
    baseStyles,
    variants[variant],
    isLoading && "opacity-50 cursor-not-allowed",
    className
  );

  if (href) {
    return (
      <Link to={href} className={classes}>
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      disabled={isLoading}
      className={classes}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
      {isLoading && <span className="ml-2">Loading...</span>}
    </button>
  );
}