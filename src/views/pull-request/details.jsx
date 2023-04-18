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
import getCommentListService from '../../services/pullRequest/getComentList';

const PullRequestDetails = (props) => {
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

  useEffect(() => {
    if (!pullRequestDetails) {
      getPRDetails();
    }
    if (comments.length === 0) {
      getCommentList();
    }
  });

  const Sample = ({ text = 'h' }) => {
    return <div>Hi,{text}</div>;
  };

  const panelContentComponentList = [
    <CommentList comments={comments} />,
    <CommitTimeline />,
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
          <TabSection
            tabList={['Comments', 'Commits']}
            tabPannelContentList={panelContentComponentList}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          Reviewer:{' '}
          {pullRequestDetails?.requested_reviewers?.map((user) => (
            <UserAvatar name={user.login} avatarUrl={user.avatar_url} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};
export default PullRequestDetails;
