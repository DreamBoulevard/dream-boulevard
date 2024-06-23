<script lang="ts">
	import { onMount } from 'svelte';
	onMount(() => {
		new Swiper('.swiper', {
			// Optional parameters
			direction: 'horizontal',
			loop: true,

			// If we need pagination
			pagination: {
				el: '.swiper-pagination'
			},
			slidesPerView: 2,
			// Navigation arrows
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			autoplay: {
				delay: 2000
			},
			// And if we need scrollbar
			scrollbar: {
				el: '.swiper-scrollbar'
			}
		});
	});
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
	<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
</svelte:head>
<!-- Slider main container -->
<div class="swiper">
	<!-- Additional required wrapper -->
	<div class="swiper-wrapper">
		<!-- Slides -->
		<div class="swiper-slide">
			<img src="/homeStatics/c1.jpg" alt="Slide 1" />
		</div>
		<div class="swiper-slide">
			<img src="/homeStatics/c2.jpg" alt="Slide 2" />
		</div>
		<div class="swiper-slide">
			<img src="/homeStatics/c3.jpg" alt="Slide 3" />
		</div>
		<div class="swiper-slide">
			<img src="/homeStatics/c4.jpg" alt="Slide 3" />
		</div>
		<div class="swiper-slide">
			<img src="/homeStatics/c5.jpg" alt="Slide 3" />
		</div>
	</div>
	<!-- If we need pagination -->
	<!-- <div class="swiper-pagination"></div> -->

	<!-- If we need navigation buttons -->
	<div class="swiper-button-prev"></div>
	<div class="swiper-button-next"></div>

	<!-- If we need scrollbar -->
	<div class="swiper-scrollbar"></div>
</div>

<style lang="scss">
	.swiper {
		width: 99%;
		max-width: 550px;
		height: 200px;
		max-height: 150px;
		margin-bottom: 50px;
		img {
			height: 100%;
			width: 99%;
		}
	}
	@media (min-width: 720px) {
		.swiper {
			width: 99%;
			height: 400px;
			min-height: 300px;
			max-width: 1280px;
			margin-bottom: 50px;
			img {
				height: 100%;
				width: 99%;
			}
		}
	}
</style>
