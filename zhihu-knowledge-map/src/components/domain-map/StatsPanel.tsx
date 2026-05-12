import { User, BookOpen, CheckCircle, Clock, Bookmark, AlertCircle } from 'lucide-react';
import type { UserData, ReadingStats } from '../../data/types';

interface StatsPanelProps {
  userData: UserData;
  stats: ReadingStats;
}

export function StatsPanel({ userData, stats }: StatsPanelProps) {
  return (
    <div className="w-64 bg-white/80 backdrop-blur-sm p-6 border-r border-gray-100 overflow-y-auto">
      {/* User Info */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
          {userData.nickname[0]}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-800">{userData.nickname}</span>
            <span className="px-2 py-0.5 bg-blue-100 text-blue-600 text-xs rounded-full font-medium">
              Lv.{userData.level}
            </span>
          </div>
          <p className="text-xs text-gray-500">{userData.title}</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-50 p-3 rounded-xl">
          <p className="text-xs text-gray-500 mb-1">已关注领域</p>
          <p className="text-2xl font-bold text-gray-800">{userData.followedDomains}</p>
          <p className="text-xs text-gray-400">个</p>
        </div>
        <div className="bg-purple-50 p-3 rounded-xl">
          <p className="text-xs text-gray-500 mb-1">总阅读文章</p>
          <p className="text-2xl font-bold text-gray-800">{userData.totalArticles.toLocaleString()}</p>
          <p className="text-xs text-gray-400">篇</p>
        </div>
      </div>

      {/* Reading Status */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
          <BookOpen size={16} className="text-gray-400" />
          阅读状态
        </h4>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-emerald-500 rounded-full"></span>
              <span className="text-sm text-gray-600">已读</span>
            </div>
            <span className="text-sm font-medium text-gray-800">{stats.read.count} 篇</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-amber-500 rounded-full"></span>
              <span className="text-sm text-gray-600">浏览中</span>
            </div>
            <span className="text-sm font-medium text-gray-800">{stats.browsing.count} 篇</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
              <span className="text-sm text-gray-600">未读推荐</span>
            </div>
            <span className="text-sm font-medium text-gray-800">{stats.unread.label} 篇</span>
          </div>
        </div>
      </div>

      {/* Knowledge Mastery */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
          <CheckCircle size={16} className="text-gray-400" />
          知识掌握度
        </h4>
        <div className="flex items-center gap-4">
          <div className="relative w-20 h-20">
            <svg className="w-20 h-20 transform -rotate-90">
              <circle
                cx="40"
                cy="40"
                r="36"
                stroke="#E5E7EB"
                strokeWidth="6"
                fill="none"
              />
              <circle
                cx="40"
                cy="40"
                r="36"
                stroke="#0066FF"
                strokeWidth="6"
                fill="none"
                strokeDasharray={`${68 * 2.26} 226`}
                strokeLinecap="round"
                className="transition-all duration-1000"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-xl font-bold text-gray-800">68%</span>
              <span className="text-xs text-gray-400">中级探索者</span>
            </div>
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span className="text-gray-600">入门</span>
              </div>
              <span className="text-gray-800">{stats.mastery.beginner}%</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                <span className="text-gray-600">进阶</span>
              </div>
              <span className="text-gray-800">{stats.mastery.intermediate}%</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                <span className="text-gray-600">精通</span>
              </div>
              <span className="text-gray-800">{stats.mastery.advanced}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Dusty Content Alert */}
      <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
        <div className="flex items-start gap-2 mb-2">
          <AlertCircle size={16} className="text-amber-500 mt-0.5" />
          <div>
            <h4 className="text-sm font-medium text-gray-800">吃灰内容提醒</h4>
            <p className="text-xs text-gray-500 mt-1">
              你有 <span className="text-amber-600 font-semibold">{stats.dustyContent}</span> 篇收藏内容长期未读
            </p>
            <p className="text-xs text-gray-400 mt-1">建议定期清理，保持知识新鲜度</p>
          </div>
        </div>
        <button className="w-full mt-2 py-2 text-xs text-amber-600 bg-white border border-amber-200 rounded-lg hover:bg-amber-50 transition-colors">
          去看看
        </button>
      </div>
    </div>
  );
}
