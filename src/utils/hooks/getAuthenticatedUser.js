import React from 'react';
import app from '../../../config/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth(app);

export default function getAuthenticatedUser() {
  return auth.currentUser || undefined;
}