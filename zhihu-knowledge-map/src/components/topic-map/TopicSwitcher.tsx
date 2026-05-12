import { motion } from 'framer-motion';
import { ChevronUp, Brain, MessageSquare, Eye, Network, Layers, BookOpen, Target } from 'lucide-react';
import type { Domain, Topic } from '../../data/types';

interface TopicSwitcherProps {
  domain: Domain;
  topics: Topic[];
  selectedTopic: Topic | null;
  onTopicChange: (topic: Topic) => void;
}

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Brain,
  MessageSquare,
  Eye,
  Network,
  Layers,
  BookOpen,
  Target,
};

export function TopicSwitcher({ domain, topics, selectedTopic, onTopicChange }: TopicSwitcherProps) {
  return (
    <div className="w-80 bg-white/80 backdrop-blur-sm p-6 border-l border-gray-100 overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800">主题快速切换</h3>
        <ChevronUp size={18} className="text-gray-400" />
      </div>

      {/* Topic list */}
      <div className="space-y-2 mb-6">
        {/* Domain overview */}
        <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-blue-50 border border-blue-100 transition-all">
          <div 
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${domain.gradient[0]}, ${domain.gradient[1]})` }}
          >
            <Brain size={20} className="text-white" />
          </div>
          <div className="flex-1 text-left">
            <p className="font-medium text-gray-800 text-sm">{domain.name}（总览）</p>
            <p className="text-xs text-gray-500">{topics.reduce((sum, t) => sum + t.articleCount, 0).toLocaleString()}</p>
          </div>
        </button>

        {/* Topic items */}
        {topics.map((topic, index) => {
          const IconComponent = iconMap[topic.id.includes('llm') ? 'MessageSquare' : 
                                        topic.id.includes('cv') ? 'Eye' :
                                        topic.id.includes('knowledge') ? 'Network' :
                                        topic.id.includes('multimodal') ? 'Layers' :
                                        topic.id.includes('theory') ? 'BookOpen' :
                                        topic.id.includes('rl') ? 'Target' : 'Brain'] || Brain;
          const isSelected = selectedTopic?.id === topic.id;
          
          return (
            <motion.button
              key={topic.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => onTopicChange(topic)}
              className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${
                isSelected 
                  ? 'bg-gray-50 border border-gray-200' 
                  : 'hover:bg-gray-50'
              }`}
            >
              <div 
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                  isSelected ? 'ring-2 ring-offset-1' : ''
                }`}
                style={{ 
                  background: `linear-gradient(135deg, ${domain.gradient[0]}40, ${domain.gradient[1]}40)`,
                  ringColor: isSelected ? domain.color : 'transparent',
                }}
              >
                <IconComponent size={20} style={{ color: domain.color }} />
              </div>
              <div className="flex-1 text-left">
                <p className={`font-medium text-sm ${isSelected ? 'text-gray-800' : 'text-gray-600'}`}>
                  {topic.name}
                </p>
                <p className="text-xs text-gray-400">{topic.articleCount.toLocaleString()}</p>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Liu Kan Shan Tips Card */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-4 border border-blue-100">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
            <span className="text-xl">🐧</span>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 text-sm mb-2">刘看山的提示</h4>
            <p className="text-xs text-gray-600 leading-relaxed mb-3">
              你在「{domain.name}」领域的攀登进度
            </p>
            <div className="bg-white rounded-xl p-3 mb-3">
              <p className="text-sm text-gray-700">
                已掌握 <span className="font-bold text-blue-600">24%</span> 的内容，超过了 <span className="font-bold text-blue-600">62%</span> 的同路人！
              </p>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed mb-3">
              继续加油，你已经掌握了 AI 世界的基础，下一步可以深入探索感兴趣的子主题哦！
            </p>
            <button className="w-full py-2.5 bg-[#0066FF] text-white rounded-xl text-sm font-medium hover:bg-blue-600 transition-colors">
              继续探索
            </button>
            <button className="w-full mt-2 py-2.5 bg-white border border-gray-200 text-gray-600 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">
              回顾复习
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
