import {
	aws,
	bootstrap,
	css,
	express,
	html,
	javascript,
	java,
	mysql,
	nestjs,
	nodejs,
	postgres,
	react,
	redux,
} from "../svg/svg";

export let steps = [
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
		href: "https://tic-tac-toe-mauro.netlify.app/",
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
		techs: [nestjs, aws, postgres],
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

export let facts = [
	{
		icon: "fa-solid fa-book-open",
		name: "Currently Studying",
		description:
			"Bachelor's Degree in Systems in Universidad ORT Uruguay since 2023.",
	},
	{
		icon: "fa-solid fa-heart",
		name: "My hobbies",
		description:
			"Amateur footballer since childhood, two-bit quality. Club Nacional de Football and FC Barcelona fan. Big board games player. Like to annoy my dog in my free time.",
	},
	{
		icon: "fa-solid fa-music",
		name: "My favourite music",
		description:
			"Music has a big presence in my daily life. I don't go anywhere without my headphones. Some of my preferred musicians and bands: Jaime Roos, Ruben Rada, Hugo Fattoruso, Charly García, Fito Paez, Gustavo Cerati, Tan Bionica, NTVG, and a great etcetera.",
	},
];

export let contacts = [
	{
		icon: "fa-brands fa-linkedin",
		name: "Linkedin profile",
		link: "https://www.linkedin.com/in/mauroraviolo/",
		text: "Mauro Raviolo",
	},
	{
		icon: "fa-brands fa-github",
		name: "GitHub profile",
		link: "https://github.com/mauroraviolo23",
		text: "/mauroraviolo23",
	},
	{
		icon: "fa-regular fa-envelope",
		name: "email",
		link: "mailto:mauro.raviolo@gmail.com",
		text: "mauro.raviolo@gmail.com",
	},
	{
		icon: "fa-brands fa-whatsapp",
		name: "phone number",
		link: "https://wa.me/+59898326308",
		text: "+598 98 326 308",
	},
];
