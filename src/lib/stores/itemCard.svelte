<script lang="ts">
	import { alertboxStatus, alertMessage } from './alertStore';

	let face = 'front';
	let color = 'white';
	let name = 'Paradise Tee';
	let image: HTMLImageElement;
	$: stage = `/storesStatics/${name}/${color}/${face}.jpg`;

	function activateAlert() {
		let message =
			'In app purchase is currently not available please use contact info below to place your order';
		alertMessage.update((m) => {
			m = message;
			return m;
		});
		alertboxStatus.set(true);
	}
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
<div id="l-storeCard">
	<div class="m-product">
		<img bind:this={image} src={stage} alt={name} />
	</div>
	<div class="l-description">
		<div id="l-varients">
			<div id="l-faces">
				<div
					role="none"
					on:click={() => {
						face = 'front';
					}}
					class="m-front"
				>
					<img src="/storesStatics/{name}/{color}/front.jpg" alt={name} />
				</div>
				<div
					role="none"
					on:click={() => {
						face = 'back';
					}}
					class="m-back"
				>
					<img src="/storesStatics/{name}/{color}/back.jpg" alt={name} />
				</div>
			</div>
			<div id="l-colors">
				<button
					on:click={() => {
						color = 'white';
					}}
					class="white"
				></button>
				<button
					on:click={() => {
						color = 'black';
					}}
					class="black"
				></button>
				<button
					on:click={() => {
						color = 'blue';
					}}
					class="blue"
				></button>
			</div>
		</div>
		<div id="l-name">
			<div class="m-name">
				<span>{name}</span>
			</div>
			<div class="m-price">
				<span>GH₵ 400</span>
			</div>
			<button on:click={activateAlert}>buy</button>
		</div>
	</div>
</div>

<style lang="scss">
	#l-storeCard {
		border-radius: 5px;
		max-width: 200px;
		display: flex;
		flex-direction: column;
		padding: 5px;

		.m-product {
			height: 200px;
			margin: auto;
			width: 85%;
			display: flex;
			justify-content: center;
			align-items: center;

			box-shadow:
				rgba(0, 0, 0, 0.07) 0px 1px 2px,
				rgba(0, 0, 0, 0.07) 0px 2px 4px,
				rgba(0, 0, 0, 0.07) 0px 4px 8px,
				rgba(0, 0, 0, 0.07) 0px 8px 16px,
				rgba(0, 0, 0, 0.07) 0px 16px 32px,
				rgba(0, 0, 0, 0.07) 0px 32px 64px;
			img {
				width: 80%;
			}
		}
		.l-description {
			height: 35%;
			width: 95%;
			margin: auto;
			width: 70%;
			display: grid;
			grid-template-rows: 1fr 1fr;
			gap: 10px;
			#l-faces {
				display: grid;
				grid-template-columns: 1fr 1fr;
				height: 70%;
				width: 80%;
				margin: auto;
				gap: 5px;
				.m-front {
					background-color: #f0f0f0;
					display: flex;
					justify-content: center;
					align-items: center;
					cursor: pointer;
					height: 80%;
					margin-top: 10px;
					img {
						width: 80%;
					}
				}
				.m-back {
					background-color: #f0f0f0;
					margin-top: 10px;
					cursor: pointer;
					display: flex;
					justify-content: center;
					align-items: center;
					height: 80%;
					img {
						width: 80%;
					}
				}
			}
			#l-colors {
				display: flex;
				justify-content: space-evenly;
				align-items: center;
				margin: auto;
				width: 70%;
				height: 20%;
				padding: 2px;
				padding: 2px;
				button {
					width: 15px;
					height: 15px;
					border-radius: 25px;
					border: none;
				}
				.white {
					background-color: HEX #f8f8ff;
				}
				.black {
					background-color: black;
				}
				.blue {
					background-color: blue;
				}
			}
			#l-name {
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				height: 80%;
				.m-name {
					display: flex;
					justify-content: center;
					font-weight: bold;
					span {
						font-size: 20px;
						margin: auto;
					}
				}
				.m-price {
					display: flex;
					justify-content: center;
					span {
						font-weight: 200;
						margin: auto;
						font-family: 'Open Sans', sans-serif;
					}
				}
				button {
					width: 90%;
					height: 60px;
					border: none;
					font-weight: bold;
					color: whitesmoke;
					background-color: black;
					border-radius: 5px;
					margin-left: 10px;
					margin-top: 5px;
					cursor: pointer;
				}
			}
		}
	}
	@media (min-width: 720px) {
		#l-storeCard {
			border-radius: 5px;
			height: 350px;
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			.m-product {
				height: 65%;
				margin: auto;
				width: 70%;
				display: flex;
				justify-content: center;
				align-items: center;
				box-shadow:
					rgba(0, 0, 0, 0.07) 0px 1px 2px,
					rgba(0, 0, 0, 0.07) 0px 2px 4px,
					rgba(0, 0, 0, 0.07) 0px 4px 8px,
					rgba(0, 0, 0, 0.07) 0px 8px 16px,
					rgba(0, 0, 0, 0.07) 0px 16px 32px,
					rgba(0, 0, 0, 0.07) 0px 32px 64px;
				img {
					width: 80%;
				}
			}
			.l-description {
				height: 30%;
				width: 95%;
				margin: auto;
				display: grid;
				grid-template-columns: 1fr 1fr;

				#l-faces {
					display: grid;
					grid-template-columns: 1fr 1fr;
					height: 70%;

					.m-front {
						background-color: #f0f0f0;
						display: flex;
						justify-content: center;
						align-items: center;
						cursor: pointer;
						img {
							width: 80%;
						}
					}
					.m-back {
						background-color: #f0f0f0;
						cursor: pointer;
						display: flex;
						justify-content: center;
						align-items: center;
						img {
							width: 80%;
						}
					}
				}
				#l-colors {
					display: flex;
					justify-content: space-evenly;
					align-items: center;
					margin-top: 5px;
					width: 70%;
					height: 30%;
					padding: 2px;
					button {
						width: 15px;
						height: 15px;
						border-radius: 25px;
						border: none;
					}
					.white {
						background-color: HEX #f8f8ff;
					}
					.black {
						background-color: black;
					}
					.blue {
						background-color: blue;
					}
				}
				#l-name {
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					height: 100%;
					.m-name {
						display: flex;
						justify-content: center;
						span {
							font-size: 1em;
							margin: auto;
						}
					}
					.m-price {
						display: flex;
						justify-content: center;
						span {
							font-size: 1.2em;
							margin: auto;
							font-family: 'Open Sans', sans-serif;
						}
					}
					button {
						width: 70px;
						height: 30px;

						font-weight: bold;
						color: whitesmoke;
						background-color: black;
						border-radius: 5px;
						margin-left: 10px;
						margin-top: 5px;
						cursor: pointer;
					}
				}
			}
		}
	}
</style>
