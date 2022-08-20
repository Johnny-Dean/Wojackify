import { getArtistTopTracks } from '../../services/api.ts';
import type {
	UsersTopTracksResponse,
	UsersTopArtistsResponse,
	TrackObjectFull,
	ArtistTopTracksResponse,
	ArtistObjectFull
} from 'spotify-api';
export const getRandomSong = (topSongs: any) => {
	const randomRange = Math.floor(Math.random() * topSongs.items.length);
	return topSongs.items[randomRange];
};

// could combine these into one function and destructure
export const getMostObscureSong = (topSongs: UsersTopTracksResponse) => {
	return topSongs.items.reduce((minSong: TrackObjectFull, currSong: TrackObjectFull) => {
		return minSong.popularity <= currSong.popularity ? minSong : currSong;
	});
};

export const getMostPopularSong = (topSongs: UsersTopTracksResponse) => {
	return topSongs.items.reduce((maxSong: TrackObjectFull, currSong: TrackObjectFull) => {
		return maxSong.popularity >= currSong.popularity ? maxSong : currSong;
	});
};

export const getRandomArtist = (topArtists: UsersTopArtistsResponse) => {
	const randomRange = Math.floor(Math.random() * topArtists.items.length);
	return topArtists.items[randomRange];
};

// @types has wrong artist type definition, doesnt have genres
export const getRandomGenre = (topArtists: UsersTopArtistsResponse) => {
	let genres = topArtists.items.map((artist: ArtistObjectFull) => artist.genres);
	genres = genres.flat();
	const randomRange = Math.floor(Math.random() * genres.length);
	return genres[randomRange];
};

const parseId = (uri: string) => {
	const uriSplitArray = uri.split(':');
	return uriSplitArray[2]; // artist or track id index
};

export const getTopArtistMostPopularSong = async (
	topArtists: ArtistTopTracksResponse,
	accessToken: string
) => {
	const artist = getRandomArtist(topArtists);
	const topTracks = await getArtistTopTracks(parseId(artist.uri), accessToken);
	const randomRange = Math.floor(Math.random() * 3);
	return [artist.name.toLowerCase(), topTracks.tracks[randomRange].name.toLowerCase()];
};
