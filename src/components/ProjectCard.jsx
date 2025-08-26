import { SiGithub } from "react-icons/si";
import LinkButton from "./LinkButton";

function ProjectCard({ title, imageSrc, description, link, github, tag }) {
	return (
		<div className="project-card">
			<div className="project-card-header">
				{tag && <span className="project-card-tag">{tag}</span>}
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
