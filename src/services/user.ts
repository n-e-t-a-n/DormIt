import type { DocumentData } from "firebase/firestore";
import { doc, getDoc, setDoc } from "firebase/firestore";

import { auth, db } from "@config/firebase";

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
export async function getAuthUser(): Promise<DocumentData | null> {
  let authUser: DocumentData | null = null;

  try {
    const email = auth?.currentUser?.email || "doesnotexist";

    const user = await getDoc(doc(db, "users", email));
    if (user.exists()) authUser = user.data();
  } catch (error) {
    console.error(error);
  }

  return authUser;
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
 * @returns Returns nothing.
 */
export async function createUser(
  {
    email,
    first_name,
    last_name,
    gender,
  }: { email: string; first_name: string; last_name: string; gender: string },
  roleType: string
): Promise<void> {
  try {
    await setDoc(doc(db, "users", email?.trim()?.toLowerCase()), {
      first_name,
      last_name,
      role: roleType,
      gender,
    });
  } catch (error) {
    console.error(error);
  }
}
