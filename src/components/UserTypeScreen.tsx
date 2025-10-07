import React from 'react';
import { Button } from './ui/button';
import { AchouLogo } from './AchouLogo';
import { useApp } from '../contexts/AppContext';

export function UserTypeScreen() {
  const { setCurrentScreen } = useApp();

  const handleUserTypeSelection = (userType: 'consumidor' | 'empreendedor') => {
    // Store user type temporarily and proceed to registration
    sessionStorage.setItem('selectedUserType', userType);
    setCurrentScreen('register');
  };

  return (
    <div className="min-h-screen gradient-blue-green-soft flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="mb-6 flex justify-center">
            <AchouLogo size="lg" variant="color" showText={true} />
          </div>
          <h1 className="text-xl text-foreground mb-8">
            Qual o seu objetivo com o ACHOU!?
          </h1>
        </div>

        <div className="space-y-4">
          <Button 
            onClick={() => handleUserTypeSelection('consumidor')}
            className="w-full h-16 text-left flex flex-col items-start justify-center px-6 gradient-blue-green btn-primary enhanced-button"
            size="lg"
          >
            <span className="font-medium text-lg">🔍 Sou Consumidor</span>
            <span className="text-sm opacity-90">Quero buscar negócios locais</span>
          </Button>
          
          <Button 
            onClick={() => handleUserTypeSelection('empreendedor')}
            className="w-full h-16 text-left flex flex-col items-start justify-center px-6 gradient-green-blue btn-primary"
            size="lg"
          >
            <span className="font-medium text-lg">🏪 Sou Empreendedor</span>
            <span className="text-sm opacity-90">Quero anunciar meu negócio</span>
          </Button>
        </div>

        <div className="text-center pt-4">
          <Button 
            onClick={() => setCurrentScreen('welcome')}
            variant="ghost"
            size="sm"
          >
            ← Voltar
          </Button>
        </div>
      </div>
    </div>
  );
}