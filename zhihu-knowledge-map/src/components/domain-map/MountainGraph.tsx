import { motion } from 'framer-motion';
import { Brain, Users, Lightbulb, TrendingUp, BookOpen, Heart, Palette, Scale, Clock } from 'lucide-react';
import type { Domain } from '../../data/types';

interface MountainGraphProps {
  domains: Domain[];
  onDomainClick: (domain: Domain) => void;
}

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Brain,
  Users,
  Lightbulb,
  TrendingUp,
  BookOpen,
  Heart,
  Palette,
  Scale,
  Clock,
};

export function MountainGraph({ domains, onDomainClick }: MountainGraphProps) {
  return (
    <div className="relative flex-1 bg-gradient-to-br from-blue-50/50 to-purple-50/50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-100 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Mountain peaks container */}
      <div className="relative w-full h-full p-8">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Connection lines between domains */}
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E5E7EB" />
              <stop offset="50%" stopColor="#D1D5DB" />
              <stop offset="100%" stopColor="#E5E7EB" />
            </linearGradient>
          </defs>
          {/* Draw curved connections */}
          <path
            d="M 50 20 Q 62 22 75 25"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="0.3"
            strokeDasharray="2 1"
          />
          <path
            d="M 50 20 Q 37 27 25 35"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="0.3"
            strokeDasharray="2 1"
          />
          <path
            d="M 25 35 Q 35 45 45 55"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="0.3"
            strokeDasharray="2 1"
          />
          <path
            d="M 45 55 Q 57 67 55 80"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="0.3"
            strokeDasharray="2 1"
          />
          <path
            d="M 75 25 Q 72 35 70 45"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="0.3"
            strokeDasharray="2 1"
          />
          <path
            d="M 70 45 Q 58 50 45 55"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="0.3"
            strokeDasharray="2 1"
          />
        </svg>

        {/* Domain nodes */}
        {domains.map((domain, index) => {
          const IconComponent = iconMap[domain.icon] || Brain;
          
          return (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="absolute cursor-pointer group"
              style={{
                left: `${domain.position.x}%`,
                top: `${domain.position.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
              onClick={() => onDomainClick(domain)}
            >
              {/* Mountain shape */}
              <div className="relative">
                {/* Glow effect */}
                <div 
                  className="absolute inset-0 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity"
                  style={{ background: `linear-gradient(135deg, ${domain.gradient[0]}, ${domain.gradient[1]})` }}
                ></div>
                
                {/* Main mountain */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative w-24 h-24 rounded-2xl flex flex-col items-center justify-center text-white shadow-lg transition-shadow group-hover:shadow-2xl"
                  style={{ 
                    background: `linear-gradient(135deg, ${domain.gradient[0]}, ${domain.gradient[1]})`,
                    clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
                  }}
                >
                  <div className="mt-4">
                    <IconComponent size={24} className="text-white/90" />
                  </div>
                </motion.div>

                {/* Domain info card */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-xl px-4 py-2 shadow-lg border border-gray-100 whitespace-nowrap group-hover:shadow-xl transition-shadow">
                  <p className="font-semibold text-gray-800 text-sm">{domain.name}</p>
                  <p className="text-xs text-gray-500">{domain.articleCount} 篇文章</p>
                </div>

                {/* Sub-domain tags */}
                <div className="absolute -right-32 top-0 flex flex-col gap-1">
                  {domain.subDomains.slice(0, 3).map((sub, idx) => (
                    <motion.div
                      key={sub.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + idx * 0.05 + 0.3 }}
                      className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs text-gray-600 shadow-sm border border-gray-100 flex items-center gap-2"
                    >
                      <span 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: domain.color }}
                      ></span>
                      {sub.name}
                      <span className="text-gray-400">{sub.articleCount}篇</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-sm text-gray-500 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
        <span className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center text-white text-xs">💡</span>
        <span>点击任意领域或子领域进入主题地图，探索更深层的知识</span>
        <span className="animate-bounce">↓</span>
      </div>
    </div>
  );
}
