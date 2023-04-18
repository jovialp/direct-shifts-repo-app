import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';

// Components
import PageList from '../../components/organisms/PageList.jsx';
import PullRequest from '../../components/molecules/PullRequest';
import PageTitle from '../../components/atoms/PageTitle';

// Constants
import { STATUS_LIST, SORT_OPTIONS } from '../../constants/pullRequest';

// Services
import getPullRequestListService from '../../services/pullRequest/getList';

const PullRequests = () => {
  const [pullRequests, setPullRequests] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPageCount, setTotalPageCount] = useState(1);
  const [status, setStatus] = useState('open');
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState('created');

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

  useEffect(() => {
    setIsLoading(true);
    getPRList();
  }, [status, page, sort]);

  return (
    <Container fixed>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <PageTitle title={'Pull Requests'} />
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
            statusList={STATUS_LIST}
            sortOptions={SORT_OPTIONS}
          />
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Pagination
              count={Number(totalPageCount)}
              hidePrevButton
              hideNextButton
              page={Number(page)}
              onChange={onChangePage}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
export default PullRequests;
