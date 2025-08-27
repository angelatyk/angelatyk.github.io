function About({ aboutRef }) {
	const fulltimeStartDate = new Date(2014, 0, 13); // January 13, 2014
	const today = new Date();

	let yearsOfExperience = today.getFullYear() - fulltimeStartDate.getFullYear();

	if (today.getMonth() < fulltimeStartDate.getMonth() || (today.getMonth() === fulltimeStartDate.getMonth() && today.getDate() < fulltimeStartDate.getDate())) {
		yearsOfExperience--;
	}

	return (
		<section className="section-container" id="about" ref={aboutRef}>
			<div className="section-content">
				<h2 className="section-heading">Me.</h2>
				<p>
					I’ve been building things my whole life, from Lego castles as a kid to full-stack applications today. I still chase that same satisfaction I felt back then, the moment when everything clicks
					into place and just works. That spark for creating and problem-solving still drives everything I do.
				</p>
				<p>
					With over {yearsOfExperience} years in full-stack development, I’ve honed my expertise in enterprise Java and J2EE technologies, ventured into modern front-end with React and Node.js, and
					explored the exciting world of AI and machine learning through Python, TensorFlow, Keras, and Scikit-learn.
				</p>
				<p>
					I’m curious by nature, collaborative by choice, and happiest when I’m learning something new. Whether it’s building a feature, training a model, or brainstorming with a team, I’m always
					looking for the next meaningful challenge.
				</p>
			</div>
		</section>
	);
}

export default About;
