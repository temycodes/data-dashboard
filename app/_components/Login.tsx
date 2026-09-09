"use client";

import { Button } from "@mui/material";
import { useSession } from "next-auth/react";
import { SignIn, SignOut } from "../_lib/actions";

const Login = () => {
  const { data: session, status } = useSession();

  console.log("session:", session);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (session) {
    return (
      <>
        <Button type='button' variant='outlined' onClick={() => SignOut()}>
          Sign Out
        </Button>
      </>
    );
  }

  return (
    <Button sx={{ color: "white" }} variant='contained' color='primary' type='button' onClick={() => SignIn()}>
      Sign In
    </Button>
  );
};

export default Login;
