"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

type FormData = {
  name: string
  email: string
  phone: string
  message: string
  language: string
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
  language: "ru", // Default language
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Get current language from localStorage if available
  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage")
    if (storedLanguage) {
      setFormData((prev) => ({ ...prev, language: storedLanguage }))
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Не удалось отправить сообщение")
      }

      setIsSuccess(true)
      setFormData((prev) => ({ ...initialFormData, language: prev.language }))
    } catch (err) {
      setError("Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      {isSuccess ? (
        <div className="text-center py-8">
          <CheckCircle2 className="mx-auto h-12 w-12 text-green-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Сообщение отправлено!</h3>
          <p className="text-gray-600 mb-6">
            Спасибо за обращение. Наши специалисты свяжутся с вами в ближайшее время.
          </p>
          <Button onClick={() => setIsSuccess(false)} variant="outline">
            Отправить еще сообщение
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">
                Ваше имя <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Введите ваше имя"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Введите ваш email"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Телефон</Label>
            <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">
              Сообщение <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Введите ваше сообщение"
              className="min-h-[120px]"
            />
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Отправка...
              </>
            ) : (
              "Отправить сообщение"
            )}
          </Button>
        </form>
      )}
    </div>
  )
}

