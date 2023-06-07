import { DocumentHook, useDocument } from "react-firebase-hooks/firestore";
import { DocumentData, doc } from "firebase/firestore";
import { User } from "firebase/auth";

import { db } from "@config/firebase";

export default function useFirestoreState(user: User | undefined | null): DocumentHook<DocumentData> {
  return useDocument(doc(db, "users", user?.email || "doesnotexist"));
}
