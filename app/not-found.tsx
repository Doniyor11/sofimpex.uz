import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h2 className="text-3xl font-bold mb-4">404 - Страница не найдена</h2>
      <p className="text-gray-600 mb-8 max-w-md">Извините, запрашиваемая страница не существует или была перемещена.</p>
      <Link href="/" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
        Вернуться на главную
      </Link>
    </div>
  )
}

