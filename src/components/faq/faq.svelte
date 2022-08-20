<script lang="ts">
	export let title: string;
	export let body: string;
</script>

<div tabindex="0" class="collapse collapse-arrow  bg-base-300 box rounded-box">
	<div class="collapse-title text-xl font-medium flex">{title}</div>
	<div class="collapse-content">
		<p>{body}</p>
	</div>
</div>
