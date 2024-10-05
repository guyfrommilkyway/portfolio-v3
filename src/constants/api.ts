import { EAPI } from '@/enums/api';

const API = {
    [EAPI.FIREBASE]: '/public/v1.json',
    [EAPI.GITHUB_USER]: 'GET /user',
    [EAPI.GITHUB_REPO]: 'GET /users/guyfrommilkyway/repos',
} as const;

export default API;
