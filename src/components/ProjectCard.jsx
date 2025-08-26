import LinkButton from "./LinkButton";

function ProjectCard({ title, subtitle, imageSrc, description, link }) {
	return (
		<div className="project-card">
			{imageSrc && (
				<div className="project-card-image">
					<img src={imageSrc} alt={title} />
				</div>
			)}
			<div className="project-card-content">
				<h3 className="project-card-title">{title}</h3>
				{subtitle && <p className="project-card-subtitle">{subtitle}</p>}
				<p className="project-card-description">{description}</p>
				{link && <LinkButton href={link} label="View Project →" />}
			</div>
		</div>
	);
}

export default ProjectCard;
