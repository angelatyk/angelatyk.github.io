function NavLink({ link, label, onClick, isExternal = false, className = "", download = false }) {
	const commonClasses = `nav-link ${className}`.trim();

	let href;
	if (download) {
		href = `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${link.replace(/^\/?/, "")}`;
	} else if (isExternal) {
		href = link;
	} else {
		href = `#${link}`;
	}

	return (
		<li>
			<a
				href={href}
				className={commonClasses}
				target={isExternal && !download ? "_blank" : undefined}
				rel={isExternal && !download ? "noopener noreferrer" : undefined}
				download={download}
				onClick={onClick}
			>
				{label}
			</a>
		</li>
	);
}

export default NavLink;
