<script lang="ts">
	import { onMount } from 'svelte';
	import ItemCard from './itemCard.svelte';

	let face = 'front';
	let color = 'white';
	let name = 'Paradise Tee';
	let image: HTMLImageElement;
	$: stage = `/storesStatics/${name}/${color}/${face}.jpg`;
	onMount(() => {
		console.log(image);
	});
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
<div id="l-container">
	<ItemCard />
</div>

<style lang="scss">
	#l-container {
		margin-top: 50px;
		min-height: 100px;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(192px, 1fr));
		row-gap: 40px;
		padding: 10px;
		margin-bottom: 50px;
		justify-items: center;
		align-items: center;
	}
	@media (min-width: 720px) {
		#l-container {
			margin-top: 50px;
			min-height: 100px;
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(192px, 1fr));
			row-gap: 40px;
			padding: 10px;
			margin-bottom: 50px;
			justify-items: normal;
			align-items: center;
		}
	}
</style>
