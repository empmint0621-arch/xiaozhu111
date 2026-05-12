import { motion } from 'framer-motion';
import { Sparkles, X } from 'lucide-react';
import { useState } from 'react';

interface LiuKanShanTipsProps {
  currentDomain?: string;
}

export function LiuKanShanTips({ currentDomain = '人工智能' }: LiuKanShanTipsProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className="absolute bottom-24 right-6 z-20"
    >
      {/* Tip bubble */}
      <div className="relative">
        <div className="bg-white rounded-2xl p-4 shadow-xl border border-blue-100 max-w-xs">
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          >
            <X size={14} />
          </button>
          
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Sparkles size={16} className="text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 text-sm mb-1">刘看山的智能提示</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                你最近在「{currentDomain}」领域投入很深哦！要不要探索一下新领域？「心理学」可能会有新发现！
              </p>
            </div>
          </div>
        </div>
        
        {/* Triangle pointer */}
        <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-r border-b border-blue-100 transform rotate-45"></div>
      </div>

      {/* Liu Kan Shan character */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-16 right-0"
      >
        <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-blue-100">
          <span className="text-3xl">🐧</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
