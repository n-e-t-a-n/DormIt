import app from '../../../config/firebase';
import { getAuth } from 'firebase/auth';

const auth = getAuth(app);

export default function getAuthenticatedUser() {
  return auth.currentUser || undefined;
}