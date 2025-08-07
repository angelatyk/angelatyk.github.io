import { Mail } from "lucide-react";
import { SiGithub, SiGoogledocs, SiLinkedin } from "react-icons/si";

const FloatingContactBar = () => {
	return (
		<div className="floating-contact-bar">
			<a href="mailto:angelatyk@gmail.com" aria-label="Email">
				<Mail size={20} />
			</a>
			<a href="https://github.com/angelatyk" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
				<SiGithub size={20} />
			</a>
			<a href="https://linkedin.com/in/angelatyk" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
				<SiLinkedin size={20} />
			</a>
			<a href="/Angela_Kwok_Resume.pdf" download target="_blank" rel="noopener noreferrer" aria-label="Resume">
				<SiGoogledocs size={20} />
			</a>
		</div>
	);
};

export default FloatingContactBar;
