import { Endpoints } from '@octokit/types';
import { Octokit } from 'octokit';

const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
});

export type IUser = Endpoints['GET /user']['response']['data'];
export type IRepo = Endpoints['GET /users/{username}/repos']['response']['data'];

const headers = {
  'X-GitHub-Api-Version': '2022-11-28',
};

export const getUser = async () =>
  await octokit.request('GET /user', {
    headers,
  });

export const getRepo = async () =>
  await octokit.request('GET /users/guyfrommilkyway/repos', {
    sort: 'pushed',
    per_page: 100,
    headers,
  });
