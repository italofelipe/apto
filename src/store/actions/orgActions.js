import { FETCH_REPOS } from './types/actionTypes';

export const fetchRepos = (repo) => ({
  type: FETCH_REPOS,
  payload: repo,
});
