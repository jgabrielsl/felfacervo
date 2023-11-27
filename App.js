import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import Routes from './Routes/Navigator'

import { useFonts, Poppins_400Regular, Poppins_300Light, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

export default function App() {
   let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_300Light,
    Poppins_600SemiBold,
    'Misologist': require('./assets/fonts/Misologist.ttf'),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
     <NavigationContainer>
      <Routes/>
     </NavigationContainer>
  );
}

