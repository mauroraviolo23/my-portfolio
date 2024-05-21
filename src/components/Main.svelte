<script>
	import Step from "./Step.svelte";
	import {
		aws,
		bootstrap,
		css,
		express,
		html,
		javascript,
		mysql,
		nestjs,
		nodejs,
		react,
		redux,
	} from "../svg/svg";

	let steps = [
		{
			icon: "fa-solid fa-cart-shopping",
			name: "Losi E-Commerce",
			description:
				"E-commerce website created as final project for the Coding Bootcamp from Hack Academy, January 2022.",
			techs: [react, redux, bootstrap, nodejs, express],
			href: "https://losi.vercel.app/",
		},
		{
			icon: "fa-solid fa-hashtag",
			name: "Tic Tac Toe",
			description:
				"The famous game developed in an interactive class with coding instructor and content creator @midudev. Added styles and functionalities to core project.",
			techs: [javascript, react],
			href: "#",
		},
		{
			icon: "fa-regular fa-clock",
			name: "Pomodoro App",
			description: "Classic pomodoro application for improved time management.",
			techs: [html, css, javascript],
			href: "https://mauroraviolo23.github.io/pomodoro-app/",
		},
		{
			icon: "fa-solid fa-list",
			name: "Complaints List",
			description:
				"Back End application for creation of an API that successfully manages the creation, edition, deletion and filtering of client's complaints.",
			techs: [nestjs, aws, mysql],
			href: "https://github.com/mauroraviolo23/complaints-list-cenco",
		},
		{
			icon: "fa-solid fa-cloud-sun",
			name: "Climate App",
			description:
				"Small console application in Node.js developed within the framework of the course 'Node - From Zero to Expert' by teacher Fernando Herrera. It enables the user to ask for current weather in any city in the world.",
			techs: [javascript, nodejs],
			href: "https://github.com/mauroraviolo23/climate-app",
		},
		{
			icon: "fa-solid fa-list",
			description:
				"Small console application in Node.js developed within the framework of the course 'Node - From Zero to Expert' by teacher Fernando Herrera. It's an application that serves to list tasks to do, differentiate between completed and pending ones, and the ability to change their status. It's also possible to delete them.",
			techs: [javascript, nodejs],
			name: "Tasks App",
			href: "#",
		},
	];
</script>

<main class="flex flex-col flex-1 p-4">
	<section id="introPage" class="grid grid-cols-1 gap-10">
		<div
			class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
		>
			<h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl text-center">
				Hi! I'm Mauro Raviolo <br />
				<span class="chakra text-sky-500">Full Stack Developer</span>
			</h2>
			<p class="text-center sm:text-lg md:text-xl">
				Here's some information about me 👇
			</p>
		</div>
	</section>
	<section id="projects" class="py-20 flex flex-col gap-24">
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
</main>
