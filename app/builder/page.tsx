"use client"

import type React from "react"

import { useState, useRef } from "react"
import {
  Send,
  Plus,
  Brain,
  Package,
  Palette,
  RotateCcw,
  Smartphone,
  TestTube,
  MessageSquare,
  ArrowLeft,
  Code,
  Download,
  Eye,
  Sparkles,
} from "lucide-react"

interface Message {
  id: string
  type: "user" | "ai"
  content: string
  timestamp: Date
}

interface FeatureAction {
  icon: React.ReactNode
  title: string
  description: string
  action: () => void
}

export default function BuilderPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "ai",
      content: "I'm ready to build your app! Tell me what you'd like to create and I'll start designing the interface.",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [currentScreen, setCurrentScreen] = useState("welcome")
  const [showCode, setShowCode] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

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
        content: "Perfect! I'm creating your app interface now. Watch the preview update as I build each screen.",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiMessage])
      setIsLoading(false)
      setCurrentScreen("app-preview")
    }, 2000)
  }

  const featureActions: FeatureAction[] = [
    {
      icon: <Plus className="w-5 h-5" />,
      title: "Add Feature",
      description: "Add login, chat, payments, etc.",
      action: () => console.log("Add feature"),
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: "See Logic",
      description: "View app flow and code structure",
      action: () => setShowCode(!showCode),
    },
    {
      icon: <Package className="w-5 h-5" />,
      title: "Export App",
      description: "Download code or deploy",
      action: () => console.log("Export app"),
    },
    {
      icon: <Palette className="w-5 h-5" />,
      title: "Customize UI",
      description: "Adjust colors, fonts, themes",
      action: () => console.log("Customize UI"),
    },
    {
      icon: <RotateCcw className="w-5 h-5" />,
      title: "Regenerate",
      description: "Try a different layout",
      action: () => console.log("Regenerate"),
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: "Switch Device",
      description: "iOS, Android, or Tablet",
      action: () => console.log("Switch device"),
    },
    {
      icon: <TestTube className="w-5 h-5" />,
      title: "Preview Live",
      description: "Test interactions and flow",
      action: () => console.log("Preview live"),
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Refine Prompt",
      description: "Adjust AI understanding",
      action: () => console.log("Refine prompt"),
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Header */}
      <div className="bg-black/50 backdrop-blur-sm border-b border-pink-500/20 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-pink-500/10 rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5 text-pink-400" />
            </button>
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
              appfi.dev
            </div>
            <div className="text-sm text-gray-400">/ builder</div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 text-sm text-pink-400 hover:text-pink-300 transition-colors flex items-center space-x-2">
              <Eye className="w-4 h-4" />
              <span>Preview</span>
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all text-sm flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Left Panel - AI Chat */}
        <div className="w-1/3 bg-gray-900/50 backdrop-blur-sm border-r border-pink-500/20 flex flex-col">
          <div className="p-6 border-b border-pink-500/10">
            <h2 className="text-xl font-semibold text-white mb-2">AI Assistant</h2>
            <p className="text-sm text-gray-400">Describe features and watch your app evolve</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] p-4 rounded-2xl backdrop-blur-sm ${
                    message.type === "user"
                      ? "bg-gradient-to-r from-pink-500/90 to-pink-600/90 text-white border border-pink-400/30"
                      : "bg-gray-800/80 text-gray-100 border border-gray-700/50 shadow-lg"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  <p className={`text-xs mt-2 ${message.type === "user" ? "text-pink-100" : "text-gray-400"}`}>
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-800/80 backdrop-blur-sm p-4 rounded-2xl border border-gray-700/50">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-6 border-t border-pink-500/10">
            <div className="flex space-x-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Add a feature, modify the design..."
                className="flex-1 px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
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

        {/* Center Panel - iPhone Preview */}
        <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-gray-800/30 to-gray-900/30 relative">
          {/* 3D Pink Phone Frame */}
          <div className="relative">
            <div className="w-[300px] h-[600px] bg-gradient-to-br from-pink-500/20 to-pink-600/30 rounded-[3.5rem] p-3 shadow-2xl backdrop-blur-sm border border-pink-400/20">
              <div className="w-full h-full bg-black rounded-[3rem] overflow-hidden relative shadow-inner">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10"></div>

                {/* Screen Content */}
                <div className="pt-8 h-full bg-white">
                  {currentScreen === "welcome" && (
                    <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-600 rounded-2xl mb-6 flex items-center justify-center animate-pulse">
                        <Sparkles className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Ready to Build</h3>
                      <p className="text-sm text-gray-500">Your app will appear here as you chat with the AI</p>
                    </div>
                  )}

                  {currentScreen === "app-preview" && (
                    <div className="h-full animate-fade-in">
                      {/* App Header */}
                      <div className="bg-gradient-to-r from-pink-500 to-pink-600 p-4 text-white">
                        <h2 className="text-lg font-semibold">My App</h2>
                        <p className="text-sm opacity-90">Built with AI</p>
                      </div>

                      {/* App Content */}
                      <div className="p-4 space-y-4">
                        <div className="bg-pink-50 p-4 rounded-xl border border-pink-100">
                          <div className="w-full h-3 bg-pink-200 rounded mb-2 animate-pulse"></div>
                          <div className="w-3/4 h-3 bg-pink-200 rounded animate-pulse delay-100"></div>
                        </div>
                        <div className="bg-pink-50 p-4 rounded-xl border border-pink-100">
                          <div className="w-full h-3 bg-pink-200 rounded mb-2 animate-pulse delay-200"></div>
                          <div className="w-1/2 h-3 bg-pink-200 rounded animate-pulse delay-300"></div>
                        </div>
                        <div className="bg-pink-50 p-4 rounded-xl border border-pink-100">
                          <div className="w-full h-3 bg-pink-200 rounded mb-2 animate-pulse delay-400"></div>
                          <div className="w-2/3 h-3 bg-pink-200 rounded animate-pulse delay-500"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Shimmer Effect */}
            {isLoading && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-200/20 to-transparent animate-shimmer rounded-[3.5rem]"></div>
            )}
          </div>
        </div>

        {/* Right Panel - Feature Actions */}
        <div className="w-80 bg-gray-900/50 backdrop-blur-sm border-l border-pink-500/20 p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-2">Actions</h3>
            <p className="text-sm text-gray-400">Enhance and customize your app</p>
          </div>

          <div className="space-y-3">
            {featureActions.map((action, index) => (
              <button
                key={index}
                onClick={action.action}
                className="w-full p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-pink-500/30 hover:bg-pink-500/5 transition-all duration-200 text-left group"
              >
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-pink-500/10 rounded-lg text-pink-400 group-hover:bg-pink-500/20 transition-colors">
                    {action.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-white mb-1">{action.title}</h4>
                    <p className="text-xs text-gray-400">{action.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Code View Toggle */}
          {showCode && (
            <div className="mt-6 p-4 bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-xl">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-medium text-white">Code Preview</h4>
                <Code className="w-4 h-4 text-pink-400" />
              </div>
              <div className="text-xs text-gray-300 font-mono bg-black/50 p-3 rounded-lg">
                <div className="text-pink-400">{"<View style={styles.container}>"}</div>
                <div className="ml-2 text-blue-400">{"<Text>Hello World</Text>"}</div>
                <div className="text-pink-400">{"</View>"}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
