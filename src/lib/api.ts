export const base = 'https://api.movies.tastejs.com';
export const imageBase = 'https://image.tmdb.org/t/p/w500';

export async function get(
	fetch: typeof globalThis.fetch,
	endpoint: string,
	params?: Record<string, string>
) {

    const q = new URLSearchParams(params);
	
	const response = await fetch(`${base}/${endpoint}?${q}`);
  

	return await response.json();
}
