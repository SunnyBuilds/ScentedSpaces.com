import { ProductCard } from "@/components/product-card"
import Image from "next/image"
import { getPostBySlug, getAllPosts } from "@/lib/api"
import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  // Format date for display
  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : ""

  return (
    <div className="min-h-screen bg-slate-950 py-12">
      <article className="container mx-auto px-4">
        {/* Article Header */}
        <div className="mx-auto mb-12 max-w-4xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full bg-blue-500 px-3 py-1 text-xs font-mono font-semibold text-white">NEWS</span>
            {formattedDate && (
              <time className="text-sm font-mono text-slate-500" dateTime={post.date}>
                {formattedDate}
              </time>
            )}
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl">{post.title}</h1>

          {post.description && <p className="text-xl text-slate-400">{post.description}</p>}
        </div>

        {/* Main Content Grid */}
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {/* Main Article Content */}
          <div className="md:col-span-2 space-y-6">
            <div className="prose prose-invert prose-slate max-w-none space-y-6">
              <MDXRemote source={post.content} />
            </div>
          </div>

          {/* Sticky Sidebar */}
          <aside className="md:col-span-1">
            <div className="sticky top-20 space-y-6">
              <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-slate-400">Featured Product</h3>
                <ProductCard
                  image="/ai-smartphone.jpg"
                  title="Google Pixel 9 Pro"
                  rating={5}
                  specs={["Tensor G4 AI Chip", "12GB RAM", "50MP AI Camera", "Gemini AI Built-in"]}
                  compact={true}
                />
              </div>

              <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-slate-400">Related Topics</h3>
                <ul className="space-y-3">
                  {["Machine Learning", "Neural Networks", "On-Device AI", "Smart Home Tech"].map((topic) => (
                    <li key={topic}>
                      <a href="#" className="text-sm text-slate-400 transition-colors hover:text-blue-400">
                        # {topic}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </div>
  )
}
