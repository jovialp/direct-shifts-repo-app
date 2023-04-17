// Constants
import { OWNER, REPO } from '../../constants/gitObj';

// Service
import octokit from '../octokit/init';

const getList = async () => {
  let list = [];

  console.log('hi', 2);
  const response = await octokit.request('GET /repos/{owner}/{repo}/pulls', {
    owner: OWNER,
    repo: REPO,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  console.log('hi', response.data);

  return list;
};

export default getList;
