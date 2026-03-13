"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

export type ChatMessageData = {
  id: string;
  role: "user" | "bot";
  text: string;
  quickReplies?: string[];
  link?: { url: string; label: string };
};

type ChatbotContextValue = {
  isOpen: boolean;
  messages: ChatMessageData[];
  toggle: () => void;
  close: () => void;
  addMessage: (msg: ChatMessageData) => void;
  clearMessages: () => void;
};

const ChatbotContext = createContext<ChatbotContextValue | null>(null);

let msgCounter = 0;
export function generateMsgId() {
  return `msg-${++msgCounter}-${Date.now()}`;
}

export function useChatbot() {
  const ctx = useContext(ChatbotContext);
  if (!ctx) throw new Error("useChatbot must be used within ChatbotProvider");
  return ctx;
}

export default function ChatbotProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessageData[]>([]);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const close = useCallback(() => setIsOpen(false), []);
  const addMessage = useCallback((msg: ChatMessageData) => {
    setMessages((prev) => [...prev, msg]);
  }, []);
  const clearMessages = useCallback(() => setMessages([]), []);

  return (
    <ChatbotContext.Provider value={{ isOpen, messages, toggle, close, addMessage, clearMessages }}>
      {children}
    </ChatbotContext.Provider>
  );
}
