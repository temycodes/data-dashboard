// layout for all auth routes
"use client";

import { Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const Card = styled(Box)({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container maxWidth='sm'>
      <Card>{children}</Card>
    </Container>
  );
}
