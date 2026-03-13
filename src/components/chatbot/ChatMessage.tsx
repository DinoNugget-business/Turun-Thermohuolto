"use client";

import { Bot, User } from "lucide-react";
import type { ChatMessageData } from "./ChatbotProvider";

function formatText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} style={{ color: "#0ACDDF" }}>
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export default function ChatMessage({ message }: { message: ChatMessageData }) {
  const isBot = message.role === "bot";

  return (
    <div className={`flex gap-2.5 ${isBot ? "" : "flex-row-reverse"}`}>
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5"
        style={{
          backgroundColor: isBot ? "rgba(0,163,191,0.15)" : "rgba(255,255,255,0.08)",
          border: isBot ? "1px solid rgba(0,163,191,0.3)" : "1px solid rgba(255,255,255,0.15)",
        }}
      >
        {isBot ? (
          <Bot className="w-3.5 h-3.5" style={{ color: "#0ACDDF" }} />
        ) : (
          <User className="w-3.5 h-3.5" style={{ color: "#8A9BB0" }} />
        )}
      </div>

      <div
        className="max-w-[85%] px-3.5 py-2.5 rounded-2xl text-[13.5px] leading-relaxed whitespace-pre-line"
        style={
          isBot
            ? { backgroundColor: "#1E2938", color: "#E0E4E8", border: "1px solid #2A3A50" }
            : { backgroundColor: "#0ACDDF", color: "#FFFFFF" }
        }
      >
        {formatText(message.text)}

        {message.link && (
          <a
            href={message.link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1 text-xs font-medium transition-colors"
            style={{ color: "#33C4D8" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#33C4D8")}
          >
            {message.link.label} →
          </a>
        )}
      </div>
    </div>
  );
}
