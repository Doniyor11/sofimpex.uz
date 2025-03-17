import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { useLanguageStore } from "@/lib/hooks/use-translations"

// Update the component to use translations
export default function AboutSection() {
  const { t } = useLanguageStore()

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">{t("about_title")}</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
            alt={t("about_title")}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">{t("about_subtitle")}</h3>
          <p className="text-gray-700 mb-6">{t("about_description")}</p>

          <div className="space-y-3">
            <div className="flex items-start">
              <CheckCircle2 className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">
                <span className="font-semibold">{t("experience_title")}.</span> {t("experience_description")}
              </p>
            </div>

            <div className="flex items-start">
              <CheckCircle2 className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">
                <span className="font-semibold">{t("approach_title")}.</span> {t("approach_description")}
              </p>
            </div>

            <div className="flex items-start">
              <CheckCircle2 className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">
                <span className="font-semibold">{t("reliability_title")}.</span> {t("reliability_description")}
              </p>
            </div>

            <div className="flex items-start">
              <CheckCircle2 className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">
                <span className="font-semibold">{t("technology_title")}.</span> {t("technology_description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

