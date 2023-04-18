import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

// Components
import PullRequestHeader from '../../components/organisms/PullRequestHeader';
import IssueCommentsList from '../../components/organisms/IssueCommentsList';

// Services
import getIssueDetailService from '../../services/pullRequest/getDetails';
import getCommentListService from '../../services/pullRequest/getCommentList';

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

    setPullRequestDetails(details);
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

  return (
    <Container fixed>
      <Grid container spacing={2}>
        <PullRequestHeader
          pullRequestNumber={issueNumber}
          title={issueDetails?.title}
          status={issueDetails?.state}
          userName={issueDetails?.user?.login}
          avatarUrl={issueDetails?.user?.avatar_url}
          commitCount={issueDetails?.commits}
          headBranchName={issueDetails?.head?.label}
          baseBranchName={issueDetails?.base?.label}
        />

        <Grid item xs={12} md={8}>
          <IssueCommentsList comments={comments} />,
        </Grid>
      </Grid>
    </Container>
  );
};
export default IssueDetails;
