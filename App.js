import React from 'react';
import getAuthenticatedUser from './src/utils/hooks/getAuthenticatedUser';
import { Auth, User } from './src/stacks';

function App() {
  const isLoggedIn = getAuthenticatedUser();

  return (
    isLoggedIn ? <User /> : <Auth />
  );
};

export default App;