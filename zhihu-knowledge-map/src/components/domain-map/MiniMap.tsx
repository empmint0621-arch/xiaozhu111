import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, Target } from 'lucide-react';
import type { Domain } from '../../data/types';

interface MiniMapProps {
  domains: Domain[];
  onDomainClick: (domain: Domain) => void;
  selectedDomain?: Domain | null;
}

export function MiniMap({ domains, onDomainClick, selectedDomain }: MiniMapProps) {
  const [scale, setScale] = useState(1);

  return (
    <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-4 w-48">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium text-gray-600">全局领域地图</span>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setScale(s => Math.min(s + 0.2, 2))}
            className="p-1 hover:bg-gray-100 rounded transition-colors"
          >
            <Plus size={14} className="text-gray-600" />
          </button>
          <button
            onClick={() => setScale(s => Math.max(s - 0.2, 0.5))}
            className="p-1 hover:bg-gray-100 rounded transition-colors"
          >
            <Minus size={14} className="text-gray-600" />
          </button>
        </div>
      </div>

      <div className="relative h-32 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ scale }}
        >
          {domains.map((domain) => (
            <motion.button
              key={domain.id}
              onClick={() => onDomainClick(domain)}
              className={`absolute w-4 h-4 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all ${
                selectedDomain?.id === domain.id
                  ? 'ring-2 ring-offset-1 ring-blue-500 scale-125'
                  : 'hover:scale-110'
              }`}
              style={{
                left: `${domain.position.x}%`,
                top: `${domain.position.y}%`,
                backgroundColor: domain.color,
              }}
              whileHover={{ scale: 1.2 }}
              title={domain.name}
            />
          ))}
        </motion.div>

        {/* Center indicator */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Target size={16} className="text-gray-300" />
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
        <span>{domains.length} 个领域</span>
        <span className="text-blue-500 cursor-pointer hover:underline">查看全部</span>
      </div>
    </div>
  );
}
