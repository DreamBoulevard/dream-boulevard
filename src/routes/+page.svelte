<script>
	import Footer from '$lib/footer.svelte';
	import BannerContainer from '$lib/home/bannerContainer.svelte';
	import BoulevardStreet from '$lib/home/boulevardStreet.svelte';
	import Carosel from '$lib/home/carosel.svelte';
	import Modellineup from '$lib/home/modellineup.svelte';
	import Main from '$lib/navigations/main.svelte';
</script>

<BannerContainer>
	<Main />
</BannerContainer>
<Modellineup />
<BoulevardStreet />
<Carosel />
<Footer />
