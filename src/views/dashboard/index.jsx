import React, { useEffect, useState } from 'react';

// Components
import PullRequests from '../../components/organisms/PullRequests.jsx';

// Services
import getPullRequestListService from '../../services/pullRequest/getList';

const Dashboard = () => {
  const [pullRequests, setPullRequests] = useState([]);

  const getPRList = async () => {
    console.log('3-->', pullRequests);
    const list = await getPullRequestListService();
    console.log('list 3', list);
    setPullRequests(list);
  };

  useEffect(() => {
    if (pullRequests.length === 0) {
      console.log('2-->', pullRequests);
      (async () => {
        await getPRList();
      })();
    }
  });
  return (
    <div>
      <PullRequests list={pullRequests} />
      {/* <Issues data={[]} /> */}
    </div>
  );
};
export default Dashboard;
