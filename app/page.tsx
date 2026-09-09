"use client";

import { styled } from "@mui/material/styles";
import Header from "./_components/Header";
import Login from "./_components/Login";
import { useSession } from "next-auth/react";

const Main = styled("main")({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "35px",
});

export default function Page() {
  const { data: session, status } = useSession();

  return (
    <>
      <Header />
      <Main>
        <h1>Landing page</h1>

        {status === "unauthenticated" && <Login />}
      </Main>
    </>
  );
}
