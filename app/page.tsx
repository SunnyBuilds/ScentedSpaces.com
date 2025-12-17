import { ArticleCard } from "@/components/article-card"
import { ProductCard } from "@/components/product-card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HomePage() {
  const latestNews = [
    {
      slug: "ai-revolution-2025",
      image: "/ai-futuristic-city.png",
      title: "The AI Revolution: How Machine Learning is Transforming Consumer Tech in 2025",
      excerpt: "An in-depth look at the latest AI advancements and their impact on everyday devices.",
      date: "2025-01-15",
      category: "AI",
    },
    {
      slug: "gaming-laptops-guide",
      image: "/gaming-laptop-rgb-lights.jpg",
      title: "Best Gaming Laptops of 2025: Performance Meets Portability",
      excerpt: "Our comprehensive guide to the top gaming laptops that deliver desktop-class performance.",
      date: "2025-01-12",
      category: "Gaming",
    },
    {
      slug: "smartphone-camera-tech",
      image: "/smartphone-camera-technology.jpg",
      title: "Smartphone Camera Technology: The Race to 200MP and Beyond",
      excerpt: "Exploring the latest sensor technology and computational photography breakthroughs.",
      date: "2025-01-10",
      category: "Mobile",
    },
  ]

  const trendingReviews = [
    {
      image: "/laptop-gaming-setup.jpg",
      title: "ASUS ROG Zephyrus G16",
      rating: 5,
      specs: ["Intel Core i9-14900H", "RTX 4090 16GB", "32GB DDR5", "240Hz OLED"],
    },
    {
      image: "/wireless-headphones.png",
      title: "Sony WH-1000XM6",
      rating: 5,
      specs: ["Active ANC", "40hr Battery", "LDAC Support", "Multipoint"],
    },
    {
      image: "/smartphone-flagship.jpg",
      title: "Samsung Galaxy S25 Ultra",
      rating: 4,
      specs: ["Snapdragon 8 Gen 4", "200MP Camera", "12GB RAM", "5000mAh"],
    },
    {
      image: "/smartwatch-lifestyle.png",
      title: "Apple Watch Series 10",
      rating: 5,
      specs: ["S10 Chip", "Blood Glucose", "3-Day Battery", "Titanium"],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-card to-background">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container relative mx-auto px-4 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-6xl">
              Honest Tech Reviews, Data-Driven Analysis
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Deep dive into the latest consumer electronics with objective testing, comprehensive benchmarks, and
              expert insights.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/reviews"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:opacity-90"
              >
                Browse Reviews
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/news"
                className="inline-flex items-center gap-2 rounded-lg border border-primary bg-primary/10 px-6 py-3 font-semibold text-primary transition-all hover:bg-primary/20"
              >
                Latest News
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Tech News Section */}
      <section className="border-b border-border bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Latest Tech News</h2>
              <p className="mt-2 text-muted-foreground">Stay updated with breaking news and industry insights</p>
            </div>
            <Link href="/news" className="flex items-center gap-2 text-primary transition-colors hover:text-accent">
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latestNews.map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Reviews */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground">Trending Reviews</h2>
            <p className="mt-2 text-muted-foreground">Top-rated gadgets tested by our team</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trendingReviews.map((product, i) => (
              <ProductCard key={i} {...product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
