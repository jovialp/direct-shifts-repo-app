// Constants
import { TOKEN, OWNER, REPO } from '../../constants/gitObj';

// Service
import octokit from '../octokit/init';

const getList = async () => {
  let list = [];

  console.log('hi', 2);
  try {
    // const response = await octokit.request('GET /repos/{owner}/{repo}/pulls', {
    //   owner: OWNER,
    //   repo: REPO,
    //   headers: {
    //     'X-GitHub-Api-Version': '2022-11-28',
    //   },
    // });
  } catch (err) {
    console.log('GET PR LIST - octokit => ');
  }
  fetch(`https://api.github.com/repos/${OWNER}/${REPO}/pulls`, {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28',
    },
  })
    .then((resp) => resp.json())
    .then((json) => {
      console.log(JSON.stringify(json));
    })
    .catch((err) => {
      console.log('GET PR LIST', err);
    });

  return list;
};

export default getList;
