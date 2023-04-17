import React, { useEffect, useState } from 'react';

// Components
import PullRequests from '../../components/organisms/PullRequests.jsx';

const Dashboard = () => {
  const [pullRequests, setPullRequests] = useState([]);

  const getPRList = () => {
    const list = [];
    setPullRequests(list);
  };

  useEffect(() => {
    getPRList();
  });

  return (
    <div>
      <PullRequests data={pullRequests} />
      {/* <Issues data={[]} /> */}
    </div>
  );
};
export default Dashboard;
