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
		getRandomGenre
	} from './canvasHelper';

	let canvas: HTMLCanvasElement;
	export let user: UserObjectPublic;
	export let topSongs: UsersTopTracksResponse;
	export let topArtists: UsersTopArtistsResponse;
	export let topArtistTopTrack: TrackObjectFull;

	const randomSong = getRandomSong(topSongs).name.toLowerCase();
	topSongs.items = topSongs.items.filter((song: TrackObjectFull) => song.name !== randomSong.name); // Filter out random song so tha tit doesnt appear again
	const mostPopularSong = getMostPopularSong(topSongs).name.toLowerCase();
	const randomAristBae = getRandomArtist(topArtists).name.toLowerCase();
	const randomGenreBae = getRandomGenre(topArtists).toLowerCase();
	const mostObscureSong = getMostObscureSong(topSongs);
	const randomGenre = getRandomGenre(topArtists).toLowerCase();

	const drawImage = () => {
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
				context?.fillText(`i wish i was at home listening to ${randomSong}`, 200, 100);
				context?.fillText(`they're unironically playing ${mostPopularSong}`, 205, 140);
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
				context?.fillText(`who invited ${user.display_name}?`, 473, 175);
				context?.fillText(`why is he standing like that`, 110, 463);

				context!.font = 'normal 15px Tahoma ';
				context!.fillStyle = 'blue';
				context?.fillText(`generated with wojackify.me`, 250, 665);
			},
			false
		);
		image.src = wojackImage;
	};

	const saveFile = () => {
		var downloadLink = document.createElement('a');
		downloadLink.href = canvas.toDataURL('image/png');
		downloadLink.download = 'myImage.png';

		document.body.appendChild(downloadLink);
		downloadLink.click();
		document.body.removeChild(downloadLink);
	};

	onMount(() => drawImage());
</script>

<canvas on:click={saveFile} bind:this={canvas} width={673} height={671} />

<style>
	canvas {
		cursor: pointer;
	}
	@media screen and (max-width: 600px) {
		canvas {
			height: 375px;
			width: 375px;
		}
	}
	@media screen and (min-width: 600px) {
		canvas {
			height: 600px;
			width: 600px;
		}
	}
</style>
