import React from 'react';

interface BrandFooterProps {
  className?: string;
}

export function BrandFooter({ className = '' }: BrandFooterProps) {
  return (
    <div className={`text-center p-4 ${className}`}>
      <div className="flex items-center justify-center space-x-2 opacity-60">
        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent"></div>
        <span className="text-sm text-muted-foreground">ACHOU! - Conectando pessoas e negócios</span>
        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-accent to-primary"></div>
      </div>
    </div>
  );
}