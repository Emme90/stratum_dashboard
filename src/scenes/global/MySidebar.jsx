import React from "react";
import { useState } from "react";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutline";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import { ROUTES } from "../../constants";
// import "react-pro-sidebar/dist/styles/"

function Item({ title, to, icon, selected, setSelected }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: selected === title ? "#868dfb" : colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
}

function MySidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");

  const { collapseSidebar, collapsed } = useProSidebar();

  return (
    <Sidebar
      backgroundColor={colors.primary[400]}
      style={{ border: "none", scrollbarWidth: "1px" }}
    >
      <Menu
        menuItemStyles={{
          icon: () => {
            return {
              backgroundColor: "transparent",
            };
          },
          button: ({ active, level }) => {
            if (level === 0) {
              return {
                color: active ? "#6870fa" : undefined,
                "&:hover": {
                  color: "#868dfb !important",
                  backgroundColor: colors.primary[400],
                },
              };
            }
          },
        }}
      >
        <MenuItem
          onClick={() => collapseSidebar(!collapsed)}
          icon={collapsed ? <MenuOutlinedIcon /> : undefined}
          style={{
            margin: "10px 0 20px 0",
            color: colors.grey[100],
          }}
        >
          {!collapsed && (
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              ml={"15px"}
            >
              <Typography variant="h4" color={colors.grey[100]}>
                MINING PROXIES
              </Typography>
              <IconButton onClick={collapseSidebar}>
                {collapsed ? <ArrowBackOutlinedIcon /> : <MenuOutlinedIcon />}
              </IconButton>
            </Box>
          )}
        </MenuItem>
        {/* USER */}
        {/* {!collapsed && (
          <Box mb={"25px"}>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <img
                alt="profile"
                width={"100px"}
                height={"100px"}
                src={"../../assets/user.png"}
                style={{ cursor: "pointer", borderRadius: "50%" }}
              />
            </Box>
            <Box textAlign={"center"}>
              <Typography
                variant="h2"
                color={colors.grey[100]}
                fontWeight={"bold"}
                sx={{ m: "10px 0 0 0" }}
              >
                Milos Ribera
              </Typography>
              <Typography variant="h5" color={colors.greenAccent[500]}>
                Frontend Developer Admin
              </Typography>
            </Box>
          </Box>
        )} */}

        {/* MENU ITEMS */}
        <Box paddingLeft={collapsed ? undefined : "10%"}>
          <Item
            title={"Dashboard"}
            to={ROUTES.ROOT}
            icon={<HomeOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{ m: "15px 0 5px 20px" }}
          >
            Data
          </Typography>
          <Item
            title={"Miners"}
            to={ROUTES.MINERS}
            icon={<StorageOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title={"Manage Team"}
            to={"/team"}
            icon={<PeopleOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title={"Contacts Information"}
            to={"/contacts"}
            icon={<ContactsOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title={"Invoices Balances"}
            to={"/invoices"}
            icon={<ReceiptOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{ m: "15px 0 5px 20px" }}
          >
            Pages
          </Typography>
          <Item
            title={"Profile Form"}
            to={"/form"}
            icon={<PersonOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title={"Calendar"}
            to={"/calendar"}
            icon={<CalendarTodayOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title={"FAQ Page"}
            to={"/faq"}
            icon={<HelpOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{ m: "15px 0 5px 20px" }}
          >
            Charts
          </Typography>
          <Item
            title={"Bar Chart"}
            to={"/bar"}
            icon={<BarChartOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title={"Pie Chart"}
            to={"/pie"}
            icon={<PieChartOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title={"Line Chart"}
            to={"/line"}
            icon={<TimelineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title={"Geography Chart"}
            to={"/geo"}
            icon={<MapOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
        </Box>
      </Menu>
    </Sidebar>
  );
}

export default MySidebar;
