import React, { useState, useCallback } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './home/Home';
import { PlanetType } from './home/homeHelper/types';

import { createContext } from 'react';


type ContextType = {
  selectedPlanets: PlanetType[];
  onPlanetPress: (planetPressed: PlanetType) => void;
  clearSelections: () => void;
}

export const AppContext = createContext<ContextType | undefined>(undefined);

const App: React.FC = () => {
  const [selectedPlanets, setSelectedPlanets] = useState<PlanetType[]>([]);
  
  /**
   * Adds the pressed planet to the selectedPlanets array, if the array length is <5 and if the item is not already added
  */
  const onPlanetPress: (planetPressed: PlanetType) => void = useCallback(( planetPressed ) => {
        
    let tempSelectedPlanets: PlanetType[] = [...selectedPlanets];
    const isSelected: boolean = tempSelectedPlanets?.some((planet: PlanetType) => planet?.id === planetPressed?.id);
    
    if ((tempSelectedPlanets?.length < 5) && !isSelected) {
      tempSelectedPlanets.push(planetPressed);
      setSelectedPlanets(tempSelectedPlanets);
    }

  }, [selectedPlanets]);
  
  /**
   * Clears selected planets array
  */
  const clearSelections: () => void = useCallback(() => {
      
    setSelectedPlanets([]);
  }, []);


  return (
    <SafeAreaProvider>
      <AppContext.Provider value={{ selectedPlanets, onPlanetPress, clearSelections }}>
        <Home />
      </AppContext.Provider>
    </SafeAreaProvider>
  );
};

export default App;