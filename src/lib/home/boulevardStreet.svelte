<div id="l-container">
	<div class="m-title">BOULEVARD STREET</div>
	<div id="l-clothlineup">
		<div id="l-lineup">
			<img src="/homeStatics/lineupWhite.jpg" alt="lineupWhite" />
		</div>
		<div id="l-lineup">
			<img src="/homeStatics/lineupBlue.jpg" alt="lineupWhite" />
		</div>
		<div id="l-lineup">
			<img src="/homeStatics/lineupBlack.jpg" alt="lineupWhite" />
		</div>
	</div>
</div>

<style lang="scss">
	#l-container {
		margin-top: 10px;
		padding: 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
		.m-title {
			font-size: 22px;
			width: 100%;
			margin-left: 50px;
		}
		#l-clothlineup {
			width: 100%;
			margin-top: 20px;
			margin-bottom: 70px;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 5px;
			#l-lineup {
				height: 150px;
				max-width: 150px;
				width: 80;
				min-width: 80px;
				// background-color: #d9d9d9;
				display: flex;
				justify-content: center;
				align-items: center;
				img {
					height: 70%;
				}
			}
		}
	}
	@media (min-width: 720px) {
		#l-container {
			margin-top: 50px;
			padding: 20px;
			display: flex;
			flex-direction: column;
			align-items: center;
			.m-title {
				font-size: 44px;
				width: 100%;
			}
			#l-clothlineup {
				width: 85%;
				margin-top: 50px;
				margin-bottom: 70px;
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				align-items: center;
				justify-items: center;
				gap: 10px;
				#l-lineup {
					height: 400px;
					width: 70%;

					display: flex;
					justify-content: center;
					align-items: center;
					max-width: 280px;
					min-width: 180px;
					img {
						height: 60%;
						width: 80%;
					}
				}
			}
		}
	}
</style>
