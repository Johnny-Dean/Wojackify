<script>
	import '../app.css';
	import Anayltics from '../lib/goatCounter.svelte';
</script>

<svelte:head>
	<script
		data-goatcounter="https://johnnydean.goatcounter.com/count"
		async
		src="//gc.zgo.at/count.js"></script>
</svelte:head>
<slot />
