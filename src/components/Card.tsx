import { ReactNode } from 'react';

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export default function Card({ title, children, className = '', hoverable = false }: CardProps) {
  return (
    <div className={`card-elevated p-6 ${hoverable ? 'hover:shadow-lg cursor-pointer' : ''} ${className}`}>
      {title && <h3 className="text-lg font-bold mb-4">{title}</h3>}
      {children}
    </div>
  );
}
