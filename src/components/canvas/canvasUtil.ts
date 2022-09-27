import { getArtistTopTracks } from '../../services/api.ts';
import type { TrackObjectFull, ArtistObjectFull } from 'spotify-api';

const randomNumberGenerator = (length: number): number => {
	return Math.floor(Math.random() * length);
};

export const getInsult = (): string => {
	const insults = [
		'why is he standing like that',
		"he thinks he's anthony fantano",
		"i hate him so much i'm shaking",
		'why does he smell like that'
	];
	const randomIndex = randomNumberGenerator(insults.length);
	return insults[randomIndex];
};

export const getComplaint = (): string => {
	const complaints = [
		'my feet hurt ',
		'im hungry',
		'oh god why am i better than everyone else',
		'i need to post a song on my story',
		'im so lonely'
	];
	const randomIndex = randomNumberGenerator(complaints.length);
	return complaints[randomIndex];
};

export const getRandomSong = (topSongs: Array<TrackObjectFull>): TrackObjectFull => {
	const randomRange = randomNumberGenerator(topSongs.length);
	return topSongs[randomRange];
};

export const getMostObscureSong = (topSongs: Array<TrackObjectFull>): TrackObjectFull => {
	return topSongs.reduce((minSong: TrackObjectFull, currSong: TrackObjectFull) => {
		return minSong.popularity <= currSong.popularity ? minSong : currSong;
	});
};

export const getMostPopularSong = (topSongs: Array<TrackObjectFull>): TrackObjectFull => {
	return topSongs.reduce((maxSong: TrackObjectFull, currSong: TrackObjectFull) => {
		return maxSong.popularity >= currSong.popularity ? maxSong : currSong;
	});
};

export const getRandomArtist = (topArtists: Array<ArtistObjectFull>): ArtistObjectFull => {
	const randomRange = randomNumberGenerator(topArtists.length);
	return topArtists[randomRange];
};

export const getGenres = (topArtists: Array<ArtistObjectFull>): Array<string> => {
	let genres = topArtists.map((artist: ArtistObjectFull) => artist.genres);
	genres = genres.flat();
	return Array.from(new Set(genres)); // Set for Unique Genres
};

export const getRandomGenre = (genres: Array<string>): string => {
	const randomRange = randomNumberGenerator(genres.length);
	return genres[randomRange];
};

const parseId = (uri: string): string => {
	const uriSplitArray = uri.split(':');
	return uriSplitArray[2]; // artist or track id index
};

export const getTopArtistMostPopularSong = async (
	topArtists: Array<ArtistObjectFull>,
	accessToken: string
): Promise<[string, string]> => {
	const artist = getRandomArtist(topArtists);
	let topTracks = await getArtistTopTracks(parseId(artist.uri), accessToken);
	topTracks = topTracks.tracks;
	const topTrack = getMostPopularSong(topTracks);
	return [artist, topTrack];
};

export const filterSongOut = (
	songToFilter: TrackObjectFull,
	songsArray: Array<TrackObjectFull>
): Array<TrackObjectFull> => {
	return songsArray.filter((song: TrackObjectFull) => song.name !== songToFilter.name);
};

const isArtistOnSong = (artist: ArtistObjectFull, track: TrackObjectFull): boolean => {
	for (let i = 0; i < track.artists.length; i++) {
		if (artist.name === track.artists[i].name) {
			return true;
		}
	}
	return false;
};

export const filterArtistOut = (
	songToFilter: TrackObjectFull,
	artistsArray: Array<ArtistObjectFull>
): Array<ArtistObjectFull> => {
	return artistsArray.filter((artist: ArtistObjectFull) => !isArtistOnSong(artist, songToFilter));
};

export const filterGenreOut = (genreToFilter: string, genres: Array<string>): Array<string> => {
	return genres.filter((genre: string) => genre !== genreToFilter);
};
