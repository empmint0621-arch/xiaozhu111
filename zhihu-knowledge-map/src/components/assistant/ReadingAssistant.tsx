import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown, Lightbulb, Link2, Bookmark, BookOpen, Map, Sparkles } from 'lucide-react';
import { cn } from '../../lib/utils';
import type { RelatedArticle, CollectionLink } from '../../data/types';

interface ReadingAssistantProps {
  articleSummary: string;
  relatedArticles: RelatedArticle[];
  collectionLinks: CollectionLink[];
  todayStats: { read: number; domains: number };
  onOpenDomainMap: () => void;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
}

export function ReadingAssistant({
  articleSummary,
  relatedArticles,
  collectionLinks,
  todayStats,
  onOpenDomainMap,
  isExpanded = true,
  onToggleExpand,
}: ReadingAssistantProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed left-6 bottom-6 z-50 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0066FF] to-[#00C6FF] px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-white text-lg">🐧</span>
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm">刘看山 · 伴读中</h3>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-white/80 text-xs">在线</span>
            </div>
          </div>
        </div>
        <button
          onClick={onToggleExpand}
          className="text-white/80 hover:text-white transition-colors"
        >
          {isExpanded ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {/* Article Summary */}
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb size={16} className="text-[#0066FF]" />
                <span className="text-sm font-medium text-gray-700">一句话读懂</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed bg-blue-50 p-3 rounded-lg">
                {articleSummary}
              </p>
            </div>

            {/* Related Articles */}
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Link2 size={16} className="text-[#0066FF]" />
                  <span className="text-sm font-medium text-gray-700">智能关联推荐</span>
                </div>
                <span className="text-xs text-gray-400">更多 &gt;</span>
              </div>
              <div className="space-y-2">
                {relatedArticles.map((article) => (
                  <div
                    key={article.id}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen size={20} className="text-[#0066FF]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-700 truncate group-hover:text-[#0066FF] transition-colors">
                        {article.title}
                      </p>
                      {article.tag && (
                        <span className="inline-block mt-1 px-2 py-0.5 bg-blue-100 text-[#0066FF] text-xs rounded">
                          {article.tag}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Collection Links */}
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Bookmark size={16} className="text-[#0066FF]" />
                  <span className="text-sm font-medium text-gray-700">个人知识关联</span>
                </div>
                <span className="text-xs text-gray-400">更多 &gt;</span>
              </div>
              <div className="space-y-2">
                {collectionLinks.map((link) => (
                  <div
                    key={link.id}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    {link.type === 'collection' ? (
                      <Bookmark size={14} className="text-amber-500" />
                    ) : (
                      <BookOpen size={14} className="text-blue-500" />
                    )}
                    <span className="text-sm text-gray-600 truncate">{link.title}</span>
                    <span className="text-xs text-gray-400 ml-auto">
                      {link.type === 'collection' ? '收藏' : '浏览历史'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Go to Knowledge Map Button */}
            <div className="p-4">
              <button
                onClick={onOpenDomainMap}
                className="w-full py-3 bg-gradient-to-r from-[#0066FF] to-[#00C6FF] text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Map size={18} />
                前往知识地图
              </button>
            </div>

            {/* Today's Stats */}
            <div className="px-4 pb-4">
              <div className="flex items-center justify-between text-xs text-gray-500 bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-amber-500" />
                  <span>今日已阅读 {todayStats.read} 篇文章，涉及 {todayStats.domains} 个领域</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
