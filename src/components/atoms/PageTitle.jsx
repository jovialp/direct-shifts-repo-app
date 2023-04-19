import React from 'react';
import Typography from '@mui/material/Typography';

const PageTitle = ({ title }) => {
  return (
    <Typography variant={'h5'} color="text.secondary" gutterBottom>
      {title}
    </Typography>
  );
};
export default PageTitle;
