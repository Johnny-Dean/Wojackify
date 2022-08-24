<script lang="ts">
	import { onMount } from 'svelte';
	import { GetAccessToken } from '/src/services/auth.ts';
	import { getUserProfile, getUserTop } from '/src/services/api.ts';
	import Canvas from '/src/components/canvas/canvas.svelte';
	import { getTopArtistMostPopularSong } from '/src/components/canvas/canvasUtil.ts';
	import Nav from '/src/components/nav/nav.svelte';
	import DownloadInstructions from '/src/components/download-info/download-info.svelte';
	import wojackImage from '../../img/wojack.jpg';
	import type {
		UserObjectPublic,
		TrackObjectFull,
		UsersTopArtistsResponse,
		UsersTopTracksResponse
	} from 'spotify-api';

	let user: UserObjectPublic;
	let topSongs: UsersTopTracksResponse;
	let topArtists: UsersTopArtistsResponse;
	let topArtistTopTrack: TrackObjectFull;

	onMount(async () => {
		const accessToken = GetAccessToken(); // Don't need to store this in a cookie or localStorage because it's such a quick process. Safer to just store in memory.
		user = await getUserProfile(accessToken);
		topSongs = await getUserTop('tracks', accessToken);
		topSongs = topSongs.items;
		topArtists = await getUserTop('artists', accessToken);
		topArtists = topArtists.items;
		topArtistTopTrack = await getTopArtistMostPopularSong(topArtists, accessToken);
	});
</script>

<svelte:head>
	<title>Wojackify - Generated</title>
	<html lang="en" />
</svelte:head>

<Nav />
<div class="center_container">
	<div class="card-compact bg-base-300">
		<div class="card-body flex flex-col content-center">
			{#if topArtistTopTrack}
				<Canvas {user} {topSongs} {topArtists} {topArtistTopTrack} />
			{:else}
				<img src={wojackImage} alt="wojack" />
			{/if}
		</div>
	</div>
	<DownloadInstructions />
</div>

<style>
	.center_container {
		height: 90vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
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
