import React from 'react';
import { User, Bot } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatMessage({ role, content }: ChatMessageProps) {
  const isUser = role === 'user';

  return (
    <div className={`flex w-full gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'} items-end my-3`}>
      {/* Avatar */}
      <div
        className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full shadow-sm"
        style={{
          background: isUser ? 'var(--accent)' : 'var(--bg-tertiary)',
          color: isUser ? 'var(--accent-text)' : 'var(--text-primary)',
        }}
      >
        {isUser ? <User size={16} /> : <Bot size={16} />}
      </div>

      {/* Bubble */}
      <div
        className="max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed break-words"
        style={{
          background: isUser ? 'var(--accent)' : 'var(--bg-card)',
          color: isUser ? 'var(--accent-text)' : 'var(--text-primary)',
          border: isUser ? 'none' : '1px solid var(--border-primary)',
          borderBottomRightRadius: isUser ? '4px' : '16px',
          borderBottomLeftRadius: !isUser ? '4px' : '16px',
          boxShadow: 'var(--shadow-card)',
        }}
      >
        <ReactMarkdown
          components={{
            p: ({ node, ...props }) => <p className="mb-2 last:mb-0" {...props} />,
            a: ({ node, ...props }) => <a className="text-blue-500 hover:underline" {...props} />,
            ul: ({ node, ...props }) => <ul className="list-disc pl-4 mb-2" {...props} />,
            ol: ({ node, ...props }) => <ol className="list-decimal pl-4 mb-2" {...props} />,
            li: ({ node, ...props }) => <li className="mb-1" {...props} />,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
