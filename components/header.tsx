"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Phone, Mail, Menu, X } from "lucide-react"
import LanguageSelector from "./language-selector"
import Image from "next/image"
import { useLanguageStore } from "@/lib/hooks/use-translations"

export default function Header() {
  const { t } = useLanguageStore()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    closeMenu()

    const section = document.getElementById(sectionId)
    if (section) {
      const offsetTop = section.offsetTop - 80 // Adjust for header height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <header className={`sticky top-0 z-50 bg-white ${isScrolled ? "shadow-md" : ""}`}>
      {/* Top bar */}
      <div className="bg-gray-100 py-2 text-sm">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="tel:+998977575747" className="flex items-center hover:text-blue-600">
              <Phone className="h-4 w-4 mr-1" />
              <span>+998 97 757 57 47</span>
            </a>
            <a href="https://t.me/jakhonshokh" className="flex items-center hover:text-blue-600">
              <Mail className="h-4 w-4 mr-1" />
              <span>@jakhonshokh</span>
            </a>
          </div>
          <div className="flex items-center">
            <LanguageSelector />
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center z-10">
              <div className="w-10 h-10 flex items-center justify-center mr-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/x-Sc3N5eshdqDvEaZmpF6n2qo3pt6ajA.png"
                  alt="Sofimpex Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold">Sofimpex</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <button onClick={() => scrollToSection("tracking")} className="text-gray-700 hover:text-blue-600">
                {t("track_package")}
              </button>
              <button onClick={() => scrollToSection("services")} className="text-gray-700 hover:text-blue-600">
                {t("our_services")}
              </button>
              <button onClick={() => scrollToSection("about")} className="text-gray-700 hover:text-blue-600">
                {t("about_us")}
              </button>
              <button onClick={() => scrollToSection("partners")} className="text-gray-700 hover:text-blue-600">
                {t("our_partners")}
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 z-10 relative"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="container mx-auto px-4 py-20">
          <nav className="flex flex-col space-y-6 text-center text-lg">
            <button
              onClick={() => scrollToSection("tracking")}
              className="py-2 border-b border-gray-100 hover:text-blue-600"
            >
              {t("track_package")}
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="py-2 border-b border-gray-100 hover:text-blue-600"
            >
              {t("our_services")}
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="py-2 border-b border-gray-100 hover:text-blue-600"
            >
              {t("about_us")}
            </button>
            <button
              onClick={() => scrollToSection("partners")}
              className="py-2 border-b border-gray-100 hover:text-blue-600"
            >
              {t("our_partners")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="py-2 border-b border-gray-100 hover:text-blue-600"
            >
              {t("contacts")}
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}

