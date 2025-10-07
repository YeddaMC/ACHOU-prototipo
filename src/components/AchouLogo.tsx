import React from 'react';
import logoImage from 'figma:asset/b3f0599f7ff58d76ff9a3e03bfed6cc01a9215fe.png';

interface AchouLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark' | 'color';
  showText?: boolean;
  className?: string;
}

export function AchouLogo({ size = 'md', variant = 'color', showText = true, className = '' }: AchouLogoProps) {
  const logoId = React.useMemo(() => `logoGradient-${Math.random().toString(36).substr(2, 9)}`, []);
  
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12', 
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  const textSizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl'
  };

  const getLogoColor = () => {
    switch (variant) {
      case 'light':
        return '#ffffff';
      case 'dark':
        return '#1a1a1a';
      case 'color':
      default:
        return `url(#${logoId})`;
    }
  };

  const getTextColor = () => {
    switch (variant) {
      case 'light':
        return 'text-white';
      case 'dark':
        return 'text-gray-900';
      case 'color':
      default:
        return 'text-primary';
    }
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <img 
        src={logoImage}
        alt="ACHOU!"
        className={`${sizeClasses[size]} object-contain`}
        style={{ 
          filter: variant === 'light' ? 'brightness(0) invert(1)' : 
                  variant === 'dark' ? 'brightness(0)' : 'none'
        }}
      />
      
      {showText && (
        <span className={`font-bold ${textSizeClasses[size]} ${getTextColor()} tracking-tight`}>
          ACHOU!
        </span>
      )}
    </div>
  );
}