import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { GlobalHeader } from './GlobalHeader';
import { BrandPattern } from './BrandPattern';
import { useApp } from '../contexts/AppContext';
import { Plus, Settings, Eye, HelpCircle } from 'lucide-react';

export function EntrepreneurHomeScreen() {
  const { setCurrentScreen, user, userBusiness } = useApp();

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background relative">
      <BrandPattern className="text-primary/30" opacity={0.02} />
      <GlobalHeader title={`Bem-vindo, ${user.name}!`} />
      
      {/* Status Header */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 relative">
        <p className="text-sm text-secondary-foreground">Painel do Empreendedor</p>
      </div>

      <div className="p-4 space-y-6">
        {/* Status Card */}
        <Card>
          <CardHeader>
            <CardTitle>Status do Negócio</CardTitle>
            <CardDescription>
              {userBusiness 
                ? `Seu negócio "${userBusiness.name}" está ativo no ACHOU!`
                : 'Você ainda não criou um perfil de negócio'
              }
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Main Actions */}
        <div className="space-y-4">
          <Card className="cursor-pointer hover:shadow-lg transition-shadow interactive-hover">
            <CardHeader 
              onClick={() => setCurrentScreen('businessForm')}
              className="pb-4"
            >
              <CardTitle className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Plus className="w-6 h-6 text-primary-foreground icon-hover" />
                </div>
                <div>
                  <h3>1. Criar Perfil do Negócio</h3>
                  <CardDescription>
                    {userBusiness ? 'Editar informações do negócio' : 'Configure seu negócio no ACHOU!'}
                  </CardDescription>
                </div>
              </CardTitle>
            </CardHeader>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow interactive-hover">
            <CardHeader 
              onClick={() => setCurrentScreen('managementPanel')}
              className="pb-4"
            >
              <CardTitle className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <Settings className="w-6 h-6 text-secondary-foreground icon-hover" />
                </div>
                <div>
                  <h3>2. Gerenciar Perfil de Negócios</h3>
                  <CardDescription>
                    Configurações da conta e do negócio
                  </CardDescription>
                </div>
              </CardTitle>
            </CardHeader>
          </Card>

          <Card className={`cursor-pointer transition-shadow ${userBusiness ? 'hover:shadow-lg' : 'opacity-50'}`}>
            <CardHeader 
              onClick={() => {
                if (userBusiness) {
                  setCurrentScreen('businessPreview');
                } else {
                  alert('Você precisa criar um perfil de negócio primeiro');
                }
              }}
              className="pb-4"
            >
              <CardTitle className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-accent-foreground icon-hover" />
                </div>
                <div>
                  <h3>3. Visualizar Meu Anúncio</h3>
                  <CardDescription>
                    Veja como seu negócio aparece para os clientes
                  </CardDescription>
                </div>
              </CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Help Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <HelpCircle className="w-5 h-5" />
              <span>Precisa de Ajuda?</span>
            </CardTitle>
            <CardDescription>
              Acesse nossos tutoriais para aprender a usar melhor o ACHOU!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={() => alert('Tutoriais em desenvolvimento')}
              variant="outline" 
              className="w-full"
            >
              Ver Tutoriais
            </Button>
          </CardContent>
        </Card>

        {/* Statistics Preview */}
        {userBusiness && (
          <Card>
            <CardHeader>
              <CardTitle>Estatísticas Rápidas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-primary">24</p>
                  <p className="text-sm text-muted-foreground">Visualizações hoje</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">8</p>
                  <p className="text-sm text-muted-foreground">Contatos recebidos</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}