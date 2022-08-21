<script>
	import Faq from '/src/components/faq/faq.svelte';
	import Nav from '/src/components/nav/nav.svelte';
</script>

<Nav />
<div class="center_container">
	<div class="faq-container text-white">
		<Faq
			title="How does this work?"
			body="This website interfaces with Spotify's API to get your listening history. The data returned lets us find interesting information that we generate into the image."
		/>
	</div>
</div>

<style>
	.center_container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.faq-container {
		margin: 3em 1em 0 1em;
		gap: 1em;
		display: flex;
		flex-direction: column;
		max-width: 40em;
	}
</style>
