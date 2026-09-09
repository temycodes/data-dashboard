"use client";

import { Box, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useSession } from "next-auth/react";

const DashboardGrid = styled(Grid)({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "1rem",
  margin: "auto",

  "@media (max-width: 760px)": {
    gridTemplateColumns: "1fr",
  },
});

const DashboardCard = styled(Paper)({
  padding: "20px",
  minHeight: 200,
  borderRadius: 12,
});

const Dashboard = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  // if (!session) {
  //   return <p>Login to view the dashboard</p>;
  // }

  return (
    <Box>
      <DashboardGrid container spacing={2}>
        <Grid>
          <DashboardCard>xs=4</DashboardCard>
        </Grid>
        <Grid>
          <DashboardCard>xs=4</DashboardCard>
        </Grid>
        <Grid>
          <DashboardCard>xs=4</DashboardCard>
        </Grid>
        <Grid sx={{ gridColumn: "1 / -1", mt: 2, mb: 2 }}>
          <DashboardCard>xs=8</DashboardCard>
        </Grid>
      </DashboardGrid>
    </Box>
  );
};

export default Dashboard;
