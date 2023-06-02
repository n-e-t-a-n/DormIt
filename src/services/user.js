import { auth, db } from "@config/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

/**
 * Gets the currently autheticated user.
 *
 * @example
 * const user = getUser();
 * console.log(user);
 * // { "email": "sample@email.com", "gender": "female", "age": 22 }
 *
 * @returns Returns the authenticated user's data, or null if it doesn't exist.
 */
export async function getAuthUser() {
  try {
    const email = auth?.currentUser?.email || "doesnotexist";

    const user = await getDoc(doc(db, "users", email));

    return user.exists() ? user.data() : null;
  } catch (error) {
    console.error(error);
  }
}

/**
 * Creates a user.
 *
 * @example
 * const user = {
 *  email: "sample@email.com",
 *  gender: "female",
 *  age: 22
 * };
 * createUser(user, "Owner");
 *
 * @param Data Data of the user to-be-stored.
 * @param {string} roleType role of the user.
 * @returns {void} Returns nothing.
 */
export async function createUser({ email }, roleType) {
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
