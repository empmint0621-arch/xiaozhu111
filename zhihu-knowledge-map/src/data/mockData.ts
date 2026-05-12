import type { UserData, ReadingStats, Domain, Topic, Article, RelatedArticle, CollectionLink } from './types';

// 用户数据
export const mockUserData: UserData = {
  id: '1',
  avatar: 'https://pic1.zhimg.com/v2-8e9c9c8c9c9c9c9c9c9c9c9c9c9c9c9c_s.jpg',
  nickname: '知乎用户',
  level: 5,
  title: '知识探索者',
  followedDomains: 23,
  totalArticles: 1246,
};

// 阅读统计
export const mockReadingStats: ReadingStats = {
  read: { count: 732, percentage: 58 },
  browsing: { count: 214, percentage: 17 },
  unread: { count: 300, label: '300+' },
  mastery: {
    beginner: 18,
    intermediate: 50,
    advanced: 32,
  },
  dustyContent: 37,
};

// 领域数据
export const mockDomains: Domain[] = [
  {
    id: 'ai',
    name: '人工智能',
    icon: 'Brain',
    articleCount: 486,
    color: '#6366F1',
    gradient: ['#6366F1', '#8B5CF6'],
    lightColor: '#EEF2FF',
    position: { x: 50, y: 20 },
    subDomains: [
      { id: 'llm', name: '大语言模型', articleCount: 186 },
      { id: 'cv', name: '计算机视觉', articleCount: 126 },
      { id: 'nlp', name: '自然语言处理', articleCount: 208 },
    ],
  },
  {
    id: 'sociology',
    name: '社会学',
    icon: 'Users',
    articleCount: 198,
    color: '#06B6D4',
    gradient: ['#06B6D4', '#22D3EE'],
    lightColor: '#ECFEFF',
    position: { x: 75, y: 25 },
    subDomains: [
      { id: 'social-psychology', name: '社会心理学', articleCount: 86 },
      { id: 'social-biology', name: '社会生物学', articleCount: 526 },
      { id: 'social-structure', name: '社会结构', articleCount: 48 },
      { id: 'org-behavior', name: '组织行为学', articleCount: 64 },
    ],
  },
  {
    id: 'philosophy',
    name: '哲学',
    icon: 'Lightbulb',
    articleCount: 368,
    color: '#10B981',
    gradient: ['#10B981', '#34D399'],
    lightColor: '#ECFDF5',
    position: { x: 25, y: 35 },
    subDomains: [
      { id: 'ethics', name: '伦理学', articleCount: 126 },
      { id: 'epistemology', name: '认识论', articleCount: 98 },
      { id: 'logic', name: '逻辑学', articleCount: 72 },
    ],
  },
  {
    id: 'economics',
    name: '经济学',
    icon: 'TrendingUp',
    articleCount: 421,
    color: '#8B5CF6',
    gradient: ['#8B5CF6', '#A78BFA'],
    lightColor: '#F5F3FF',
    position: { x: 70, y: 45 },
    subDomains: [
      { id: 'econ-principles', name: '经济学原理', articleCount: 186 },
      { id: 'micro-econ', name: '微观经济学', articleCount: 126 },
      { id: 'macro-econ', name: '宏观经济学', articleCount: 109 },
      { id: 'metrics', name: '计量经济学', articleCount: 87 },
    ],
  },
  {
    id: 'literature',
    name: '文学',
    icon: 'BookOpen',
    articleCount: 532,
    color: '#F59E0B',
    gradient: ['#F59E0B', '#FBBF24'],
    lightColor: '#FFFBEB',
    position: { x: 45, y: 55 },
    subDomains: [
      { id: 'chinese-lit', name: '中国文学', articleCount: 186 },
      { id: 'world-lit', name: '世界文学', articleCount: 156 },
      { id: 'lit-theory', name: '文学理论', articleCount: 112 },
      { id: 'comparative-lit', name: '比较文学', articleCount: 78 },
    ],
  },
  {
    id: 'psychology',
    name: '心理学',
    icon: 'Heart',
    articleCount: 287,
    color: '#EC4899',
    gradient: ['#EC4899', '#F472B6'],
    lightColor: '#FDF2F8',
    position: { x: 20, y: 60 },
    subDomains: [
      { id: 'cognitive-psy', name: '认知心理学', articleCount: 126 },
      { id: 'developmental-psy', name: '发展心理学', articleCount: 92 },
      { id: 'social-psy', name: '社会心理学', articleCount: 69 },
    ],
  },
  {
    id: 'art',
    name: '艺术',
    icon: 'Palette',
    articleCount: 156,
    color: '#3B82F6',
    gradient: ['#3B82F6', '#60A5FA'],
    lightColor: '#EFF6FF',
    position: { x: 35, y: 75 },
    subDomains: [
      { id: 'painting', name: '绘画', articleCount: 48 },
      { id: 'music', name: '音乐', articleCount: 56 },
      { id: 'design', name: '设计', articleCount: 52 },
    ],
  },
  {
    id: 'law',
    name: '法学',
    icon: 'Scale',
    articleCount: 142,
    color: '#7C3AED',
    gradient: ['#7C3AED', '#8B5CF6'],
    lightColor: '#F5F3FF',
    position: { x: 55, y: 80 },
    subDomains: [
      { id: 'jurisprudence', name: '法理学', articleCount: 48 },
      { id: 'civil-law', name: '民法学', articleCount: 52 },
      { id: 'criminal-law', name: '刑法学', articleCount: 42 },
    ],
  },
  {
    id: 'history',
    name: '历史',
    icon: 'Clock',
    articleCount: 314,
    color: '#D97706',
    gradient: ['#D97706', '#F59E0B'],
    lightColor: '#FFFBEB',
    position: { x: 80, y: 70 },
    subDomains: [
      { id: 'chinese-history', name: '中国历史', articleCount: 126 },
      { id: 'world-history', name: '世界历史', articleCount: 128 },
    ],
  },
];

