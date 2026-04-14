import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4">
      <div className="flex items-center gap-2">
        <FamilyLogo />
        <span className="text-lg font-semibold text-white">
          Семья<sup className="text-xs">™</sup>
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Каталог
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Объявления
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Члены семьи
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Контакты
        </a>
      </nav>

      <Button
        variant="outline"
        className="rounded-full border-violet-500 text-violet-400 hover:bg-violet-500/10 hover:text-violet-300 bg-transparent"
      >
        Войти
      </Button>
    </header>
  )
}

function FamilyLogo() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="7" r="3" fill="#8B5CF6" />
      <circle cx="6" cy="14" r="2.5" fill="#8B5CF6" opacity="0.7" />
      <circle cx="18" cy="14" r="2.5" fill="#8B5CF6" opacity="0.7" />
      <path d="M9 19c0-1.657 1.343-3 3-3s3 1.343 3 3" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    </svg>
  )
}