import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';

// Components
import PullRequestHeader from '../../components/organisms/PullRequestHeader';
import PullRequestStatus from '../../components/molecules/PullRequestStatus';
import PageTitle from '../../components/atoms/PageTitle';

// Services
import getPullRequestListService from '../../services/pullRequest/getDetails';

const PullRequestDetails = (props) => {
  const [pullRequestDetails, setPullRequestDetails] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const pullRequestNumber = params.number;

  const getPRList = async () => {
    const details = await getPullRequestListService({
      number: pullRequestNumber,
    });

    setPullRequestDetails(details);
    setIsLoading(false);
  };

  useEffect(() => {
    if (!pullRequestDetails) {
      getPRList();
    }
  });

  return (
    <Container fixed>
      <Grid container spacing={2}>
        <PullRequestHeader
          pullRequestNumber={pullRequestNumber}
          title={pullRequestDetails?.title}
          status={pullRequestDetails?.state}
          userName={pullRequestDetails?.user?.login}
          avatarUrl={pullRequestDetails?.user?.avatar_url}
          commitCount={pullRequestDetails?.commits}
          headBranchName={pullRequestDetails?.head?.label}
          baseBranchName={pullRequestDetails?.base?.label}
        />
        <Grid item xs={12}>
          <Typography variant="subtitle2" gutterBottom>
            Pull Request #{pullRequestNumber}
          </Typography>
          <PageTitle title={pullRequestDetails?.title} />
          <PullRequestStatus status={pullRequestDetails?.state} />
          <Typography variant="subtitle2" gutterBottom>
            <Chip
              avatar={
                <Avatar
                  alt={pullRequestDetails?.user?.login}
                  src={pullRequestDetails?.user?.avatar_url}
                />
              }
              label={pullRequestDetails?.user?.login}
              variant="outlined"
              sx={{ height: 'auto', padding: '2px 0px' }}
            />{' '}
            wants to merge {pullRequestDetails?.commits} commits into{' '}
            <Chip
              label={pullRequestDetails?.base?.label}
              sx={{ height: 'auto', padding: '2px 0px' }}
            />{' '}
            from <Chip label={pullRequestDetails?.head?.label} />
          </Typography>
        </Grid>

        <Grid item xs={12}></Grid>

        <Grid item xs={12}></Grid>
      </Grid>
    </Container>
  );
};
export default PullRequestDetails;
