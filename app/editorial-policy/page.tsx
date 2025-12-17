export default function EditorialPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-950 py-12">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="mb-8 text-4xl font-bold text-white md:text-5xl">Editorial Policy</h1>

        <div className="space-y-6 leading-relaxed text-slate-300">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">Independence</h2>
            <p>
              Our editorial team maintains complete independence from commercial relationships. Reviews are never
              influenced by advertisers, manufacturers, or affiliate programs.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">Testing Standards</h2>
            <p>
              Every product undergoes standardized testing protocols including benchmark tests, real-world usage
              scenarios, and quality control assessments. Testing periods typically span 2-4 weeks.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">Objectivity</h2>
            <p>
              We use measurable criteria and data-driven analysis. Subjective opinions are clearly labeled, and multiple
              team members review products to minimize bias.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">Corrections</h2>
            <p>
              We promptly correct errors when identified. Significant corrections are noted at the top of articles with
              timestamps.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">Product Sourcing</h2>
            <p>
              Most products are purchased at retail to ensure we test the same units consumers receive. Review units are
              returned to manufacturers after testing.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
