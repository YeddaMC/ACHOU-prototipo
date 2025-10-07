import React from 'react';
import { Button } from './ui/button';
import { useApp } from '../contexts/AppContext';
import { Home, Search, User, Settings, Building2 } from 'lucide-react';

export function BottomNavigation() {
  const { user, currentScreen, setCurrentScreen } = useApp();

  if (!user) return null;

  const isConsumer = user.userType === 'consumidor';
  const isEntrepreneur = user.userType === 'empreendedor';

  const getActiveClass = (screen: string) => {
    return currentScreen === screen ? 'text-primary bg-gradient-to-br from-primary/10 to-accent/10 icon-hover' : 'text-primary hover:text-orange-500 icon-hover enhanced-button';
  };

  if (isConsumer) {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-primary/20 safe-area-bottom shadow-lg">
        <div className="flex items-center justify-around p-2">
          <Button
            variant="ghost"
            size="sm"
            className={`flex flex-col items-center space-y-1 h-16 px-3 ${getActiveClass('consumerHome')}`}
            onClick={() => setCurrentScreen('consumerHome')}
          >
            <Search className="w-6 h-6" />
            <span className="text-xs">Buscar</span>
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className={`flex flex-col items-center space-y-1 h-16 px-3 ${getActiveClass('consumerProfile')}`}
            onClick={() => setCurrentScreen('consumerProfile')}
          >
            <User className="w-6 h-6" />
            <span className="text-xs">Perfil</span>
          </Button>
        </div>
      </div>
    );
  }

  if (isEntrepreneur) {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-primary/20 safe-area-bottom shadow-lg">
        <div className="flex items-center justify-around p-2">
          <Button
            variant="ghost"
            size="sm"
            className={`flex flex-col items-center space-y-1 h-16 px-3 ${getActiveClass('entrepreneurHome')}`}
            onClick={() => setCurrentScreen('entrepreneurHome')}
          >
            <Home className="w-6 h-6" />
            <span className="text-xs">Início</span>
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className={`flex flex-col items-center space-y-1 h-16 px-3 ${getActiveClass('businessForm')}`}
            onClick={() => setCurrentScreen('businessForm')}
          >
            <Building2 className="w-6 h-6" />
            <span className="text-xs">Negócio</span>
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className={`flex flex-col items-center space-y-1 h-16 px-3 ${getActiveClass('managementPanel')}`}
            onClick={() => setCurrentScreen('managementPanel')}
          >
            <Settings className="w-6 h-6" />
            <span className="text-xs">Gestão</span>
          </Button>
        </div>
      </div>
    );
  }

  return null;
}