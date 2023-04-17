import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

// Components
import RadioFilter from '../molecules/RadioFilter';

const PageList = ({ title, list, ItemComponent, isLoading }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <RadioFilter />
      <CardContent>
        {isLoading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress />
          </Box>
        ) : (
          <List>
            {list?.length > 0 &&
              list.map((pr, i) => <ItemComponent key={i} data={pr} />)}
          </List>
        )}
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};
export default PageList;
