import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

// Components
import DashBoardList from '../../components/organisms/DashBoardList.jsx';
import PullRequest from '../../components/molecules/PullRequest';

// Services
import getPullRequestListService from '../../services/pullRequest/getList';

const PullRequests = () => {
  const [pullRequests, setPullRequests] = useState([]);
  const [page, setPage] = useState(1);

  const getPRList = async () => {
    const list = await getPullRequestListService({ page: page, perPage: 20 });
    console.log('list 3', list);
    setPullRequests(list);
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
        <Grid item xs={12}>
          <DashBoardList
            title={'Pull Requests'}
            list={pullRequests}
            ItemComponent={PullRequest}
            viewAllLink="/pull-requests"
          />
        </Grid>

        <Grid item xs={12}>
          pagi
        </Grid>
      </Grid>
      {/* <Issues data={[]} /> */}
    </Container>
  );
};
export default PullRequests;
