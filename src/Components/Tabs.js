import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import { Paper, Tab } from "@mui/material";
import { BoxScore } from "./BoxScore/BoxScore";

export const TabsView = () => {
  const [tabValue, setTabValue] = useState("MLB");

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div className="xs:w-full w-11/12 flex justify-center mx-auto">
      <Paper
        elevation={4}
        sx={{ padding: "20px", bgcolor: "#FBF9F9" }}
        className="mx-auto"
      >
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
      </Paper>
    </div>
  );
};
