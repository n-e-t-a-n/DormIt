import React from 'react';
import useAuthentication from './src/utils/hooks/useAuthentication';
import { Auth, User } from './src/stacks';

function App() {
  const isLoggedIn = useAuthentication();

  return (
    isLoggedIn ? <Auth /> : <User />
  );
};

export default App;