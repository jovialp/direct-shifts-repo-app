import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

// Components
import DashBoardList from '../../components/organisms/DashBoardList.jsx';
import PullRequest from '../../components/molecules/PullRequest';

// Services
import getPullRequestListService from '../../services/pullRequest/getList';

const Dashboard = () => {
  const [pullRequests, setPullRequests] = useState([]);

  const getPRList = async () => {
    const list = await getPullRequestListService({ perPage: 5 });
    console.log('list 3', list);
    setPullRequests(list?.[0]);
  };

  useEffect(() => {
    if (pullRequests.length === 0) {
      (async () => {
        await getPRList();
      })();
    }
  });
  return (
    <Container fixed>
      <Grid container spacing={2}>
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
            list={pullRequests}
            ItemComponent={PullRequest}
            viewAllLink="/pull-requests"
          />
        </Grid>
      </Grid>
      {/* <Issues data={[]} /> */}
    </Container>
  );
};
export default Dashboard;
