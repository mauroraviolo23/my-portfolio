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
			container.classList.add("flex");
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
				img.classList.add("h-[50px]", "mx-5");
				imgContainer.appendChild(img);
				imgContainer.appendChild(imgText);
				container.appendChild(imgContainer);
			});
			document.querySelector(containerId).appendChild(container);
			if (rep) {
				let clone = container.cloneNode(true);
				document.querySelector(containerId).appendChild(clone);
			}
		}
		renderLogos(techsArray, "#techs-slide", true);
		renderLogos(toolsAndServicesArray, "#tools-slide", false);
		renderLogos(dbArray, "#db-slide", false);
	});
</script>

<div>
	<div class="logos border border-solid border-sky-500 mb-4">
		<h2 class="chakra text-sky-500">Technologies</h2>
		<div class="logos-slide" id="techs-slide"></div>
	</div>
	<div class="grid grid-cols-2 gap-4">
		<div class="logos border border-solid border-sky-500">
			<h2 class="chakra text-sky-500">Tools & Services</h2>
			<div class="logos-slide not-anim" id="tools-slide"></div>
		</div>
		<div class="logos border border-solid border-sky-500">
			<h2 class="chakra text-sky-500">Databases & Database Management Systems</h2>
			<div class="logos-slide not-anim" id="db-slide"></div>
		</div>
	</div>
</div>
