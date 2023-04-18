import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

// Components
import DashBoardList from '../../components/organisms/DashBoardList.jsx';
import PullRequest from '../../components/molecules/PullRequest';
import PageTitle from '../../components/atoms/PageTitle';

// Services
import getPullRequestListService from '../../services/pullRequest/getList';
import getIssuesListService from '../../services/issue/getList';

const Dashboard = () => {
  const [pullRequests, setPullRequests] = useState([]);
  const [issues, setIssues] = useState([]);

  const getPRList = async () => {
    const { list } = await getPullRequestListService({
      page: 1,
      perPage: 5,
    });
    setPullRequests(list);
  };

  const getIssuesList = async () => {
    const { list } = await getIssuesListService({
      page: 1,
      perPage: 5,
    });
    setIssues(list);
  };

  useEffect(() => {
    if (pullRequests.length === 0) {
      getPRList();
    }

    if (issues.length === 0) {
      getIssuesList();
    }
  });
  return (
    <Container fixed>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <PageTitle title={'Dashboard'} />
        </Grid>
        <Grid item xs={12} md={6}>
          <DashBoardList
            title={'Pull Requests'}
            list={pullRequests}
            ItemComponent={PullRequest}
            viewAllLink="/pull-requests"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <DashBoardList
            title={'Issues'}
            list={issues}
            ItemComponent={PullRequest}
            viewAllLink="/issues"
          />
        </Grid>
      </Grid>
    </Container>
  );
};
export default Dashboard;
