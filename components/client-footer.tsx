"use client"

import { useLanguageStore } from "@/lib/hooks/use-translations"

export default function ClientFooter() {
  const { t } = useLanguageStore()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Sofimpex. {t("rights_reserved")}
        </p>
      </div>
    </footer>
  )
}

