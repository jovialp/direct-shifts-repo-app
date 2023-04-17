import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';

// Components
import PageList from '../../components/organisms/PageList.jsx';
import PullRequest from '../../components/molecules/PullRequest';

// Services
import getPullRequestListService from '../../services/pullRequest/getList';

const PullRequests = () => {
  const [pullRequest, setPullRequest] = useState([]);

  const getPRList = async () => {
    const list = await getPullRequestListService({
      pagination: true,
      perPage: 20,
      status,
    });
    console.log('list 3', list);
    setPullRequests(list);
  };
  const changePage = (event, pageNumber) => {
    setPage(pageNumber);
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
          <PageList
            title={'Pull Requests'}
            list={pullRequests[page - 1]}
            ItemComponent={PullRequest}
            changePage={changePage}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
export default PullRequests;
