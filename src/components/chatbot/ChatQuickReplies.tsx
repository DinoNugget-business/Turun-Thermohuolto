"use client";

import { FAQ_DATA, CHAT_CATEGORIES } from "@/lib/chatbot-data";
import * as Icons from "lucide-react";

type Props = {
  faqIds?: string[];
  onSelect: (faqId: string) => void;
};

export default function ChatQuickReplies({ faqIds, onSelect }: Props) {
  if (faqIds) {
    const items = faqIds
      .map((id) => FAQ_DATA.find((f) => f.id === id))
      .filter(Boolean);

    return (
      <div className="flex flex-wrap gap-1.5 mt-1">
        {items.map((faq) => (
          <button
            key={faq!.id}
            onClick={() => onSelect(faq!.id)}
            className="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
            style={{
              border: "1px solid rgba(0,163,191,0.4)",
              color: "#33C4D8",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(0,163,191,0.15)";
              e.currentTarget.style.borderColor = "#0ACDDF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.borderColor = "rgba(0,163,191,0.4)";
            }}
          >
            {faq!.question}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-1.5 mt-1">
      {CHAT_CATEGORIES.map((cat) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const IconComp = (Icons as any)[cat.icon] as React.ComponentType<{ className?: string }> | undefined;
        return (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.faqId)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all"
            style={{
              border: "1px solid rgba(0,163,191,0.4)",
              color: "#33C4D8",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(0,163,191,0.15)";
              e.currentTarget.style.borderColor = "#0ACDDF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.borderColor = "rgba(0,163,191,0.4)";
            }}
          >
            {IconComp && <IconComp className="w-3 h-3" />}
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}
