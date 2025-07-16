function NavLink({ link, label, onClick }) {
	return (
		<li>
			<a href={`#${link}`} className="nav-link" onClick={onClick}>
				{label}
			</a>
		</li>
	);
}

export default NavLink;
