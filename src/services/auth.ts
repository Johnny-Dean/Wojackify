export const GetAccessToken = (): string => {
	const stringAfterHashtag = window.location.hash.substring(1);
	const paramsInUrl = stringAfterHashtag.split('&');
	const params = paramsInUrl.reduce((accumulater: any, currentValue: string) => {
		const [key, value] = currentValue.split('=');
		accumulater[key] = value;
		return accumulater;
	}, {});
	return params.access_token;
};

export const requestSpotifyAuth = (): void => {
	const BASE = 'https://accounts.spotify.com/authorize';
	const CLIENT = 'a3c624ac9f304d04ac15316f95ef89d8';
	const REDIRECT_URI = 'https://www.wojackify.me/wojack'; // https://www.wojackify.me/wojack
	const SCOPE = '&scope=user-read-email user-top-read';
	window.location.href = `${BASE}?client_id=${CLIENT}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=token&show_dialog=true`;
};
