<script>
	import Footer from '$lib/footer.svelte';
	import BannerContainer from '$lib/home/bannerContainer.svelte';

	import Main from '$lib/navigations/main.svelte';
	import Storecontainer from '$lib/stores/storecontainer.svelte';
</script>

<BannerContainer>
	<Main />
</BannerContainer>
<Storecontainer />
<Footer />
