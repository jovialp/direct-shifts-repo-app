import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

// Components
import UserAvatar from '../atoms/UserAvatar';

const IssueComment = ({ comment }) => {
  return (
    <Card variant="outlined" sx={{ marginBottom: '10px' }}>
      <CardOverflow
        variant="soft"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignContent: 'center',
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
      {comment?.commentText?.split('```')?.map((text, i) => {
        if (i % 2 === 1) {
          return (
            <Box
              component="div"
              sx={{
                display: 'block',
                p: 1,
                m: 1,
                bgcolor: (theme) =>
                  theme.palette.mode === 'dark' ? '#101010' : '#fff',
                color: (theme) =>
                  theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                border: '1px solid',
                borderColor: (theme) =>
                  theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700',
              }}
            >
              <code>{text}</code>
            </Box>
          );
        } else {
          return <ListItemText primary={text} />;
        }
      })}
    </Card>
  );
};
export default IssueComment;
