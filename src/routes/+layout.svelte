<script>
	import Alertbox from '$lib/alertbox.svelte';
</script>

<div id="l-pagerWraaper">
	<Alertbox />
	<div id="l-contentWrapper">
		<slot />
	</div>
</div>

<style lang="scss">
	#l-pagerWraaper {
		width: 100%;
		height: 100%;
		margin-top: 5px;
		#l-contentWrapper {
			max-width: 1280px;
			min-width: 320px;
			margin: auto;
		}
	}
</style>
