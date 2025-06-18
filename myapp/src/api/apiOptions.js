export const apiOptions = ({ method = 'GET', token, body } = {}) => {
    const headers = {
        'Content-Type': 'application/json',
    };

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    return {
        method,
        headers,
        ...(body ? { body: JSON.stringify(body) } : {}),
    };
};