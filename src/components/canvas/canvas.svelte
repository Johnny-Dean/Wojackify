<script lang="ts">
	import type {
		UserObjectPublic,
		TrackObjectFull,
		UsersTopArtistsResponse,
		UsersTopTracksResponse
	} from 'spotify-api';
	import { onMount } from 'svelte';
	import wojackImage from '../../img/wojack.jpg';
	import {
		getMostObscureSong,
		getRandomSong,
		getMostPopularSong,
		getRandomArtist,
		getRandomGenre,
		isArtistOnSong
	} from './canvasHelper';

	let downloadableImage: HTMLImageElement;
	export let user: UserObjectPublic;
	export let topSongs: UsersTopTracksResponse;
	export let topArtists: UsersTopArtistsResponse;
	export let topArtistTopTrack: TrackObjectFull;

	const randomSong = getRandomSong(topSongs);
	// Filter out the random song and artist used so that it doesn't appear again and make the meme not make sense
	topSongs.items = topSongs.items.filter((song: TrackObjectFull) => song.name !== randomSong.name);

	topArtists.items = topArtists.items.filter((artist: any) => !isArtistOnSong(artist, randomSong));

	const mostPopularSong = getMostPopularSong(topSongs);
	topSongs.items = topSongs.items.filter(
		(song: TrackObjectFull) => song.name !== mostPopularSong.name
	);
	topArtists.items = topArtists.items.filter((artist: any) => !isArtistOnSong(artist, randomSong));
	const randomAristBae = getRandomArtist(topArtists).name.toLowerCase();
	const randomGenreBae = getRandomGenre(topArtists).toLowerCase();
	const mostObscureSong = getMostObscureSong(topSongs);
	const randomGenre = getRandomGenre(topArtists).toLowerCase();

	const drawImage = () => {
		let canvas: HTMLCanvasElement = document.createElement('canvas');
		canvas.height = 673;
		canvas.width = 671;
		let context = canvas.getContext('2d');
		const image = new Image();

		image.addEventListener(
			'load',
			() => {
				context!.drawImage(image, 0, 0);
				context!.font = 'normal 16px serif';
				context?.fillText('this party sucks', 170, 20);
				context?.fillText(
					`they don't know i have ${user.followers.total} ${
						user.followers.total > 1 ? 'followers' : 'follower'
					} on Spotify`,
					200,
					60
				);
				context?.fillText(`did she just smile at me?`, 205, 80);
				context?.fillText(
					`i wish i was at home listening to ${randomSong.name.toLowerCase()}`,
					200,
					100
				);
				context?.fillText(
					`they're unironically playing ${mostPopularSong.name.toLowerCase()}`,
					205,
					140
				);
				context?.fillText(`who's djing?`, 215, 175);
				context?.fillText(`haven't heard any ${randomGenre}`, 213, 195);
				context?.fillText('my feet hurt', 210, 215);
				context?.fillText(`that guy told me he listens to`, 210, 232);
				context?.fillText(`${topArtistTopTrack[0]}`, 210, 248);

				context!.font = 'normal 16px serif green';
				context!.fillStyle = 'green';
				context?.fillText(`> tfw no ${randomAristBae} or ${randomGenreBae} bae`, 215, 40);
				context?.fillText(
					`> not knowing ${mostObscureSong.name.toLowerCase()} by ${mostObscureSong.artists[0].name.toLowerCase()} in ${new Date().getFullYear()}`,
					215,
					120
				);
				context?.fillText(`> can't show i like it`, 215, 156);
				context?.fillText(`> he only knew ${topArtistTopTrack[1]}`, 210, 264);
				context!.font = 'normal 15px sans-serif';
				context!.fillStyle = 'red';
				context?.fillText(`who invited ${user.display_name}?`, 485, 175);
				context?.fillText(`why is he standing like that`, 110, 463);

				context!.font = 'normal 15px Tahoma ';
				context!.fillStyle = 'blue';
				context?.fillText(`generated with wojackify.me`, 250, 665);

				downloadableImage.src = canvas.toDataURL();
			},
			false
		);
		image.src = wojackImage;
	};

	onMount(() => drawImage());
</script>

<img bind:this={downloadableImage} alt="peepeepoopoo" />

<style>
	canvas {
		cursor: pointer;
	}
	@media screen and (max-width: 600px) {
		img {
			height: 375px;
			width: 375px;
		}
	}
	@media screen and (min-width: 600px) {
		img {
			height: 600px;
			width: 600px;
		}
	}
</style>
