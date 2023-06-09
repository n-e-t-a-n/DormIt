import React from "react";

import { doc } from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";

import Admin from "@navigation/Admin";
import Owner from "@navigation/Owner";
import User from "@navigation/User";
import { Loading } from "@components/common";

import { auth, db } from "@config/firebase";

export default function RoleResolver() {
  const [value] = useDocument(doc(db, "users", auth?.currentUser?.email || ""));

  const role = value?.data()?.role;

  if (role === "Admin") return <Admin />;
  if (role === "Owner") return <Owner />;
  if (role === "User") return <User />;

  return <Loading />;
}
