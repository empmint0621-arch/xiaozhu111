import { Brain, BookOpen, CheckCircle, Clock, AlertCircle, RefreshCw } from 'lucide-react';
import type { Domain, Topic } from '../../data/types';

interface TopicDetailProps {
  domain: Domain;
  topics: Topic[];
}

export function TopicDetail({ domain, topics }: TopicDetailProps) {
  const totalArticles = topics.reduce((sum, t) => sum + t.articleCount, 0);
  const readArticles = topics.reduce((sum, t) => 
    sum + t.articles.filter(a => a.status === 'read').length, 0
  );
  const browsingArticles = topics.reduce((sum, t) => 
    sum + t.articles.filter(a => a.status === 'browsing').length, 0
  );
  const dustyArticles = topics.reduce((sum, t) => 
    sum + t.articles.filter(a => a.status === 'unread').length, 0
  );

  const readPercentage = Math.round((readArticles / totalArticles) * 100);
  const browsingPercentage = Math.round((browsingArticles / totalArticles) * 100);
  const dustyPercentage = Math.round((dustyArticles / totalArticles) * 100);

  return (
    <div className="w-72 bg-white/80 backdrop-blur-sm p-6 border-r border-gray-100 overflow-y-auto">
      {/* Domain header */}
      <div className="flex items-center gap-3 mb-6">
        <div 
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-white"
          style={{ background: `linear-gradient(135deg, ${domain.gradient[0]}, ${domain.gradient[1]})` }}
        >
          <Brain size={28} />
        </div>
        <div>
          <h3 className="font-bold text-gray-800 text-lg">{domain.name}</h3>
          <p className="text-sm text-gray-500">{domain.name === '人工智能' ? 'AI' : domain.name}</p>
        </div>
      </div>

      {/* Current topic indicator */}
      <div className="mb-6">
        <p className="text-xs text-gray-500 mb-2">当前主题</p>
        <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-xl">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          <span className="font-medium text-gray-800">{domain.name}（领域总览）</span>
        </div>
      </div>

      {/* Stats */}
      <div className="space-y-4 mb-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">总文章数</span>
            <BookOpen size={16} className="text-gray-400" />
          </div>
          <p className="text-3xl font-bold text-gray-800">{totalArticles.toLocaleString()} <span className="text-base font-normal text-gray-500">篇</span></p>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">已掌握（已读）</span>
            <CheckCircle size={16} className="text-emerald-500" />
          </div>
          <div className="flex items-center gap-3">
            <p className="text-2xl font-bold text-gray-800">{readArticles.toLocaleString()} <span className="text-sm font-normal text-gray-500">篇</span></p>
            <span className="px-2 py-1 bg-emerald-100 text-emerald-600 text-xs rounded-full">{readPercentage}%</span>
          </div>
          <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-emerald-500 rounded-full transition-all duration-500"
              style={{ width: `${readPercentage}%` }}
            ></div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">学习中（浏览）</span>
            <Clock size={16} className="text-amber-500" />
          </div>
          <div className="flex items-center gap-3">
            <p className="text-2xl font-bold text-gray-800">{browsingArticles.toLocaleString()} <span className="text-sm font-normal text-gray-500">篇</span></p>
            <span className="px-2 py-1 bg-amber-100 text-amber-600 text-xs rounded-full">{browsingPercentage}%</span>
          </div>
          <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-amber-500 rounded-full transition-all duration-500"
              style={{ width: `${browsingPercentage}%` }}
            ></div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">吃灰内容（长期未读）</span>
            <AlertCircle size={16} className="text-gray-400" />
          </div>
          <div className="flex items-center gap-3">
            <p className="text-2xl font-bold text-gray-800">{dustyArticles.toLocaleString()} <span className="text-sm font-normal text-gray-500">篇</span></p>
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">{dustyPercentage}%</span>
          </div>
          <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gray-400 rounded-full transition-all duration-500"
              style={{ width: `${dustyPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Dusty content alert */}
      <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-6">
        <div className="flex items-start gap-2">
          <AlertCircle size={16} className="text-amber-500 mt-0.5" />
          <div>
            <p className="text-sm text-gray-700">
              有 <span className="text-amber-600 font-semibold">{dustyArticles}</span> 篇内容超过 30 天未读
            </p>
            <p className="text-xs text-gray-500 mt-1">别让知识落灰，回顾一下吧~</p>
          </div>
        </div>
        <button className="w-full mt-3 py-2 text-sm text-amber-600 bg-white border border-amber-200 rounded-lg hover:bg-amber-50 transition-colors">
          去复习
        </button>
      </div>

      {/* Last updated */}
      <div className="flex items-center gap-2 text-xs text-gray-400">
        <RefreshCw size={14} />
        <span>最近更新：2 小时前</span>
      </div>
    </div>
  );
}
