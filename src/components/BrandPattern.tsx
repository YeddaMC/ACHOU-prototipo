import React from 'react';

interface BrandPatternProps {
  className?: string;
  opacity?: number;
}

export function BrandPattern({ className = '', opacity = 0.02 }: BrandPatternProps) {  
  return (
    <div 
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} 
      style={{ 
        opacity,
        background: `radial-gradient(circle at 20% 20%, #2196F3 1px, transparent 1px),
                    radial-gradient(circle at 80% 80%, #4CAF50 1px, transparent 1px),
                    radial-gradient(circle at 20% 80%, #2196F3 0.5px, transparent 0.5px),
                    radial-gradient(circle at 80% 20%, #4CAF50 0.5px, transparent 0.5px)`,
        backgroundSize: '120px 120px, 120px 120px, 120px 120px, 120px 120px',
        backgroundPosition: '0 0, 60px 60px, 0 60px, 60px 0'
      }}
    />
  );
}