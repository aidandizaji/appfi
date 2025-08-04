"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Loader2, ArrowLeft } from "lucide-react"
import { AuthCard } from "@/components/auth-card"

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email) {
      setError("Email is required")
      return
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email")
      return
    }

    setIsSubmitting(true)

    // Mock password reset
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <AuthCard title="Check your email" subtitle="We've sent password reset instructions to your email">
        <div className="text-center space-y-6">
          <div className="w-16 h-16 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto">
            <Mail className="w-8 h-8 text-pink-400" />
          </div>
          <p className="text-gray-300 text-sm">
            If an account with {email} exists, you'll receive password reset instructions shortly.
          </p>
          <a
            href="/login"
            className="inline-flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to sign in</span>
          </a>
        </div>
      </AuthCard>
    )
  }

  return (
    <AuthCard title="Reset your password" subtitle="Enter your email to receive reset instructions">
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-red-400 text-sm">{error}</div>
        )}

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,0,122,0.4)] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <span>Send reset instructions</span>
          )}
        </button>

        <div className="text-center">
          <a
            href="/login"
            className="inline-flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to sign in</span>
          </a>
        </div>
      </form>
    </AuthCard>
  )
}
