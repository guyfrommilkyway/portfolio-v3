import { Octokit } from 'octokit';

import API from '@/constants/api';

const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
});

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

    