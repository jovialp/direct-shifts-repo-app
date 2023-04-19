import React from 'react';
import Typography from '@mui/material/Typography';

// Components
import UserAvatar from '../atoms/UserAvatar';
import BranchName from '../atoms/BranchName';

// Constants
import { STATUSES } from '../../constants/pullRequest';

const PullRequestDescription = ({
  userName,
  avatarUrl,
  commitCount,
  headBranchName,
  baseBranchName,
  status,
}) => {
  return (
    <Typography variant="subtitle2" gutterBottom sx={{ lineHeight: 2.5 }}>
      <UserAvatar name={userName} avatarUrl={avatarUrl} />{' '}
      {status === STATUSES.OPEN ? 'wants to merge' : ' merged'} {commitCount}{' '}
      commit{commitCount > 1 ? 's' : ''} into{' '}
      <BranchName name={baseBranchName} /> from{' '}
      <BranchName name={headBranchName} />
    </Typography>
  );
};
export default PullRequestDescription;
