import React from 'react';
import Auth from './src/stacks/Auth';
import Owner from './src/stacks/Owner'
import { NavigationContainer } from '@react-navigation/native';

function App() {
  return (
    <NavigationContainer>
      <Owner />
    </NavigationContainer>
  );
};

export default App;