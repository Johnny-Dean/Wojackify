<script>
	import Faq from '/src/components/faq/faq.svelte';
	import Nav from '/src/components/nav/nav.svelte';
</script>

<Nav />
<div class="center_container">
	<div class="faq-container text-white">
		<Faq
			title="Is this safe to use?"
			body="Yes! Spotify offers a pretty easy way to securely authorize a user."
		/>
		<Faq
			title="How does this work?"
			body="This website interfaces with Spotify's API to get your listening history which is then placed over an image."
		/>
		<Faq
			title="How does this REALLY work?"
			body="This website is build with SvelteKit and DaisyUI / Tailwind. I used an HTML canvas to set and draw text (retrieved from the Spotify API) over a background. The canvas then gets converted to an image avaliable to download."
		/>

		<div tabindex="0" class="collapse collapse-arrow  bg-base-300 box rounded-box">
			<div class="collapse-title text-xl font-medium flex"><p>How did you think of this?</p></div>
			<div class="collapse-content">
				<p>
					I always thought the meme was funny and wanted to see if I could make something like <a
						href="https://receiptify.herokuapp.com/">recieptify.com</a
					>.
				</p>
			</div>
		</div>
		<Faq title="Contact Info" body="Email: wojackify@gmail.com" />
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
	a {
		color: lightblue;
	}
</style>
