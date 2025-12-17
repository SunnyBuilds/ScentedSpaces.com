import Link from "next/link"
import Image from "next/image"

interface ArticleCardProps {
  slug: string
  image: string
  title: string
  excerpt: string
  date: string
  category: string
}

export function ArticleCard({ slug, image, title, excerpt, date, category }: ArticleCardProps) {
  return (
    <Link href={`/news/${slug}`}>
      <article className="group overflow-hidden rounded-lg border border-border bg-card/30 backdrop-blur transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <span className="rounded-full bg-primary/90 px-3 py-1 text-xs font-mono font-semibold text-primary-foreground">
              {category}
            </span>
          </div>
        </div>

        <div className="p-5 space-y-3">
          <time className="text-xs font-mono text-muted-foreground">{date}</time>
          <h3 className="text-lg font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{excerpt}</p>
        </div>
      </article>
    </Link>
  )
}
