"use client"

import { useState } from "react"
import { Rocket, Calendar, Smartphone, LogOut } from "lucide-react"

interface App {
  id: string
  name: string
  description: string
  status: "ready" | "building"
  dateCreated: Date
  icon: string
}

export default function ProjectsPage() {
  const [newAppName, setNewAppName] = useState("")
  const [apps] = useState<App[]>([
    {
      id: "1",
      name: "Todo List",
      description: "Simple task management app with reminders",
      status: "ready",
      dateCreated: new Date("2024-01-15"),
      icon: "📝",
    },
    {
      id: "2",
      name: "Fitness Tracker",
      description: "Track workouts and monitor progress",
      status: "building",
      dateCreated: new Date("2024-01-14"),
      icon: "💪",
    },
    {
      id: "3",
      name: "Recipe Book",
      description: "Discover and save your favorite recipes",
      status: "ready",
      dateCreated: new Date("2024-01-13"),
      icon: "🍳",
    },
    {
      id: "4",
      name: "Budget Tracker",
      description: "Manage expenses and track spending habits",
      status: "building",
      dateCreated: new Date("2024-01-12"),
      icon: "💰",
    },
  ])

  const handleCreateApp = () => {
    if (newAppName.trim()) {
      console.log("Creating app:", newAppName)
      setNewAppName("")
    }
  }

  const getStatusBadge = (status: string) => {
    if (status === "ready") {
      return "bg-green-500/20 text-green-400 border-green-500/30"
    }
    return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,122,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,122,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-pink-400/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between p-6 border-b border-pink-500/10">
        <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
          appfi.dev
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-300 text-sm">hey, user@example.com</span>
          <button className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full text-gray-300 hover:border-pink-500/30 hover:text-pink-400 transition-all duration-200 text-sm flex items-center space-x-2">
            <LogOut className="w-4 h-4" />
            <span>sign out</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto p-6">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Create New App Section */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-pink-500/20 rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                <span className="text-pink-400 mr-2">+</span>
                new app
              </h2>

              <div className="space-y-4">
                <input
                  type="text"
                  value={newAppName}
                  onChange={(e) => setNewAppName(e.target.value)}
                  placeholder="enter app name..."
                  className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                />

                <button
                  onClick={handleCreateApp}
                  disabled={!newAppName.trim()}
                  className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,0,122,0.4)] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none flex items-center justify-center space-x-2"
                >
                  <Rocket className="w-4 h-4" />
                  <span>create app</span>
                </button>
              </div>
            </div>
          </div>

          {/* My Apps Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">my apps</h2>
              <p className="text-gray-400">your AI-generated mobile applications</p>
            </div>

            {/* Apps Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {apps.map((app) => (
                <button
                  key={app.id}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-left hover:border-pink-500/30 hover:bg-pink-500/5 transition-all duration-200 group"
                >
                  {/* App Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-500/20 to-pink-600/20 rounded-xl flex items-center justify-center text-2xl border border-pink-500/20">
                        {app.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-pink-100 transition-colors">
                          {app.name}
                        </h3>
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getStatusBadge(app.status)}`}
                        >
                          {app.status}
                        </span>
                      </div>
                    </div>
                    <Smartphone className="w-5 h-5 text-gray-500 group-hover:text-pink-400 transition-colors" />
                  </div>

                  {/* App Description */}
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{app.description}</p>

                  {/* App Footer */}
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>created {app.dateCreated.toLocaleDateString()}</span>
                  </div>
                </button>
              ))}

              {/* Empty State Placeholder */}
              {apps.length === 0 && (
                <div className="md:col-span-2 bg-gray-900/30 border-2 border-dashed border-gray-700 rounded-xl p-12 text-center">
                  <div className="w-16 h-16 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-8 h-8 text-pink-400" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">No apps yet</h3>
                  <p className="text-gray-400 text-sm">Create your first AI-generated mobile app to get started</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Branding */}
      <div className="absolute bottom-6 right-6 text-xs text-pink-500/20 font-light">powered by appfi.dev</div>
    </div>
  )
}
