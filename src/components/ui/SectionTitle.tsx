import React from 'react';

export interface SectionTitleProps {
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  description,
  align = 'center',
  size = 'md',
  className = ''
}) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };
  
  const titleSizeClasses = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-4xl'
  };
  
  const containerClasses = `space-y-4 ${alignClasses[align]} ${className}`;
  
  return (
    <div className={containerClasses}>
      <h2 className={`${titleSizeClasses[size]} font-bold text-gray-900 dark:text-white`}>
        {title}
      </h2>
      {description && (
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;