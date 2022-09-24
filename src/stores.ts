import { writable } from 'svelte/store';
import type { TrackObjectFull, ArtistObjectFull, UserObjectPublic } from 'spotify-api';

function createSongs() {
	const { subscribe, update } = writable({ short_term: [] });
	return {
		subscribe,
		set: (time_range: string, new_songs: Array<TrackObjectFull>) => {
			update((s) => {
				return { ...s, [time_range]: new_songs };
			});
		}
	};
}

function createArtists() {
	const { subscribe, update } = writable({ short_term: [] });
	return {
		subscribe,
		set: (time_range: string, artists: Array<ArtistObjectFull>) => {
			update((a) => {
				return { ...a, [time_range]: artists };
			});
		}
	};
}

function createAccessToken() {
	const { subscribe, set } = writable('');

	return {
		subscribe,
		set: (token: string) => set(token)
	};
}

function createUser() {
	const { subscribe, set } = writable();

	return {
		subscribe,
		set: (user: UserObjectPublic) => set(user)
	};
}

function createTimePeriod() {
	const { subscribe, update } = writable('short_term');

	return {
		subscribe,
		set: (timePeriod: string) => update(() => timePeriod)
	};
}
export const timePeriod = createTimePeriod();
export const user = createUser();
export const accessToken = createAccessToken();
export const artists = createArtists();
export const songs = createSongs();
