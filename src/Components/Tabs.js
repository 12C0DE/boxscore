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
    <div className="w-full md:w-11/12 flex justify-center mx-auto mb-6">
      <Paper
        elevation={4}
        sx={{ paddingX: { xs: "2px", sm: "20px" }, bgcolor: "#FBF9F9" }}
        className="mx-auto pb-5"
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
