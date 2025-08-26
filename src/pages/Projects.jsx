import ProjectCard from "../components/ProjectCard";

import growImg from "../assets/images/grow.png";
import portfolioImg from "../assets/images/portfolio.png";
import reconnectorImg from "../assets/images/reconnector.png";

function Projects({ projectsRef }) {
	const projects = [
		{
			title: "My Portfolio",
			imageSrc: portfolioImg,
			description:
				"My Portfolio is a responsive, mobile-first website built to showcase projects and technical skills in a clean, modern interface. The site features light and dark mode support, smooth animations, and modular React components for scalability. Developed with React and Tailwind CSS, this project reflects my ability to quickly learn and apply new technologies, as Tailwind was a first-time experience, while maintaining a focus on intuitive design and maintainable code.",
			link: "https://angelatyk.github.io/",
			github: "https://github.com/angelatyk/angelatyk.github.io",
			tag: "Web Development",
		},
		{
			title: "Reconnect",
			imageSrc: reconnectorImg,
			description:
				"Reconnect is a full-stack application built in two weeks during a hackathon to foster stronger workplace connections in remote environments. The app lets employees share events, find common interests, and participate in company-wide gamification through a points-based competition system. It features a responsive interface built with React and Sass, secure authentication and data storage via Supabase and PostgreSQL, and seamless deployment on Vercel. This project highlights adaptability, teamwork in an Agile environment, and rapid learning of new tools under tight deadlines.",
			link: "https://reconnector.vercel.app/",
			github: "https://github.com/angelatyk/angela-kwok-grow",
			tag: "Web Development",
		},
		{
			title: "Grow",
			imageSrc: growImg,
			description:
				"Grow is a full-stack gardening application built to help users plan and manage seasonal gardens efficiently. The app allows users to choose plants from a curated collection and automatically generates a personalized to-do list with tasks like seeding, watering, and harvesting. It includes secure authentication, a community-driven tips section, and an intuitive interface for tracking plant growth. Developed as a capstone project, Grow demonstrates my ability to learn new technologies such as Next.js, Prisma, and TypeScript while building on foundational knowledge of React and Node.js.",
			github: "https://github.com/angelatyk/angela-kwok-grow",
			tag: "Web Development",
		},
	];

	return (
		<section className="section-container" id="projects" ref={projectsRef}>
			<div className="section-content">
				<h2 className="section-heading">Projects.</h2>
			</div>
			<div className="projects-grid">
				{projects.map((project, index) => (
					<ProjectCard key={index} {...project} />
				))}
			</div>
		</section>
	);
}

export default Projects;
