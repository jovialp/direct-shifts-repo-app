import React from 'react';
import Grid from '@mui/material/Grid';

// Components
import TitleNumber from '../atoms/TitleNumber';
import PageTitle from '../atoms/PageTitle';
import Status from '../molecules/Status';
import PullRequestDescription from '../molecules/PullRequestDescription';

// Icon
import PullRequestIcon from '../atoms/icons/PullRequestIcon';

const PullRequestHeader = ({
  pullRequestNumber,
  title,
  status,
  userName,
  avatarUrl,
  commitCount,
  headBranchName,
  baseBranchName,
}) => {
  return (
    <Grid item xs={12}>
      <TitleNumber title=" Pull Request" number={pullRequestNumber} />
      <PageTitle title={title} />
      <Status status={status} Icon={PullRequestIcon} />
      <PullRequestDescription
        userName={userName}
        avatarUrl={avatarUrl}
        commitCount={commitCount}
        headBranchName={headBranchName}
        baseBranchName={baseBranchName}
      />
    </Grid>
  );
};
export default PullRequestHeader;
