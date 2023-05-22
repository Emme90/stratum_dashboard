import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Miners = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "serialNumber",
      headerName: "SERIAL N.",
      flex: 1,
    },
    {
      field: "pool",
      headerName: "POOL",
      flex: 1,
    },
    {
      field: "detail",
      headerName: "",
      renderCell: (params) => (
        <Box width={"100%"} display={"flex"} justifyContent={"center"}>
          <Link to={`./${params.row.id}`}>
            <SearchOutlinedIcon sx={{ cursor: "pointer" }} />
          </Link>
        </Box>
      ),
    },
  ];
  const mockData = [
    {
      id: "1",
      serialNumber: "000001",
      pool: "BIT-POOL",
    },
    {
      id: "2",
      serialNumber: "000002",
      pool: "BIT-POOL",
    },
  ];
  return (
    <Box m={"20px"}>
      <Header title={"MINERS"} subTitle={"List of miners"} />
      <Box
        m={"40px"}
        height={"75vh"}
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none !important",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          columns={columns}
          rows={mockData}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Miners;
