import { Mail, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";
import NavLink from "../components/NavLink";

function Home() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		const storedTheme = localStorage.getItem("theme");
		if (storedTheme) {
			setIsDarkMode(storedTheme === "dark");
			document.documentElement.classList.toggle("dark", storedTheme === "dark");
		} else {
			const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
			setIsDarkMode(systemPrefersDark);
			document.documentElement.classList.toggle("dark", systemPrefersDark);
		}
	}, []);

	const toggleDarkMode = () => {
		const newTheme = !isDarkMode ? "dark" : "light";
		document.documentElement.classList.toggle("dark", newTheme === "dark");
		localStorage.setItem("theme", newTheme);
		setIsDarkMode(!isDarkMode);
	};

	return (
		<>
			{/* Navigation */}
			<nav className="nav-container container">
				<a href="#hero" className="logo">
					<div className="logo">AK.</div>
				</a>

				<div className="nav-menu">
					{/* Dark Mode Toggle */}
					<button onClick={toggleDarkMode} aria-label="Toggle dark mode">
						{isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
					</button>

					{/* Desktop Menu */}
					<ul className="nav-menu-desktop">
						<NavLink link="about" label="About" />
						<NavLink link="skills" label="Skills" />
						<NavLink link="projects" label="Projects" />
						<NavLink link="resume" label="Resume" />
					</ul>

					{/* Mobile Toggle Button */}
					<button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
						{menuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</nav>

			{/* Mobile Menu */}
			{menuOpen && (
				<ul className="nav-menu-mobile">
					<NavLink link="about" label="About" onClick={() => setMenuOpen(false)} />
					<NavLink link="skills" label="Skills" onClick={() => setMenuOpen(false)} />
					<NavLink link="projects" label="Projects" onClick={() => setMenuOpen(false)} />
					<NavLink link="resume" label="Resume" onClick={() => setMenuOpen(false)} />
				</ul>
			)}

			<main className="container">
				{/* Hero */}
				<section className="hero-section" id="hero">
					<div className="section-content">
						<h1 className="hero-heading">Angela Kwok</h1>
						<h2 className="hero-subheading">Software Engineer · Full-Stack Developer · AI/ML Engineer</h2>
						<p className="hero-intro">
							I{" "}
							<span className="hero-typewriter">
								<Typewriter words={["build", "solve", "explore"]} loop={true} cursor cursorStyle="_" typeSpeed={70} deleteSpeed={50} delaySpeed={1500} />
							</span>
						</p>
						<p className="hero-subtext">Creating innovative solutions with AI and Web Technologies.</p>
						<div className="hero-contact">
							<a href="mailto:angelatyk@gmail.com" aria-label="Email">
								<Mail />
							</a>
							<a href="https://github.com/angelatyk" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
								<SiGithub size={24} />
							</a>
							<a href="https://linkedin.com/in/angelatyk" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
								<SiLinkedin size={24} />
							</a>
						</div>
					</div>
				</section>

				{/* About */}
				<section className="section-container" id="about">
					<div className="section-content">
						<h2 className="section-heading">Me.</h2>
						<p>
							I’ve been building things my whole life, from Lego castles as a kid to full-stack applications today. I still chase that same satisfaction I felt back then, the moment when everything
							clicks into place and just works. That spark for creating and problem-solving still drives everything I do.
						</p>
						<p>
							With over 11 years in full-stack development, I’ve honed enterprise Java/J2EE, ventured into modern front-end with React and Node.js, and explored the exciting world of AI/ML using
							Python, TensorFlow, Keras, and Scikit-learn.
						</p>
						<p>
							I’m curious by nature, collaborative by choice, and happiest when I’m learning something new. Whether it’s building a feature, training a model, or brainstorming with a team, I’m always
							looking for the next meaningful challenge.
						</p>
					</div>
				</section>

				{/* Skills */}
				<section className="section-container" id="skills">
					<div className="section-content">
						<h2 className="section-heading">Skills.</h2>
						<div className="skills-list">
							<div className="skill-category">
								<h3 className="skill-heading">Proficient</h3>
								<p>Java, JavaScript, Python, React, Node.js, Express.js, Spring, Hibernate, MySQL, Oracle, RESTful APIs, Git</p>
							</div>
							<div className="skill-category">
								<h3 className="skill-heading">Knowledgeable</h3>
								<p>
									TensorFlow, Keras, Scikit-learn, PyTorch, Hugging Face, Pandas, NumPy, Deep Learning, Natural Language Processing, Computer Vision, Reinforcement Learning, Prompt Engineering, Data
									Preprocessing, Feature Engineering, Model Deployment
								</p>
							</div>
							<div className="skill-category">
								<h3 className="skill-heading">Familiar</h3>
								<p>Selenium, Robot Framework, OAuth, JWT, Heroku</p>
							</div>
						</div>
					</div>
				</section>

				{/* Projects */}
				<section id="Projects"></section>

				{/* Resume */}
				<section id="Resume"></section>
			</main>
		</>
	);
}

export default Home;
