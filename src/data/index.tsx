import linkedin from "../assets/link.svg";
import github from "../assets/git.svg";
import { CgWorkAlt } from "react-icons/cg";

export const navItems = [
	{ name: "About", link: "#about" },
	{ name: "Projects", link: "#projects" },
	{ name: "Experience", link: "#experience" },
	{ name: "Contact", link: "#contact" },
];

export const experiencesData = [
	{
		title: "Full Stack Developer | Intern",
		location: "Anku ICT Consulting PLC",
		description:
			"Developed a web application using Node.js and React during my internship,gaining hands-on experience in full-stack development also played a key role in the development of a large-scale web application using Django,DRF and React.",
		icon: <CgWorkAlt />,
		date: "June - Sep 2022",
	},
	{
		title: "Full Stack Developer | Intern",
		location: "Addis Way Technologies",
		description:
			"Played a pivotal role in the development of a large-scale web application using Laravel and React simultaneously engaged in learning and practicing data science, broadening skillsand knowledge to contribute to the interdisciplinary aspects of softwaredevelopment.",
		icon: <CgWorkAlt />,
		date: "June - Sep 2023",
	},
	{
		title: "Full-Stack Developer | Freelaner",
		location: "AfriWork, Upwork...",
		description:
			"I'm now a full-stack developer working as a freelancer. I'm open to full-time opportunities.",
		icon: <CgWorkAlt />,
		date: "Dec 2023 - present",
	},
	{
		title: "Full-Stack Developer | Full-Time",
		location: "LT Ict Solutions",
		description:
			"I'm now a full-stack developer working in LT Ict Solutions. I'm responsible for the development of a very large PMS(Project Management System) using Laravel and React. Specially in the frontend I'm responsible for the development of the dashboard and reusable components.",
		icon: <CgWorkAlt />,
		date: "Jul 2024 - present",
	},
];
export const socialMedia = [
	{
		id: 1,
		img: github,
		link: "https://github.com/Dawit-y",
	},
	{
		id: 3,
		img: linkedin,
		link: "https://www.linkedin.com/in/dawit-yimer-86414823a/",
	},
];

export const skillsData = [
	"HTML",
	"CSS",
	"Python",
	"Django",
	"JavaScript",
	"TypeScript",
	"React",
	"Next.js",
	"Node.js",
	"Express",
	"Git",
	"Tailwind",
	"Framer Motion",
	"Redux",
	"React Query",
	"GraphQL",
	"Apollo",
	"Prisma",
	"PostgreSQL",
	"MySQL",
	"MongoDB",
];
