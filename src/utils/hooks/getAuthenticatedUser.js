import React from 'react';
import app from '../../../config/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth(app);

export default function getAuthenticatedUser() {
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    const unsubscribeFromAuthStatuChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(undefined);
      }
    });

    return unsubscribeFromAuthStatuChanged;
  }, []);

  return {
    user
  };
}