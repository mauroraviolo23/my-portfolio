<script>
	export let step;
</script>

<a
	href={step.href}
	target="_blank"
	class="p-4 sm:p-6 md:p-8 flex flex-col justify-center items-center gap-4 rounded-lg border border-solid border-sky-500 group cursor-pointer hover:border-sky-300 duration-300"
>
	<div
		class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-13 lg:mt-16 mx-auto duration-300"
	>
		<i class={step.icon}></i>
	</div>
	<h3 class="font-medium text-xl sm:text-2xl md:text-3xl text-center">
		{step.name}
	</h3>
	<p class="inline-block mx-auto">{step.description}</p>
	<div class="flex-1 flex justify-between gap-4 items-center">
		<slot />
	</div>
	<div class="m-auto cursor-pointer hover:scale-110 duration-300">
		<p class="chakra text-sky-400 text-lg">See more</p>
	</div>
</a>
