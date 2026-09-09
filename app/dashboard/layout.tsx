"use client";

import { styled } from "@mui/material/styles";
import Header from "../_components/Header";
import SideMenu from "../_components/SideMenu";

const Container = styled("div")({
  display: "flex",
  minHeight: "calc(100vh - 64px)",
  marginTop: "64px",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Container>
        <SideMenu />
        <main
          style={{
            flex: 1,
            padding: "35px",
            // minHeight: "100vh",
          }}
        >
          {children}
        </main>
      </Container>
    </>
  );
}
