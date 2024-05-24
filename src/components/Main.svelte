<script>
	import Step from "./Step.svelte";
	import { facts, steps, contacts } from "../data/data";
	import Carousel from "./Carousel.svelte";
</script>

<main class="flex flex-col flex-1 p-4">
	<span id="title" class="mb-20"></span>
	<section id="introPage" class="grid grid-cols-1 gap-10">
		<div class="flex flex-col lg:justify-center text-center lg:text-left gap-6">
			<h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl text-center">
				Hi! I'm Mauro Raviolo <br />
				<span class="chakra text-sky-500">Full Stack Developer</span>
			</h2>
			<div class="flex flex-col md:flex-row justify-center">
				<p
					class="text-center sm:text-lg md:text-xl chakra text-sky-500 font-semibold"
				>
					<span class="text-white font-normal">Coding & learning</span> since 2021.&nbsp;
				</p>
				<p
					class="text-center sm:text-lg md:text-xl chakra text-sky-500 font-semibold"
				>
					<span class="text-white font-normal">Amateur cook</span> since 2018.&nbsp;
				</p>
				<p
					class="text-center sm:text-lg md:text-xl chakra text-sky-500 font-semibold"
				>
					<span class="text-white font-normal"> Small-time comedian</span> since 1997.
				</p>
			</div>
		</div>
	</section>
	<section id="stack" class="py-20 flex flex-col gap-24">
		<div class="flex flex-col gap-2 text-center">
			<h3 class="text-4xl">
				My <span class="chakra text-sky-500 font-bold">technical stack</span>
			</h3>
		</div>
		<Carousel />
	</section>
	<section id="projects" class="flex flex-col gap-24">
		<div class="flex flex-col gap-2 text-center">
			<h3 class="text-4xl">
				Some of my <span class="chakra text-sky-500 font-bold">projects</span>
			</h3>
		</div>
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14">
			<Step step={steps[0]}>
				{#each steps[0].techs as tech}
					<div class="flex-1 flex flex-col flex-wrap justify-center items-center">
						<img
							src={tech.source}
							class="h-full w-full sm:h-4/5 sm:w-4/5 flex-shrink-0 max-h-[80px]"
							alt={tech.name}
						/>
						<span
							class="text-center text-xs md:text-sm h-1/5 w-full hidden sm:block flex-shrink-0 chakra"
						>
							{tech.name}
						</span>
					</div>
				{/each}
			</Step>
			<Step step={steps[1]}>
				{#each steps[1].techs as tech}
					<div class="flex-1 flex flex-col flex-wrap justify-center items-center">
						<img
							src={tech.source}
							class="h-full w-full sm:h-4/5 sm:w-4/5 flex-shrink-0 max-h-[80px]"
							alt={tech.name}
						/>
						<span
							class="text-center text-xs md:text-sm h-1/5 w-full hidden sm:block flex-shrink-0 chakra"
						>
							{tech.name}
						</span>
					</div>
				{/each}
			</Step>
			<Step step={steps[2]}>
				{#each steps[2].techs as tech}
					<div class="flex-1 flex flex-col flex-wrap justify-center items-center">
						<img
							src={tech.source}
							class="h-full w-full sm:h-4/5 sm:w-4/5 flex-shrink-0 max-h-[80px]"
							alt={tech.name}
						/>
						<span
							class="text-center text-xs md:text-sm h-1/5 w-full hidden sm:block flex-shrink-0 chakra"
						>
							{tech.name}
						</span>
					</div>
				{/each}
			</Step>
			<Step step={steps[3]}>
				{#each steps[3].techs as tech}
					<div class="flex-1 flex flex-col flex-wrap justify-center items-center">
						<img
							src={tech.source}
							class="h-full w-full sm:h-4/5 sm:w-4/5 flex-shrink-0 max-h-[80px]"
							alt={tech.name}
						/>
						<span
							class="text-center text-xs md:text-sm h-1/5 w-full hidden sm:block flex-shrink-0 chakra"
						>
							{tech.name}
						</span>
					</div>
				{/each}
			</Step>
			<Step step={steps[4]}>
				{#each steps[4].techs as tech}
					<div class="flex-1 flex flex-col flex-wrap justify-center items-center">
						<img
							src={tech.source}
							class="h-full w-full sm:h-4/5 sm:w-4/5 flex-shrink-0 max-h-[80px]"
							alt={tech.name}
						/>
						<span
							class="text-center text-xs md:text-sm h-1/5 w-full hidden sm:block flex-shrink-0 chakra"
						>
							{tech.name}
						</span>
					</div>
				{/each}
			</Step>
			<Step step={steps[5]}>
				{#each steps[5].techs as tech}
					<div class="flex-1 flex flex-col flex-wrap justify-center items-center">
						<img
							src={tech.source}
							class="h-full w-full sm:h-4/5 sm:w-4/5 flex-shrink-0 max-h-[80px]"
							alt={tech.name}
						/>
						<span
							class="text-center text-xs md:text-sm h-1/5 w-full hidden sm:block flex-shrink-0 chakra"
						>
							{tech.name}
						</span>
					</div>
				{/each}
			</Step>
		</div>
	</section>
	<section
		id="about"
		class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:20 md:gap-24 relative"
	>
		<div class="flex flex-col gap-2 text-center py-4">
			<h3 class="text-2xl sm:text-3xl md:text-4xl">
				Some facts <span class="chakra text-sky-500 font-semibold">about me</span>
			</h3>
		</div>
		<div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
			{#each facts as fact, index}
				<div class="flex gap-6 sm:gap-8">
					<p
						class="chakra text-3xl sm:text-4xl md:text-5xl text-sky-500 font-semibold"
					>
						<i class={fact.icon}></i>
					</p>
					<div class="flex flex-col gap-6 sm:gap-8">
						<h3 class="text-2xl sm:text-3xl md:text-5xl chakra">
							{fact.name}
						</h3>
						<p class="text-lg">{fact.description}</p>
					</div>
				</div>
			{/each}
			<iframe
				title="Some of my music"
				style="border-radius:12px"
				src="https://open.spotify.com/embed/track/039cZoafYDRJ1DHih4riKI?utm_source=generator&theme=0"
				width="100%"
				height="160"
				frameBorder="0"
				allowfullscreen=""
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"
			></iframe>
		</div>
	</section>
	<section id="contact" class="text-center">
		<h3 class="text-2xl sm:text-3xl md:text-4xl mb-20">
			Some ways to <span class="chakra text-sky-500 font-semibold">contact me</span
			>
		</h3>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each contacts as contact}
				<a
					href={contact.link}
					target="_blank"
					class="border border-solid border-sky-500 rounded-lg m-auto w-full flex justify-between items-center hover:scale-105 hover:brightness-110 transition ease-in-out py-4 text-left"
				>
					<div class="flex flex-col justify-center text-5xl px-10">
						<i class={contact.icon}></i>
					</div>
					<div class="flex flex-col grow">
						<h6
							class="chakra text-sky-500 font-semibold text-lg md:text-2xl lg:text-3xl inline"
						>
							<span class="text-white font-normal">My</span>
							{contact.name}
						</h6>
						<p class="text-base md:text-lg">{contact.text}</p>
					</div>
				</a>
			{/each}
		</div>
	</section>
</main>
