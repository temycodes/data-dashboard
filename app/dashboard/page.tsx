"use client";

import { styled } from "@mui/material/styles";
import Dashboard from "../_components/Dashboard";

const Main = styled("main")({
  // padding: "24px",
});

const page = () => {
  return (
    <Main>
      <p>dashboard</p>
      <Dashboard />
    </Main>
  );
};

export default page;
