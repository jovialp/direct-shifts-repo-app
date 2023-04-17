import React, { useEffect, useState } from 'react';

// Components
import PullRequests from '../../components/organisms/PullRequests.jsx';

// Services
import getPullRequestListService from '../../services/pullRequest/getList';

const Dashboard = () => {
  const [pullRequests, setPullRequests] = useState([]);

  const getPRList = async () => {
    const list = await getPullRequestListService();
    setPullRequests(list);
  };

  useEffect(() => {
    (async () => {
      if (pullRequests.length === 0) {
        getPRList();
      }
    })();
  });

  return (
    <div>
      <PullRequests data={pullRequests} />
      {/* <Issues data={[]} /> */}
    </div>
  );
};
export default Dashboard;
