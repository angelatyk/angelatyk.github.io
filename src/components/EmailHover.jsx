import { EMAIL } from "../config/email";

function EmailHover({ children }) {
	return (
		<div className="email-hover-container">
			{children}
			<span className="email-hover-text">{EMAIL}</span>
		</div>
	);
}

export default EmailHover;
