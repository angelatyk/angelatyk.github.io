import { Heart, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import FloatingContactBar from "../components/FloatingContactBar";
import NavLink from "../components/NavLink";
import About from "../pages/About";
import ContactCTA from "../pages/ContactCTA";
import Hero from "../pages/Hero";
import Skills from "../pages/Skills";

function Home() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [showFloatingBar, setShowFloatingBar] = useState(false);

	const heroRef = useRef(null);

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

		// only show floating bar when hero section not visible
		const observer = new IntersectionObserver(
			([entry]) => {
				setShowFloatingBar(!entry.isIntersecting);
			},
			{ threshold: 0.5 }
		);

		if (heroRef.current) {
			observer.observe(heroRef.current);
		}

		return () => {
			if (heroRef.current) {
				observer.unobserve(heroRef.current);
			}
		};
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
				<a href="#" className="logo">
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
						<NavLink link="/Angela_Kwok_Resume.pdf" label="Resume" isExternal download className="btn-outline" />
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
					<NavLink link="/Angela_Kwok_Resume.pdf" label="Resume" isExternal download onClick={() => setMenuOpen(false)} />
				</ul>
			)}

			<main className="container">
				<Hero heroRef={heroRef} />
				<About />
				<Skills />
				{/* Projects */}
				<section id="Projects"></section>
				<ContactCTA />
			</main>

			{/* Floating Contact Bar */}
			<FloatingContactBar className={showFloatingBar ? "visible-bar" : "hidden-bar"} />

			<footer className="footer-container container">
				<div className="footer-content">
					<span>
						Made with <Heart className="inline text-red-500 w-4 h-4" /> by&nbsp;
						<a href="mailto:angelatyk@gmail.com" className="footer-email">
							Angela Kwok
						</a>
					</span>
				</div>
			</footer>
		</>
	);
}

export default Home;
