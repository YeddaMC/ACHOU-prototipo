import React from 'react';
import { Button } from './ui/button';
import { AchouLogo } from './AchouLogo';
import { useApp } from '../contexts/AppContext';
import { LogOut, MapPin, User, ArrowLeft } from 'lucide-react';

interface GlobalHeaderProps {
  title: string;
  showBack?: boolean;
  onBack?: () => void;
  customBackAction?: () => void;
}

export function GlobalHeader({ title, showBack = false, onBack, customBackAction }: GlobalHeaderProps) {
  const { user, logout, setCurrentScreen } = useApp();

  const handleGeolocation = () => {
    // Simular ação de geolocalização
    alert('Funcionalidade de geolocalização em desenvolvimento\n\nLocalização atual: PINHAIS - PR');
  };

  const handleProfile = () => {
    if (user?.userType === 'consumidor') {
      setCurrentScreen('consumerProfile');
    } else if (user?.userType === 'empreendedor') {
      setCurrentScreen('managementPanel');
    }
  };

  const handleBack = () => {
    if (customBackAction) {
      customBackAction();
    } else if (onBack) {
      onBack();
    }
  };

  return (
    <div className="gradient-blue-green text-primary-foreground p-4 flex items-center justify-between sticky top-0 z-50 shadow-lg">
      <div className="flex items-center space-x-3 flex-1">
        {showBack ? (
          <Button
            onClick={handleBack}
            variant="ghost"
            size="sm"
            className="text-primary-foreground hover:bg-primary-foreground/20 p-2"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
        ) : (
          <AchouLogo size="sm" variant="light" showText={false} />
        )}
        <h1 className="text-lg font-medium truncate">{title}</h1>
      </div>

      {user && (
        <div className="flex items-center space-x-2">
          <Button
            onClick={handleGeolocation}
            variant="ghost"
            size="sm"
            className="text-primary-foreground hover:bg-primary-foreground/20 p-2"
            title="Geolocalização"
          >
            <MapPin className="w-6 h-6" />
          </Button>
          
          <Button
            onClick={handleProfile}
            variant="ghost"
            size="sm"
            className="text-primary-foreground hover:bg-primary-foreground/20 p-2"
            title="Perfil"
          >
            <User className="w-6 h-6" />
          </Button>
          
          <Button
            onClick={logout}
            variant="ghost"
            size="sm"
            className="text-primary-foreground hover:bg-primary-foreground/20 p-2"
            title="Sair"
          >
            <LogOut className="w-6 h-6" />
          </Button>
        </div>
      )}
    </div>
  );
}