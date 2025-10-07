import React from 'react';
import { Button } from './ui/button';
import { AchouLogo } from './AchouLogo';
import { BrandFooter } from './BrandFooter';
import { useApp } from '../contexts/AppContext';
import exampleImage from 'figma:asset/b3f0599f7ff58d76ff9a3e03bfed6cc01a9215fe.png';

export function WelcomeScreen() {
  const { setCurrentScreen } = useApp();

  return (
    <div className="min-h-screen gradient-blue-green-soft flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm space-y-8">
        {/* Logo */}
        <div className="text-center">
          <div className="mb-6 flex justify-center">
            <AchouLogo size="xl" variant="color" showText={true} />
          </div>
          <h1 className="text-2xl text-foreground mb-2">Seja Bem-vindo!</h1>
          <p className="text-muted-foreground text-center"> Achou! Sua vida mais fácil! /n Conectando pessoas. ☺ </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Button 
            onClick={() => setCurrentScreen('userType')}
            className="w-full h-14 btn-primary enhanced-button gradient-blue-green text-lg"
            size="lg"
          >
            Criar Minha Conta
          </Button>
          
          <Button 
            onClick={() => setCurrentScreen('login')}
            variant="outline"
            className="w-full h-14 btn-secondary enhanced-button border-primary text-primary text-lg"
            size="lg"
          >
            Já Tenho Conta (Login)
          </Button>
        </div>
        
        <BrandFooter className="mt-12" />
      </div>
    </div>
  );
}