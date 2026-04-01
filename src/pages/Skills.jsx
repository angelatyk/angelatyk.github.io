function Skills({ skillsRef }) {
  return (
    <section className="section-container" id="skills" ref={skillsRef}>
      <div className="section-content">
        <h2 className="section-heading">Skills.</h2>
        <div className="skills-list">
          <div className="skill-category">
            <h3 className="skill-heading">Proficient</h3>
            <p>
              <span className="skill-subheading">Languages</span> Java,
              JavaScript/TypeScript, Python
            </p>
            <p>
              <span className="skill-subheading">Frontend</span> React, Next.js,
              Vite, Vue.js, HTML5, CSS3
            </p>
            <p>
              <span className="skill-subheading">Backend</span> Node.js,
              Express.js, FastAPI, Spring, Hibernate, RESTful APIs, Git
            </p>
            <p>
              <span className="skill-subheading">Data</span> MySQL, Oracle,
              NoSQL (Firestore, MongoDB), Prisma, Supabase
            </p>
          </div>

          <div className="skill-category">
            <h3 className="skill-heading">Knowledgeable</h3>
            <p>
              <span className="skill-subheading">AI / LLMs</span> Generative AI
              (LLMs, Fine-tuning), Agentic AI, Multi-Agent Orchestration,
              Retrieval-Augmented Generation (RAG), Prompt Engineering, LLM
              Evaluation
            </p>
            <p>
              <span className="skill-subheading">ML</span> Deep Learning, NLP,
              Semantic Search, Computer Vision, Reinforcement Learning,
              Supervised & Unsupervised Learning, Time Series Analysis, Data
              Preprocessing, Feature Engineering, Vector Embeddings, Model
              Deployment, Structured Output Validation, AI Guardrails
            </p>
            <p>
              <span className="skill-subheading">Libraries</span> PyTorch,
              TensorFlow, Hugging Face Transformers, LangChain, OpenAI API,
              Scikit-learn, Pandas, NumPy, Keras, Pinecone, GCP, Vertex AI
            </p>
          </div>

          <div className="skill-category">
            <h3 className="skill-heading">Familiar</h3>
            <p>
              <span className="skill-subheading">Tools</span> Docker, Postman,
              Heroku, Vercel, Selenium, Robot Framework, OAuth / JWT
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
