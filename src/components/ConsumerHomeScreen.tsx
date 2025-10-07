import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { GlobalHeader } from './GlobalHeader';
import { BrandPattern } from './BrandPattern';
import { useApp } from '../contexts/AppContext';
import { MapPin, Search } from 'lucide-react';

export function ConsumerHomeScreen() {
  const { setCurrentScreen, businesses, setSelectedBusiness } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filters = ['Promoções', 'Alimentação', 'Serviços', 'Saúde', 'Beleza', 'Pets'];

  const filteredBusinesses = businesses.filter(business => {
    const matchesSearch = searchQuery === '' || 
      business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      business.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = !activeFilter || business.category === activeFilter;
    
    return matchesSearch && matchesFilter;
  });

  const handleBusinessClick = (business: any) => {
    setSelectedBusiness(business);
    setCurrentScreen('businessDetails');
  };

  return (
    <div className="min-h-screen bg-background relative">
      <BrandPattern className="text-primary/30" opacity={0.02} />
      <GlobalHeader title="Buscar Negócios" />
      
      {/* Location and Search */}
      <div className="bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground p-4 relative">
        <div className="flex items-center space-x-2 mb-4">
          <MapPin className="w-6 h-6" />
          <span className="text-sm">São Paulo, SP</span>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Buscar negócios..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-background text-foreground"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="p-4 border-b">
        <div className="flex space-x-2 overflow-x-auto">
          {filters.map((filter) => (
            <Badge
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              className="cursor-pointer whitespace-nowrap"
              onClick={() => setActiveFilter(activeFilter === filter ? null : filter)}
            >
              {filter}
            </Badge>
          ))}
        </div>
      </div>

      {/* Business List */}
      <div className="p-4 space-y-4">
        {filteredBusinesses.map((business) => (
          <Card 
            key={business.id} 
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => handleBusinessClick(business)}
          >
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{business.name}</CardTitle>
                <span className="text-sm text-muted-foreground">{business.distance} km</span>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-2">
                {business.description}
              </CardDescription>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span>{business.address}</span>
              </div>
              <Badge variant="secondary" className="mt-2">
                {business.category}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No Results Message - Before Map */}
      {filteredBusinesses.length === 0 && (
        <div className="text-center text-muted-foreground p-8">
          <p>Nenhum negócio encontrado</p>
          <p className="text-sm">Tente ajustar sua busca ou filtros</p>
        </div>
      )}

      {/* Map Placeholder */}
      <div className="h-48 bg-muted m-4 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
        <div className="text-center text-muted-foreground">
          <MapPin className="w-8 h-8 mx-auto mb-2 icon-hover" />
          <p>Área do Mapa com Pinos</p>
          <p className="text-sm">({filteredBusinesses.length} negócios encontrados)</p>
        </div>
      </div>
    </div>
  );
}