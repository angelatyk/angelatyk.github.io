function LinkButton({ href, label, className = "", openNewTab = false }) {
	return (
		<a href={href} className={`link ${className}`} aria-label={label} {...(openNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
			<span className="link-text">
				{label}
				<div className="link-animation"></div>
			</span>
		</a>
	);
}

export default LinkButton;
