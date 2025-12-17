import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 py-12">
      <div className="container mx-auto max-w-2xl px-4">
        <h1 className="mb-8 text-4xl font-bold text-white md:text-5xl">Contact Us</h1>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-300">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              placeholder="How can we help?"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              className="w-full rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              placeholder="Your message..."
            />
          </div>

          <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 py-6 text-lg font-semibold text-slate-950 hover:from-cyan-400 hover:to-blue-400">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  )
}
