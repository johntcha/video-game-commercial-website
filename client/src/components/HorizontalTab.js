import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './Tabs.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function HorizontalTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="KAKAROTTOOOO" {...a11yProps(0)} />
          <Tab label="Encore du travail?" {...a11yProps(1)} />
          <Tab label="Vous n'êtes pas pret" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
        <TabPanel value={value} index={0}>
          <img src="/images/broly.png" alt="" />
          <p>Lent mais fort</p>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <img src="/images/peon.jpg" alt="" />
          <p>Faible mais speed.</p>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <img src="/images/illidan.jpg" alt="" />
          <p>Costaud et allure moyenne.</p>
        </TabPanel>
    </div>
  );
}