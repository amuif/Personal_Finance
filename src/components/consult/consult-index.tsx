import type React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Copy, ThumbsUp, ThumbsDown, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import type { Message, QuickPrompt, StatCard } from '@/types/consult';
import Clara from '../../../public/images/clara.png';

const ConsultIndex = () => {
  return (
    <div>
      <AIConsultant />
    </div>
  );
};

export default ConsultIndex;

export function AIConsultant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content:
        "Hello! I'm your AI financial consultant. I can help you with budgeting, investment advice, financial planning, and answer any money-related questions you have. How can I assist you today?",
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const quickPrompts: QuickPrompt[] = [
    {
      id: '1',
      title: 'Budget Analysis',
      prompt:
        'Can you help me analyze my monthly budget and suggest improvements?',
      category: 'budgeting',
    },
    {
      id: '2',
      title: 'Investment Strategy',
      prompt:
        'What investment strategy would you recommend for someone in their 30s?',
      category: 'investing',
    },
    {
      id: '3',
      title: 'Emergency Fund',
      prompt:
        'How much should I have in my emergency fund and where should I keep it?',
      category: 'savings',
    },
    {
      id: '4',
      title: 'Debt Management',
      prompt: "What's the best strategy to pay off multiple debts efficiently?",
      category: 'debt',
    },
  ];

  const totalMessages = messages.length;
  const userMessages = messages.filter((msg) => msg.sender === 'user').length;
  const aiResponses = messages.filter((msg) => msg.sender === 'ai').length;
  const avgResponseTime = '1.2s';

  const statsCards: StatCard[] = [
    {
      title: 'Total Messages',
      value: totalMessages,
      description: 'In this conversation',
    },
    {
      title: 'Questions Asked',
      value: userMessages,
      description: 'Your inquiries',
    },
    {
      title: 'AI Responses',
      value: aiResponses,
      description: 'Expert answers provided',
    },
    {
      title: 'Avg Response Time',
      value: avgResponseTime,
      description: 'Lightning fast replies',
    },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateAIResponse(inputMessage),
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const generateAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    if (input.includes('budget') || input.includes('spending')) {
      return 'Great question about budgeting! Here are some key strategies:\n\n1. **50/30/20 Rule**: Allocate 50% for needs, 30% for wants, and 20% for savings\n2. **Track your expenses** for at least a month to understand your spending patterns\n3. **Use budgeting apps** or spreadsheets to monitor your progress\n4. **Review and adjust** your budget monthly\n\nWould you like me to help you create a personalized budget based on your income and expenses?';
    }

    if (
      input.includes('invest') ||
      input.includes('stock') ||
      input.includes('portfolio')
    ) {
      return "Investment advice is crucial for building wealth! Here's what I recommend:\n\n1. **Start with an emergency fund** (3-6 months of expenses)\n2. **Diversify your portfolio** across different asset classes\n3. **Consider low-cost index funds** for long-term growth\n4. **Dollar-cost averaging** to reduce market timing risk\n5. **Review your risk tolerance** and investment timeline\n\nRemember: Past performance doesn't guarantee future results. Consider consulting with a licensed financial advisor for personalized advice.";
    }

    if (
      input.includes('debt') ||
      input.includes('loan') ||
      input.includes('credit')
    ) {
      return 'Debt management is essential for financial health! Here are proven strategies:\n\n1. **List all debts** with balances, interest rates, and minimum payments\n2. **Choose a strategy**:\n   - Debt Avalanche: Pay minimums on all, extra on highest interest rate\n   - Debt Snowball: Pay minimums on all, extra on smallest balance\n3. **Consider debt consolidation** if it lowers your overall interest rate\n4. **Avoid taking on new debt** while paying off existing debt\n\nWhich debt strategy appeals to you more, or would you like help calculating which would save you more money?';
    }

    if (input.includes('emergency') || input.includes('savings')) {
      return "Emergency funds are your financial safety net! Here's what you need to know:\n\n1. **Target amount**: 3-6 months of essential expenses\n2. **Where to keep it**: High-yield savings account or money market account\n3. **Build gradually**: Start with $1,000, then work toward your full goal\n4. **Keep it separate** from your regular checking account\n5. **Only use for true emergencies**: Job loss, medical bills, major repairs\n\nWould you like help calculating your ideal emergency fund amount based on your monthly expenses?";
    }

    return "Thank you for your question! I'm here to help with all aspects of personal finance including budgeting, investing, debt management, savings strategies, and financial planning. Could you provide more specific details about your situation so I can give you more targeted advice?";
  };

  const handleQuickPrompt = (prompt: string) => {
    setInputMessage(prompt);
    textareaRef.current?.focus();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const copyMessage = (content: string) => {
    navigator.clipboard.writeText(content);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className=" bg-background">
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {statsCards.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-4">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-lg">Quick Prompts</CardTitle>
              <CardDescription>
                Common financial questions to get started
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {quickPrompts.map((prompt) => (
                <Button
                  key={prompt.id}
                  variant="outline"
                  className="w-full justify-start text-left   h-auto p-3 bg-transparent"
                  onClick={() => handleQuickPrompt(prompt.prompt)}
                >
                  <div className="text-wrap">
                    <div className="font-medium  text-sm">{prompt.title}</div>
                    <div className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {prompt.prompt}
                    </div>
                  </div>
                </Button>
              ))}
            </CardContent>
          </Card>

          <Card className="lg:col-span-3">
            <CardHeader>
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div>
                    <CardTitle className="text-lg flex gap-2 pb-2">
                      <div className="w-8 h-8 rounded-full bg-[#194e3e] flex items-center justify-center">
                        <img
                          src={Clara}
                          alt="clara photo"
                          className="w-10 h-10"
                        />
                      </div>
                      Clara
                    </CardTitle>
                    <CardDescription className="text-sm md:tex-base">
                      Meet Clara, your intelligent consultant, delivering clear,
                      personalized guidance to optimize your experience.
                    </CardDescription>
                  </div>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800 absolute top-0 right-0"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Active
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="h-[280px] px-6">
                <div className="space-y-4 pb-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {message.sender === 'ai' && (
                        <Avatar className="w-8 h-8 mt-1">
                          <AvatarFallback className="bg-[#194e3e] text-white">
                            <img
                              src={Clara}
                              alt="clara photo"
                              className="w-10 h-10"
                            />
                          </AvatarFallback>
                        </Avatar>
                      )}
                      <div
                        className={`max-w-[80%] rounded-lg px-4 py-2 ${
                          message.sender === 'user'
                            ? 'bg-[#194e3e] text-white'
                            : 'bg-muted'
                        }`}
                      >
                        <div className="whitespace-pre-wrap text-sm">
                          {message.content}
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <div
                            className={`text-xs ${
                              message.sender === 'user'
                                ? 'text-white/70'
                                : 'text-muted-foreground'
                            }`}
                          >
                            {formatTime(message.timestamp)}
                          </div>
                          {message.sender === 'ai' && (
                            <div className="flex items-center gap-1">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 w-6 p-0"
                                onClick={() => copyMessage(message.content)}
                              >
                                <Copy className="w-3 h-3" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 w-6 p-0"
                              >
                                <ThumbsUp className="w-3 h-3" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 w-6 p-0"
                              >
                                <ThumbsDown className="w-3 h-3" />
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                      {message.sender === 'user' && (
                        <Avatar className="w-8 h-8 mt-1">
                          <AvatarImage src="/avatars/01.png" alt="User" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex gap-3 justify-start">
                      <Avatar className="w-8 h-8 mt-1">
                        <AvatarFallback className="bg-[#194e3e] text-white">
                          <img
                            src={Clara}
                            alt="clara photo"
                            className="w-10 h-10"
                          />
                        </AvatarFallback>
                      </Avatar>
                      <div className="max-w-[80%] rounded-lg px-4 py-2 bg-muted">
                        <div className="flex items-center gap-2">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: '0.1s' }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: '0.2s' }}
                            ></div>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            AI is typing...
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>

              <div className="border-t  p-4">
                <div className="flex gap-2">
                  <Textarea
                    ref={textareaRef}
                    placeholder="Ask me anything about personal finance..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="min-h-[60px] placeholder:text-xs lg:placeholder:text-base resize-none"
                    disabled={isLoading}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim() || isLoading}
                    style={{ backgroundColor: '#194e3e' }}
                    className="hover:bg-[#2d7a5f] px-6 h-14 rounded-lg"
                    size="lg"
                  >
                    <ArrowUp className="w-10 h-10" />
                  </Button>
                </div>
                <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                  <span>Press Enter to send, Shift+Enter for new line</span>
                  <span>{inputMessage.length}/2000</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
