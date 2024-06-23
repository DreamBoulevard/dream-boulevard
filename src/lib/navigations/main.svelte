<nav>
	<div class="m-logo">
		<a href="/">
			<img src="/navstatics/bannerlog.svg" alt="log" />
		</a>
	</div>
	<div class="m-stores">
		<a href="/stores">
			<img src="/navstatics/storebag.svg" alt="stores" />
		</a>
	</div>
</nav>

<style lang="scss">
	nav {
		height: 40px;
		display: flex;
		min-width: 320px;
		justify-content: space-between;
		align-items: center;
		margin-left: 5px;
		margin-right: 5px;
		.m-logo {
			width: 10%;
			height: 90%;

			a {
				display: flex;
				justify-content: center;
				align-items: center;
				height: 100%;

				img {
					height: 100%;
				}
			}
		}

		.m-stores {
			width: 15%;
			height: 90%;

			cursor: pointer;
			a {
				width: 100%;
				height: 80%;
				display: flex;
				justify-content: center;
				align-items: center;
				img {
					height: 100%;
				}
			}
		}
	}
	@media (min-width: 720px) {
		nav {
			height: 60px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 5px;
			.m-logo {
				width: 10%;
				height: 90%;
				a {
					display: flex;
					justify-content: center;
					align-items: center;
					height: 100%;
				}
			}

			.m-stores {
				width: 5%;
				height: 90%;
				cursor: pointer;
				a {
					width: 100%;
					height: 80%;
					display: flex;
					justify-content: center;
					align-items: center;
					img {
						height: 100%;
					}
				}
			}
		}
	}
</style>
