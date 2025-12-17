"use client"

import { ArticleCard } from "@/components/article-card"
import { useState } from "react"

export default function NewsPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const categories = ["All", "AI", "Mobile", "Gaming", "VR"]

  const articles = [
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
    {
      slug: "vr-headset-comparison",
      image: "/vr-headset-virtual-reality.jpg",
      title: "VR Headset Showdown: Meta Quest 4 vs Apple Vision Pro 2",
      excerpt: "Which premium VR headset offers the best experience for gaming and productivity?",
      date: "2025-01-08",
      category: "VR",
    },
    {
      slug: "ai-writing-assistants",
      image: "/ai-assistant-writing.jpg",
      title: "AI Writing Assistants: Are They Worth the Subscription?",
      excerpt: "Testing the top AI writing tools to see if they live up to the hype.",
      date: "2025-01-05",
      category: "AI",
    },
    {
      slug: "foldable-phones-2025",
      image: "/foldable-smartphone.png",
      title: "Foldable Phones in 2025: Finally Ready for Mainstream?",
      excerpt: "Examining the durability improvements and real-world usability of the latest foldables.",
      date: "2025-01-03",
      category: "Mobile",
    },
  ]

  const filteredArticles =
    activeFilter === "All" ? articles : articles.filter((article) => article.category === activeFilter)

  return (
    <div className="min-h-screen bg-slate-950 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">Tech News</h1>
          <p className="text-lg text-slate-400">
            Breaking news, industry analysis, and expert commentary on the latest in technology
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`rounded-full px-4 py-2 text-sm font-mono font-semibold transition-all ${
                activeFilter === category
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                  : "border border-slate-700 bg-slate-900/50 text-slate-400 hover:border-blue-500 hover:text-blue-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.slug} {...article} />
          ))}
        </div>
      </div>
    </div>
  )
}
