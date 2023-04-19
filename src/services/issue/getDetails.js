// Constants
import GIT_OBJ from '../../constants/gitObj';

// Service
import octokit from '../octokit/init';

const getDetails = async ({ number = 1 }) => {
  let details;
  try {
    const response = await octokit.request(
      `GET /repos/${GIT_OBJ.OWNER}/${GIT_OBJ.REPO}/issues/${number}`,
      {
        // owner: GIT_OBJ.OWNER,
        // repo: GIT_OBJ.REPO,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      }
    );
    details = response?.data || [];
  } catch (err) {
    console.log('GET PR DETAILS - octokit => ', err);
  }

  return details;
};

export default getDetails;
