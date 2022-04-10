import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import Logo from "../components/Logo";
import useAuth from "../hooks/useAuth";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function MainHeader() {
  const { user } = useAuth();
  const auth = useAuth();
  let navigate = useNavigate();

  return (
    <Box>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Logo />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            CoderStore
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Typography variant="h6" color="inherit" component="div">
            Welcome {user?.username}!
          </Typography>
          <Button
            sx={{ ml: 2 }}
            onClick={() => {
              auth.logout(() => navigate("/"));
            }}
            color="inherit"
          >
            <LogoutIcon />
            Log out
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MainHeader;
