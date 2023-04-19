import React from 'react';
import Typography from '@mui/material/Typography';

// Components
import UserAvatar from '../atoms/UserAvatar';

// Helper
import { formatToCommentDate } from '../../lib/helper';

const IssueDescription = ({ userName, avatarUrl, commentCount, createdAt }) => {
  return (
    <Typography variant="subtitle2" gutterBottom sx={{ lineHeight: 2.5 }}>
      <UserAvatar name={userName} avatarUrl={avatarUrl} /> opened this issue on{' '}
      {formatToCommentDate(createdAt)}. {commentCount} comment
      {commentCount > 1 ? 's' : ''}
    </Typography>
  );
};
export default IssueDescription;
