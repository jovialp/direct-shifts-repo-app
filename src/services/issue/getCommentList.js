// Constants
import GIT_OBJ from '../../constants/gitObj';

// Service
import octokit from '../octokit/init';

const getComentList = async ({ issueNumber = 1 }) => {
  let list = [];

  try {
    const response = await octokit.request(
      `GET /repos/${GIT_OBJ.OWNER}/${GIT_OBJ.REPO}/issues/${issueNumber}/comments`,
      {
        // owner: GIT_OBJ.OWNER,
        // repo: GIT_OBJ.REPO,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      }
    );
    list = response?.data || [];
  } catch (err) {
    console.log('GET PR LIST - octokit => ', err);
  }

  return { list };
};

export default getComentList;
