import { Mail } from "lucide-react";
import { SiGithub, SiGoogledocs, SiLinkedin } from "react-icons/si";
import { EMAIL } from "../config/email";
import EmailHover from "./EmailHover";

const FloatingContactBar = ({ className = "" }) => {
	return (
		<div className={`floating-contact-bar ${className}`}>
			<EmailHover>
				<a href={`mailto:${EMAIL}`} aria-label="Email" title="Email">
					<Mail size={20} />
				</a>
			</EmailHover>
			<a href="https://github.com/angelatyk" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
				<SiGithub size={20} />
			</a>
			<a href="https://linkedin.com/in/angelatyk" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
				<SiLinkedin size={20} />
			</a>
			<a href="/Angela_Kwok_Resume.pdf" download target="_blank" rel="noopener noreferrer" aria-label="Resume" title="Resume">
				<SiGoogledocs size={20} />
			</a>
		</div>
	);
};

export default FloatingContactBar;
