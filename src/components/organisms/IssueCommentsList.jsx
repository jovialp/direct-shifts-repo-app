import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';

// Components
import UserAvatar from '../atoms/UserAvatar';

const IssueCommentsList = ({ comments = [] }) => {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {comments.map((comment, i) => {
        return (
          <Card variant="outlined" sx={{ marginBottom: '10px' }}>
            <CardOverflow
              variant="soft"
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignContent: 'center',
                // gap: 1.5,
                py: 1.5,
                px: 'var(--Card-padding)',
                bgcolor: 'background.level1',
              }}
            >
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                <UserAvatar
                  name={comment.userName}
                  avatarUrl={comment.userAvatarUrl}
                />
              </Typography>

              <Divider orientation="vertical" />
              <Typography
                level="body3"
                sx={{ fontWeight: 'md', color: 'text.secondary' }}
              >
                {new Date(comment.updatedAt).toLocaleString()}
              </Typography>
            </CardOverflow>
            <ListItem alignItems="flex-start">
              <ListItemText primary={comment.commentText} />
            </ListItem>
          </Card>
        );
      })}
    </List>
  );
};

export default IssueCommentsList;
