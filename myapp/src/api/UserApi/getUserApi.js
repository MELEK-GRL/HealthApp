import { apiFetcher } from '../apiFetcher';
import { apiOptions } from '../apiOptions';

export const getUserApi = async ({ id = 1 } = {}) => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const options = apiOptions({ method: 'GET' });
    return await apiFetcher({ url, options });
};
