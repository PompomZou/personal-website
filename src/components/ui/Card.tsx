import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  background?: 'white' | 'gray' | 'transparent';
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  padding = 'md',
  background = 'white'
}) => {
  const baseClasses = 'rounded-xl border transition-all duration-300';
  
  const backgroundClasses = {
    white: 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700',
    gray: 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600',
    transparent: 'bg-transparent border-gray-200 dark:border-gray-700'
  };
  
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };
  
  const hoverClasses = hover ? 'hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600 hover:-translate-y-1' : '';
  
  const combinedClasses = `${baseClasses} ${backgroundClasses[background]} ${paddingClasses[padding]} ${hoverClasses} ${className}`;
  
  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
};

export default Card;