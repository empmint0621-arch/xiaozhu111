import { motion } from 'framer-motion';
import { CheckCircle, Clock, ThumbsUp, ArrowRight } from 'lucide-react';
import type { Article } from '../../data/types';

interface ArticlePreviewProps {
  article: Article;
}

export function ArticlePreview({ article }: ArticlePreviewProps) {
  const statusConfig = {
    read: { icon: CheckCircle, color: 'text-blue-500', bg: 'bg-blue-50', label: '已读' },
    browsing: { icon: Clock, color: 'text-emerald-500', bg: 'bg-emerald-50', label: '浏览中' },
    unread: { icon: Clock, color: 'text-gray-400', bg: 'bg-gray-50', label: '未读' },
  };

  const config = statusConfig[article.status];
  const StatusIcon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 w-80"
    >
      {/* Status header */}
      <div className="flex items-center gap-2 mb-3">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${config.bg}`}>
          <StatusIcon size={14} className={config.color} />
        </div>
        <span className={`text-sm font-medium ${config.color}`}>{config.label}</span>
        <ThumbsUp size={14} className="text-gray-400 ml-auto" />
      </div>

      {/* Title */}
      <h4 className="font-semibold text-gray-800 mb-2 line-clamp-2">{article.title}</h4>

      {/* Summary */}
      <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
        {article.summary}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {article.tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <div className="text-xs text-gray-500">
          {article.readTime && <span>阅读时间：{article.readTime} 分钟</span>}
        </div>
        <button className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-medium">
          查看原文
          <ArrowRight size={14} />
        </button>
      </div>
    </motion.div>
  );
}
