import { ShoppingBag, Heart, Star, Package, Shirt, BookOpen, Bike } from "lucide-react"

const categories = [
  { name: "Одежда", icon: Shirt },
  { name: "Книги", icon: BookOpen },
  { name: "Техника", icon: Package },
  { name: "Спорт", icon: Bike },
  { name: "Любимое", icon: Heart },
  { name: "Новинки", icon: Star },
  { name: "Все товары", icon: ShoppingBag },
]

export function PartnersSection() {
  return (
    <section className="flex flex-wrap items-center justify-center gap-6 md:gap-10 px-4 py-8">
      {categories.map((cat) => (
        <div key={cat.name} className="flex items-center gap-2 text-gray-500 hover:text-violet-400 transition-colors cursor-pointer">
          <cat.icon className="h-4 w-4" />
          <span className="text-sm font-medium">{cat.name}</span>
        </div>
      ))}
    </section>
  )
}