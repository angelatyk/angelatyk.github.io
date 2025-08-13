import { Mail } from "lucide-react";
import { SiGithub, SiGoogledocs, SiLinkedin } from "react-icons/si";

const FloatingContactBar = ({ className = "" }) => {
	return (
		<div className={`floating-contact-bar ${className}`}>
			<a href="mailto:angelatyk@gmail.com" aria-label="Email" title="Email">
				<Mail size={20} />
			</a>
			<a href="https://github.com/angelatyk" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
				<SiGithub size={20} />
			</a>
			<a href="https://linkedin.com/in/angelatyk" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
				<SiLinkedin size={20} />
			</a>
			<a href={`${import.meta.env.BASE_URL}/Angela_Kwok_Resume.pdf`} download target="_blank" rel="noopener noreferrer" aria-label="Resume" title="Resume">
				<SiGoogledocs size={20} />
			</a>
		</div>
	);
};

export default FloatingContactBar;
