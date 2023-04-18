import * as React from 'react';
// import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const TabPanel = (props) => {
  const { children, value, name, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`${name}-tabpanel-${index}`}
      aria-labelledby={`${name}-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index, name) => {
  return {
    id: `${name}-tab-${index}`,
    'aria-controls': `${name}-tabpanel-${index}`,
  };
};

const TabSection = (props) => {
  const { tabList = [], tabPannelContentList = [] } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {tabList.map((label, i) => (
            <Tab label={label} {...a11yProps(i, label)} />
          ))}
        </Tabs>
      </Box>
      {tabPannelContentList.map((PanelContentComponent, i) => {
        return (
          <TabPanel value={value} index={i}>
            {PanelContentComponent}
          </TabPanel>
        );
      })}
    </Box>
  );
};
export default TabSection;
