// Constants
import GIT_OBJ from '../../constants/gitObj';

// Service
import octokit from '../octokit/init';

const getCommitList = async ({ issueNumber = 1 }) => {
  let list = [];

  try {
    const response = await octokit.request(
      `GET /repos/${GIT_OBJ.OWNER}/${GIT_OBJ.REPO}/pulls/${issueNumber}/commits`,
      {
        // owner: GIT_OBJ.OWNER,
        // repo: GIT_OBJ.REPO,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      }
    );
    list = response?.data || [];
    console.log('GET PR DETAILS - octokit => ', list);
  } catch (err) {
    console.log('GET PR Commits LIST - octokit => ', err);
  }

  return { list };
};

export default getCommitList;
