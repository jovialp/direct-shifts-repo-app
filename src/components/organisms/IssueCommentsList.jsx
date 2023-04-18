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

const IssueCommentsList = ({ comments = [] }) => {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {comments.map((comment, i) => {
        return (
          <Card variant="outlined">
            <CardOverflow
              variant="soft"
              sx={{
                display: 'flex',
                gap: 1.5,
                py: 1.5,
                px: 'var(--Card-padding)',
                bgcolor: 'background.level1',
              }}
            >
              <Typography
                level="body3"
                sx={{ fontWeight: 'md', color: 'text.secondary' }}
              >
                6.3k views
              </Typography>
              <Divider orientation="vertical" />
              <Typography
                level="body3"
                sx={{ fontWeight: 'md', color: 'text.secondary' }}
              >
                1 hour ago
              </Typography>
            </CardOverflow>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={comment.userName} src={comment.userAvatarUrl} />
              </ListItemAvatar>
              <ListItemText
                primary={comment.commentText}
                secondary={
                  <Box
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {comment.userName}
                    </Typography>
                    {new Date(comment.updatedAt).toLocaleString()}
                  </Box>
                }
              />
            </ListItem>
          </Card>
        );
      })}
    </List>
  );
};

export default IssueCommentsList;
