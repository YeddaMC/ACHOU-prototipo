import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { GlobalHeader } from './GlobalHeader';
import { useApp } from '../contexts/AppContext';
import { MapPin, Clock, Phone, MessageCircle, Navigation, ThumbsUp, ThumbsDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function BusinessDetailsScreen() {
  const { setCurrentScreen, selectedBusiness } = useApp();
  const [feedbackGiven, setFeedbackGiven] = useState(false);

  if (!selectedBusiness) {
    return null;
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Olá! Encontrei vocês no ACHOU! e gostaria de saber mais informações.`);
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  const handleWhatsAppGroup = () => {
    if (selectedBusiness.whatsappGroup) {
      window.open(selectedBusiness.whatsappGroup, '_blank');
    }
  };

  const handleRoute = () => {
    const address = encodeURIComponent(selectedBusiness.address);
    window.open(`https://www.google.com/maps/search/${address}`, '_blank');
  };

  const handleFeedback = (useful: boolean) => {
    setFeedbackGiven(true);
    // In a real app, this would send feedback to backend
    setTimeout(() => {
      setFeedbackGiven(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <GlobalHeader 
        title="Detalhes do Negócio" 
        showBack 
        onBack={() => setCurrentScreen('consumerHome')} 
      />

      <div className="p-4">
        <Card>
          <CardHeader className="pb-4">
            {/* Business Image */}
            <div className="w-full h-48 bg-muted rounded-lg mb-4 overflow-hidden">
              <ImageWithFallback
                src={selectedBusiness.image || ''}
                alt={selectedBusiness.name}
                className="w-full h-full object-cover"
              />
            </div>

            <CardTitle className="text-xl">{selectedBusiness.name}</CardTitle>
            <CardDescription className="text-base leading-relaxed">
              {selectedBusiness.description}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Business Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 text-muted-foreground mt-0.5 icon-high-contrast" />
                <div>
                  <p className="font-medium">Endereço:</p>
                  <p className="text-muted-foreground">{selectedBusiness.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-6 h-6 text-muted-foreground mt-0.5 icon-high-contrast" />
                <div>
                  <p className="font-medium">Horário:</p>
                  <p className="text-muted-foreground">{selectedBusiness.hours}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Badge variant="secondary">{selectedBusiness.category}</Badge>
                <span className="text-sm text-muted-foreground">
                  Distância: {selectedBusiness.distance} km
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              {/* WhatsApp - Destaque principal */}
              <Button 
                onClick={handleWhatsApp}
                className="w-full h-14 flex items-center justify-center space-x-3 enhanced-button gradient-green-blue text-white shadow-lg"
                size="lg"
              >
                <MessageCircle className="w-7 h-7 icon-hover" />
                <span className="text-lg font-medium">WhatsApp</span>
              </Button>

              {/* Grupo de Ofertas WhatsApp - Se disponível */}
              {selectedBusiness.whatsappGroup && (
                <Button 
                  onClick={handleWhatsAppGroup}
                  variant="outline"
                  className="w-full h-12 flex items-center justify-center space-x-2 enhanced-button border-2 border-green-500 text-green-600 hover:bg-green-50"
                  size="lg"
                >
                  <MessageCircle className="w-6 h-6 icon-hover" />
                  <span>🎯 WhatsApp de Ofertas</span>
                </Button>
              )}

              <Button 
                onClick={handleRoute}
                variant="outline"
                className="w-full h-12 flex items-center justify-center space-x-2 enhanced-button"
                size="lg"
              >
                <Navigation className="w-6 h-6 icon-hover" />
                <span>Traçar Rota</span>
              </Button>
            </div>

            {/* Feedback Section */}
            <div className="border-t pt-6">
              <p className="font-medium mb-3 text-center">Este Catálogo Foi Útil?</p>
              {!feedbackGiven ? (
                <div className="flex space-x-3">
                  <Button 
                    onClick={() => handleFeedback(true)}
                    variant="outline"
                    className="flex-1 h-12 flex items-center justify-center space-x-2"
                  >
                    <ThumbsUp className="w-6 h-6 icon-hover" />
                    <span>Sim</span>
                  </Button>
                  <Button 
                    onClick={() => handleFeedback(false)}
                    variant="outline"
                    className="flex-1 h-12 flex items-center justify-center space-x-2"
                  >
                    <ThumbsDown className="w-6 h-6 icon-hover" />
                    <span>Não</span>
                  </Button>
                </div>
              ) : (
                <div className="text-center text-muted-foreground">
                  <p>Obrigado pelo seu feedback!</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}