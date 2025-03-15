"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguageStore } from "@/lib/hooks/use-translations"

// Sample partner data with real company logos
const partners = [
  {
    id: 1,
    name: "DHL",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/DHL_Logo.svg/2560px-DHL_Logo.svg.png",
  },
  {
    id: 2,
    name: "FedEx",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/FedEx_Express.svg/2560px-FedEx_Express.svg.png",
  },
  {
    id: 3,
    name: "Maersk",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Maersk_Group_Logo.svg/2560px-Maersk_Group_Logo.svg.png",
  },
  {
    id: 4,
    name: "UPS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/United_Parcel_Service_logo_2014.svg/2560px-United_Parcel_Service_logo_2014.svg.png",
  },
  {
    id: 5,
    name: "DB Schenker",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/DB_Schenker_201x_logo.svg/2560px-DB_Schenker_201x_logo.svg.png",
  },
  {
    id: 6,
    name: "MSC",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/MSC_Logo.svg/2560px-MSC_Logo.svg.png",
  },
  {
    id: 7,
    name: "CMA CGM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/CMA_CGM_logo.svg/2560px-CMA_CGM_logo.svg.png",
  },
  {
    id: 8,
    name: "Kuehne + Nagel",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Kuehne_%2B_Nagel_logo.svg/2560px-Kuehne_%2B_Nagel_logo.svg.png",
  },
]

export default function PartnersSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(4)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [autoplayPaused, setAutoplayPaused] = useState(false)
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null)

  const { t } = useLanguageStore()

  // Adjust number of slides based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1)
      } else if (window.innerWidth < 768) {
        setSlidesToShow(2)
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(3)
      } else {
        setSlidesToShow(4)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const totalSlides = partners.length
  const maxIndex = Math.max(0, totalSlides - slidesToShow)

  const goToSlide = (index: number) => {
    // Ensure index is within bounds
    const newIndex = Math.max(0, Math.min(index, maxIndex))
    setActiveIndex(newIndex)
  }

  const nextSlide = () => {
    goToSlide(activeIndex >= maxIndex ? 0 : activeIndex + 1)
  }

  const prevSlide = () => {
    goToSlide(activeIndex <= 0 ? maxIndex : activeIndex - 1)
  }

  // Handle touch events for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
    setAutoplayPaused(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      nextSlide()
    }

    if (touchStart - touchEnd < -75) {
      // Swipe right
      prevSlide()
    }

    // Resume autoplay after 5 seconds
    setTimeout(() => setAutoplayPaused(false), 5000)
  }

  // Auto-advance slides
  useEffect(() => {
    if (autoplayPaused) return

    if (autoplayTimerRef.current) {
      clearTimeout(autoplayTimerRef.current)
    }

    autoplayTimerRef.current = setTimeout(() => {
      nextSlide()
    }, 5000)

    return () => {
      if (autoplayTimerRef.current) {
        clearTimeout(autoplayTimerRef.current)
      }
    }
  }, [activeIndex, autoplayPaused])

  // Calculate slide width as percentage
  const slideWidth = 100 / slidesToShow

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">{t("partners_title")}</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">{t("partners_description")}</p>
      </div>

      <div className="relative max-w-5xl mx-auto px-8">
        {/* Slider navigation buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:bg-gray-100 rounded-full"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:bg-gray-100 rounded-full"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>

        {/* Slider container */}
        <div
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${activeIndex * slideWidth}%)`,
            }}
          >
            {partners.map((partner) => (
              <div key={partner.id} className="px-3 flex-shrink-0" style={{ width: `${slideWidth}%` }}>
                <div className="bg-white p-6 rounded-lg shadow-sm border h-40 flex items-center justify-center hover:shadow-md transition-shadow">
                  <div className="relative w-full h-24">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slider dots/indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                activeIndex === index ? "bg-blue-600" : "bg-gray-300"
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

