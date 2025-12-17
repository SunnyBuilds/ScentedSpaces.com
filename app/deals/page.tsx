import { ProductCard } from "@/components/product-card"

export default function DealsPage() {
  const deals = [
    {
      image: "/wireless-earbuds.png",
      title: "Nothing Ear (2)",
      rating: 4,
      specs: ["Active ANC", "36hr Total Battery", "Hi-Res Audio", "Transparency"],
    },
    {
      image: "/gaming-monitor-setup.png",
      title: 'LG UltraGear 27" 4K',
      rating: 5,
      specs: ["144Hz Refresh", "1ms Response", "HDR10", "G-Sync Compatible"],
    },
    {
      image: "/portable-ssd.jpg",
      title: "Samsung T9 Portable SSD",
      rating: 5,
      specs: ["2TB Capacity", "USB 3.2 Gen 2x2", "2000MB/s Read", "Shock Resistant"],
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">Best Deals</h1>
          <p className="text-lg text-slate-400">
            Hand-picked deals on quality tech products we've tested and recommend
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {deals.map((product, i) => (
            <ProductCard key={i} {...product} />
          ))}
        </div>
      </div>
    </div>
  )
}
