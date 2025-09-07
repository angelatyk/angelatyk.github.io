import EmailHover from "../components/EmailHover";
import LinkButton from "../components/LinkButton";

function ContactCTA({ contactRef }) {
	return (
		<section className="contact-section" id="contact" ref={contactRef}>
			<div className="contact-card">
				<h2 className="contact-heading">
					Let’s build something great <span className="text-gradient">together.</span>
				</h2>
				<p className="contact-subtext">If you’ve got a project in mind or just want to connect, I’d love to hear from you.</p>
				<EmailHover>
					<LinkButton href="mailto:angelatyk@gmail.com" label="Say Hello →" />
				</EmailHover>
			</div>
		</section>
	);
}

export default ContactCTA;
