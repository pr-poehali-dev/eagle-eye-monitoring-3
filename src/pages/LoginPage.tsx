import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Lock, Eye, EyeOff } from "lucide-react"

const FAMILY_PASSWORD = "семья2024"

interface LoginPageProps {
  onLogin: () => void
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === FAMILY_PASSWORD) {
      localStorage.setItem("family_auth", "true")
      onLogin()
    } else {
      setError(true)
      setPassword("")
    }
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10 border border-violet-500/20">
            <Lock className="h-7 w-7 text-violet-400" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Семейный маркетплейс</h1>
          <p className="text-sm text-gray-400">Только для членов семьи. Введите пароль для входа.</p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl bg-[#141414] border border-[#262626] p-6 space-y-4">
          <div>
            <label className="mb-2 block text-xs text-gray-400">Пароль</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(false) }}
                placeholder="Введите семейный пароль"
                className={`w-full rounded-lg bg-[#0f0f0f] border px-3 py-2.5 text-sm text-white placeholder-gray-600 outline-none pr-10 transition-colors ${
                  error ? "border-red-500" : "border-[#262626] focus:border-violet-500"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {error && <p className="mt-1.5 text-xs text-red-400">Неверный пароль. Попробуйте ещё раз.</p>}
          </div>

          <Button type="submit" className="w-full rounded-lg bg-violet-600 hover:bg-violet-700 text-white">
            Войти
          </Button>
        </form>

        <p className="mt-4 text-center text-xs text-gray-600">
          Доступ только для: Папа, Мама и Я
        </p>
      </div>
    </main>
  )
}
