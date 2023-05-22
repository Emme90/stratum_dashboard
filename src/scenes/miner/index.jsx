import { Box } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

function Miner() {
  const { id } = useParams();
  console.log(id);
  return <Box m={"20px"}></Box>;
}

export default Miner;
