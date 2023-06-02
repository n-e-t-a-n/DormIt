import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";

export default async function storeOwner({ email }, roleType) {
  try {
    await setDoc(doc(db, "users", email), {
      first_name: "test",
      last_name: "account",
      role: roleType,
      gender: "male",
    });
  } catch (error) {
    console.log(error);
  }
}
