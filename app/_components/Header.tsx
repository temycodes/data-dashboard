"use client";

import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useSession } from "next-auth/react";
import * as React from "react";
import { SignIn, SignOut } from "../_lib/actions";
import Link from "next/link";
import { inherits } from "util";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { data: session } = useSession();
  const profileAvatar = session?.user?.image as string;
  const profileName = session?.user?.name as string;

  return (
    <AppBar position='fixed'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Link href='/' style={{ textDecoration: "none", color: "inherit" }}>
            <Typography
              variant='h6'
              noWrap
              component='a'
              href='#app-bar-with-responsive-menu'
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "arial",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              DataNest
            </Typography>
          </Link>

          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant='h5'
            noWrap
            component='a'
            href='#app-bar-with-responsive-menu'
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            DataNest
          </Typography>

          {/* welcome name */}
          <Box sx={{ paddingRight: 5, marginLeft: "auto" }}>
            <Typography>{session ? `welcome ${profileName}` : ""}</Typography>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title='Login/Logout'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={profileName} src={profileAvatar} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={() => (session ? SignOut() : SignIn())}>
                <Typography sx={{ textAlign: "center" }}>{session ? "Logout" : "Login"}</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
