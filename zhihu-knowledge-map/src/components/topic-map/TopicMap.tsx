import { motion } from 'framer-motion';
import { X, ChevronLeft, Share2, Maximize2, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { TopicDetail } from './TopicDetail';
import { TopicGraph } from './TopicGraph';
import { TopicSwitcher } from './TopicSwitcher';
import { ArticlePreview } from './ArticlePreview';
import type { Domain, Topic } from '../../data/types';

interface TopicMapProps {
  domain: Domain;
  topics: Topic[];
  onBack: () => void;
  onClose: () => void;
}

export function TopicMap({ domain, topics, onBack, onClose }: TopicMapProps) {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [selectedArticle, setSelectedArticle] = useState(topics[0]?.articles[0] || null);

  const handleTopicChange = (topic: Topic) => {
    setSelectedTopic(topic);
    if (topic.articles.length > 0) {
      setSelectedArticle(topic.articles[0]);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className="fixed inset-0 z-50 flex items-center justify-center p-8 bg-black/30 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-7xl h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"
            >
              <ChevronLeft size={18} />
              <span className="text-sm font-medium">返回领域地图</span>
            </button>
            <div className="h-6 w-px bg-gray-200"></div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-gray-800">知识地图 · 第二层 —— 主题地图</h2>
              <HelpCircle size={18} className="text-gray-400" />
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-xl transition-colors">
              <Share2 size={18} />
              <span className="text-sm font-medium">分享</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-xl transition-colors">
              <Maximize2 size={18} />
            </button>
            <button
              onClick={onClose}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"
            >
              <X size={18} />
              <span className="text-sm font-medium">关闭地图</span>
            </button>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 flex overflow-hidden">
          <TopicDetail domain={domain} topics={topics} />
          
          <div className="flex-1 relative">
            <TopicGraph 
              domain={domain} 
              topics={topics} 
              selectedTopic={selectedTopic}
              onTopicSelect={handleTopicChange}
            />
            
            {/* Article preview card */}
            {selectedArticle && (
              <div className="absolute top-6 right-6 z-20">
                <ArticlePreview article={selectedArticle} />
              </div>
            )}

            {/* Liu Kan Shan character */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-6 right-80 z-10"
            >
              <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-blue-100">
                <span className="text-3xl">🐧</span>
              </div>
            </motion.div>
          </div>

          <TopicSwitcher 
            domain={domain} 
            topics={topics}
            selectedTopic={selectedTopic}
            onTopicChange={handleTopicChange}
          />
        </div>
      </div>
    </motion.div>
  );
}
