import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// Components
import PageList from '../../components/organisms/PageList.jsx';
import PullRequest from '../../components/molecules/PullRequest';

// Services
import getPullRequestListService from '../../services/pullRequest/getList';

const PullRequests = () => {
  const [pullRequests, setPullRequests] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('open');
  const [isLoading, setIsLoading] = useState(true);

  const getPRList = async () => {
    const list = await getPullRequestListService({
      pagination: true,
      perPage: 20,
      status,
    });

    setPullRequests(list);
    setIsLoading(false);
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
          <Typography
            variant={'h5'}
            color="text.secondary"
            alignCenter
            gutterBottom
          >
            Pull Requests
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <PageList
            list={pullRequests[page - 1]}
            ItemComponent={PullRequest}
            isLoading={isLoading}
          />
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Pagination
              count={pullRequests.length}
              hidePrevButton
              hideNextButton
              page={page}
              onChange={changePage}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
export default PullRequests;