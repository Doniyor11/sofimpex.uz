import { cookies } from "next/headers"

export default function Footer() {
  // Get the language from cookies on the server side
  const getTranslation = () => {
    // Default text for both languages
    const translations = {
      ru: "Все права защищены.",
      uz: "Barcha huquqlar himoyalangan.",
    }

    // Try to get the language from cookies
    let language = "ru" // Default to Russian

    try {
      // This is safe to use in server components
      if (typeof window === "undefined") {
        const cookieStore = cookies()
        const storedLanguage = cookieStore.get("selectedLanguage")?.value
        if (storedLanguage && (storedLanguage === "ru" || storedLanguage === "uz")) {
          language = storedLanguage
        }
      }
    } catch (e) {
      // Fallback to default language if there's an error
      console.error("Error getting language from cookies:", e)
    }

    return translations[language as keyof typeof translations]
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Sofimpex. {getTranslation()}
        </p>
      </div>
    </footer>
  )
}

