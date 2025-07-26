"use client"

import { useState, useEffect } from "react"
import { Rocket, Sparkles } from "lucide-react"

export default function LandingPage() {
  const [inputValue, setInputValue] = useState("")
  const [isInputFocused, setIsInputFocused] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleBuild = () => {
    window.location.href = "/builder"
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Company Branding - Top Left */}
      <div className="absolute top-6 left-6 z-20">
        <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
          appfi.dev
        </div>
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern with Pink Accent */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,122,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,122,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
        <div className="absolute top-1/3 right-12 text-6xl font-thin text-pink-500/[0.03] select-none transform -rotate-90">
          .dev
        </div>

        {/* Floating Orbs - All Pink */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-pink-400/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-pink-600/20 rounded-full blur-3xl animate-float-slow" />

        {/* Subtle Brand Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-[20rem] font-black text-gray-900/[0.02] select-none tracking-wider transform rotate-12">
            appfi
          </div>
        </div>

        {/* Mouse Follower - Pink Only */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-pink-500/10 to-pink-300/10 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Headline - Reduced by 25% and split */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 leading-tight">
            <span className="bg-gradient-to-r from-white via-pink-200 to-pink-100 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
              make mobile
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-100 via-pink-200 to-white bg-clip-text text-transparent animate-gradient-shift-reverse bg-[length:200%_200%]">
              apps
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide animate-fade-in-up">
            AI-powered platform that builds apps from your ideas
          </p>
        </div>

        {/* Input Section */}
        <div className="w-full max-w-2xl mx-auto space-y-8 animate-fade-in-up-delayed">
          {/* Input Field with Enhanced Branding */}
          <div className="relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onFocus={() => setIsInputFocused(true)}
              onBlur={() => setIsInputFocused(false)}
              placeholder="describe your app idea..."
              className={`w-full px-8 py-6 text-lg md:text-xl bg-gray-900/50 backdrop-blur-sm border-2 rounded-full text-white placeholder-gray-500 outline-none transition-all duration-500 ${
                isInputFocused
                  ? "border-pink-500 shadow-[0_0_30px_rgba(255,0,122,0.3)] bg-gray-900/70"
                  : "border-gray-700 hover:border-gray-600"
              }`}
            />
            {isInputFocused && (
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/20 to-pink-300/20 blur-xl -z-10 animate-pulse" />
            )}
            {/* Enhanced Branding Below Input */}
            <div className="text-center mt-3">
              <span className="text-sm text-gray-500">built with </span>
              <span className="text-sm bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent font-semibold">
                appfi.dev
              </span>
            </div>
          </div>

          {/* CTA Button - Glassy Pink */}
          <button
            onClick={handleBuild}
            className="group relative px-12 py-6 bg-gradient-to-r from-pink-500/90 to-pink-600/90 backdrop-blur-sm rounded-full text-white font-bold text-xl md:text-2xl tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,0,122,0.5)] active:scale-95 border border-pink-400/30"
          >
            <div className="flex items-center justify-center space-x-3">
              <Rocket className="w-6 h-6 md:w-7 md:h-7 group-hover:animate-bounce" />
              <span>build</span>
              <Sparkles className="w-5 h-5 md:w-6 md:h-6 group-hover:animate-spin" />
            </div>

            {/* Button Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10" />

            {/* Pulse Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-pink-400 opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
          </button>
        </div>

        {/* Bottom Branding */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-4">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-100" />
            <div className="w-2 h-2 bg-pink-600 rounded-full animate-pulse delay-200" />
          </div>
          <div className="text-xs text-gray-600 font-light tracking-widest opacity-60">POWERED BY APPFI</div>
        </div>

        {/* Bottom Corner Watermark */}
        <div className="absolute bottom-6 right-6 text-sm text-pink-500/20 font-light">appfi.dev</div>
      </div>

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-pink-300/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,122,0.1),transparent_50%)]" />
      </div>
    </div>
  )
}
