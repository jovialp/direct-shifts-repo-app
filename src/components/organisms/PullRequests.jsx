import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Molecules
import PullRequest from '../molecules/PullRequest';

const PullRequests = ({ list }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant={'h5'} color="text.secondary" gutterBottom>
          Pull Requests
        </Typography>
        {list?.length > 0 && list.map((pr) => <PullRequest data={pr} />)}
      </CardContent>
      <CardActions>
        <Button size="small">View All</Button>
      </CardActions>
    </Card>
  );
};
export default PullRequests;
