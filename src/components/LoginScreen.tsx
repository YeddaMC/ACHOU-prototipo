import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { AchouLogo } from './AchouLogo';
import { BrandFooter } from './BrandFooter';
import { useApp } from '../contexts/AppContext';

export function LoginScreen() {
  const { setCurrentScreen, setUser } = useApp();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock login - in real app would validate credentials
    const mockUser = {
      id: '1',
      name: 'Yedda',
      email: formData.email,
      cpf: '123.456.789-00',
      birthDate: '1990-01-01',
      address: 'Rua Exemplo, 123',
      whatsapp: '(11) 99999-9999',
      userType: 'consumidor' as const // Default to consumer for demo
    };

    setUser(mockUser);
    setCurrentScreen('consumerHome');
  };

  const handleGoogleLogin = () => {
    // Mock Google login
    const mockUser = {
      id: '2',
      name: 'Maria Santos',
      email: 'maria@gmail.com',
      cpf: '987.654.321-00',
      birthDate: '1985-05-15',
      address: 'Av. Principal, 456',
      whatsapp: '(11) 88888-8888',
      userType: 'empreendedor' as const
    };

    setUser(mockUser);
    setCurrentScreen('entrepreneurHome');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="mb-6 flex justify-center">
            <AchouLogo size="lg" variant="color" showText={true} />
          </div>
          <h1 className="text-xl text-foreground mb-8">Fazer Login</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">E-mail:</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="seu@email.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Senha:</Label>
            <Input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              placeholder="Sua senha"
              required
            />
          </div>

          <Button type="submit" className="w-full h-12" size="lg">
            Entrar
          </Button>
        </form>

        <div className="space-y-4">
          <Button 
            onClick={handleGoogleLogin}
            variant="outline"
            className="w-full h-12"
            size="lg"
          >
            Entrar com Google
          </Button>
        </div>

        <div className="text-center">
          <Button 
            onClick={() => setCurrentScreen('welcome')}
            variant="ghost"
            size="sm"
          >
            ← Voltar
          </Button>
        </div>
        
        <BrandFooter className="mt-8" />
      </div>
    </div>
  );
}