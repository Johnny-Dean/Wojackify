<script>
	import Nav from '/src/components/nav/nav.svelte';
	import { requestSpotifyAuth } from '/src/services/auth.ts';
</script>

<Nav />
<div class="center">
	<div class="card w-80 bg-base-300 text-white mb-20">
		<div class="card-body">
			<h1 class="card-title  justify-center">Welcome to Wojackify!</h1>
			<p class="text-center"><i>None of your login credentials will be saved!</i></p>
			<div class="card-actions flex flex-col content-center mt-5">
				<button on:click={requestSpotifyAuth} class="btn btn-lg w-48 spotify-btn text-white"
					>Spotify</button
				>
			</div>
		</div>
	</div>
</div>

<style>
	.center {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 90vh;
	}
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.spotify-btn:hover {
		background-color: #1db954;
		border-color: #1db954;
	}

	.apple-btn:hover {
		background-color: #fc3c44;
		border-color: #fc3c44;
	}

	@media only screen and (max-width: 600px) {
		.spotify-btn {
			background-color: #1db954;
			border-color: #1db954;
		}
		.apple-btn {
			background-color: #fc3c44;
			border-color: #fc3c44;
		}
	}
</style>
