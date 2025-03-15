import Image from "next/image"

const services = [
  {
    id: "cargo",
    title: "Грузоперевозки",
    description: "Надежная и быстрая доставка грузов по всему миру с полным отслеживанием.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2340&auto=format&fit=crop",
  },
  {
    id: "customs",
    title: "Таможенное оформление",
    description: "Профессиональное оформление всех необходимых таможенных документов.",
    image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: "tours",
    title: "Туры",
    description: "Организация туристических поездок и экскурсий для частных лиц и групп.",
    image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "business",
    title: "Бизнес-услуги",
    description: "Комплексные решения для бизнеса, включая консалтинг и логистику.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop",
  },
]

export default function ServicesSection() {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Наши услуги</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Мы предлагаем широкий спектр профессиональных услуг для частных лиц и бизнеса
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {services.map((service) => (
          <div key={service.id} className="flex flex-col md:flex-row gap-6 group">
            <div className="md:w-1/2 relative overflow-hidden rounded-md h-64">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                fill
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 border border-gray-200 rounded-md pointer-events-none"></div>
            </div>

            <div className="md:w-1/2 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
              <div className="w-12 h-0.5 bg-blue-600 mb-4"></div>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

