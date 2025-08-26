function LinkButton({ href, label, className = "" }) {
	return (
		<a href={href} className={`link ${className}`} aria-label={label}>
			<span className="link-text">
				{label}
				<div className="link-animation"></div>
			</span>
		</a>
	);
}

export default LinkButton;
