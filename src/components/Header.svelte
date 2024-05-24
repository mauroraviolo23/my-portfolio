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
	];
</script>

<header
	class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between" +
		(y > 0 ? " py-4 bg-slate-950" : " py-6 bg-transparent border-transparent")}
>
	<h1 class="font-medium">
		<a href="#title" class="font-bold chakra text-lg">Mauro Raviolo</a>
	</h1>
	<div class="sm:flex items-center gap-4 hidden">
		{#each tabs as tab, index}
			<a href={tab.link} class="duration-200 hover:text-sky-500">
				<p>{tab.name}</p>
			</a>
		{/each}
	</div>
	<a
		href="#contact"
		class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white"
	>
		<h4
			class="relative z-9 hover:text-sky-500 text-black font-semibold text-sm md:text-base"
		>
			Contact me
		</h4>
	</a>
</header>
