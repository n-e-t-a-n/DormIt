import { useDocument } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
import { User } from "firebase/auth";

import { db } from "@config/firebase";

export default function (user: User | undefined | null) {
  const [value] = useDocument(doc(db, "users", user?.email || ""));

  return [value];
}
