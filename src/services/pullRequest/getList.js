// Constants
import GIT_OBJ from '../../constants/gitObj';

// Service
import octokit from '../octokit/init';

const getList = async ({
  pagination = false,
  perPage = 5,
  status = 'open',
}) => {
  const nextPattern = /(?<=<)([\S]*)(?=>; rel="Next")/i;
  let pagesRemaining = true;
  let list = [];
  let page = 1;

  try {
    while (pagesRemaining) {
      const params = { page: page, per_page: perPage, state: status };
      const paramsToUrlString = new URLSearchParams(params).toString();

      const response = await octokit.request(
        `GET /repos/${GIT_OBJ.OWNER}/${GIT_OBJ.REPO}/pulls?${
          paramsToUrlString ? paramsToUrlString : ''
        }`,
        {
          // owner: GIT_OBJ.OWNER,
          // repo: GIT_OBJ.REPO,
          headers: {
            'X-GitHub-Api-Version': '2022-11-28',
          },
        }
      );

      console.log('GET PR LIST - octokit => ', page, response);
      list.push(response?.data || []);

      const linkHeader = response.headers.link;

      pagesRemaining =
        pagination && linkHeader && linkHeader.includes(`rel=\"next\"`);

      if (pagesRemaining) {
        page += 1;
      }
    }
  } catch (err) {
    console.log('GET PR LIST - octokit => ', err);
  }

  return list;
};

export default getList;
