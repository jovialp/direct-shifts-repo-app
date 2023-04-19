import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';

// Components
import IssueComment from '../molecules/IssueComment';

const IssueCommentsList = ({ comments = [] }) => {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {comments.map((comment, i) => {
        return <IssueComment key={i} comment={comment} />;
      })}
    </List>
  );
};

export default IssueCommentsList;
