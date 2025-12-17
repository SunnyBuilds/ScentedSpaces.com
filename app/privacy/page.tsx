export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-950 py-12">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="mb-8 text-4xl font-bold text-white md:text-5xl">Privacy Policy</h1>

        <div className="space-y-6 leading-relaxed text-slate-300">
          <p className="text-sm text-slate-500">Last updated: January 15, 2025</p>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">Information We Collect</h2>
            <p>
              TechNova collects minimal personal information necessary to provide our services. This includes email
              addresses for newsletter subscriptions and basic analytics data to improve user experience.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">How We Use Your Information</h2>
            <p>
              We use collected information to send newsletter updates, analyze site traffic patterns, and improve our
              content. We never sell personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">Cookies</h2>
            <p>
              We use essential cookies for site functionality and analytics cookies to understand how visitors use our
              site. You can control cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">Third-Party Services</h2>
            <p>
              Our site includes links to Amazon and other retailers through affiliate programs. These services have
              their own privacy policies which govern their data collection practices.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">Contact</h2>
            <p>For privacy-related questions, please contact us through our contact form.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
