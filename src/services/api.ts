export const getUserProfile = async (accessToken: string) => {
	try {
		const response = await fetch('https://api.spotify.com/v1/me', {
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		});
		return response.json();
	} catch (error) {
		console.error(error);
	}
};

export const getUserTop = async (type: string, accessToken: string) => {
	try {
		const response = await fetch(`https://api.spotify.com/v1/me/top/${type}`, {
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		});
		return response.json();
	} catch (error) {
		console.error(error);
	}
};

export const getArtistTopTracks = async (artistID: string, accessToken: string) => {
	try {
		const response = await fetch(
			`https://api.spotify.com/v1/artists/${artistID}/top-tracks?country=US`,
			{
				headers: {
					Authorization: `Bearer ${accessToken}`
				}
			}
		);
		return response.json();
	} catch (error) {
		console.error(error);
	}
};
