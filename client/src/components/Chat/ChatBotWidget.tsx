import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Bot, Compass } from 'lucide-react';
import ChatMessage, { ChatMessageProps } from './ChatMessage';
import { useTranslation } from '../../i18n';
import { useAuthStore } from '../../store/authStore';
import { authApi } from '../../api/client'; // using base client, but maybe custom fetch is better

export default function ChatBotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessageProps[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const { isAuthenticated } = useAuthStore();

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Only show if authenticated
  if (!isAuthenticated) return null;

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessageProps = { role: 'user', content: input.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      // Create a fetch call directly since authApi might not have this endpoint yet.
      // We will rely on the standard proxy for /api setup in Vite.
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('odyssey_access_token') || ''}`,
        },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok) throw new Error('Chat API failed');

      const data = await res.json();
      setMessages((prev) => [...prev, { role: 'assistant', content: data.response }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Sorry, I am having trouble connecting to the server right now.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed z-[100] flex items-center justify-center rounded-full shadow-xl transition-all duration-300 ${
          isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100 hover:scale-110'
        }`}
        style={{
          bottom: 'calc(80px + env(safe-area-inset-bottom, 0px))',
          right: '16px',
          width: '56px',
          height: '56px',
          background: 'var(--accent)',
          color: 'var(--accent-text)',
        }}
        aria-label="Open AI Travel Assistant"
      >
        <MessageSquare size={24} />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed z-[150] flex flex-col overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] glass-panel`}
        style={{
          bottom: isOpen ? 'calc(16px + env(safe-area-inset-bottom, 0px))' : 'calc(40px + env(safe-area-inset-bottom, 0px))',
          right: '16px',
          width: 'calc(100vw - 32px)',
          maxWidth: '380px',
          height: 'calc(100vh - 120px)',
          maxHeight: '600px',
          borderRadius: '20px',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transform: isOpen ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
          transformOrigin: 'bottom right',
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-4 border-b"
          style={{ borderColor: 'var(--border-primary)', background: 'var(--bg-elevated)' }}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 text-white shadow-md">
              <Bot size={18} />
            </div>
            <div>
              <h3 className="font-semibold" style={{ color: 'var(--text-primary)' }}>Travel Assistant</h3>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Powered by AI</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-full p-2 hover:bg-slate-500/10 transition-colors"
            style={{ color: 'var(--text-secondary)' }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Message List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4 opacity-70">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                <Compass size={32} className="text-indigo-500" />
              </div>
              <div>
                <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                  Welcome to your Personal Travel Assistant!
                </p>
                <p className="text-xs mt-1 max-w-[240px]" style={{ color: 'var(--text-muted)' }}>
                  Ask me about your flights, accommodations, packing lists, or local weather!
                </p>
              </div>
            </div>
          ) : (
            messages.map((m, i) => <ChatMessage key={i} role={m.role} content={m.content} />)
          )}

          {isLoading && (
            <div className="flex items-center gap-2 text-xs py-2" style={{ color: 'var(--text-muted)' }}>
              <Loader2 size={14} className="animate-spin" />
              Thinking...
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div
          className="p-3 border-t"
          style={{ borderColor: 'var(--border-primary)', background: 'var(--bg-elevated)' }}
        >
          <div className="relative flex items-center">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything..."
              className="w-full resize-none rounded-2xl pl-4 pr-12 py-3 text-sm transition-all focus:ring-2"
              style={{
                background: 'var(--bg-tertiary)',
                color: 'var(--text-primary)',
                border: '1px solid transparent',
                outline: 'none',
              }}
              rows={1}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="absolute right-2 p-2 rounded-full transition-colors disabled:opacity-40"
              style={{
                background: input.trim() ? 'var(--accent)' : 'transparent',
                color: input.trim() ? 'var(--accent-text)' : 'var(--text-faint)',
              }}
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
