import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './home/Home';

const App: React.FC = () => {

  return (
    <SafeAreaProvider>
        <Home />
    </SafeAreaProvider>
  );
};

export default App;