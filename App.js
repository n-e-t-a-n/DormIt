import React from 'react';
import { getUser } from './src/utils';
import { Auth, User } from './src/stacks';
import { NavigationContainer } from '@react-navigation/native';

function App() {
  return (
    <NavigationContainer>
        <Auth />
    </NavigationContainer>
  );
};

export default App;