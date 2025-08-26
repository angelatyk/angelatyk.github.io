import ProjectCard from "../components/ProjectCard";

import growImg from "../assets/images/grow.png";

function Projects({ projectsRef }) {
	const projects = [
		{
			title: "Grow",
			subtitle: "Web Development",
			imageSrc: growImg,
			description:
				"Grow is a full-stack gardening application designed to help users plan and manage their seasonal gardens. Built with Next.js, Prisma, Node.js, and MySQL, the app enables users to select plants from a curated collection and automatically generates personalized to-do lists, including key tasks such as seeding, watering, and harvesting. It features secure user authentication, a community-driven tips section, and an intuitive interface for tracking plant growth. This capstone project allowed me to adopt new technologies like Next.js, Prisma, and TypeScript, building on the React and Node.js knowledge I gained in class.",
			link: "",
		},
		{
			title: "BikeEase Series",
			subtitle: "Machine Learning",
			imageSrc: "/images/bikeease.png",
			description: "Forecasting bike rental demand using regression models and ML techniques.",
			link: "",
		},
	];

	return (
		<section className="section-container" id="projects" ref={projectsRef}>
			<div className="section-content">
				<h2 className="section-heading">Projects.</h2>
				{projects.map((project, index) => (
					<ProjectCard key={index} {...project} />
				))}
			</div>
		</section>
	);
}

export default Projects;
