import { motion } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';
import { StatsPanel } from './StatsPanel';
import { MountainGraph } from './MountainGraph';
import { LiuKanShanTips } from './LiuKanShanTips';
import { MiniMap } from './MiniMap';
import type { UserData, ReadingStats, Domain } from '../../data/types';

interface DomainMapProps {
  userData: UserData;
  stats: ReadingStats;
  domains: Domain[];
  onDomainClick: (domain: Domain) => void;
  onClose: () => void;
}

export function DomainMap({ userData, stats, domains, onDomainClick, onClose }: DomainMapProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className="fixed inset-0 z-50 flex items-center justify-center p-8 bg-black/30 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-6xl h-[85vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold text-gray-800">知识地图</h2>
              <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full font-medium">
                第一层 · 领域地图
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Sparkles size={16} className="text-amber-500" />
              <span>知识拥抱你，刘看山为你导航</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">山峰高度代表你的兴趣投入度</span>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              <X size={24} className="text-gray-500" />
            </button>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 flex overflow-hidden">
          <StatsPanel userData={userData} stats={stats} />
          
          <div className="flex-1 relative">
            <MountainGraph domains={domains} onDomainClick={onDomainClick} />
            <LiuKanShanTips />
            <MiniMap domains={domains} onDomainClick={onDomainClick} />
          </div>
        </div>

        {/* Explore more domains */}
        <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/50">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-600">探索更多领域</span>
            <div className="flex items-center gap-3">
              {['自然科学', '医学健康', '商业管理', '教育学习', '工程技术', '更多领域'].map((domain) => (
                <button
                  key={domain}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm text-gray-600 hover:border-blue-300 hover:text-blue-600 transition-all"
                >
                  {domain}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
