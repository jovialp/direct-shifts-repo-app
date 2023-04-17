// Constants
import GIT_OBJ from '../../constants/gitObj';

// Service
import octokit from '../octokit/init';

const getList = async ({ page = 1, perPage = 5 }) => {
  let list = [];
  const params = { page: page, per_page: perPage };

  const paramsToUrlString = new URLSearchParams(params).toString();

  try {
    const response = await octokit.request(
      `GET /repos/${GIT_OBJ.OWNER}/${GIT_OBJ.REPO}/pulls?${
        paramsToUrlString ? paramsToUrlString : ''
      }`,
      {
        owner: GIT_OBJ.OWNER,
        repo: GIT_OBJ.REPO,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      }
    );

    list = response?.data || [];
  } catch (err) {
    console.log('GET PR LIST - octokit => ', err);
  }

  return list;
};

export default getList;
