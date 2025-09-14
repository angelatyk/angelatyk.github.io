function Skills({ skillsRef }) {
	return (
		<section className="section-container" id="skills" ref={skillsRef}>
			<div className="section-content">
				<h2 className="section-heading">Skills.</h2>
				<div className="skills-list">
					<div className="skill-category">
						<h3 className="skill-heading">Proficient</h3>
						<p>Java, Javascript/Typescript, Python, React, Node.js, Express.js, Spring, Hibernate, MySQL, Oracle, RESTful APIs, Git</p>
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
	);
}

export default Skills;
