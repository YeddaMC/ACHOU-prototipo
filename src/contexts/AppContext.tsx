import React, { createContext, useContext, useState, ReactNode } from 'react';

export type UserType = 'consumidor' | 'empreendedor' | null;

export interface User {
  id: string;
  name: string;
  email: string;
  cpf: string;
  birthDate: string;
  address: string;
  whatsapp: string;
  userType: UserType;
}

export interface Business {
  id: string;
  name: string;
  description: string;
  phone: string;
  address: string;
  category: string;
  hours: string;
  cnpj: string;
  image?: string;
  latitude: number;
  longitude: number;
  distance?: number;
  whatsappGroup?: string;
}

interface AppContextType {
  currentScreen: string;
  setCurrentScreen: (screen: string) => void;
  user: User | null;
  setUser: (user: User | null) => void;
  isLoggedIn: boolean;
  businesses: Business[];
  selectedBusiness: Business | null;
  setSelectedBusiness: (business: Business | null) => void;
  userBusiness: Business | null;
  setUserBusiness: (business: Business | null) => void;
  logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const mockBusinesses: Business[] = [
  {
    id: '1',
    name: 'Pizzaria Bella Nonna',
    description: 'Pizzas artesanais com ingredientes frescos e sabor autêntico italiano.',
    phone: '(11) 99999-1111',
    address: 'Rua das Flores, 123 - Centro',
    category: 'Alimentação',
    hours: 'Seg-Dom 18h-23h',
    cnpj: '12.345.678/0001-90',
    latitude: -23.5505,
    longitude: -46.6333,
    distance: 1.5
  },
  {
    id: '2',
    name: 'Salão de Beleza Glamour',
    description: 'Serviços completos de beleza: corte, coloração, manicure e pedicure.',
    phone: '(11) 99999-2222',
    address: 'Av. Principal, 456 - Jardim Europa',
    category: 'Beleza',
    hours: 'Ter-Sáb 09h-18h',
    cnpj: '23.456.789/0001-01',
    latitude: -23.5515,
    longitude: -46.6343,
    distance: 2.1
  },
  {
    id: '3',
    name: 'Farmácia São João',
    description: 'Medicamentos, produtos de higiene e conveniência 24 horas.',
    phone: '(11) 99999-3333',
    address: 'Rua São João, 789 - Vila Nova',
    category: 'Saúde',
    hours: '24 horas',
    cnpj: '34.567.890/0001-12',
    latitude: -23.5495,
    longitude: -46.6323,
    distance: 0.8
  },
  {
    id: '4',
    name: 'Pet Shop Amigo Fiel',
    description: 'Ração premium para cães e gatos com entrega a domicílio. Variedade completa de produtos para pets.',
    phone: '(11) 99999-4444',
    address: 'Rua dos Pets, 321 - Vila Pet',
    category: 'Pets',
    hours: 'Seg-Sáb 08h-19h',
    cnpj: '45.678.901/0001-23',
    latitude: -23.5525,
    longitude: -46.6353,
    distance: 1.2
  },
  {
    id: '5',
    name: 'Banho & Tosa Lava Cão',
    description: 'Banho, tosa e cuidados especiais para seu pet. Ambiente climatizado e profissionais qualificados.',
    phone: '(11) 99999-5555',
    address: 'Av. dos Animais, 654 - Jardim Pet',
    category: 'Pets',
    hours: 'Ter-Sáb 08h-17h',
    cnpj: '56.789.012/0001-34',
    latitude: -23.5535,
    longitude: -46.6363,
    distance: 2.3
  },
  {
    id: '6',
    name: 'Sapataria Consertos Rápidos',
    description: 'Consertos de sapatos, bolsas e artigos de couro. Serviço rápido e qualidade garantida.',
    phone: '(11) 99999-6666',
    address: 'Rua do Couro, 987 - Centro',
    category: 'Serviços',
    hours: 'Seg-Sex 08h-18h, Sáb 08h-14h',
    cnpj: '67.890.123/0001-45',
    latitude: -23.5485,
    longitude: -46.6313,
    distance: 0.9
  },
  {
    id: '7',
    name: 'Maria Costuras',
    description: 'Ajustes e reparos de roupas. Costureira experiente com mais de 20 anos no ramo.',
    phone: '(11) 99999-7777',
    address: 'Rua das Agulhas, 159 - Vila Costura',
    category: 'Serviços',
    hours: 'Seg-Sex 09h-17h',
    cnpj: '78.901.234/0001-56',
    latitude: -23.5545,
    longitude: -46.6373,
    distance: 1.8
  },
  {
    id: '8',
    name: 'Rosa Pães e Bolos Caseiros',
    description: 'Pães frescos e bolos caseiros feitos com carinho. Receitas tradicionais da família.',
    phone: '(11) 99999-8888',
    address: 'Rua Doce Lar, 753 - Jardim Rosa',
    category: 'Alimentação',
    hours: 'Seg-Sáb 06h-19h, Dom 07h-13h',
    cnpj: '89.012.345/0001-67',
    latitude: -23.5555,
    longitude: -46.6383,
    distance: 2.5,
    whatsappGroup: 'https://chat.whatsapp.com/rosapaesofertas'
  },
  {
    id: '9',
    name: 'Panificadora do Bairro',
    description: 'Pães quentinhos, salgados e doces. Tradição em qualidade há mais de 15 anos.',
    phone: '(11) 99999-9999',
    address: 'Av. do Pão, 951 - Bairro Alto',
    category: 'Alimentação',
    hours: 'Todos os dias 05h-20h',
    cnpj: '90.123.456/0001-78',
    latitude: -23.5475,
    longitude: -46.6303,
    distance: 1.1,
    whatsappGroup: 'https://chat.whatsapp.com/panificadoraofertas'
  },
  {
    id: '10',
    name: 'Panificadora do Bairro - OFERTA ESPECIAL',
    description: '🔥 COMBO IMPERDÍVEL: Sanduíche natural + Suco de laranja por apenas R$ 15,00! Oferta válida até o final do mês.',
    phone: '(11) 99999-9999',
    address: 'Av. do Pão, 951 - Bairro Alto',
    category: 'Promoções',
    hours: 'Todos os dias 05h-20h',
    cnpj: '90.123.456/0001-78',
    latitude: -23.5475,
    longitude: -46.6303,
    distance: 1.1,
    whatsappGroup: 'https://chat.whatsapp.com/panificadoraofertas'
  }
];

export function AppProvider({ children }: { children: ReactNode }) {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [user, setUser] = useState<User | null>(null);
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null);
  const [userBusiness, setUserBusiness] = useState<Business | null>(null);

  const isLoggedIn = user !== null;

  const logout = () => {
    setUser(null);
    setUserBusiness(null);
    setSelectedBusiness(null);
    setCurrentScreen('welcome');
  };

  return (
    <AppContext.Provider value={{
      currentScreen,
      setCurrentScreen,
      user,
      setUser,
      isLoggedIn,
      businesses: mockBusinesses,
      selectedBusiness,
      setSelectedBusiness,
      userBusiness,
      setUserBusiness,
      logout
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}