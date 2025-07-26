"use client"

import { useState } from "react"
import { Send, RotateCcw, Edit3, ArrowLeft, Sparkles } from "lucide-react"

interface Message {
  id: string
  type: "user" | "ai"
  content: string
  timestamp: Date
}

export default function PreviewPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "ai",
      content: "I'll help you build your mobile app! What kind of app would you like to create?",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [currentScreen, setCurrentScreen] = useState("welcome")

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputValue,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        content:
          "Great idea! I'm building your app interface now. You'll see the screens appear on the right as I create them.",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiMessage])
      setIsLoading(false)
      setCurrentScreen("app-preview")
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-pink-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-pink-100 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-pink-50 rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
              appfi.dev
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 text-sm text-gray-600 hover:text-pink-600 transition-colors">
              <RotateCcw className="w-4 h-4 inline mr-2" />
              Regenerate
            </button>
            <button className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors text-sm">
              <Edit3 className="w-4 h-4 inline mr-2" />
              Edit App
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid lg:grid-cols-2 gap-8 h-[calc(100vh-120px)]">
          {/* Left Side - Chat Interface */}
          <div className="bg-white rounded-2xl shadow-lg border border-pink-100 flex flex-col">
            <div className="p-6 border-b border-pink-50">
              <h2 className="text-xl font-semibold text-gray-800">AI Assistant</h2>
              <p className="text-sm text-gray-500 mt-1">Describe your app and watch it come to life</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl ${
                      message.type === "user"
                        ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p className={`text-xs mt-2 ${message.type === "user" ? "text-pink-100" : "text-gray-500"}`}>
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 p-4 rounded-2xl">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-6 border-t border-pink-50">
              <div className="flex space-x-3">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Describe your app idea..."
                  className="flex-1 px-4 py-3 border border-pink-200 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  className="px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - iPhone Preview */}
          <div className="flex items-center justify-center">
            <div className="relative">
              {/* iPhone Frame */}
              <div className="w-[280px] h-[580px] bg-black rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>

                  {/* Screen Content */}
                  <div className="pt-8 h-full">
                    {currentScreen === "welcome" && (
                      <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-600 rounded-2xl mb-6 flex items-center justify-center">
                          <Sparkles className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Ready to Build</h3>
                        <p className="text-sm text-gray-500">
                          Your app preview will appear here as you chat with the AI
                        </p>
                      </div>
                    )}

                    {currentScreen === "app-preview" && (
                      <div className="h-full animate-fade-in">
                        {/* App Header */}
                        <div className="bg-gradient-to-r from-pink-500 to-pink-600 p-4 text-white">
                          <h2 className="text-lg font-semibold">My App</h2>
                        </div>

                        {/* App Content */}
                        <div className="p-4 space-y-4">
                          <div className="bg-pink-50 p-4 rounded-xl">
                            <div className="w-full h-3 bg-pink-200 rounded mb-2"></div>
                            <div className="w-3/4 h-3 bg-pink-200 rounded"></div>
                          </div>
                          <div className="bg-pink-50 p-4 rounded-xl">
                            <div className="w-full h-3 bg-pink-200 rounded mb-2"></div>
                            <div className="w-1/2 h-3 bg-pink-200 rounded"></div>
                          </div>
                          <div className="bg-pink-50 p-4 rounded-xl">
                            <div className="w-full h-3 bg-pink-200 rounded mb-2"></div>
                            <div className="w-2/3 h-3 bg-pink-200 rounded"></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Shimmer Effect */}
              {isLoading && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-200/20 to-transparent animate-shimmer"></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
