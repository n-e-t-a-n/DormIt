import { auth } from '../../config/firebase';

export default function getAuthenticatedUser() {
  return auth.currentUser || undefined;
}