function ContactCTA({ contactRef }) {
	return (
		<section className="contact-section" id="contact" ref={contactRef}>
			<div className="contact-card">
				<h2 className="contact-heading">
					Let’s build something great <span className="text-gradient">together.</span>
				</h2>
				<p className="contact-subtext">If you’ve got a project in mind or just want to connect, I’d love to hear from you.</p>
				<a href="mailto:angelatyk@gmail.com" aria-label="Send email to Angela" className="contact-link">
					<span className="contact-link-text">Say Hello →</span>
					<div className="contact-link-animation"></div>
				</a>
			</div>
		</section>
	);
}

export default ContactCTA;
