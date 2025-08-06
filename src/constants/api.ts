import { EAPI } from '@/enums/api';

const API = {
  [EAPI.FIREBASE]: '/v1/firebase',
  [EAPI.GITHUB_USER]: '/v1/github/user',
  [EAPI.GITHUB_REPO]: '/v1/github/repo',
} as const;

export default API;
