import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';

// Icon
import IssueIcon from '../atoms/icons/IssueIcon';

const Issue = ({ data }) => {
  const { title, number, user } = data;

  return (
    <Link href={'/issue/' + number} underline="none">
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <IssueIcon fillColor="#3fb950" />
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
export default Issue;
