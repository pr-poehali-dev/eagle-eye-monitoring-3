import { Users, ArrowUpRight, Plus } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const members = [
  { name: "Папа", info: "Добавил 3 товара", initials: "П", color: "bg-blue-600" },
  { name: "Мама", info: "Добавила 5 товаров", initials: "М", color: "bg-pink-600" },
  { name: "Я", info: "Добавил 2 товара", initials: "Я", color: "bg-violet-600" },
]

export function LinkAccountsCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <Users className="h-5 w-5 text-gray-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Члены семьи</h3>
      <p className="mb-4 text-sm text-gray-400">Только близкие имеют доступ к маркетплейсу — никаких посторонних</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Подробнее <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-2 rounded-xl bg-[#1a1a1a] border border-[#262626] p-3">
        {members.map((member, index) => (
          <div key={index} className="flex items-center justify-between rounded-lg bg-[#0f0f0f] px-3 py-2">
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9">
                <AvatarFallback className={`${member.color} text-white text-xs`}>
                  {member.initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-white">{member.name}</p>
                <p className="text-xs text-gray-500">{member.info}</p>
              </div>
            </div>
            <span className="text-xs text-violet-400">Активен</span>
          </div>
        ))}

        <Button
          variant="ghost"
          className="w-full justify-center text-gray-500 hover:text-white hover:bg-[#1f1f1f] mt-2"
        >
          <Plus className="mr-2 h-4 w-4" /> Добавить члена семьи
        </Button>
      </div>
    </div>
  )
}