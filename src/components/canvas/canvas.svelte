<script lang="ts">
	import type { UserObjectPublic, TrackObjectFull } from 'spotify-api';
	import { onMount } from 'svelte';
	import wojackImage from '../../img/wojack.jpg';
	import SongTable from '/src/components/song-table/song-table.svelte';
	import {
		getInsult,
		getGenres,
		getMostObscureSong,
		getRandomSong,
		getMostPopularSong,
		getRandomArtist,
		getRandomGenre,
		filterArtistOut,
		filterSongOut,
		filterGenreOut,
		getComplaint
	} from './canvasUtil.ts';
	import {
		user as storeUser,
		songs as storeSongs,
		artists as storeArtists,
		timePeriod
	} from '../../stores';

	let downloadableImage: HTMLImageElement;
	const user: UserObjectPublic = $storeUser;
	let topSongs = $storeSongs[$timePeriod as keyof typeof $storeSongs];
	let topArtists = $storeArtists[$timePeriod as keyof typeof $storeArtists];
	export let topArtistTopTrack: TrackObjectFull;
	topSongs = filterSongOut(topArtistTopTrack[1], topSongs);
	topArtists = filterArtistOut(topArtistTopTrack[1], topArtists);

	const randomSong = getRandomSong(topSongs);
	topSongs = filterSongOut(randomSong, topSongs);
	topArtists = filterArtistOut(randomSong, topArtists);

	const mostPopularSong = getMostPopularSong(topSongs);
	topSongs = filterSongOut(mostPopularSong, topSongs);
	topArtists = filterArtistOut(mostPopularSong, topArtists);

	const mostObscureSong = getMostObscureSong(topSongs);
	topSongs = filterSongOut(mostObscureSong, topSongs);
	topArtists = filterArtistOut(mostObscureSong, topArtists);

	const randomArtistBae = getRandomArtist(topArtists);

	let genres: Array<string> = getGenres(topArtists);
	const randomGenreBae = getRandomGenre(genres);
	genres = filterGenreOut(randomGenreBae, genres);
	const randomGenre = getRandomGenre(genres);

	const drawImage = () => {
		let canvas: HTMLCanvasElement = document.createElement('canvas');
		canvas.height = 673;
		canvas.width = 671;
		let context = canvas.getContext('2d');
		const image = new Image();
		image.src = wojackImage;

		image.onload = () => {
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
			context?.fillText(`i wish i was at home listening to "${randomSong.name}"`, 200, 100);
			context?.fillText(`they're unironically playing "${mostPopularSong.name}"`, 205, 140);
			context?.fillText(`who's djing?`, 215, 175);
			context?.fillText(`haven't heard any ${randomGenre}`, 213, 195);
			context?.fillText(getComplaint(), 210, 213.5); // GenerateComplaint()
			context?.fillText(`that guy told me he listens to`, 210, 232);
			context?.fillText(`${topArtistTopTrack[0].name}`, 210, 248);

			context!.font = 'normal 16px serif green';
			context!.fillStyle = 'green';
			context?.fillText(`> tfw no ${randomArtistBae.name} or ${randomGenreBae} bae`, 215, 40);
			context?.fillText(
				`> not knowing "${mostObscureSong.name}" by ${
					mostObscureSong.artists[0].name
				} in ${new Date().getFullYear()}`,
				215,
				120
			);
			context?.fillText(`> can't show i like it`, 215, 156);
			context?.fillText(`> he only knew "${topArtistTopTrack[1].name}"`, 210, 266);
			context!.font = 'normal 15px sans-serif';
			context!.fillStyle = 'red';
			context?.fillText(`who invited ${user.display_name}?`, 485, 175);
			context?.fillText(`${getInsult()}`, 110, 463);

			context!.font = 'normal 15px Tahoma ';
			context!.fillStyle = 'blue';
			context?.fillText(`generated with wojackify.me`, 250, 665);
			downloadableImage.src = canvas.toDataURL();
		};
	};

	onMount(() => drawImage());
</script>

<div class="flex flex-col content-center items-center gap-3">
	<img
		bind:this={downloadableImage}
		alt="Generated 'I Wish I Was At Home / They Don't Know' meme"
	/>
	<SongTable
		{randomSong}
		{mostPopularSong}
		{randomArtistBae}
		{mostObscureSong}
		{randomGenreBae}
		{randomGenre}
		{topArtistTopTrack}
	/>
</div>

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
