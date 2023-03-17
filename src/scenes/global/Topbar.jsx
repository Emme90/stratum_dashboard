import React from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlined from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlined from "@mui/icons-material/SettingsOutlined";
import PersonOutlined from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants";

function Topbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const navigate = useNavigate();

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box display="flex" bgcolor={colors.primary[400]} borderRadius={"3px"}>
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder={"Search"} />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined />
          ) : (
            <LightModeOutlined />
          )}
        </IconButton>
        {/* <IconButton>
          <NotificationsOutlined />
        </IconButton> */}
        <IconButton onClick={() => navigate(ROUTES.SETTINGS)}>
          <SettingsOutlined />
        </IconButton>
        {/* <IconButton>
          <PersonOutlined />
        </IconButton> */}
      </Box>
    </Box>
  );
}

export default Topbar;
