"use client";

// import { useSession } from "next-auth/react";
import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Equalizer, ExitToApp, Home, Person, Settings } from "@mui/icons-material";
import Link from "next/link";
import { signOut } from "next-auth/react";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(({ theme }) => ({
  width: drawerWidth,

  ["& .MuiDrawer-paper"]: {
    top: 68,
    // height: `calc(100% - 68px)`,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    position: "fixed",

    "@media (max-width: 600px)": {
      top: "56px",
      height: "calc(100% - 56px)",
    },

    "@media (min-width: 600px)": {
      top: "68px",
      height: "calc(100% - 68px)",
    },
  },
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

// const menuRouteList = ["home", "", "profile", "settings", ""];
// const menuListTranslations = ["Home", "Profile", "Settings", "Logout"];
// const menuListIcons = [<Home />, <Person />, <Settings />, <ExitToApp />];

const menuItems = [
  { text: "Home", icon: Home, route: "/" },
  { text: "Data", icon: Equalizer, route: "/dashboard/" },
  { text: "Profile", icon: Person, route: "/dashboard/profile" },
  { text: "Settings", icon: Settings, route: "/dashboard/settings" },
  { text: "Logout", icon: ExitToApp, route: "" },
];

const SideMenu = () => {
  // const { data: session } = useSession();

  // if (!session) return null;

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleLogout = (text: string) => {
    if (text === "Logout") {
      signOut();
    } else {
      setOpen(false);
    }
  };

  return (
    <Drawer variant='permanent' anchor='left' open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerToggle}>
          {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />

      <Divider />
      <List>
        {menuItems.map(({ text, icon: Icon, route }) => (
          <ListItem key={text} disablePadding sx={{ display: "block" }}>
            <Link
              href={route}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <ListItemButton
                onClick={() => handleLogout(text)}
                title={text}
                aria-label={text}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  <Icon />
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideMenu;
