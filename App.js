import React from 'react';
import { getUser } from './src/utils';
import { Auth, User } from './src/stacks';

function App() {
  const isLoggedIn = getUser();

  return (
    isLoggedIn ? <User /> : <Auth />
  );
};

export default App;