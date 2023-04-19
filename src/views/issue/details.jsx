import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

// Components
import IssueHeader from '../../components/organisms/IssueHeader';
import IssueCommentsList from '../../components/organisms/IssueCommentsList';
import IssueComment from '../../components/molecules/IssueComment';

// Services
import getIssueDetailService from '../../services/issue/getDetails';
import getCommentListService from '../../services/issue/getCommentList';

const IssueDetails = () => {
  const [issueDetails, setIssueDetails] = useState();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const issueNumber = params.number;

  const getPRDetails = async () => {
    const details = await getIssueDetailService({
      number: issueNumber,
    });

    setIssueDetails(details);
    setIsLoading(false);
  };

  const getCommentList = async () => {
    const { list } = await getCommentListService({
      issueNumber: issueNumber,
    });

    setComments(
      list.map((item) => {
        return {
          userName: item.user.login,
          userAvatarUrl: item.user.avatar_url,
          commentText: item.body,
          updatedAt: item.updated_at,
        };
      })
    );
    setIsLoading(false);
  };

  useEffect(() => {
    if (!issueDetails) {
      getPRDetails();
    }
    if (comments.length === 0) {
      getCommentList();
    }
  });
  console.log(issueDetails);
  return (
    <Container fixed>
      <Grid container spacing={2}>
        <IssueHeader
          pullRequestNumber={issueNumber}
          title={issueDetails?.title}
          status={issueDetails?.state}
          userName={issueDetails?.user?.login}
          avatarUrl={issueDetails?.user?.avatar_url}
          commentCount={issueDetails?.comments}
          createdAt={issueDetails?.created_at}
        />

        <Grid item xs={12} md={8}>
          <IssueComment
            comment={{
              userName: issueDetails?.user.login,
              userAvatarUrl: issueDetails?.user.avatar_url,
              commentText: issueDetails?.body,
              updatedAt: issueDetails?.updated_at,
            }}
          />
          <IssueCommentsList comments={comments} />,
        </Grid>
      </Grid>
    </Container>
  );
};
export default IssueDetails;
