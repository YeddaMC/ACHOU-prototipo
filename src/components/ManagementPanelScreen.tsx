import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { GlobalHeader } from './GlobalHeader';
import { useApp } from '../contexts/AppContext';
import { KeyRound, User, Building2, Trash2 } from 'lucide-react';

export function ManagementPanelScreen() {
  const { setCurrentScreen, setUser, userBusiness, setUserBusiness, user } = useApp();

  const handleDeleteBusiness = () => {
    if (confirm('Tem certeza que deseja excluir o perfil do negócio? Esta ação não pode ser desfeita.')) {
      setUserBusiness(null);
      setCurrentScreen('entrepreneurHome');
    }
  };

  const handleDeleteAccount = () => {
    if (confirm('Tem certeza que deseja deletar sua conta e todos os dados? Esta ação não pode ser desfeita.')) {
      setUser(null);
      setUserBusiness(null);
      setCurrentScreen('welcome');
    }
  };

  const handleBackToHome = () => {
    if (user?.userType === 'empreendedor') {
      setCurrentScreen('entrepreneurHome');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <GlobalHeader 
        title="Painel de Gestão" 
        showBack 
        onBack={handleBackToHome} 
      />

      <div className="p-4 space-y-6">
        {/* Account Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <User className="w-6 h-6 icon-high-contrast" />
              <span>Configurações da Conta</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button 
              onClick={() => alert('Funcionalidade em desenvolvimento')}
              variant="outline"
              className="w-full h-12 flex items-center justify-start space-x-3"
              size="lg"
            >
              <KeyRound className="w-6 h-6 icon-hover" />
              <span>Alterar Senha</span>
            </Button>

            <Button 
              onClick={() => alert('Funcionalidade em desenvolvimento')}
              variant="outline"
              className="w-full h-12 flex items-center justify-start space-x-3"
              size="lg"
            >
              <User className="w-6 h-6 icon-hover" />
              <span>Atualizar Cadastro Pessoal</span>
            </Button>
          </CardContent>
        </Card>

        {/* Business Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Building2 className="w-6 h-6 icon-high-contrast" />
              <span>Configurações do Negócio</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button 
              onClick={() => setCurrentScreen('businessForm')}
              variant="outline"
              className="w-full h-12 flex items-center justify-start space-x-3"
              size="lg"
              disabled={!userBusiness}
            >
              <Building2 className="w-6 h-6 icon-hover" />
              <span>Atualizar Perfil do Negócio</span>
            </Button>

            <Button 
              onClick={handleDeleteBusiness}
              variant="outline"
              className="w-full h-12 flex items-center justify-start space-x-3 text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground"
              size="lg"
              disabled={!userBusiness}
            >
              <Trash2 className="w-6 h-6 icon-hover" />
              <span>Excluir Perfil do Negócio</span>
            </Button>
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card className="border-destructive">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-destructive">
              <Trash2 className="w-6 h-6 icon-high-contrast" />
              <span>Zona de Perigo</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={handleDeleteAccount}
              variant="destructive"
              className="w-full h-12 flex items-center justify-center space-x-3"
              size="lg"
            >
              <Trash2 className="w-6 h-6 icon-hover" />
              <span>Excluir Perfil de Negócios e Conta de Usuário (tudo)</span>
            </Button>
            <p className="text-sm text-muted-foreground mt-2 text-center">
              Esta ação removerá permanentemente todos os seus dados e não pode ser desfeita.
            </p>
          </CardContent>
        </Card>

        {/* Help and Support */}
        <Card>
          <CardContent className="pt-6 text-center text-sm text-muted-foreground">
            <p>Precisa de ajuda? Entre em contato conosco:</p>
            <p className="font-medium">suporte@achou.com.br</p>
            <p>(11) 9999-9999</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}