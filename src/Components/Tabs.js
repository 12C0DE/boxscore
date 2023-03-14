import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Tab } from "@mui/material";
import { BoxScore } from "./BoxScore/BoxScore";

export const TabsView = () => {
  const [tabValue, setTabValue] = useState("MLB");

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ width: "80%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="MLB" value="MLB" />
          <Tab label="NBA" value="NBA" />
        </Tabs>
      </Box>
      <BoxScore league={tabValue} />
    </Box>
  );
};
