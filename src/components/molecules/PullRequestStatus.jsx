import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/joy/Button';

// Constants
import { STATUSES } from '../../constants/pullRequest';

// Icon
import PullRequestIcon from '../atoms/icons/PullRequestIcon';

const PullRequestStatus = ({ status }) => {
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
            startDecorator={<PullRequestIcon fillColor="#fff" />}
          >
            {status}
          </Button>
        );
    }
  };
  return <Box sx={{ display: 'flex' }}>{renderStatus()}</Box>;
};
export default PullRequestStatus;
