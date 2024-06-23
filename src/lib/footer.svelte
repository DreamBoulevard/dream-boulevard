<div id="l-container">
	<div id="l-logo">
		<img src="/footer/footerlogo.svg" alt="logo" />
		<span>DREAM BOULEVARD</span>
	</div>
	<div id="l-address">
		<div>East Legon Accra, Ghana</div>
		<div>+233 544 089 100</div>
	</div>
	<div id="l-socials">
		<img src="/footer/instagram.svg" alt="instagram" />
		<img src="/footer/twitter.svg" alt="twitter" />
		<img src="/footer/youtube.svg" alt="youtube" />
	</div>
</div>
<div id="l-copyright">© DREAM BOULEVARD</div>

<style lang="scss">
	#l-container {
		width: 85%;
		margin: auto;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		#l-logo {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;

			span {
				display: inline;
				font-size: 16px;
				margin-left: 10px;
			}
		}
		#l-address {
			display: flex;
			width: 100%;
			margin-top: 5px;
			flex-direction: column;

			div {
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
		#l-socials {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			margin-top: 5px;
			img {
				height: 40%;
				margin: 10px;
			}
		}
		div {
			flex: 1;
			width: 45%;
		}
	}
	#l-copyright {
		margin-top: 40px;
		margin-bottom: 20px;
		width: 100%;

		text-align: center;
	}
	@media (min-width: 720px) {
		#l-container {
			width: 85%;
			margin: auto;
			display: flex;
			flex-direction: row;

			justify-content: space-evenly;
			#l-logo {
				display: flex;
				justify-content: space-between;
				align-items: center;
				div {
					text-align: right;
					font-size: 16px;
				}
			}
			#l-address {
				display: flex;
				flex-direction: column;
				div {
					width: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
				}
			}
			#l-socials {
				display: flex;
				justify-content: center;
				align-items: center;
				img {
					height: 40%;
					margin: 10px;
				}
			}
			div {
				flex: 1;
				width: 45%;
			}
		}
		#l-copyright {
			margin-top: 40px;
			margin-bottom: 20px;
			width: 100%;

			text-align: center;
		}
	}
</style>
