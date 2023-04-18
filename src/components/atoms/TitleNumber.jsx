import React from 'react';
import Typography from '@mui/material/Typography';

const TitleNumber = ({ title, number }) => {
  return (
    <Typography variant="subtitle2" gutterBottom>
      {title} #{number}
    </Typography>
  );
};
export default TitleNumber;
