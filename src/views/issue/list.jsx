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
import getIssuesListService from '../../services/issue/getList';

const Issues = () => {
  const [issues, setIssues] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPageCount, setTotalPageCount] = useState(1);
  const [status, setStatus] = useState('open');
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState('created');

  const getIssueList = async () => {
    const { list, totalPages } = await getIssuesListService({
      page: page,
      perPage: 20,
      status,
      sort,
      totalPageCount: totalPageCount,
    });

    setIssues(list);
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
    if (issues.length === 0) {
      getIssueList();
    }
  });

  useEffect(() => {
    setIsLoading(true);
    getIssueList();
  }, [status, page, sort]);

  return (
    <Container fixed>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <PageTitle title={'Issues'} />
        </Grid>

        <Grid item xs={12}>
          <PageList
            list={issues}
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
export default Issues;
