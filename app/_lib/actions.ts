import { signIn, signOut } from "next-auth/react";

export function SignIn() {
  signIn("google", { callbackUrl: "/" });
}

export function SignOut() {
  signOut({ callbackUrl: "/" });
}
