import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { AchouLogo } from './AchouLogo';
import { BrandFooter } from './BrandFooter';
import { useApp } from '../contexts/AppContext';

export function RegisterScreen() {
  const { setCurrentScreen, setUser } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    cpf: '',
    birthDate: '',
    address: '',
    email: '',
    password: '',
    confirmPassword: '',
    whatsapp: '',
    acceptTerms: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }

    if (!formData.acceptTerms) {
      alert('Você deve aceitar os termos de uso');
      return;
    }

    const userType = sessionStorage.getItem('selectedUserType') as 'consumidor' | 'empreendedor';
    
    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      name: formData.name,
      email: formData.email,
      cpf: formData.cpf,
      birthDate: formData.birthDate,
      address: formData.address,
      whatsapp: formData.whatsapp,
      userType
    };

    setUser(newUser);
    
    // Navigate based on user type
    if (userType === 'consumidor') {
      setCurrentScreen('consumerHome');
    } else {
      setCurrentScreen('entrepreneurHome');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 p-6">
      <div className="w-full max-w-md mx-auto">
        <div className="text-center mb-8">
          <AchouLogo size="md" variant="color" showText={true} />
        </div>
        <div className="text-center mb-8">
          <h1 className="text-xl text-foreground">Criar Minha Conta</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome:</Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cpf">CPF:</Label>
            <Input
              id="cpf"
              type="text"
              value={formData.cpf}
              onChange={(e) => handleInputChange('cpf', e.target.value)}
              placeholder="000.000.000-00"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="birthDate">Data de Nascimento:</Label>
            <Input
              id="birthDate"
              type="date"
              value={formData.birthDate}
              onChange={(e) => handleInputChange('birthDate', e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Endereço:</Label>
            <Input
              id="address"
              type="text"
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-mail:</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
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
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirmar Senha:</Label>
            <Input
              id="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="whatsapp">Contato WhatsApp:</Label>
            <Input
              id="whatsapp"
              type="tel"
              value={formData.whatsapp}
              onChange={(e) => handleInputChange('whatsapp', e.target.value)}
              placeholder="(11) 99999-9999"
              required
            />
          </div>

          <div className="flex items-center space-x-2 py-4">
            <Checkbox
              id="acceptTerms"
              checked={formData.acceptTerms}
              onCheckedChange={(checked) => handleInputChange('acceptTerms', checked as boolean)}
            />
            <Label htmlFor="acceptTerms" className="text-sm">
              Aceito/Declaro que li e concordo{' '}
              <button
                type="button"
                onClick={() => setCurrentScreen('privacy')}
                className="text-primary underline"
              >
                (Políticas de Privacidade)
              </button>
            </Label>
          </div>

          <Button type="submit" className="w-full h-12" size="lg">
            Criar Conta
          </Button>
        </form>

        <div className="text-center pt-4">
          <Button 
            onClick={() => setCurrentScreen('userType')}
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