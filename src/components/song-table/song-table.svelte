<script lang="ts">
	import type { TrackObjectFull, ArtistObjectFull } from 'spotify-api';
	export let randomSong: TrackObjectFull;
	export let mostPopularSong: TrackObjectFull;
	export let randomArtistBae: ArtistObjectFull;
	export let mostObscureSong: TrackObjectFull;
	export let randomGenreBae: string;
	export let randomGenre: string;
	export let topArtistTopTrack: [ArtistObjectFull, TrackObjectFull];

	function getExternalLink(trackArtist: TrackObjectFull | ArtistObjectFull) {
		return trackArtist.external_urls['spotify'];
	}
</script>

<table class="bg-slate-700">
	<thead>
		<tr>
			<td>Song</td>
			<td>Artist</td>
			<td>Album</td>
			<td>Category</td>
		</tr>
	</thead>

	<tbody>
		<tr>
			<td><a href={getExternalLink(randomSong)}>{randomSong.name}</a></td>
			<td><a href={getExternalLink(randomSong.artists[0])}>{randomSong.artists[0].name}</a></td>
			<td><a href={getExternalLink(randomSong.album)}>{randomSong.album.name}</a></td>
			<td>Random Song</td>
		</tr>
		<tr>
			<td><a href={getExternalLink(mostPopularSong)}>{mostPopularSong.name}</a></td>
			<td>
				<a href={getExternalLink(mostPopularSong.artists[0])}>{mostPopularSong.artists[0].name}</a>
			</td>
			<td>{mostPopularSong.album.name}</td>
			<td>Most Popular Song</td>
		</tr>
		<tr>
			<td>N/A</td>
			<td><a href={getExternalLink(randomArtistBae)}>{randomArtistBae.name}</a></td>
			<td>N/A</td>
			<td>Random Artist</td>
		</tr>
		<tr>
			<td><a href={getExternalLink(mostObscureSong)}>{mostObscureSong.name}</a></td>
			<td>
				<a href={getExternalLink(mostObscureSong.artists[0])}>{mostObscureSong.artists[0].name}</a>
			</td>
			<td><a href={getExternalLink(mostObscureSong.album)}>{mostObscureSong.album.name}</a></td>
			<td>Most Obscure Song</td>
		</tr>
		<tr>
			<td>{randomGenreBae}</td>
			<td>N/A</td>
			<td>N/A</td>
			<td>Random Genre</td>
		</tr>
		<tr>
			<td>{randomGenre}</td>
			<td>N/A</td>
			<td>N/A</td>
			<td>Random Genre</td>
		</tr>
		<tr>
			<td><a href={getExternalLink(topArtistTopTrack[1])}>{topArtistTopTrack[1].name}</a></td>
			<td><a href={getExternalLink(topArtistTopTrack[0])}>{topArtistTopTrack[0].name}</a></td>
			<td>
				<a href={getExternalLink(topArtistTopTrack[1].album)}>
					{topArtistTopTrack[1].album.name}
				</a>
			</td>
			<td>Top Artist's Top Track</td>
		</tr>
	</tbody>
</table>

<style>
	table {
		display: block;
		max-height: 15em;
		overflow: auto;
		border-spacing: 1em;
		border-collapse: separate;
	}
	thead {
		padding: 0.5em 1em;
	}
</style>
