<script lang="ts">
	import wojackImage from '../../img/wojack.jpg';
	import { onMount } from 'svelte';
	import { GetAccessToken } from '/src/services/auth.ts';
	import { getUserProfile, getUserTop } from '/src/services/api.ts';
	import { getTopArtistMostPopularSong } from '/src/components/canvas/canvasUtil.ts';
	import DownloadInstructions from '/src/components/download-info/download-info.svelte';
	import Canvas from '/src/components/canvas/canvas.svelte';
	import Nav from '/src/components/nav/nav.svelte';
	import TimeRange from '/src/components/time-range/timeRange.svelte';
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

	async function fetchData(timeRange = 'short_term') {
		const accessToken = GetAccessToken(); // Don't need to store this in a cookie or localStorage because it's such a quick process. Safer to just store in memory.
		user = await getUserProfile(accessToken);
		topSongs = await getUserTop('tracks', timeRange, accessToken);
		topSongs = topSongs.items;
		topArtists = await getUserTop('artists', timeRange, accessToken);
		topArtists = topArtists.items;
		topArtistTopTrack = await getTopArtistMostPopularSong(topArtists, accessToken);
	}

	function handleTimeRangeChange(event: any) {
		fetchData(event.detail.newTimeRange);
	}

	onMount(async () => {
		fetchData();
	});
</script>

<Nav />
<div class="flex flex-col content-center mt-2">
	<div class="flex flex-col content-center items-center gap-1">
		<TimeRange on:timeRangeChange={handleTimeRangeChange} />
		{#if topArtistTopTrack}
			{#key topArtistTopTrack}
				<Canvas {user} {topSongs} {topArtists} {topArtistTopTrack} />
			{/key}
		{:else}
			<img src={wojackImage} alt="wojack" />
		{/if}
	</div>
</div>

<svelte:head>
	<title>Wojackify - Generated</title>
	<meta name="spotify" content="app-id=324684580" />
	<html lang="en" />
</svelte:head>

<style>
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
