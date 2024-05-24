<script>
	import "../app.css";

	import Header from "../components/Header.svelte";
	import Footer from "../components/Footer.svelte";

	let y;
	let innerHeight = 0;
	let innerWidth = 0;

	function goTop() {
		document.body.scrollIntoView();
	}
</script>

<div
	class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen"
>
	<div
		class={"fixed bottom-0 left-1/2 transform -translate-x-1/2 duration-200 flex p-10 z-[10] mx-auto" +
			(y > 0
				? " opacity-full pointer-events-auto"
				: " pointer-events-none opacity-0")}
	>
		<button
			on:click={goTop}
			class="rounded-full bg-slate-900 text-sky-500 p-3 sm:p-4 hover:bg-slate-800 cursor-pointer"
		>
			<i class="fa-solid fa-arrow-up grid place-items-center lg:text-lg"></i>
		</button>
	</div>
	<Header {y} />
	<slot />
	<Footer />
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
