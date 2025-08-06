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
				<div className="logo">AK.</div>

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
					<div className="hero-content">
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
							<a href="mailto:angelatyk@gmail.com">
								<Mail />
							</a>
							<a href="https://github.com/angelatyk" aria-label="GitHub">
								<SiGithub size={24} />
							</a>
							<a href="https://linkedin.com/in/angelatyk" aria-label="LinkedIn">
								<SiLinkedin size={24} />
							</a>
						</div>
					</div>
				</section>

				{/* About */}
				<section id="about">
					<h2>Me.</h2>
					<p>
						I’ve always loved building things, from Legos as a kid to full-stack applications today. That early love for tinkering and problem-solving naturally led me into tech, where I still get the
						same satisfaction every time everything clicks into place and just works.
					</p>
					<p>
						I’ve been a full-stack developer for over 11 years, mostly working with Java and J2EE on the enterprise side, but I’ve never stopped learning. Lately, I’ve been diving deeper into
						front-end development with React and Node.js, and exploring the AI/ML space using Python, TensorFlow, Keras, and Scikit-learn. I love the balance of creativity and logic that this work
						brings.
					</p>
					<p>
						I’m a curious person by nature, which keeps me exploring new ideas and tools. I also really enjoy collaboration, whether that’s pairing on code, brainstorming ideas, or playing team games.
						Working toward a shared goal with others is something I genuinely enjoy, both in and out of work.
					</p>
					<p>I’m always learning, always building, and always on the lookout for the next meaningful challenge to take on.</p>
				</section>

				{/* Skills */}
				<section id="skills">
					<h2>Skills</h2>
					<p>Proficient: Java, JavaScript, Python, React, Node.js, Express.js, Spring, Hibernate, MySQL, Oracle, RESTful APIs, Git</p>
					<p>
						Knowledgeable: TensorFlow, Keras, Scikit-learn, PyTorch, Hugging Face, Pandas, NumPy, Prompt Engineering, Model Deployment, Data Preprocessing, Feature Engineering, Deep Learning, Natural
						Language Processing, Computer Vision
					</p>
					<p>Familiar: Selenium, Robot Framework, OAuth, JWT, Heroku</p>
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