// 主题数据（以人工智能为例）
export const mockTopics: Topic[] = [
  {
    id: 'llm-topic',
    name: '大语言模型',
    articleCount: 1856,
    domainId: 'ai',
    position: { x: 70, y: 30 },
    articles: [
      {
        id: '1',
        title: 'ChatGPT 技术原理与实践解析',
        summary: '深入解析 ChatGPT 的技术架构、训练过程和核心机制，帮助你全面理解大语言模型的工作原理。',
        status: 'read',
        readTime: 15,
        tags: ['大语言模型', '技术解析', '实践案例'],
      },
      {
        id: '2',
        title: '大语言模型训练范式详解',
        summary: '从预训练到微调，全面讲解大语言模型的训练流程和最佳实践。',
        status: 'browsing',
        tags: ['训练', '范式', 'LLM'],
      },
      {
        id: '3',
        title: 'Prompt Engineering 完全指南',
        summary: '掌握提示工程的核心技巧，提升与大语言模型的交互效率。',
        status: 'unread',
        tags: ['Prompt', '工程', '指南'],
      },
    ],
  },
  {
    id: 'cv-topic',
    name: '计算机视觉',
    articleCount: 1342,
    domainId: 'ai',
    position: { x: 30, y: 25 },
    articles: [
      {
        id: '4',
        title: 'Transformer 在视觉领域的应用',
        summary: '探索 Vision Transformer 如何将注意力机制应用于图像处理任务。',
        status: 'read',
        readTime: 12,
        tags: ['Transformer', '视觉', '注意力'],
      },
      {
        id: '5',
        title: '目标检测算法综述',
        summary: '从 R-CNN 到 YOLO，全面梳理目标检测算法的发展历程。',
        status: 'browsing',
        tags: ['目标检测', '算法', '综述'],
      },
      {
        id: '6',
        title: '从 GAN 到扩散模型',
        summary: '生成式模型的演进之路，理解图像生成的核心原理。',
        status: 'unread',
        tags: ['GAN', '扩散模型', '生成'],
      },
    ],
  },
  {
    id: 'knowledge-graph',
    name: '知识图谱',
    articleCount: 1102,
    domainId: 'ai',
    position: { x: 50, y: 45 },
    articles: [
      {
        id: '7',
        title: '知识图谱构建方法论',
        summary: '从数据抽取到知识融合，系统讲解知识图谱的构建流程。',
        status: 'read',
        readTime: 20,
        tags: ['知识图谱', '构建', '方法论'],
      },
      {
        id: '8',
        title: '图谱嵌入技术综述',
        summary: 'TransE、DistMult、ComplEx 等图谱嵌入算法的原理与对比。',
        status: 'unread',
        tags: ['嵌入', '图谱', '算法'],
      },
      {
        id: '9',
        title: '实战：构建医疗知识图谱',
        summary: '以医疗领域为例，手把手教你构建领域知识图谱。',
        status: 'unread',
        tags: ['实战', '医疗', '知识图谱'],
      },
    ],
  },
  {
    id: 'multimodal',
    name: '多模态模型',
    articleCount: 721,
    domainId: 'ai',
    position: { x: 75, y: 60 },
    articles: [
      {
        id: '10',
        title: 'CLIP 模型原理解析',
        summary: '理解 OpenAI 的 CLIP 模型如何实现图像和文本的跨模态对齐。',
        status: 'browsing',
        tags: ['CLIP', '多模态', '跨模态'],
      },
      {
        id: '11',
        title: '多模态对齐方法研究',
        summary: '探索不同模态数据的表示学习方法和对齐技术。',
        status: 'unread',
        tags: ['多模态', '对齐', '表示学习'],
      },
      {
        id: '12',
        title: '图文生成技术综述',
        summary: '从 DALL-E 到 Stable Diffusion，图文生成技术的最新进展。',
        status: 'unread',
        tags: ['图文生成', 'DALL-E', '综述'],
      },
    ],
  },
  {
    id: 'ai-theory',
    name: 'AI 基础理论',
    articleCount: 754,
    domainId: 'ai',
    position: { x: 25, y: 55 },
    articles: [
      {
        id: '13',
        title: '深度学习基础概念',
        summary: '神经网络、反向传播、优化算法等核心概念的深入讲解。',
        status: 'read',
        readTime: 25,
        tags: ['深度学习', '基础', '神经网络'],
      },
      {
        id: '14',
        title: '神经网络反向传播详解',
        summary: '从数学原理到代码实现，彻底理解反向传播算法。',
        status: 'browsing',
        tags: ['反向传播', '神经网络', '数学'],
      },
      {
        id: '15',
        title: '强化学习入门指南',
        summary: '从 MDP 到 Q-Learning，强化学习的核心概念和算法。',
        status: 'unread',
        tags: ['强化学习', '入门', 'Q-Learning'],
      },
    ],
  },
  {
    id: 'rl',
    name: '强化学习',
    articleCount: 967,
    domainId: 'ai',
    position: { x: 45, y: 75 },
    articles: [
      {
        id: '16',
        title: '强化学习环境设计',
        summary: '如何设计有效的强化学习环境和奖励函数。',
        status: 'read',
        readTime: 18,
        tags: ['强化学习', '环境设计', '奖励函数'],
      },
      {
        id: '17',
        title: '策略梯度方法详解',
        summary: 'REINFORCE、Actor-Critic 等策略梯度算法的原理和实现。',
        status: 'unread',
        tags: ['策略梯度', 'Actor-Critic', '算法'],
      },
      {
        id: '18',
        title: 'AlphaGo 技术解析',
        summary: '深入分析 AlphaGo 的蒙特卡洛树搜索和深度神经网络。',
        status: 'unread',
        tags: ['AlphaGo', 'MCTS', '深度神经网络'],
      },
    ],
  },
];

// 伴读助手相关数据
export const mockArticleSummary = '大模型通过规模化学习实现能力跃迁，正推动个性化学习与知识获取方式的变革。';

export const mockRelatedArticles: RelatedArticle[] = [
  {
    id: 'r1',
    title: '大模型如何影响我们的学习习惯？',
    image: 'https://pic1.zhimg.com/v2-1234567890_s.jpg',
    tag: '同主题',
  },
  {
    id: 'r2',
    title: 'AI 时代的学习方法论',
    image: 'https://pic2.zhimg.com/v2-0987654321_s.jpg',
    tag: '同主题',
  },
  {
    id: 'r3',
    title: '从记忆到理解：学习范式的转变',
    image: 'https://pic3.zhimg.com/v2-1122334455_s.jpg',
    tag: '同主题',
  },
];

export const mockCollectionLinks: CollectionLink[] = [
  { id: 'c1', title: '你收藏的《深度学习入门》相关', type: 'collection' },
  { id: 'c2', title: '阅读过的《AI 如何改变教育》相关', type: 'history' },
  { id: 'c3', title: '浏览过的《机器学习基础》相关', type: 'history' },
];

export const mockTodayStats = {
  read: 5,
  domains: 2,
};
