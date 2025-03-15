import { NextResponse } from "next/server"

// Telegram bot configuration
const TELEGRAM_BOT_TOKEN = "7650143276:AAFOwr4R9HPJYqcw61Be7u4zmIs42Lb9F8c"
const TELEGRAM_CHAT_ID = "-1002340938586"
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json()

    // Validate required fields
    const { name, email, phone, message, language } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Get language display name
    const languageDisplay = language === "uz" ? "O'zbekcha" : "Русский"

    // Format message for Telegram
    const telegramMessage = `
📨 *Новое сообщение с сайта Sofimpex*

👤 *Имя*: ${name}
📧 *Email*: ${email}
📱 *Телефон*: ${phone || "Не указан"}
🌐 *Язык*: ${languageDisplay || "Русский"}

💬 *Сообщение*:
${message}

⏰ *Дата*: ${new Date().toLocaleString("ru-RU")}
    `.trim()

    // Send message to Telegram
    const telegramResponse = await fetch(TELEGRAM_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage,
        parse_mode: "Markdown",
      }),
    })

    const telegramData = await telegramResponse.json()

    if (!telegramResponse.ok || !telegramData.ok) {
      console.error("Telegram API error:", telegramData)
      throw new Error("Failed to send message to Telegram")
    }

    // Log success and return response
    console.log("Message sent to Telegram successfully")
    return NextResponse.json({ success: true, message: "Сообщение успешно отправлено" }, { status: 200 })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      { error: "Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте позже." },
      { status: 500 },
    )
  }
}

