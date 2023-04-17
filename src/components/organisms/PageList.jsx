import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

// Components
import RadioFilter from '../molecules/RadioFilter';
import SelectFilter from '../molecules/SelectFilter';

// Constants
import { STATUS_LIST, SORT_OPTIONS } from '../../constants/pullRequest';

const PageList = ({
  list,
  ItemComponent,
  isLoading,
  onChangeStatus,
  onChangeSort,
  status,
  selectedSort,
}) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <Box
        px="20px"
        py="10px"
        sx={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <RadioFilter
          name="Status"
          filterOptions={STATUS_LIST}
          onChange={onChangeStatus}
          currentValue={status}
        />
        <SelectFilter
          name="Sort"
          filterOptions={SORT_OPTIONS}
          onChange={onChangeSort}
          currentValue={selectedSort}
        />
      </Box>
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
