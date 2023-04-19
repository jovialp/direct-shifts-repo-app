import React from 'react';
import Grid from '@mui/material/Grid';

// Components
import TitleNumber from '../atoms/TitleNumber';
import PageTitle from '../atoms/PageTitle';
import PullRequestStatus from '../molecules/PullRequestStatus';
import PullRequestDescription from '../molecules/PullRequestDescription';

const IssueHeader = ({
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
      <PullRequestStatus status={status} />
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
export default IssueHeader;
