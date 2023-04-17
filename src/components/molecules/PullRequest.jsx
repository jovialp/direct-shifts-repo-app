import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// Icon
import PullRequestIcon from '../atoms/icons/PullRequestIcon';

const PullRequest = ({ data }) => {
  const { title, number, user } = data;
  // console.log(data);
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <PullRequestIcon fillColor="#3fb950" />
        </ListItemIcon>
        <ListItemText
          primary={title}
          secondary={`#${number} opened by ${user.login}`}
        />
      </ListItemButton>
    </ListItem>
  );
};
export default PullRequest;
