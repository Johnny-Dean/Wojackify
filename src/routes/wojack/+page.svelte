<script lang="ts">
	import wojackImage from '../../img/wojack.jpg';
	import { onMount } from 'svelte';
	import { GetAccessToken } from '/src/services/auth.ts';
	import { getUserProfile, getUserTop } from '/src/services/api.ts';
	import { getTopArtistMostPopularSong } from '/src/components/canvas/canvasUtil.ts';
	import Canvas from '/src/components/canvas/canvas.svelte';
	import Nav from '/src/components/nav/nav.svelte';
	import TimeRange from '/src/components/time-range/timeRange.svelte';
	import type { TrackObjectFull } from 'spotify-api';
	import { songs, artists, accessToken, user as storeUser, timePeriod } from '../../stores';
	import Refresh from '/src/components/refresh/refresh.svelte';
	let topArtistTopTrack: TrackObjectFull;

	async function fetchData(timeRange = 'short_term') {
		accessToken.set(GetAccessToken());
		let user = await getUserProfile();
		let topSongs = await getUserTop('tracks', timeRange);
		let topArtists = await getUserTop('artists', timeRange);
		storeUser.set(user);
		songs.set(timeRange, topSongs);
		artists.set(timeRange, topArtists);
		topArtistTopTrack = await getTopArtistMostPopularSong(topArtists);
	}

	async function handleTimeRangeChange(event: any) {
		const newTimeRange = event.detail.newTimeRange;
		timePeriod.set(newTimeRange);
		if (
			$songs[newTimeRange as keyof typeof $songs] &&
			$artists[newTimeRange as keyof typeof $artists]
		) {
			topArtistTopTrack = await getTopArtistMostPopularSong(
				$artists[newTimeRange as keyof typeof $artists]
			);
		} else {
			fetchData(event.detail.newTimeRange);
		}
	}

	onMount(async () => {
		fetchData();
	});
</script>

<Nav />
<div class="flex flex-col content-center mt-2">
	<div class="flex flex-col content-center items-center gap-1">
		<div class="flex flex-row items-center gap-3 bg-base-300 p-1 px-4 mb-2">
			<TimeRange on:timeRangeChange={handleTimeRangeChange} />
			<div class="icon">
				<Refresh
					on:refreshClicked={async () => {
						topArtistTopTrack = await getTopArtistMostPopularSong($artists[$timePeriod]);
					}}
				/>
			</div>
		</div>
		{#if topArtistTopTrack}
			{#key topArtistTopTrack}
				<Canvas {topArtistTopTrack} />
			{/key}
		{:else}
			<img src={wojackImage} alt="wojack" />
		{/if}
	</div>
</div>

<svelte:head>
	<title>Wojackify - Generated</title>
	<html lang="en" />
</svelte:head>

<style>
	.icon {
		width: 30px;
		height: 30px;
		color: white;
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
