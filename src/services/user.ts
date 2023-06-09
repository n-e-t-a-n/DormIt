import type { DocumentData } from "firebase/firestore";
import { doc, getDoc, setDoc } from "firebase/firestore";

import type { UserDetail } from "@@types/models";

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
    phone_number,
    emergency_contact,
    address,
    educational_institution,
    max_budget,
    rating,
  }: UserDetail,
  roleType: string
): Promise<void> {
  try {
    const userDoc = {
      first_name,
      last_name,
      role: roleType,
      gender,
      phone_number,
      emergency_contact,
      address,
      educational_institution: educational_institution || null,
      max_budget: max_budget || null,
      rating: rating || null,
    };

    await setDoc(doc(db, "users", email?.trim().toLowerCase()), userDoc);
  } catch (error) {
    console.error(error);
  }
}
