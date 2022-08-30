<script lang="ts">
	import type { UserObjectPublic, TrackObjectFull, ArtistObjectFull } from 'spotify-api';
	export let randomSong: TrackObjectFull;
	export let mostPopularSong: TrackObjectFull;
	export let randomArtistBae: String;
	export let mostObscureSong: TrackObjectFull;
	export let randomGenreBae: string;
	export let randomGenre: string;
	export let topArtistTopTrack: [ArtistObjectFull, TrackObjectFull];
</script>

<div class="overflow-x-auto max">
	<table class="table table-compact">
		<!-- head -->
		<thead>
			<tr>
				<th>Artist</th>
				<th>Song</th>
				<th>Category</th>
			</tr>
		</thead>
		<tbody>
			<!-- row 1 -->
			<tr>
				<td>{randomSong.name}</td>
				<td>{randomSong.artists[0].name}</td>
				<td>Random Song</td>
			</tr>
			<!-- row 2 -->
			<tr>
				<td>{mostPopularSong.name}</td>
				<td>{mostPopularSong.artists[0].name}</td>
				<td>Most Popular Song</td>
			</tr>
			<!-- row 3 -->
			<tr>
				<td>N/A</td>
				<td>{randomArtistBae}</td>
				<td>Random Artist</td>
			</tr>
			<!-- row 4 -->
			<tr>
				<td>{mostObscureSong.name}</td>
				<td>{mostObscureSong.artists[0].name}</td>
				<td
					><div class="of">
						Most Obscure Song cock and balls cock and balls cock and balls cock and balls
					</div></td
				>
			</tr>
		</tbody>
	</table>
</div>
