import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import SpeedIcon from '@material-ui/icons/Speed';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab icon={<WhatshotIcon />} label="Destruction" {...a11yProps(0)} />
        <Tab icon={<HourglassEmptyIcon />} label="Slow" {...a11yProps(1)} />
        <Tab icon={<SpeedIcon />} label="Fast" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <img src="/images/towertest.png" alt="" />
        <br/>
        Destructive tours have the most powerful damage since its attacks
        have an area effect but is very slow.
      </TabPanel>
      <TabPanel value={value} index={1}>
        <img src="/images/towertest2.jpg" alt="" />
        <br/>
        Slowing towers are the most adapted if the enemy is strong
        or is fast. At strategic places, this tower can totally make the game.
      </TabPanel>
      <TabPanel value={value} index={2}>
        <img src="/images/towertest3.jpeg" alt="" />
        <br/>
        Fast attacks towers is essential for fast and weak enemy as they can kill them
        quicly. However, they only posess single targeted enemy and week attacks.
      </TabPanel>
    </div>
  );
}