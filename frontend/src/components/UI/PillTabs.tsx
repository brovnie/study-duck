"use client";
import React, { JSX } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const PillTab = styled(Tab)(({ theme }) => ({
  textTransform: "none",
  borderRadius: "9999px",
  padding: "6px 20px",
  marginRight: theme.spacing(1),
  minHeight: "32px",
  minWidth: "30px",
  fontWeight: theme.typography.fontWeightMedium,
  ".MuiTabs-root  ": {
    minHeight: 0,
  },
  "&.Mui-selected": {
    backgroundColor: theme.palette.primary.main,
    color: "black",
  },
  "&:not(.Mui-selected)": {
    backgroundColor: "#f0f0f0",
    color: "#000",
  },
}));

function TabPanel(props: {
  children?: React.ReactNode;
  index: number;
  value: number;
}) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`pill-tabpanel-${index}`}
      aria-labelledby={`pill-tab-${index}`}
      {...other}
      className="p-0"
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const a11yProps = (index: number) => ({
  id: `pill-tab-${index}`,
  "aria-controls": `pill-tabpanel-${index}`,
});

interface PillTabsInterface {
  view1: JSX.Element | React.ReactNode;
  view2: JSX.Element | React.ReactNode;
}

const PillTabs = ({ view1, view2 }: PillTabsInterface) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="pill tabs"
        sx={{
          minHeight: 0,
          mb: 1,
          "& .MuiTabs-indicator": {
            display: "none",
          },
        }}
      >
        <PillTab label="Now" {...a11yProps(0)} className="min-h-0 p-0" />
        <PillTab label="Plan" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        {view1}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {view2}
      </TabPanel>
    </Box>
  );
};

export default PillTabs;
