import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { GlobalHeader } from './GlobalHeader';
import { useApp } from '../contexts/AppContext';
import { MapPin, Clock, Phone, MessageCircle, Navigation, Edit } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function BusinessPreviewScreen() {
  const { setCurrentScreen, userBusiness } = useApp();

  if (!userBusiness) {
    return null;
  }

  const handleEdit = () => {
    setCurrentScreen('businessForm');
  };

  return (
    <div className="min-h-screen bg-background">
      <GlobalHeader
        title="Visualizar Meu Anúncio"
        showBack
        onBack={() => setCurrentScreen('entrepreneurHome')}
      />

      <div className="p-4">
        {/* Preview Notice */}
        <div className="bg-muted p-3 rounded-lg mb-4 text-center">
          <p className="text-sm text-muted-foreground">
            📱 Esta é a visualização de como seu negócio aparece para os consumidores
          </p>
        </div>

        <Card>
          <CardHeader className="pb-4">
            {/* Business Image */}
            <div className="w-full h-48 bg-muted rounded-lg mb-4 overflow-hidden">
              <ImageWithFallback
                src={userBusiness.image || ''}
                alt={userBusiness.name}
                className="w-full h-full object-cover"
              />
            </div>

            <CardTitle className="text-xl">{userBusiness.name}</CardTitle>
            <CardDescription className="text-base leading-relaxed">
              {userBusiness.description}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Business Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium">Endereço:</p>
                  <p className="text-muted-foreground">{userBusiness.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium">Horário:</p>
                  <p className="text-muted-foreground">{userBusiness.hours}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Badge variant="secondary">{userBusiness.category}</Badge>
                <span className="text-sm text-muted-foreground">
                  Distância: {userBusiness.distance?.toFixed(1)} km
                </span>
              </div>
            </div>

            {/* Action Buttons Preview */}
            <div className="space-y-3">
              <Button
                disabled
                variant="outline"
                className="w-full h-12 flex items-center justify-center space-x-2 opacity-75"
                size="lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </Button>

              <Button
                disabled
                variant="outline"
                className="w-full h-12 flex items-center justify-center space-x-2 opacity-75"
                size="lg"
              >
                <Navigation className="w-5 h-5" />
                <span>Traçar Rota</span>
              </Button>
            </div>

            {/* Feedback Section Preview */}
            <div className="border-t pt-6">
              <p className="font-medium mb-3 text-center">Este Catálogo Foi Útil?</p>
              <div className="flex space-x-3">
                <Button
                  disabled
                  variant="outline"
                  className="flex-1 h-12 flex items-center justify-center space-x-2 opacity-75"
                >
                  <span>👍</span>
                  <span>Sim</span>
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="flex-1 h-12 flex items-center justify-center space-x-2 opacity-75"
                >
                  <span>👎</span>
                  <span>Não</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Statistics */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-lg">Estatísticas do Anúncio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-2xl font-bold text-primary">156</p>
                <p className="text-sm text-muted-foreground">Visualizações total</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-2xl font-bold text-primary">23</p>
                <p className="text-sm text-muted-foreground">Contatos recebidos</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Edit Button */}
        <Button
          onClick={handleEdit}
          className="w-full h-12 mt-6"
          size="lg"
        >
          <Edit className="w-5 h-5 mr-2" />
          Editar Perfil do Negócio
        </Button>
      </div>
    </div>
  );
}