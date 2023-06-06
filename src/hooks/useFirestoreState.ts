import { useDocument } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
import { User } from "firebase/auth";

import { db } from "@config/firebase";

export default function useFirestoreState(user: User | undefined | null) {
  return useDocument(doc(db, "users", user?.email || "doesnotexist"));
}
