"use client";

import Login from "@/app/_components/Login";
import { useSession } from "next-auth/react";

export default function SignInPage() {
  const { data: session } = useSession();

  return (
    <>
      <h2>{session ? "Successfully Logged In" : "Please log in"}</h2>
      <Login />
    </>
  );
}
