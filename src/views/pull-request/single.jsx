import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';

// Components
import PageList from '../../components/organisms/PageList.jsx';
import PullRequest from '../../components/molecules/PullRequest';
import PageTitle from '../../components/atoms/PageTitle';

// Services
import getPullRequestListService from '../../services/pullRequest/getList';

const PullRequests = () => {
  const [pullRequests, setPullRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPRList = async () => {
    const { list, totalPages } = await getPullRequestListService({
      page: page,
      perPage: 20,
      status,
      sort,
      totalPageCount: totalPageCount,
    });

    setPullRequests(list);
    setTotalPageCount(totalPages);
    setIsLoading(false);
  };
  const onChangePage = (event, pageNumber) => {
    setPage(pageNumber);
  };

  const onChangeStatus = (value) => {
    setStatus(value);
  };

  const onChangeSort = (value) => {
    setSort(value);
  };

  useEffect(() => {
    if (pullRequests.length === 0) {
      getPRList();
    }
  });

  return (
    <Container fixed>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <PageTitle title={'Pull Request #'+ number} />
        </Grid>

        <Grid item xs={12}>
          <PageList
            list={pullRequests}
            ItemComponent={PullRequest}
            isLoading={isLoading}
            onChangeStatus={onChangeStatus}
            status={status}
            onChangeSort={onChangeSort}
            selectedSort={sort}
          />
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Pagination
              count={totalPageCount}
              hidePrevButton
              hideNextButton
              page={page}
              onChange={onChangePage}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
export default PullRequests;
