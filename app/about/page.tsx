export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 py-12">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="mb-8 text-4xl font-bold text-white md:text-5xl">About TechNova</h1>

        <div className="space-y-6 text-lg leading-relaxed text-slate-300">
          <p>
            TechNova was founded with a simple mission: provide honest, data-driven reviews of consumer electronics
            without the marketing fluff.
          </p>

          <p>
            In an industry filled with sponsored content and affiliate-driven recommendations, we believe consumers
            deserve objective analysis backed by rigorous testing and real-world usage.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-white">Our Testing Process</h2>
          <p>
            Every product we review undergoes weeks of real-world testing. We use standardized benchmarks, measure
            battery life under controlled conditions, and evaluate build quality with precision instruments.
          </p>

          <p>
            Our team includes engineers, photographers, gamers, and everyday tech users who bring diverse perspectives
            to each review.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-white">Editorial Independence</h2>
          <p>
            While we participate in affiliate programs to support our work, these relationships never influence our
            editorial decisions. Products are rated solely on their merits.
          </p>

          <p>
            We purchase most products with our own funds and return review units to manufacturers to maintain complete
            independence.
          </p>
        </div>
      </div>
    </div>
  )
}
