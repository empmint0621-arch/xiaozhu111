// 用户数据
export interface UserData {
  id: string;
  avatar: string;
  nickname: string;
  level: number;
  title: string;
  followedDomains: number;
  totalArticles: number;
}

// 阅读统计
export interface ReadingStats {
  read: { count: number; percentage: number };
  browsing: { count: number; percentage: number };
  unread: { count: number; label: string };
  mastery: {
    beginner: number;
    intermediate: number;
    advanced: number;
  };
  dustyContent: number;
}

// 子领域
export interface SubDomain {
  id: string;
  name: string;
  articleCount: number;
}

// 领域数据
export interface Domain {
  id: string;
  name: string;
  icon: string;
  articleCount: number;
  color: string;
  gradient: string[];
  lightColor: string;
  subDomains: SubDomain[];
  position: { x: number; y: number };
}

// 文章数据
export interface Article {
  id: string;
  title: string;
  summary: string;
  status: 'read' | 'browsing' | 'unread';
  readTime?: number;
  tags: string[];
}

// 主题数据
export interface Topic {
  id: string;
  name: string;
  articleCount: number;
  domainId: string;
  articles: Article[];
  position: { x: number; y: number };
}

// 视图状态
export type ViewType = 'assistant' | 'domain-map' | 'topic-map';

export interface ViewState {
  currentView: ViewType;
  selectedDomain: Domain | null;
  selectedTopic: Topic | null;
}

// 伴读助手相关
export interface RelatedArticle {
  id: string;
  title: string;
  image?: string;
  tag?: string;
}

export interface CollectionLink {
  id: string;
  title: string;
  type: 'collection' | 'history';
}
