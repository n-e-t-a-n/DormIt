import { db, auth } from '../../../config/firebase';
import { doc, getDoc } from 'firebase/firestore';

export default async function getUser() {
    try {
        const user = await getDoc(
            doc(db, "users", auth?.currentUser?.email)
        );
    
        return user.exists() ? user.data() : null;
    } catch (error) {
        console.log(error);
    }
}