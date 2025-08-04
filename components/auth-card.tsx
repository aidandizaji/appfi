import type React from "react"

interface AuthCardProps {
  children: React.ReactNode
  title: string
  subtitle?: string
}

export function AuthCard({ children, title, subtitle }: AuthCardProps) {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,122,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,122,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-pink-400/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Header */}
      <div className="absolute top-6 left-6 z-20">
        <a
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent"
        >
          appfi.dev
        </a>
      </div>

      {/* Auth Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-gray-900/50 backdrop-blur-sm border border-pink-500/20 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-white mb-2">{title}</h1>
            {subtitle && <p className="text-gray-400 text-sm">{subtitle}</p>}
          </div>
          {children}
        </div>
      </div>

      {/* Bottom Branding */}
      <div className="absolute bottom-6 right-6 text-xs text-pink-500/20 font-light">powered by appfi.dev</div>
    </div>
  )
}
