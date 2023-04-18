import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import Card from '@mui/joy/Card';

// Components
import UserAvatar from '../atoms/UserAvatar';

const CommitTimeline = ({ commitList = [] }) => {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {commitList?.map((commit) => (
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            Commits on {new Date(commit.updatedAt).toDateString()}
            <Card variant="outlined">
              <Typography>{commit.message}</Typography>
              <Typography
                variant="subtitle2"
                gutterBottom
                sx={{ lineHeight: 2.5 }}
              >
                <UserAvatar
                  name={commit.userName}
                  avatarUrl={commit.userAvatarUrl}
                />
              </Typography>
            </Card>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};
export default CommitTimeline;
