import { db } from "@config/firebase";
import { doc, setDoc } from "firebase/firestore";

export default async function storeOwner({ email }, roleType) {
  try {
    await setDoc(doc(db, "users", email), {
      first_name: "test",
      last_name: "account",
      role: roleType,
      gender: "male",
    });
  } catch (error) {
    console.error(error);
  }
}
