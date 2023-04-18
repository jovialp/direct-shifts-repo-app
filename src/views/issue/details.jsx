import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

// Components
import PullRequestHeader from '../../components/organisms/PullRequestHeader';
import TabSection from '../../components/organisms/TabSection';
import CommentList from '../../components/organisms/CommentList';
import CommitTimeline from '../../components/organisms/CommitTimeline';
import UserAvatar from '../../components/atoms/UserAvatar';

// Services
import getPullRequestDetailService from '../../services/pullRequest/getDetails';
import getCommentListService from '../../services/pullRequest/getCommentList';

const IssueDetails = () => {
  const [pullRequestDetails, setPullRequestDetails] = useState();
  const [comments, setComments] = useState([]);
  const [commits, setCommits] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const pullRequestNumber = params.number;

  const getPRDetails = async () => {
    const details = await getPullRequestDetailService({
      number: pullRequestNumber,
    });

    setPullRequestDetails(details);
    setIsLoading(false);
  };

  const getCommentList = async () => {
    const { list } = await getCommentListService({
      issueNumber: pullRequestNumber,
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

  const getCommitList = async () => {
    const { list } = await getCommitListService({
      issueNumber: pullRequestNumber,
    });

    setCommits(
      list.map((item) => {
        return {
          userName: item.author.login,
          userAvatarUrl: item.author.avatar_url,
          message: item.commit.message,
          updatedAt: item.commit.author.date,
        };
      })
    );
    setIsLoading(false);
  };

  useEffect(() => {
    if (!pullRequestDetails) {
      getPRDetails();
    }
    if (comments.length === 0) {
      getCommentList();
    }

    if (commits.length === 0) {
      getCommitList();
    }
  });

  const panelContentComponentList = [
    <CommentList comments={comments} />,
    <CommitTimeline commitList={commits} />,
  ];

  return (
    <Container fixed>
      <Grid container spacing={2}>
        <PullRequestHeader
          pullRequestNumber={pullRequestNumber}
          title={pullRequestDetails?.title}
          status={pullRequestDetails?.state}
          userName={pullRequestDetails?.user?.login}
          avatarUrl={pullRequestDetails?.user?.avatar_url}
          commitCount={pullRequestDetails?.commits}
          headBranchName={pullRequestDetails?.head?.label}
          baseBranchName={pullRequestDetails?.base?.label}
        />

        <Grid item xs={12} md={8}>
          <CommentList comments={comments} />,
        </Grid>
      </Grid>
    </Container>
  );
};
export default IssueDetails;
