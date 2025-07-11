export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  isTyping?: boolean;
}

export interface StatCard {
  title: string;
  value: string | number;
  description: string;
}

export interface QuickPrompt {
  id: string;
  title: string;
  prompt: string;
  category: string;
}
