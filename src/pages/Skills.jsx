function Skills({ skillsRef }) {
	return (
		<section className="section-container" id="skills" ref={skillsRef}>
			<div className="section-content">
				<h2 className="section-heading">Skills.</h2>
				<div className="skills-list">
					<div className="skill-category">
						<h3 className="skill-heading">Proficient</h3>
						<p>
							Java, JavaScript/TypeScript, Python, React, Next.js, Node.js, Express.js, FastAPI, Vite, Spring, Hibernate, Prisma, Supabase, MySQL, Oracle, RESTful APIs, Git, HTML5, CSS3
						</p>
					</div>
					<div className="skill-category">
						<h3 className="skill-heading">Knowledgeable</h3>
						<p>
							Generative AI (LLMs, Fine-tuning), Agentic AI, Retrieval-Augmented Generation (RAG), Prompt Engineering, LLM Evaluation, Large Language Models (LLMs), Natural Language
							Processing (NLP), Semantic Search, Deep Learning, Data Preprocessing, Feature Engineering, Vector Embeddings, Model Deployment, Structured Output Validation, Safety
							Constraints, Computer Vision, Reinforcement Learning, Supervised & Unsupervised Learning, Time Series Analysis, PyTorch, TensorFlow, Hugging Face Transformers, LangChain,
							OpenAI API, Scikit-learn, Pandas, NumPy, Keras, Pinecone, GCP, Vertex AI
						</p>
					</div>
					<div className="skill-category">
						<h3 className="skill-heading">Familiar</h3>
						<p>Selenium, Robot Framework, OAuth / JWT, Heroku, Vercel</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Skills;
