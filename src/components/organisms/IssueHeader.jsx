import React from 'react';
import Grid from '@mui/material/Grid';

// Components
import TitleNumber from '../atoms/TitleNumber';
import PageTitle from '../atoms/PageTitle';
import Status from '../molecules/Status';
import IssueDescription from '../molecules/IssueDescription';

// Icon
import IssueIcon from '../atoms/icons/IssueIcon';

const IssueHeader = ({
  pullRequestNumber,
  title,
  status,
  userName,
  avatarUrl,
  commentCount,
  createdAt,
}) => {
  return (
    <Grid item xs={12}>
      <TitleNumber title="Issue" number={pullRequestNumber} />
      <PageTitle title={title} />
      <Status status={status} Icon={IssueIcon} />
      <IssueDescription
        userName={userName}
        avatarUrl={avatarUrl}
        commentCount={commentCount}
        createdAt={createdAt}
      />
    </Grid>
  );
};
export default IssueHeader;
