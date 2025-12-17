import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ProductCardProps {
  image: string
  title: string
  rating: number
  specs: string[]
  compact?: boolean
}

export function ProductCard({ image, title, rating, specs, compact = false }: ProductCardProps) {
  return (
    <div className="group h-fit overflow-hidden rounded-lg border border-border bg-card/50 backdrop-blur transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>

      <div className="p-4 space-y-3">
        <h3 className={`font-semibold text-foreground ${compact ? "text-sm" : "text-base"}`}>{title}</h3>

        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-accent text-accent" : "text-muted"}`} />
          ))}
          <span className="ml-2 text-sm text-muted-foreground">{rating}.0</span>
        </div>

        <div className="space-y-1">
          <p className="text-xs font-mono text-muted-foreground">Quick Specs:</p>
          <ul className="space-y-1">
            {specs.map((spec, i) => (
              <li key={i} className="text-xs font-mono text-muted-foreground">
                • {spec}
              </li>
            ))}
          </ul>
        </div>

        <Button className="w-full bg-gradient-to-r from-accent to-primary font-semibold text-primary-foreground hover:opacity-90">
          Check Latest Price
        </Button>
      </div>
    </div>
  )
}
