export const apiFetcher = async ({ url, options }) => {
    try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('API Fetcher error:', error);
        throw error;
    }
};