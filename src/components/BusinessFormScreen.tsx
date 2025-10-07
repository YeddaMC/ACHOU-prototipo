import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { GlobalHeader } from './GlobalHeader';
import { useApp } from '../contexts/AppContext';
import { Upload } from 'lucide-react';

export function BusinessFormScreen() {
  const { setCurrentScreen, userBusiness, setUserBusiness } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    phone: '',
    address: '',
    category: '',
    hours: '',
    cnpj: '',
    image: '',
    whatsappGroup: ''
  });

  useEffect(() => {
    if (userBusiness) {
      setFormData({
        name: userBusiness.name,
        description: userBusiness.description,
        phone: userBusiness.phone,
        address: userBusiness.address,
        category: userBusiness.category,
        hours: userBusiness.hours,
        cnpj: userBusiness.cnpj,
        image: userBusiness.image || '',
        whatsappGroup: userBusiness.whatsappGroup || ''
      });
    }
  }, [userBusiness]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const businessData = {
      id: userBusiness?.id || Math.random().toString(36).substr(2, 9),
      name: formData.name,
      description: formData.description,
      phone: formData.phone,
      address: formData.address,
      category: formData.category,
      hours: formData.hours,
      cnpj: formData.cnpj,
      image: formData.image,
      whatsappGroup: formData.whatsappGroup,
      latitude: -23.5505 + (Math.random() - 0.5) * 0.01,
      longitude: -46.6333 + (Math.random() - 0.5) * 0.01,
      distance: Math.random() * 5 + 0.5
    };

    setUserBusiness(businessData);
    setCurrentScreen('entrepreneurHome');
  };

  const categories = [
    'Alimentação',
    'Serviços',
    'Saúde',
    'Beleza',
    'Educação',
    'Tecnologia',
    'Comércio',
    'Outros'
  ];

  return (
    <div className="min-h-screen bg-background">
      <GlobalHeader 
        title={userBusiness ? 'Editar Perfil do Negócio' : 'Perfil do Meu Negócio'} 
        showBack 
        onBack={() => setCurrentScreen('entrepreneurHome')} 
      />

      <div className="p-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nome Fantasia:</Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Nome do seu negócio"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Descrição:</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Descreva seu negócio, produtos e serviços..."
              rows={4}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefone:</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="(11) 99999-9999"
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
              placeholder="Rua, número, bairro"
              required
            />
            <p className="text-sm text-muted-foreground">
              (Geolocalização será detectada automaticamente)
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Categoria:</Label>
            <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione uma categoria" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="hours">Horário de Funcionamento:</Label>
            <Input
              id="hours"
              type="text"
              value={formData.hours}
              onChange={(e) => handleInputChange('hours', e.target.value)}
              placeholder="Ex: Seg-Sex 09h-18h"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cnpj">CNPJ/CPF:</Label>
            <Input
              id="cnpj"
              type="text"
              value={formData.cnpj}
              onChange={(e) => handleInputChange('cnpj', e.target.value)}
              placeholder="00.000.000/0001-00"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="whatsappGroup">Grupo de Ofertas no WhatsApp (Opcional):</Label>
            <Input
              id="whatsappGroup"
              type="url"
              value={formData.whatsappGroup}
              onChange={(e) => handleInputChange('whatsappGroup', e.target.value)}
              placeholder="https://chat.whatsapp.com/..."
            />
            <p className="text-sm text-muted-foreground">
              💡 Link do grupo do WhatsApp para divulgar promoções e ofertas especiais
            </p>
          </div>

          {/* Image Upload Placeholder */}
          <div className="space-y-2">
            <Label>Foto do Negócio:</Label>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
              <Upload className="w-10 h-10 mx-auto mb-2 text-muted-foreground icon-hover" />
              <p className="text-muted-foreground">Clique para fazer upload da foto</p>
              <p className="text-sm text-muted-foreground mt-1">
                (Funcionalidade em desenvolvimento)
              </p>
            </div>
          </div>

          <Button type="submit" className="w-full h-12 enhanced-button" size="lg">
            {userBusiness ? 'Atualizar Perfil' : 'Salvar e Publicar'}
          </Button>
        </form>
      </div>
    </div>
  );
}