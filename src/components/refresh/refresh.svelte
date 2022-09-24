<script lang="ts">
	import MdRefresh from 'svelte-icons/md/MdRefresh.svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	function handleClick() {
		dispatch('refreshClicked');
	}
</script>

<button on:click={handleClick}><MdRefresh /></button>

<style></style>
