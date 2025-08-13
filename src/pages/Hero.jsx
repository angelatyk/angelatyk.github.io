import { Mail } from "lucide-react";
import { SiGithub, SiGoogledocs, SiLinkedin } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";

function Hero({ heroRef }) {
	return (
		<section className="section-container" id="hero" ref={heroRef}>
			<div className="section-content">
				<h1 className="hero-heading">Angela Kwok.</h1>
				<h2 className="hero-subheading">Software Engineer · Full-Stack Developer · AI/ML Engineer</h2>
				<p className="hero-subtext">
					I{" "}
					<span className="hero-typewriter">
						<Typewriter words={["build", "solve", "explore"]} loop={true} cursor cursorStyle="_" typeSpeed={70} deleteSpeed={50} delaySpeed={1500} />
					</span>
				</p>
				<p className="hero-subtext">Blending AI and web technologies to create user-focused solutions that transform complexity into intuitive, elegant experiences.</p>
				<div className="hero-contact">
					<a href="mailto:angelatyk@gmail.com" aria-label="Email" title="Email">
						<Mail />
					</a>
					<a href="https://github.com/angelatyk" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
						<SiGithub size={24} />
					</a>
					<a href="https://linkedin.com/in/angelatyk" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
						<SiLinkedin size={24} />
					</a>
					<a href={`${import.meta.env.BASE_URL}/Angela_Kwok_Resume.pdf`} download target="_blank" rel="noopener noreferrer" aria-label="Resume" title="Resume">
						<SiGoogledocs size={24} />
					</a>
				</div>
			</div>
		</section>
	);
}

export default Hero;
