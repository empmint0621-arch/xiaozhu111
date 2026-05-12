import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number): string {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

export function getStatusColor(status: 'read' | 'browsing' | 'unread'): string {
  switch (status) {
    case 'read':
      return 'bg-blue-500';
    case 'browsing':
      return 'bg-emerald-500';
    case 'unread':
      return 'bg-gray-300';
    default:
      return 'bg-gray-300';
  }
}

export function getStatusText(status: 'read' | 'browsing' | 'unread'): string {
  switch (status) {
    case 'read':
      return '已读';
    case 'browsing':
      return '浏览中';
    case 'unread':
      return '未读';
    default:
      return '未读';
  }
}
