import { FaArrowRight, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

const Contact = ({ contactSectionRef }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = form.get("subject");
    const body = `Name: ${form.get("name")}\nEmail: ${form.get("email")}\n\n${form.get("message")}`;
    window.location.href = `mailto:inalmendonca2@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section ref={contactSectionRef} id="contact" className="contact-section relative overflow-hidden bg-black px-4 py-20 text-white sm:px-6 sm:py-24">
      <div className="contact-glow contact-glow-one" />
      <div className="contact-glow contact-glow-two" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <header className="mb-10 max-w-3xl sm:mb-14">
          <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">Let&apos;s connect</p>
          <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Have an idea? Let&apos;s build something <span className="text-cyan-400">great.</span></h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">I&apos;m open to junior software developer opportunities, collaborations, and conversations about useful products.</p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
          <aside className="contact-panel flex flex-col justify-between p-6 sm:p-8">
            <div>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-xl text-cyan-400 ring-1 ring-cyan-400/20"><FaEnvelope /></span>
              <h3 className="mt-7 text-2xl font-semibold">Contact details</h3>
              <p className="mt-3 leading-7 text-slate-400">Send a message directly or reach me through one of the links below.</p>

              <div className="mt-8 space-y-4">
                <a href="mailto:inalmendonca2@gmail.com" className="contact-detail"><FaEnvelope /><span><small>Email</small>inalmendonca2@gmail.com</span></a>
                <div className="contact-detail"><FaMapMarkerAlt /><span><small>Location</small>Dubai, UAE</span></div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href="https://github.com/INAL357" target="_blank" rel="noopener noreferrer" className="contact-social"><FaGithub /> GitHub</a>
              <a href="https://www.linkedin.com/in/inal-mendonca-a9b9a235a/" target="_blank" rel="noopener noreferrer" className="contact-social"><FaLinkedin /> LinkedIn</a>
            </div>
          </aside>

          <div className="contact-panel p-6 sm:p-8 lg:p-10">
            <div className="mb-7 flex items-center justify-between gap-4">
              <div><p className="font-mono text-xs text-cyan-400">message.tsx</p><h3 className="mt-1 text-2xl font-semibold">Send a message</h3></div>
              <span className="hidden items-center gap-2 text-xs text-slate-500 sm:flex"><i className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" /> Available</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="contact-field">Name<input name="name" type="text" required autoComplete="name" placeholder="Your name" /></label>
                <label className="contact-field">Email<input name="email" type="email" required autoComplete="email" placeholder="you@example.com" /></label>
              </div>
              <label className="contact-field">Subject<input name="subject" type="text" required placeholder="Project or opportunity" /></label>
              <label className="contact-field">Message<textarea name="message" required rows="6" placeholder="Tell me a little about what you have in mind..." /></label>
              <button type="submit" className="contact-submit">Send message <FaArrowRight /></button>
            </form>
          </div>
        </div>

        <footer className="mt-10 flex flex-col gap-2 border-t border-slate-800 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span><b className="text-cyan-400">&lt;I/&gt;</b> Inal Mendonca</span><span>Built with React &amp; Tailwind CSS</span>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
