import { Heart, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import FloatingContactBar from "../components/FloatingContactBar";
import NavLink from "../components/NavLink";
import About from "../pages/About";
import ContactCTA from "../pages/ContactCTA";
import Hero from "../pages/Hero";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";

function Home() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [showFloatingBar, setShowFloatingBar] = useState(false);
	const [isAtBottom, setIsAtBottom] = useState(false);

	const heroRef = useRef(null);
	const aboutRef = useRef(null);
	const skillsRef = useRef(null);
	const projectsRef = useRef(null);
	const contactRef = useRef(null);
	const sectionRefs = [aboutRef, skillsRef, projectsRef, contactRef];

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
		const heroObserver = new IntersectionObserver(
			([entry]) => {
				setShowFloatingBar(!entry.isIntersecting);
			},
			{ threshold: window.innerWidth <= 768 ? 0.5 : 0.9 }
		);

		if (heroRef.current) {
			heroObserver.observe(heroRef.current);
		}

		// only show scroll icon when contact CTA section not visible
		const contactObserver = new IntersectionObserver(
			([entry]) => {
				setIsAtBottom(entry.isIntersecting);

				if (entry.isIntersecting) {
					// scroll all the way to the bottom smoothly to show footer
					window.scrollTo({
						top: document.body.scrollHeight,
						behavior: "smooth",
					});
				}
			},
			{ threshold: 0.1 }
		);

		if (contactRef.current) {
			contactObserver.observe(contactRef.current);
		}

		// cleanup observers when the component unmounts
		return () => {
			if (heroRef.current) {
				heroObserver.unobserve(heroRef.current);
			}
			if (contactRef.current) {
				contactObserver.unobserve(contactRef.current);
			}
		};
	}, []);

	const toggleDarkMode = () => {
		const newTheme = !isDarkMode ? "dark" : "light";
		document.documentElement.classList.toggle("dark", newTheme === "dark");
		localStorage.setItem("theme", newTheme);
		setIsDarkMode(!isDarkMode);
	};

	const scrollToNextSection = () => {
		let currentScroll = window.scrollY;
		let nextSectionRef = null;

		const isDesktop = window.innerWidth > 768;

		// scroll-mt-24 value is 6rem, which is 96px
		const scrollMarginOffset = isDesktop ? 96 : 0;

		// find the next section to scroll to
		for (let i = 0; i < sectionRefs.length; i++) {
			const ref = sectionRefs[i];
			if (ref.current && ref.current.offsetTop > currentScroll + scrollMarginOffset) {
				nextSectionRef = ref;
				break;
			}
		}

		// if a next section is found, scroll to it
		if (nextSectionRef) {
			window.scrollTo({
				// subtract the offset to account for scroll-mt-24
				top: nextSectionRef.current.offsetTop - scrollMarginOffset,
				behavior: "smooth",
			});
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
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
					<button onClick={toggleDarkMode} aria-label="Toggle dark mode" className="cursor-pointer">
						{isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
					</button>

					{/* Desktop Menu */}
					<ul className="nav-menu-desktop">
						<NavLink link="" label="Home" />
						<NavLink link="about" label="About" />
						<NavLink link="skills" label="Skills" />
						<NavLink link="projects" label="Projects" />
						<NavLink link="/Angela_Kwok_Resume.pdf" label="Resume" isExternal download className="btn-primary" />
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
					<NavLink link="" label="Home" onClick={() => setMenuOpen(false)} />
					<NavLink link="about" label="About" onClick={() => setMenuOpen(false)} />
					<NavLink link="skills" label="Skills" onClick={() => setMenuOpen(false)} />
					<NavLink link="projects" label="Projects" onClick={() => setMenuOpen(false)} />
					<NavLink link="/Angela_Kwok_Resume.pdf" label="Resume" isExternal download onClick={() => setMenuOpen(false)} />
				</ul>
			)}

			<main className={`container ${menuOpen ? "blurred-content" : ""}`}>
				<Hero heroRef={heroRef} />
				<About aboutRef={aboutRef} />
				<Skills skillsRef={skillsRef} />
				<Projects projectsRef={projectsRef} />
				<ContactCTA contactRef={contactRef} />
			</main>

			{/* Floating Contact Bar */}
			<FloatingContactBar className={showFloatingBar ? "visible-bar" : "hidden-bar"} />

			{/* Scroll Icon */}
			<div onClick={isAtBottom ? scrollToTop : scrollToNextSection} className={`arrows cursor-pointer ${isAtBottom ? "arrows-up" : ""}`} />

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
