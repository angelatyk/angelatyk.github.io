function Skills({ skillsRef }) {
	return (
		<section className="section-container" id="skills" ref={skillsRef}>
			<div className="section-content">
				<h2 className="section-heading">Skills.</h2>
				<div className="skills-list">
					<div className="skill-category">
						<h3 className="skill-heading">Proficient</h3>
						<p>Java, JavaScript/TypeScript, Python, React, Next.js, Node.js, Express.js, Spring, Hibernate, Prisma, MySQL, Oracle, RESTful APIs, Git, HTML5, CSS3</p>
					</div>
					<div className="skill-category">
						<h3 className="skill-heading">Knowledgeable</h3>
						<p>
							Pandas, NumPy, Scikit-learn, TensorFlow, Keras, PyTorch, Hugging Face, Deep Learning, Natural Language Processing (NLP), Large Language Models (LLMs), Generative AI, Prompt Engineering,
							Computer Vision, Reinforcement Learning, Model Deployment
						</p>
					</div>
					<div className="skill-category">
						<h3 className="skill-heading">Familiar</h3>
						<p>Selenium, Robot Framework, OAuth / JWT, Heroku</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Skills;
