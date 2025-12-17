import { ProductCard } from "@/components/product-card"

export default function ReviewsPage() {
  const products = [
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
    {
      image: "/tablet-stylus.jpg",
      title: "iPad Pro M4 13-inch",
      rating: 5,
      specs: ["M4 Chip", "Tandem OLED", "Apple Pencil Pro", "2TB Storage"],
    },
    {
      image: "/mechanical-keyboard.png",
      title: "Keychron Q6 Pro",
      rating: 4,
      specs: ["QMK/VIA Support", "Hot-Swap PCB", "Aluminum Frame", "Wireless"],
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">Product Reviews</h1>
          <p className="text-lg text-slate-400">
            In-depth, objective reviews of the latest consumer electronics backed by rigorous testing
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <ProductCard key={i} {...product} />
          ))}
        </div>
      </div>
    </div>
  )
}
