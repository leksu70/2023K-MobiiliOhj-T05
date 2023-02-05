// Leo: W3-T5-Laskin_navigoinnilla
// import { template } from '@babel/core';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HistoryScreen from './HistoryScreen';
import CalculatorScreen from './CalculatorScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Calculator' component={ CalculatorScreen } />
        <Stack.Screen name='History' component={ HistoryScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

