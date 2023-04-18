// Constants
import GIT_OBJ from '../../constants/gitObj';

// Service
import octokit from '../octokit/init';

const getList = async ({
  perPage = 5,
  status = 'open',
  sort = 'created',
  page = 1,
  totalPageCount = 1,
}) => {
  let totalPages = totalPageCount;
  let list = [];

  try {
    const params = {
      page: page,
      per_page: perPage,
      state: status,
      sort: sort,
      direction: 'desc',
    };
    const paramsToUrlString = new URLSearchParams(params).toString();

    const response = await octokit.request(
      `GET /repos/${GIT_OBJ.OWNER}/${GIT_OBJ.REPO}/issues?${
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
    list = response?.data || [];

    const linkHeader = response.headers.link;

    totalPages = linkHeader.split(',')?.reduce((a, i) => {
      if (i.includes(`rel=\"last`)) {
        const newTotalPages = i.split('page=')[1].split('&')[0];

        return newTotalPages;
      }
      return a;
    }, totalPageCount);
  } catch (err) {
    console.log('GET PR LIST - octokit => ', err);
  }

  console.log('GET PR LIST - octokit => ', list, totalPages);
  return { list, totalPages };
};

export default getList;
