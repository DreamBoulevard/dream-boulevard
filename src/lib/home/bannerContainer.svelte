<script lang="ts">
	import { page } from '$app/stores';
	import { readyrate } from '$lib/generalStores/bannerStore';
	import { onMount } from 'svelte';

	let video: HTMLVideoElement;

	onMount(() => {
		readyrate.update((n) => (n = video.readyState));
	});
</script>

<div id="l-banner">
	<div id="l-navContainer">
		<slot><!-- optional fallback --></slot>
	</div>
	<!-- writeup  -->
	<div id="l-writeupLayer">
		<div id="l-writeupContainer">
			<img src="/navstatics/bannerTagline.svg" alt="tagline" />
		</div>
	</div>
	<!-- holding image  -->
	<div id="l-hodingImage">
		<div style:opacity={$readyrate < 4 ? 0 : 0.5} class="m-overlay"></div>
		<!-- svelte-ignore a11y-media-has-caption -->
		<video style:display={$readyrate < 4 ? 'none' : 'block'} bind:this={video} autoplay loop>
			<source src="/navstatics/Deam Boulevard banner video.mp4" type="video/mp4" />
		</video>
		<img
			style:display={$readyrate < 4 || $page.route.id == '/stores' ? 'block' : 'none'}
			src="/navstatics/bannerholdingimage.jpg"
			alt="holdingImage"
		/>
	</div>
</div>

<style lang="scss">
	#l-banner {
		background-color: black;
		height: 60vh;
		min-width: 320px;

		#l-navContainer {
			position: relative;
			width: 100%;
			top: 0px;
			z-index: 5;
		}
		#l-writeupLayer {
			height: calc(60vh - 45px);
			width: 99%;
			position: relative;
			z-index: 5;
			display: flex;
			align-items: center;
			justify-content: center;
			#l-writeupContainer {
				width: 90%;
				img {
					width: 100%;
				}
			}
		}
		#l-hodingImage {
			position: absolute;
			margin-top: 5px;
			top: 0;
			width: 100%;
			max-width: 1280px;
			height: 60vh;
			z-index: 3;
			display: flex;
			justify-content: right;
			.m-overlay {
				width: 100%;
				height: 60vh;
				color: white;
				position: absolute;
				margin: auto 0;
				top: 0;
				width: 100%;
				max-width: 1280px;
				z-index: 10;
			}
			img {
				height: 100%;
			}
			video {
				height: 100%;
			}
		}
	}
	@media (min-width: 720px) {
		#l-banner {
			background-color: black;
			height: 60vh;
			min-width: 320px;
			#l-navContainer {
				position: relative;
				width: 100%;
				top: 0px;
				z-index: 5;
			}
			#l-writeupLayer {
				height: calc(60vh - 75px);
				width: 50%;
				position: relative;
				z-index: 5;
				display: flex;
				align-items: center;
				justify-content: center;
				#l-writeupContainer {
				}
			}
			#l-hodingImage {
				position: absolute;
				top: 0;
				width: 100%;
				max-width: 1280px;
				height: 60vh;
				z-index: 3;
				display: flex;
				justify-content: right;
				.m-overlay {
					width: 100%;
					background-color: black;
					// height: 60vh;
					position: absolute;
					margin: auto 0;
					top: 0;
					width: 100%;
					max-width: 1280px;
					z-index: 10;
				}
				img {
					height: 100%;
				}
				video {
					height: 100%;
				}
			}
		}
	}
</style>
