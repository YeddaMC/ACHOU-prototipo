import React from 'react';
import { AppProvider, useApp } from './contexts/AppContext';
import { WelcomeScreen } from './components/WelcomeScreen';
import { UserTypeScreen } from './components/UserTypeScreen';
import { RegisterScreen } from './components/RegisterScreen';
import { LoginScreen } from './components/LoginScreen';
import { ConsumerHomeScreen } from './components/ConsumerHomeScreen';
import { BusinessDetailsScreen } from './components/BusinessDetailsScreen';
import { ConsumerProfileScreen } from './components/ConsumerProfileScreen';
import { EntrepreneurHomeScreen } from './components/EntrepreneurHomeScreen';
import { BusinessFormScreen } from './components/BusinessFormScreen';
import { ManagementPanelScreen } from './components/ManagementPanelScreen';
import { BusinessPreviewScreen } from './components/BusinessPreviewScreen';
import { PrivacyScreen } from './components/PrivacyScreen';
import { BottomNavigation } from './components/BottomNavigation';

function AppContent() {
  const { currentScreen, user } = useApp();

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen />;
      case 'userType':
        return <UserTypeScreen />;
      case 'register':
        return <RegisterScreen />;
      case 'login':
        return <LoginScreen />;
      case 'consumerHome':
        return <ConsumerHomeScreen />;
      case 'businessDetails':
        return <BusinessDetailsScreen />;
      case 'consumerProfile':
        return <ConsumerProfileScreen />;
      case 'entrepreneurHome':
        return <EntrepreneurHomeScreen />;
      case 'businessForm':
        return <BusinessFormScreen />;
      case 'managementPanel':
        return <ManagementPanelScreen />;
      case 'businessPreview':
        return <BusinessPreviewScreen />;
      case 'privacy':
        return <PrivacyScreen />;
      default:
        return <WelcomeScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-background safe-area-top safe-area-bottom">
      <div className={user ? 'pb-20' : ''}>
        {renderScreen()}
      </div>
      <BottomNavigation />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}