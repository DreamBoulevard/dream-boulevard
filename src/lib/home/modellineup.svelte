<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { cubicIn, quintOut } from 'svelte/easing';
</script>

<div id="l-modelContainer">
	<div id="l-model">
		<img loading="lazy" src="/homeStatics/modelInwhite.jpg" alt="modelInwhite" />
	</div>
	<div id="l-model">
		<img loading="lazy" src="/homeStatics/modelInBlue.jpg" alt="modelInBlue" />
	</div>
	<div id="l-model">
		<img loading="lazy" src="/homeStatics/modelInBlack.jpg" alt="modelInBlack" />
	</div>
</div>

<style lang="scss">
	#l-modelContainer {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		margin: auto;
		gap: 5px;
		width: 95%;
		#l-model {
			display: flex;
			justify-content: center;
			align-items: center;
			animation: smoothEntry 2.5s forwards;
			img {
				width: 100%;
			}
		}
	}
	@media (min-width: 780px) {
		#l-modelContainer {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			margin: auto;
			gap: 5px;
			width: 95%;
			padding: 5px;

			#l-model {
				display: flex;
				justify-content: center;
				align-items: center;
				animation: smoothEntry 2.5s forwards;
				img {
					height: 100%;
				}
			}
		}
	}
	@keyframes smoothEntry {
		from {
			margin-top: 150px;
			opacity: 0.5;
		}
		to {
			margin-top: 10px;
			opacity: 1;
			margin-bottom: 10px;
		}
	}
</style>
