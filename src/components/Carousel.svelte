<script>
	import { onMount } from "svelte";
	import {
		aws,
		bootstrap,
		css,
		express,
		git,
		github,
		gitlab,
		graphql,
		html,
		java,
		javascript,
		mongodb,
		mysql,
		nestjs,
		nodejs,
		postgres,
		postman,
		python,
		react,
		redux,
		tailwind,
		typescript,
	} from "../svg/svg";

	let techsArray = [
		javascript,
		typescript,
		nodejs,
		nestjs,
		express,
		python,
		java,
		graphql,
		html,
		css,
		bootstrap,
		tailwind,
		react,
		redux,
	];

	let dbArray = [mongodb, mysql, postgres];

	let toolsAndServicesArray = [git, github, gitlab, postman, aws];

	onMount(() => {
		function renderLogos(logosArray, containerId, rep) {
			let container = document.createElement("div");
			container.classList.add(
				"flex",
				"justify-evenly",
				"w-full",
				"sm:mx-5",
				"lg:mx-1"
			);
			logosArray.forEach((tech) => {
				let imgContainer = document.createElement("div");
				imgContainer.classList.add(
					"flex",
					"flex-col",
					"justify-center",
					"items-center",
					"mx-3"
				);
				let imgText = document.createElement("span");
				imgText.innerText = tech.name;
				let img = document.createElement("img");
				img.src = tech.source;
				img.classList.add("h-[50px]", "mx-2");
				imgContainer.appendChild(img);
				imgContainer.appendChild(imgText);
				container.appendChild(imgContainer);
			});
			document.querySelector(containerId).appendChild(container);
			if (rep) {
				let clone = container.cloneNode(true);
				clone.classList.add("hidden", "lg:flex");
				document.querySelector(containerId).appendChild(clone);
			}
		}
		renderLogos(techsArray, "#techs-slide", true);
		renderLogos(toolsAndServicesArray, "#tools-slide", false);
		renderLogos(dbArray, "#db-slide", false);
	});
</script>

<div class="text-center">
	<div class="logos border border-solid border-sky-500 mb-4 rounded-lg">
		<h2
			class="chakra text-sky-500 font-bold text-xl lg:text-2xl overflow-visible whitespace-normal mb-4"
		>
			Technologies
		</h2>
		<div class="logos-slide" id="techs-slide"></div>
	</div>
	<div class="grid grid-cols-2 gap-4">
		<div class="logos border border-solid border-sky-500 rounded-lg">
			<h2
				class="chakra text-sky-500 font-bold text-xl lg:text-2xl overflow-visible whitespace-normal mb-4"
			>
				Tools & Services
			</h2>
			<div class="logos-slide mix-anim" id="tools-slide"></div>
		</div>
		<div class="logos border border-solid border-sky-500 rounded-lg">
			<h2
				class="chakra text-sky-500 font-bold text-xl lg:text-2xl overflow-visible whitespace-normal mb-4"
			>
				DBs & DB Management Systems
			</h2>
			<div class="logos-slide not-anim" id="db-slide"></div>
		</div>
	</div>
</div>
