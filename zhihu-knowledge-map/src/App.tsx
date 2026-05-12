import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ReadingAssistant } from './components/assistant/ReadingAssistant';
import { DomainMap } from './components/domain-map/DomainMap';
import { TopicMap } from './components/topic-map/TopicMap';
import { 
  mockUserData, 
  mockReadingStats, 
  mockDomains, 
  mockTopics,
  mockArticleSummary,
  mockRelatedArticles,
  mockCollectionLinks,
  mockTodayStats,
} from './data/mockData';
import type { Domain, ViewType } from './data/types';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('assistant');
  const [selectedDomain, setSelectedDomain] = useState<Domain | null>(null);
  const [isAssistantExpanded, setIsAssistantExpanded] = useState(true);

  const handleOpenDomainMap = () => {
    setCurrentView('domain-map');
  };

  const handleDomainClick = (domain: Domain) => {
    setSelectedDomain(domain);
    setCurrentView('topic-map');
  };

  const handleBackToDomainMap = () => {
    setCurrentView('domain-map');
    setSelectedDomain(null);
  };

  const handleClose = () => {
    setCurrentView('assistant');
    setSelectedDomain(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Demo background - simulating Zhihu article page */}
      <div className="p-8 max-w-4xl mx-auto">
        {/* Mock Zhihu Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold text-blue-600">知乎</h1>
            <nav className="flex items-center gap-6 text-sm text-gray-600">
              <span className="hover:text-gray-900 cursor-pointer">首页</span>
              <span className="hover:text-gray-900 cursor-pointer">知乎直答</span>
              <span className="hover:text-gray-900 cursor-pointer">发现</span>
              <span className="hover:text-gray-900 cursor-pointer">等你来答</span>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-64 px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-500">
              搜索知乎内容
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">
              提问
            </button>
          </div>
        </div>

        {/* Mock Article Content */}
        <article className="bg-white rounded-2xl p-8 shadow-sm">
          {/* Article header */}
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">科技</span>
            <span className="text-gray-500 text-sm">AI 大模型如何改变我们的学习方式？</span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            AI 大模型如何改变我们的学习方式？
          </h1>

          {/* Author info */}
          <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              知
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-800">知乎官方账号</span>
                <span className="text-blue-500">✓</span>
              </div>
              <p className="text-sm text-gray-500">知乎 官方账号</p>
            </div>
            <button className="ml-auto px-4 py-1.5 border border-blue-600 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-50 transition-colors">
              关注
            </button>
          </div>

          {/* Article content */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              随着人工智能技术的飞速发展，大模型正在深刻地改变着我们的学习方式。
            </p>
            <p className="mb-4">
              从个性化学习到知识获取的便捷性，AI 大模型为学习者提供了前所未有的机会和挑战。
            </p>
            
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. 个性化学习体验</h3>
            <p className="mb-4">
              大模型能够根据学习者的兴趣、能力和进度，提供个性化的学习内容和建议。
              这种定制化的学习体验意味着每个人都可以拥有专属的学习路径，从而更高效地掌握知识。
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. 知识获取的便捷性</h3>
            <p className="mb-4">
              在过去，我们需要在海量信息中筛选有价值的内容。而现在，大模型可以帮助我们快
              速提炼关键信息，节省大量时间。
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. 培养批判性思维</h3>
            <p className="mb-4">
              大模型不仅提供答案，还能引导我们进行更深入的思考，帮助我们培养批判性思维能力，
              更好地理解复杂问题。
            </p>
          </div>

          {/* Article footer */}
          <div className="flex items-center gap-6 mt-8 pt-6 border-t border-gray-100">
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
              <span>▲</span> 赞同 1.2K
            </button>
            <button className="flex items-center gap-2 text-gray-500 text-sm">
              <span>💬</span> 426 条评论
            </button>
            <button className="flex items-center gap-2 text-gray-500 text-sm">
              <span>↗</span> 分享
            </button>
            <button className="flex items-center gap-2 text-gray-500 text-sm">
              <span>⭐</span> 收藏
            </button>
            <button className="flex items-center gap-2 text-gray-500 text-sm">
              <span>♡</span> 喜欢
            </button>
          </div>
        </article>

        {/* Related articles sidebar mock */}
        <div className="mt-8 grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <h3 className="font-bold text-gray-800 mb-4">相关阅读推荐</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">大模型如何影响我们的学习习惯？</h4>
                    <p className="text-sm text-gray-500 mb-2">1.2 万赞同</p>
                    <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded">同主题</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-4">关于作者</h3>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                  知
                </div>
                <div>
                  <p className="font-medium text-gray-800">知乎官方账号</p>
                  <p className="text-sm text-gray-500">知乎 官方账号</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center mb-4">
                <div>
                  <p className="font-bold text-gray-800">1,221</p>
                  <p className="text-xs text-gray-500">回答</p>
                </div>
                <div>
                  <p className="font-bold text-gray-800">312</p>
                  <p className="text-xs text-gray-500">文章</p>
                </div>
                <div>
                  <p className="font-bold text-gray-800">120 万</p>
                  <p className="text-xs text-gray-500">关注者</p>
                </div>
              </div>
              <button className="w-full py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">
                + 关注他
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Reading Assistant */}
      <ReadingAssistant
        articleSummary={mockArticleSummary}
        relatedArticles={mockRelatedArticles}
        collectionLinks={mockCollectionLinks}
        todayStats={mockTodayStats}
        onOpenDomainMap={handleOpenDomainMap}
        isExpanded={isAssistantExpanded}
        onToggleExpand={() => setIsAssistantExpanded(!isAssistantExpanded)}
      />

      {/* Domain Map Modal */}
      <AnimatePresence>
        {currentView === 'domain-map' && (
          <DomainMap
            userData={mockUserData}
            stats={mockReadingStats}
            domains={mockDomains}
            onDomainClick={handleDomainClick}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>

      {/* Topic Map Modal */}
      <AnimatePresence>
        {currentView === 'topic-map' && selectedDomain && (
          <TopicMap
            domain={selectedDomain}
            topics={mockTopics}
            onBack={handleBackToDomainMap}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
