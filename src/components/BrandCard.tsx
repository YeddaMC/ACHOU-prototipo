import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface BrandCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'primary' | 'accent';
}

export function BrandCard({ title, description, children, className = '', variant = 'default' }: BrandCardProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'border-primary/20 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900';
      case 'accent':
        return 'border-accent/20 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900';
      default:
        return 'border-border bg-card';
    }
  };

  return (
    <Card className={`${getVariantClasses()} ${className}`}>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          {title}
        </CardTitle>
        {description && (
          <CardDescription>{description}</CardDescription>
        )}
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}