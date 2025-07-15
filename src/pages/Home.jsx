import { Typewriter } from "react-simple-typewriter";

function Home() {
	return (
		<>
			{/* Navigation */}
			<nav>
				<ul>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#skills">Skills</a>
					</li>
					<li>
						<a href="#projects">Projects</a>
					</li>
					<li>
						<a href="#resume">Resume</a>
					</li>
				</ul>
			</nav>

			{/* Mobile Menu */}
			{
				<ul>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#skills">Skills</a>
					</li>
					<li>
						<a href="#projects">Projects</a>
					</li>
					<li>
						<a href="#resume">Resume</a>
					</li>
				</ul>
			}

			<main>
				<section>
					{/* Hero */}
					<div>
						<h1>Hello, I am Angela Kwok</h1>
						I am a <Typewriter words={["Software Engineer", "Full-Stack Developer", "AI/ML Engineer"]} loop={true} cursor cursorStyle="_" typeSpeed={70} deleteSpeed={50} delaySpeed={1500} />
						<p>Solving Real-World Problems with AI and Web Technologies</p>
						<div>
							<a href="mailto:angelatyk@gmail.com">
								<Mail />
							</a>
							<a href="https://github.com/angelatyk">
								<Github />
							</a>
							<a href="https://linkedin.com/in/angelatyk">
								<Linkedin />
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
