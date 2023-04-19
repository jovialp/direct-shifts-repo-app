import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/joy/Button';

// Constants
import { STATUSES } from '../../constants/pullRequest';

const PullRequestStatus = ({ status, Icon }) => {
  const renderStatus = () => {
    switch (status) {
      case STATUSES.OPEN:
        return (
          <Button
            color="success"
            sx={{
              bgcolor: '#3fb950',
              borderRadius: 100,
              cursor: 'default',
              marginBottom: '10px',
            }}
            startDecorator={<Icon fillColor="#fff" />}
          >
            {status}
          </Button>
        );
      case STATUSES.CLOSED:
        return (
          <Button
            color="secondary"
            sx={{
              bgcolor: '#a371f7',
              borderRadius: 100,
              cursor: 'default',
              marginBottom: '10px',
              color: '#fff',
            }}
            startDecorator={<Icon fillColor="#fff" />}
          >
            {status}
          </Button>
        );
      default:
        return '';
    }
  };
  return <Box sx={{ display: 'flex' }}>{renderStatus()}</Box>;
};
export default PullRequestStatus;
