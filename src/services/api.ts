// Is this bad practice? How else could I use these with a store
import { accessToken } from '/src/stores.ts';
import { get } from 'svelte/store';
export const getUserProfile = async () => {
	try {
		const access_token = get(accessToken);
		const response = await fetch('https://api.spotify.com/v1/me', {
			headers: {
				Authorization: `Bearer ${access_token}`
			}
		});
		return response.json();
	} catch (error) {
		console.error(error);
	}
};

export const getUserTop = async (type: string, timeRange: string) => {
	try {
		const access_token = get(accessToken);
		const response = await fetch(
			`https://api.spotify.com/v1/me/top/${type}/?time_range=${timeRange}`,
			{
				headers: {
					Authorization: `Bearer ${access_token}`
				}
			}
		);
		return (await response.json()).items;
	} catch (error) {
		console.error(error);
	}
};

export const getArtistTopTracks = async (artistID: string) => {
	try {
		const access_token = get(accessToken);
		const response = await fetch(
			`https://api.spotify.com/v1/artists/${artistID}/top-tracks?country=US`,
			{
				headers: {
					Authorization: `Bearer ${access_token}`
				}
			}
		);
		return (await response.json()).tracks;
	} catch (error) {
		console.error(error);
	}
};
