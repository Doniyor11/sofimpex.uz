"use client"

import { create } from "zustand"
import { translations } from "../translations"
import { useEffect } from "react"

type LanguageStore = {
  language: string
  setLanguage: (lang: string) => void
  t: (key: string) => string
}

// Create the store with an initial value that will be updated on the client
export const useLanguageStore = create<LanguageStore>((set, get) => ({
  language: "ru", // Default to Russian initially
  setLanguage: (lang: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedLanguage", lang)
    }
    set({ language: lang })
  },
  t: (key: string) => {
    const { language } = get()
    return translations[language]?.[key] || translations["ru"][key] || key
  },
}))

// Hook to use in components that handles initialization from localStorage
export function useLanguage() {
  const { language, setLanguage, t } = useLanguageStore()

  // Initialize language from localStorage on component mount
  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage")
    if (storedLanguage && storedLanguage !== language) {
      setLanguage(storedLanguage)
    }
  }, [])

  return { language, setLanguage, t }
}

