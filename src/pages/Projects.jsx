import ProjectCard from "../components/ProjectCard";

import employeeTurnoverImg from "../assets/images/employee_turnover.png";
import growImg from "../assets/images/grow.png";
import portfolioImg from "../assets/images/portfolio.png";
import reconnectorImg from "../assets/images/reconnector.png";
import regressionModelsImg from "../assets/images/regression_models.png";
import salesAnalysisImg from "../assets/images/sales_analysis.png";

function Projects({ projectsRef }) {
	const projects = [
		{
			title: "BikeEase Analytics Series",
			imageSrc: regressionModelsImg,
			description:
				"The BikeEase Analytics Series showcases my AI/ML bootcamp journey through a multi-part project applied to BikeEase, a New York bike rental company. The notebooks cover data cleaning, visualization, regression modeling, CNN image classification, NLP sentiment analysis, and generative AI, highlighting my ability to apply end-to-end AI/ML workflows to real-world problems.",
			github: "https://github.com/angelatyk/bikeease-analytics-series",
			tags: ["Machine Learning", "Data Visualization"],
		},
		{
			title: "My Portfolio",
			imageSrc: portfolioImg,
			description:
				"My Portfolio is a responsive, mobile-first website built to showcase projects and technical skills in a clean, modern interface. The site features light and dark mode support, smooth animations, and modular React components for scalability. Developed with React and Tailwind CSS, this project reflects my ability to quickly learn and apply new technologies, as Tailwind was a first-time experience, while maintaining a focus on intuitive design and maintainable code.",
			link: "https://angelatyk.github.io/",
			github: "https://github.com/angelatyk/angelatyk.github.io",
			tags: ["Web Development"],
		},
		{
			title: "Employee Turnover Prediction",
			imageSrc: employeeTurnoverImg,
			description:
				"Employee Turnover Prediction helps companies identify employees at risk of leaving and implement targeted retention strategies. The project uncovers key turnover factors through HR data analysis, clusters employees based on satisfaction and evaluation, and predicts risk levels using advanced classification models. Built with Python, Pandas, Scikit-learn, and Matplotlib, it highlights expertise in data preprocessing, feature engineering, and model evaluation.",
			github: "https://github.com/angelatyk/employee-turnover",
			tags: ["Machine Learning", "Data Visualization"],
		},
		{
			title: "Sales Analysis",
			imageSrc: salesAnalysisImg,
			description:
				"This project analyzes AAL’s Q4 2020 apparel sales across Australia to uncover trends by state, demographic group, and time of day. It involves data cleaning, normalization, descriptive statistics, hypothesis testing, and visualizations that highlight peak periods, top-performing regions, and under-leveraged segments. Built with Python, Pandas, NumPy, Matplotlib, Seaborn, and SciPy, the analysis demonstrates proficiency in handling and presenting complex business data.",
			github: "https://github.com/angelatyk/sales-analysis",
			tags: ["Machine Learning", "Data Visualization"],
		},
		{
			title: "Reconnect",
			imageSrc: reconnectorImg,
			description:
				"Reconnect is a full-stack application built in two weeks during a hackathon to foster stronger workplace connections in remote environments. The app lets employees share events, find common interests, and participate in company-wide gamification through a points-based competition system. It features a responsive interface built with React and Sass, secure authentication and data storage via Supabase and PostgreSQL, and seamless deployment on Vercel. This project highlights adaptability, teamwork in an Agile environment, and rapid learning of new tools under tight deadlines.",
			link: "https://reconnector.vercel.app/",
			github: "https://github.com/angelatyk/angela-kwok-grow",
			tags: ["Web Development"],
		},
		{
			title: "Grow",
			imageSrc: growImg,
			description:
				"Grow is a full-stack gardening application built to help users plan and manage seasonal gardens efficiently. The app allows users to choose plants from a curated collection and automatically generates a personalized to-do list with tasks like seeding, watering, and harvesting. It includes secure authentication, a community-driven tips section, and an intuitive interface for tracking plant growth. Developed as a capstone project, Grow demonstrates my ability to learn new technologies such as Next.js, Prisma, and TypeScript while building on foundational knowledge of React and Node.js.",
			github: "https://github.com/angelatyk/angela-kwok-grow",
			tags: ["Web Development"],
		},
	];

	const leftColumn = projects.filter((_, i) => i % 2 === 0);
	const rightColumn = projects.filter((_, i) => i % 2 === 1);

	return (
		<section className="section-container" id="projects" ref={projectsRef}>
			<div className="section-content">
				<h2 className="section-heading">Projects.</h2>
			</div>

			{/* mobile: one column */}
			<div className="projects-mobile">
				{projects.map((p, i) => (
					<ProjectCard key={i} {...p} />
				))}
			</div>

			{/* desktop: two staggered columns */}
			<div className="projects-desktop">
				<div className="projects-col">
					{leftColumn.map((p, i) => (
						<ProjectCard key={i} {...p} />
					))}
				</div>
				<div className="projects-col projects-col-staggered">
					{rightColumn.map((p, i) => (
						<ProjectCard key={i} {...p} />
					))}
				</div>
			</div>
		</section>
	);
}

export default Projects;
