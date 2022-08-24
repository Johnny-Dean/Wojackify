<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	let timeRange = 'short_term';
	$: changeTimeRange(timeRange);

	function changeTimeRange(timeRange: string) {
		dispatch('timeRangeChange', {
			newTimeRange: timeRange
		});
	}
</script>

<div class="form">
	<label class="label cursor-pointer">
		<span class="label-text mr-1">Month</span>
		<input
			bind:group={timeRange}
			type="radio"
			name="time"
			value="short_term"
			class="radio checked:bg-red-500"
		/>
	</label>

	<label class="label cursor-pointer">
		<span class="label-text mr-1">6 Months</span>
		<input
			bind:group={timeRange}
			type="radio"
			name="time"
			value="medium_term"
			class="radio checked:bg-blue-500"
		/>
	</label>

	<label class="label cursor-pointer">
		<span class="label-text mr-1">All Time</span>
		<input
			bind:group={timeRange}
			type="radio"
			name="time"
			value="long_term"
			class="radio checked:bg-blue-500"
		/>
	</label>
</div>

<style>
	.form {
		display: flex;
		justify-content: center;
		gap: 1em;
	}
</style>
