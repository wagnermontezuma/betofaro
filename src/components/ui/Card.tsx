import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface CardProps {
  className?: string;
  imageUrl?: string;
  imageAlt?: string;
  title: string;
  description?: string;
  footer?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export function Card({
  className,
  imageUrl,
  imageAlt = '',
  title,
  description,
  footer,
  href,
  onClick,
  children,
}: CardProps) {
  const cardContent = (
    <>
      {imageUrl && (
        <div className="relative h-56 w-full">
          <Image
            src={imageUrl}
            alt={imageAlt || title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold text-pt-dark mb-3">{title}</h3>
        {description && (
          <p className="text-gray-700 mb-4 flex-grow">{description}</p>
        )}
        {children}
        {footer && <div className="mt-auto">{footer}</div>}
      </div>
    </>
  );

  const cardClasses = cn(
    'bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col',
    className
  );

  if (href) {
    return (
      <Link href={href} className={cardClasses}>
        {cardContent}
      </Link>
    );
  }

  return (
    <article 
      className={cardClasses} 
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {cardContent}
    </article>
  );
} 