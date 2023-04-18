import React from 'react';

// Components
import TitleNumber from '../components/atoms/TitleNumber';
import PageTitle from '../components/atoms/PageTitle';
import PullRequestStatus from '../components/molecules/PullRequestStatus';
import PullRequestDescription from '../components/molecules/PullRequestDescription';

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
  console.log('ahha');
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
export default PullRequestHeader;
