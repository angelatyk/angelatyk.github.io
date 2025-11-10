import { SiGithub } from "react-icons/si";
import LinkButton from "./LinkButton";

function ProjectCard({ title, imageSrc, description, link, presentation, github, tags = [] }) {
	const tagColors = {
		"Web Development": "var(--background-accent-blue)",
		"AI/Machine Learning": "var(--background-accent-yellow)",
		"Data Science": "var(--background-accent-green)",
		Default: "var(--background-accent-pink)",
	};

	return (
		<div className="project-card">
			<div className="project-card-header">
				{tags.length > 0 && (
					<div className="project-card-tags">
						{tags.map((tag, index) => (
							<span key={index} className="project-card-tag" style={{ backgroundColor: tagColors[tag] || tagColors.Default }}>
								{tag}
							</span>
						))}
					</div>
				)}
				{github && (
					<a href={github} target="_blank" rel="noopener noreferrer" className="project-card-github">
						<SiGithub size={20} />
					</a>
				)}
			</div>
			<div className="project-card-content">
				<h3 className="project-card-title">{title}</h3>
				<p className="project-card-description">{description}</p>
				{link && <LinkButton href={link} label="View Project →" className="text-sm" />}
				{presentation && <LinkButton href={presentation} label="View Presentation →" className="text-sm" />}
			</div>
			{imageSrc && (
				<div className="project-card-image">
					<img src={imageSrc} alt={title} />
				</div>
			)}
		</div>
	);
}

export default ProjectCard;
