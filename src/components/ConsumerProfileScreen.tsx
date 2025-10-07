import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { GlobalHeader } from './GlobalHeader';
import { useApp } from '../contexts/AppContext';
import { User, KeyRound, MapPin, Trash2, Edit } from 'lucide-react';

export function ConsumerProfileScreen() {
  const { setCurrentScreen, user, setUser } = useApp();

  const handleDeleteAccount = () => {
    if (confirm('Tem certeza que deseja deletar sua conta? Esta ação não pode ser desfeita.')) {
      setUser(null);
      setCurrentScreen('welcome');
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <GlobalHeader 
        title="Meu Perfil" 
        showBack 
        onBack={() => setCurrentScreen('consumerHome')} 
      />

      <div className="p-4 space-y-6">
        {/* User Info */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <User className="w-6 h-6" />
              <span>Informações Pessoais</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="font-medium">Nome:</p>
              <p className="text-muted-foreground">{user.name}</p>
            </div>
            <div>
              <p className="font-medium">E-mail:</p>
              <p className="text-muted-foreground">{user.email}</p>
            </div>
            <div>
              <p className="font-medium">CPF:</p>
              <p className="text-muted-foreground">{user.cpf}</p>
            </div>
            <div>
              <p className="font-medium">Endereço:</p>
              <p className="text-muted-foreground">{user.address}</p>
            </div>
            <div>
              <p className="font-medium">WhatsApp:</p>
              <p className="text-muted-foreground">{user.whatsapp}</p>
            </div>
          </CardContent>
        </Card>

        {/* Account Actions */}
        <div className="space-y-3">
          <Button 
            onClick={() => alert('Funcionalidade em desenvolvimento')}
            variant="outline"
            className="w-full h-12 flex items-center justify-center space-x-2"
            size="lg"
          >
            <Edit className="w-6 h-6" />
            <span>Atualizar Perfil</span>
          </Button>

          <Button 
            onClick={() => alert('Funcionalidade em desenvolvimento')}
            variant="outline"
            className="w-full h-12 flex items-center justify-center space-x-2"
            size="lg"
          >
            <KeyRound className="w-6 h-6" />
            <span>Alterar Senha</span>
          </Button>

          <Button 
            onClick={() => alert('Funcionalidade em desenvolvimento')}
            variant="outline"
            className="w-full h-12 flex items-center justify-center space-x-2"
            size="lg"
          >
            <MapPin className="w-6 h-6" />
            <span>Gerenciar Geolocalização</span>
          </Button>

          <Button 
            onClick={handleDeleteAccount}
            variant="destructive"
            className="w-full h-12 flex items-center justify-center space-x-2"
            size="lg"
          >
            <Trash2 className="w-6 h-6" />
            <span>Deletar Conta</span>
          </Button>
        </div>

        {/* App Info */}
        <Card>
          <CardContent className="pt-6 text-center text-sm text-muted-foreground">
            <p>ACHOU! - Conectando pessoas</p>
            <p>Versão 1.0.0</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}