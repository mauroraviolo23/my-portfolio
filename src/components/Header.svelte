<script>
	export let y;

	let tabs = [
		{
			name: "Projects",
			link: "#projects",
		},
		{
			name: "About me",
			link: "#about",
		},
		{
			name: "Contact",
			link: "contact",
		},
	];
</script>

<header
	class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid " +
		(y > 0
			? " py-4 bg-slate-950 border-sky-500"
			: " py-6 bg-transparent border-transparent")}
>
	<h1 class="font-medium">
		<b class="font-bold chakra">Mauro Raviolo</b>
	</h1>
	<div class="sm:flex items-center gap-4 hidden">
		{#each tabs as tab, index}
			<a href={tab.link} class="duration-200 hover:text-sky-500">
				<p>{tab.name}</p>
			</a>
		{/each}
	</div>
	<a
		href="#"
		target="_blank"
		class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950"
	>
		<div
			class="absolute top-0 right-full w-full h-full bg-sky-500 opacity-80 group-hover:translate-x-full z-0 duration-200"
		></div>
		<h4 class="relative z-9">Get in touch</h4>
	</a>
</header>
