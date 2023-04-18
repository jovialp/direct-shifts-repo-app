import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const CommentList = ({ comments = [] }) => {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {comments.map((comment, i) => {
        return (
          <>
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
            {i !== comments.length - 1 ? (
              <Divider variant="inset" component="li" />
            ) : (
              ''
            )}
          </>
        );
      })}
    </List>
  );
};

export default CommentList;
