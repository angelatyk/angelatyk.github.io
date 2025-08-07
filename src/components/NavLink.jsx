function NavLink({ link, label, onClick, isExternal = false, className = "", download = false }) {
	const commonClasses = `nav-link ${className}`.trim();

	return (
		<li>
			<a
				href={isExternal ? link : `#${link}`}
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
