import Link from 'next/link';
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
}

export const Button = ({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
  ...props
}: ButtonProps) => {
  const baseClasses = 'inline-block px-6 py-3 font-medium rounded-full transition-colors';
  
  const variantClasses = {
    primary: 'bg-pt-red text-white hover:bg-pt-dark-red',
    secondary: 'bg-pt-dark text-white hover:bg-gray-800',
    outline: 'border-2 border-pt-red text-pt-red hover:bg-pt-red hover:text-white',
  };
  
  const classes = cn(baseClasses, variantClasses[variant], className);
  
  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}; 