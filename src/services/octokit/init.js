import { Octokit } from 'octokit';

// Constants
import { TOKEN } from '../../constants/gitObj';

const octokit = new Octokit({ auth: TOKEN });

export default octokit;
