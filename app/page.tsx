"use client"

import ContactForm from "@/components/contact-form"
import TrackingForm from "@/components/tracking-form"
import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import PartnersSection from "@/components/partners-section"
import Image from "next/image"
import { useLanguageStore } from "@/lib/hooks/use-translations"

export default function Home() {
  const { t } = useLanguageStore()

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-32 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl py-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">{t("hero_title")}</h1>
            <p className="text-xl opacity-90 leading-relaxed">{t("hero_description")}</p>
          </div>
        </div>
      </section>

      {/* Rest of the sections */}
      <section id="tracking" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-2">
            {t("tracking_title")
              .split(" ")
              .map((word, i, arr) =>
                i === arr.length - 1 ? (
                  <span key={i} className="text-orange-500">
                    {word}
                  </span>
                ) : (
                  <span key={i}>{word} </span>
                ),
              )}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">{t("tracking_description")}</p>
          <TrackingForm />
          <p className="text-sm text-gray-500 mt-4">{t("tracking_support")}</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white scroll-mt-20">
        <ServicesSection />
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-gray-50 scroll-mt-20">
        <AboutSection />
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-2">{t("contact_title")}</h2>
              <p className="text-gray-600">{t("contact_description")}</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-16 bg-gray-50 scroll-mt-20">
        <PartnersSection />
      </section>
    </main>
  )
}

