<script lang="ts">
	import { alertboxStatus, alertMessage } from './stores/alertStore';
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
	/>
</svelte:head>
<div style:display={$alertboxStatus ? 'flex' : 'none'} id="l-alertBox">
	<div class="l-alertBox__content">
		<div class="l-alertBoxtitle">
			<button
				on:click={() => {
					alertboxStatus.set(false);
				}}
			>
				<span class="material-symbols-outlined"> close </span>
			</button>
		</div>
		<div class="l-alertBox__text">
			<div class="icon">
				<img src="/footer/footerlogo.svg" alt="" />
			</div>
			<div class="textArea">{$alertMessage}</div>
		</div>
	</div>
</div>

<style lang="scss">
	#l-alertBox {
		width: 100%;
		height: 100vh;
		position: fixed;
		z-index: 99;
		margin: auto 0;
		display: flex;
		justify-content: center;
		align-items: center;
		.l-alertBox__content {
			width: 90%;
			height: 30%;
			box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
			border-radius: 5px;
			background-color: #f8f8ff;
			.l-alertBoxtitle {
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: right;

				button {
					margin-right: 5px;
					height: 90%;
					border: none;
					padding: 5px;
					background-color: transparent;
					cursor: pointer;
				}
			}
		}
		.l-alertBox__text {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 5px;
			.icon {
				width: 20%;
			}
			.textArea {
				width: 75%;
			}
		}
	}

	@media (min-width: 720px) {
		#l-alertBox {
			width: 100%;
			height: 100vh;
			position: fixed;
			z-index: 99;
			margin: auto 0;
			display: flex;
			justify-content: center;
			align-items: center;
			.l-alertBox__content {
				width: 500px;
				box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
				border-radius: 5px;
				background-color: #f8f8ff;
				.l-alertBoxtitle {
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: right;

					button {
						margin-right: 5px;
						height: 90%;
						border: none;
						padding: 5px;
						background-color: transparent;
						cursor: pointer;
					}
				}
			}
			.l-alertBox__text {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 5px;
				.icon {
					width: 20%;
				}
				.textArea {
					width: 75%;
				}
			}
		}
	}
</style>
