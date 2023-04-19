import React from 'react';
import ListItemText from '@mui/material/ListItemText';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

// Components
import UserAvatar from '../atoms/UserAvatar';
import CodeBlock from '../atoms/CodeBlock';

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
          return <CodeBlock text={text} />;
        } else {
          return <ListItemText primary={text} />;
        }
      })}
    </Card>
  );
};
export default IssueComment;
