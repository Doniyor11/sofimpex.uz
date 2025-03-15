"use client"
import { Check, ChevronDown, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguageStore } from "@/lib/hooks/use-translations"

type Language = {
  code: string
  name: string
  nativeName: string
}

const languages: Language[] = [
  { code: "ru", name: "Russian", nativeName: "Русский" },
  { code: "uz", name: "Uzbek", nativeName: "O'zbekcha" },
]

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguageStore()
  const currentLanguage = languages.find((lang) => lang.code === language) || languages[0]

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang.code)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1.5 text-sm font-medium focus:outline-none">
        <Globe className="h-4 w-4" />
        <span>{currentLanguage.nativeName}</span>
        <ChevronDown className="h-3.5 w-3.5 opacity-70" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className="flex items-center justify-between cursor-pointer"
            onClick={() => handleLanguageChange(lang)}
          >
            <span>{lang.nativeName}</span>
            {currentLanguage.code === lang.code && <Check className="h-4 w-4 text-blue-600" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

