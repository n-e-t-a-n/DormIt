import { db, auth } from '../../../config/firebase';
import { doc, getDoc } from 'firebase/firestore';

export default async function getCurrentUser() {
    try {
        const email = auth?.currentUser?.email || "doesnotexist";

        const user = await getDoc(
            doc(db, "users", email)
        );
    
        return user.exists() ? user.data() : null;
    } catch (error) {
        console.log(error);
    }
}