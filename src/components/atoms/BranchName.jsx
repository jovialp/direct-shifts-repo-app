import React from 'react';
import Chip from '@mui/material/Chip';

const BranchName = ({ name }) => {
  return <Chip label={name} sx={{ height: '25px', padding: '2px 0px' }} />;
};
export default BranchName;
