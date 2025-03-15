import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export default function AboutSection() {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">О нас</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
            alt="О нашей компании"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">Ваш надежный партнер в логистике</h3>
          <p className="text-gray-700 mb-6">
            Мы - динамично развивающаяся компания, предоставляющая профессиональные услуги в сфере грузоперевозок,
            туризма и консалтинга. Наша цель - предложить надежные решения, ориентированные на потребности наших
            клиентов.
          </p>

          <div className="space-y-3">
            <div className="flex items-start">
              <CheckCircle2 className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">
                <span className="font-semibold">Опыт и профессионализм.</span> Наша команда состоит из опытных
                специалистов, которые обеспечивают высокое качество всех предоставляемых услуг.
              </p>
            </div>

            <div className="flex items-start">
              <CheckCircle2 className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">
                <span className="font-semibold">Индивидуальный подход.</span> Мы разрабатываем решения, учитывая
                специфику и потребности каждого клиента.
              </p>
            </div>

            <div className="flex items-start">
              <CheckCircle2 className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">
                <span className="font-semibold">Надежность и безопасность.</span> Мы гарантируем сохранность ваших
                грузов и конфиденциальность информации.
              </p>
            </div>

            <div className="flex items-start">
              <CheckCircle2 className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">
                <span className="font-semibold">Современные технологии.</span> Мы используем передовые технологии для
                оптимизации процессов и повышения качества обслуживания.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

