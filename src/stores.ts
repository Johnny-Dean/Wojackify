import { writable } from 'svelte/store';
import type { TrackObjectFull, ArtistObjectFull } from 'spotify-api';
function createSongs() {
	const { subscribe, update } = writable({});
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
	const { subscribe, update } = writable({});
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

export const accessToken = createAccessToken();
export const artists = createArtists();
export const songs = createSongs();
