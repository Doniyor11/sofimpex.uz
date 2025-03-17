"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AlertCircle, Loader2, Package, User } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguageStore } from "@/lib/hooks/use-translations"

interface Status {
  Name: string
  Date: string
}

interface TrackingResult {
  status: string
  trackingNumber: string
  recipient: string
  sender: string
  weight: number
  cost: number
  Statuses: Status[]
}

export default function TrackingForm() {
  const { t } = useLanguageStore()

  const TRACKING_STATUSES = [
    { id: "packaging", name: t("status_packaging") },
    { id: "sent", name: t("status_sent") },
    { id: "customs", name: t("status_customs") },
    { id: "warehouse", name: t("status_warehouse") },
    { id: "delivery", name: t("status_delivery") },
    { id: "delivered", name: t("status_delivered") },
  ]

  const [trackingNumber, setTrackingNumber] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [trackingResult, setTrackingResult] = useState<TrackingResult | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!trackingNumber.trim()) {
      setError("Пожалуйста, введите номер отслеживания")
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/tracking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ trackingNumber }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Не удалось получить информацию о посылке")
      }

      if (result.success && result.data) {
        setTrackingResult(result.data)
      } else {
        throw new Error("Неверный формат ответа от сервера")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Произошла ошибка при отслеживании посылки")
    } finally {
      setIsLoading(false)
    }
  }

  // Function to format date from API
  const formatDate = (dateString: string) => {
    if (!dateString) return "—"

    try {
      const date = new Date(dateString)
      return new Intl.DateTimeFormat("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }).format(date)
    } catch (e) {
      return dateString
    }
  }

  // Check if a status is completed based on the tracking result
  const isStatusCompleted = (statusName: string) => {
    if (!trackingResult?.Statuses) return false
    return trackingResult.Statuses.some((s) => s.Name.toLowerCase().includes(statusName.toLowerCase()) && s.Date)
  }

  // Get the date for a specific status
  const getStatusDate = (statusName: string) => {
    if (!trackingResult?.Statuses) return null
    const status = trackingResult.Statuses.find(
      (s) => s.Name.toLowerCase().includes(statusName.toLowerCase()) && s.Date,
    )
    return status ? formatDate(status.Date) : null
  }

  // Get the current active status index
  const getCurrentStatusIndex = () => {
    if (!trackingResult?.Statuses) return -1
    const completedStatuses = TRACKING_STATUSES.filter((status) => isStatusCompleted(status.name))
    return completedStatuses.length - 1
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Search form remains the same */}
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <Input
          type="text"
          placeholder={t("enter_tracking")}
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          className="flex-grow"
        />
        <Button type="submit" disabled={isLoading} className="bg-blue-600 hover:bg-blue-700 text-white">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {t("loading")}
            </>
          ) : (
            t("track")
          )}
        </Button>
      </form>

      {error && (
        <Alert variant="destructive" className="mt-4">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {trackingResult && (
        <div className="mt-8">
          <Card className="border-0 shadow-lg overflow-hidden">
            <CardContent className="p-6">
              {/* Package info cards remain the same */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Package className="h-5 w-5 text-blue-600" />
                    </div>
                    <h4 className="font-medium">{t("information")}</h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">{t("weight")}:</span>
                      <span className="font-medium">{trackingResult.weight} кг</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">{t("cost")}:</span>
                      <span className="font-medium">{trackingResult.cost.toLocaleString()} сум</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-green-100 p-2 rounded-full">
                      <User className="h-5 w-5 text-green-600" />
                    </div>
                    <h4 className="font-medium">Отправитель</h4>
                  </div>
                  <p className="text-sm">{trackingResult.sender || "Информация отсутствует"}</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <User className="h-5 w-5 text-purple-600" />
                    </div>
                    <h4 className="font-medium">Получатель</h4>
                  </div>
                  <p className="text-sm">{trackingResult.recipient || "Информация отсутствует"}</p>
                </div>
              </div>

              {/* Updated Status Timeline */}
              <div className="mb-6">
                <h4 className="font-medium text-lg mb-8 text-center">{t("delivery_status")}</h4>

                <div className="relative max-w-md mx-auto">
                  {/* Vertical line */}
                  <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-gray-200"></div>

                  {/* Status steps */}
                  <div className="space-y-12">
                    {TRACKING_STATUSES.map((status, index) => {
                      const isCompleted = isStatusCompleted(status.name)
                      const date = getStatusDate(status.name)

                      return (
                        <div key={status.id} className="flex items-start group text-left">
                          {/* Status indicator */}
                          <div
                            className={`relative z-10 flex-shrink-0 w-4 h-4 rounded-full mt-8 ${
                              isCompleted ? "bg-green-500" : "bg-gray-300"
                            }`}
                          >
                            {isCompleted && (
                              <div className="absolute -inset-1 rounded-full bg-green-100 animate-pulse"></div>
                            )}
                          </div>

                          <div className="ml-8">
                            {/* Date */}
                            <div className={`text-sm ${isCompleted ? "text-gray-600" : "text-gray-400"}`}>
                              {date || "Ожидается"}
                            </div>

                            {/* Status name */}
                            <div
                              className={`text-lg mt-1 font-medium ${isCompleted ? "text-gray-900" : "text-gray-400"}`}
                            >
                              {status.name}
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

