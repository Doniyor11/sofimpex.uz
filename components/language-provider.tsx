"use client"

import { type ReactNode, useEffect } from "react"
import { useLanguageStore } from "@/lib/hooks/use-translations"

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const { setLanguage } = useLanguageStore()

  // Initialize language from localStorage on component mount
  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage")
    if (storedLanguage) {
      setLanguage(storedLanguage)
    }
  }, [setLanguage])

  return <>{children}</>
}

