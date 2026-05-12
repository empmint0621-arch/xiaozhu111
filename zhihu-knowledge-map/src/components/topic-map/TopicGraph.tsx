import { motion } from 'framer-motion';
import { Brain, Cpu, Network, Layers, BookOpen, Target, MessageSquare, Eye, FileText } from 'lucide-react';
import type { Domain, Topic } from '../../data/types';

interface TopicGraphProps {
  domain: Domain;
  topics: Topic[];
  selectedTopic: Topic | null;
  onTopicSelect: (topic: Topic) => void;
}

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Brain,
  Cpu,
  Network,
  Layers,
  BookOpen,
  Target,
  MessageSquare,
  Eye,
  FileText,
};

export function TopicGraph({ domain, topics, selectedTopic, onTopicSelect }: TopicGraphProps) {
  // Calculate positions for topics around the center
  const centerX = 50;
  const centerY = 50;
  const radius = 35;

  const getTopicPosition = (index: number, total: number) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    };
  };

  return (
    <div className="relative flex-1 bg-gradient-to-br from-blue-50/30 to-purple-50/30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"
          style={{ background: `radial-gradient(circle, ${domain.color}20 0%, transparent 70%)` }}
        ></div>
      </div>

      {/* SVG Graph */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        {/* Connection lines from center to topics */}
        {topics.map((topic, index) => {
          const pos = getTopicPosition(index, topics.length);
          return (
            <motion.line
              key={`line-${topic.id}`}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              x1={centerX}
              y1={centerY}
              x2={pos.x}
              y2={pos.y}
              stroke={domain.color}
              strokeWidth="0.3"
              strokeDasharray="2 1"
            />
          );
        })}

        {/* Curved connections between adjacent topics */}
        {topics.map((topic, index) => {
          const nextIndex = (index + 1) % topics.length;
          const pos1 = getTopicPosition(index, topics.length);
          const pos2 = getTopicPosition(nextIndex, topics.length);
          const midX = (pos1.x + pos2.x) / 2;
          const midY = (pos1.y + pos2.y) / 2;
          
          return (
            <motion.path
              key={`curve-${topic.id}`}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
              d={`M ${pos1.x} ${pos1.y} Q ${centerX} ${centerY} ${pos2.x} ${pos2.y}`}
              fill="none"
              stroke={domain.color}
              strokeWidth="0.2"
            />
          );
        })}
      </svg>

      {/* Center domain node */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <div 
          className="w-24 h-24 rounded-full flex flex-col items-center justify-center text-white shadow-xl"
          style={{ background: `linear-gradient(135deg, ${domain.gradient[0]}, ${domain.gradient[1]})` }}
        >
          <Brain size={32} className="mb-1" />
          <span className="text-xs font-medium">{domain.name}</span>
          <span className="text-xs opacity-80">{topics.reduce((sum, t) => sum + t.articleCount, 0).toLocaleString()} 篇文章</span>
        </div>
      </motion.div>

      {/* Topic nodes */}
      {topics.map((topic, index) => {
        const pos = getTopicPosition(index, topics.length);
        const isSelected = selectedTopic?.id === topic.id;
        const IconComponent = iconMap[topic.id.includes('llm') ? 'MessageSquare' : 
                                      topic.id.includes('cv') ? 'Eye' :
                                      topic.id.includes('knowledge') ? 'Network' :
                                      topic.id.includes('multimodal') ? 'Layers' :
                                      topic.id.includes('theory') ? 'BookOpen' :
                                      topic.id.includes('rl') ? 'Target' : 'Brain'] || Brain;
        
        return (
          <motion.div
            key={topic.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            className="absolute cursor-pointer group"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
            onClick={() => onTopicSelect(topic)}
          >
            {/* Topic node */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className={`relative w-16 h-16 rounded-2xl flex flex-col items-center justify-center shadow-lg transition-all ${
                isSelected ? 'ring-4 ring-offset-2' : ''
              }`}
              style={{ 
                background: `linear-gradient(135deg, ${domain.gradient[0]}80, ${domain.gradient[1]}80)`,
                backdropFilter: 'blur(10px)',
                ringColor: isSelected ? domain.color : 'transparent',
              }}
            >
              <IconComponent size={24} className="text-white mb-1" />
            </motion.div>

            {/* Topic label */}
            <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap transition-all ${
              isSelected ? 'scale-110' : ''
            }`}>
              <p className="font-semibold text-gray-800 text-sm text-center">{topic.name}</p>
              <p className="text-xs text-gray-500 text-center">{topic.articleCount} 篇</p>
            </div>

            {/* Article preview on hover/selection */}
            {(isSelected || true) && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-16 w-48 bg-white rounded-xl shadow-lg border border-gray-100 p-3 z-20"
              >
                <p className="text-xs text-gray-400 mb-2">+更多</p>
                {topic.articles.slice(0, 2).map((article, idx) => (
                  <div key={article.id} className="flex items-start gap-2 mb-2 last:mb-0">
                    <span className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                      article.status === 'read' ? 'bg-blue-500' :
                      article.status === 'browsing' ? 'bg-emerald-500' : 'bg-gray-300'
                    }`}></span>
                    <p className="text-xs text-gray-600 line-clamp-2">{article.title}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        );
      })}

      {/* Legend */}
      <div className="absolute bottom-6 left-6 flex items-center gap-4 text-xs text-gray-500 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
          <span>已读（已掌握）</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 bg-emerald-500 rounded-full"></span>
          <span>浏览中（学习中）</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span>未读推荐</span>
        </div>
      </div>
    </div>
  );
}
