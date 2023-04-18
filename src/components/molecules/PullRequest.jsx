import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';

// Icon
import PullRequestIcon from '../atoms/icons/PullRequestIcon';

const PullRequest = ({ data }) => {
  const { title, number, user } = data;

  return (
    <Link href={'/pull-request/' + number} underline="none">
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
    </Link>
  );
};
export default PullRequest;
