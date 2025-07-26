"use client"

import { useState } from "react"
import { Plus, MoreHorizontal, Play, Copy, Trash2, Users, Calendar, Smartphone, Globe, ArrowLeft } from "lucide-react"

interface App {
  id: string
  name: string
  description: string
  status: "building" | "deployed" | "draft"
  lastModified: Date
  collaborators: number
  preview: string
}

export default function DashboardPage() {
  const [apps] = useState<App[]>([
    {
      id: "1",
      name: "Fitness Tracker",
      description: "Track workouts and nutrition",
      status: "deployed",
      lastModified: new Date("2024-01-15"),
      collaborators: 2,
      preview: "/placeholder.svg?height=200&width=150",
    },
    {
      id: "2",
      name: "Recipe Finder",
      description: "Discover and save recipes",
      status: "building",
      lastModified: new Date("2024-01-14"),
      collaborators: 1,
      preview: "/placeholder.svg?height=200&width=150",
    },
    {
      id: "3",
      name: "Task Manager",
      description: "Organize your daily tasks",
      status: "draft",
      lastModified: new Date("2024-01-13"),
      collaborators: 3,
      preview: "/placeholder.svg?height=200&width=150",
    },
  ])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "deployed":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "building":
        return "bg-pink-500/20 text-pink-400 border-pink-500/30"
      case "draft":
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

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
            <div className="text-sm text-gray-400">/ dashboard</div>
          </div>
          <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>New App</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Your Apps</h1>
          <p className="text-gray-400">Manage and deploy your AI-built mobile applications</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Total Apps</p>
                <p className="text-2xl font-bold text-white">3</p>
              </div>
              <Smartphone className="w-8 h-8 text-pink-400" />
            </div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Deployed</p>
                <p className="text-2xl font-bold text-white">1</p>
              </div>
              <Globe className="w-8 h-8 text-green-400" />
            </div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">In Progress</p>
                <p className="text-2xl font-bold text-white">1</p>
              </div>
              <Play className="w-8 h-8 text-pink-400" />
            </div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Collaborators</p>
                <p className="text-2xl font-bold text-white">6</p>
              </div>
              <Users className="w-8 h-8 text-blue-400" />
            </div>
          </div>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app) => (
            <div
              key={app.id}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:border-pink-500/30 transition-all duration-200 group"
            >
              {/* App Preview */}
              <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                <div className="w-20 h-32 bg-gray-600 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-8 h-8 text-gray-400" />
                </div>
              </div>

              {/* App Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{app.name}</h3>
                    <p className="text-sm text-gray-400">{app.description}</p>
                  </div>
                  <button className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors">
                    <MoreHorizontal className="w-4 h-4 text-gray-400" />
                  </button>
                </div>

                {/* Status Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(app.status)}`}>
                    {app.status}
                  </span>
                  <div className="flex items-center space-x-2 text-xs text-gray-400">
                    <Users className="w-3 h-3" />
                    <span>{app.collaborators}</span>
                  </div>
                </div>

                {/* Last Modified */}
                <div className="flex items-center text-xs text-gray-500 mb-4">
                  <Calendar className="w-3 h-3 mr-1" />
                  <span>Modified {app.lastModified.toLocaleDateString()}</span>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <button className="flex-1 px-3 py-2 bg-pink-500/10 text-pink-400 rounded-lg hover:bg-pink-500/20 transition-colors text-sm">
                    Open
                  </button>
                  <button className="px-3 py-2 bg-gray-700/50 text-gray-400 rounded-lg hover:bg-gray-700 transition-colors">
                    <Copy className="w-4 h-4" />
                  </button>
                  <button className="px-3 py-2 bg-gray-700/50 text-gray-400 rounded-lg hover:bg-red-500/20 hover:text-red-400 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Create New App Card */}
          <div className="bg-gray-800/30 backdrop-blur-sm border-2 border-dashed border-gray-600 rounded-xl flex items-center justify-center p-12 hover:border-pink-500/50 transition-colors cursor-pointer group">
            <div className="text-center">
              <div className="w-12 h-12 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-500/20 transition-colors">
                <Plus className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Create New App</h3>
              <p className="text-sm text-gray-400">Start building with AI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
