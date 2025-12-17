import { ArticleCard } from "@/components/article-card"
import { getAllPosts } from "@/lib/api"

export default function BlogPage() {
  const posts = getAllPosts()

  // Convert Post to ArticleCard format
  const articles = posts.map((post) => ({
    slug: post.slug,
    image: "/placeholder.jpg", // Default placeholder image
    title: post.title,
    excerpt: post.description,
    date: post.date
      ? new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "",
    category: "Blog",
  }))

  return (
    <div className="min-h-screen bg-slate-950 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">Blog</h1>
          <p className="text-lg text-slate-400">
            Read our latest articles, insights, and thoughts on technology and innovation
          </p>
        </div>

        {/* Articles Grid */}
        {articles.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-12 text-center">
            <p className="text-lg text-slate-400">No blog posts yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  )
}

