import React from 'react';
import Typography from '@mui/material/Typography';

// Components
import UserAvatar from '../atoms/UserAvatar';
import BranchName from '../atoms/BranchName';

const PullRequestDescription = ({
  userName,
  avatarUrl,
  commitCount,
  headBranchName,
  baseBranchName,
}) => {
  return (
    <Typography variant="subtitle2" gutterBottom sx={{ lineHeight: 2.5 }}>
      <UserAvatar name={userName} avatarUrl={avatarUrl} /> wants to merge{' '}
      {commitCount} commits into <BranchName name={baseBranchName} /> from{' '}
      <BranchName name={headBranchName} />
    </Typography>
  );
};
export default PullRequestDescription;
