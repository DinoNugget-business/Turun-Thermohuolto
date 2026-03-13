"use client";

import { useState } from "react";
import { Send } from "lucide-react";

type Props = { onSend: (text: string) => void };

export default function ChatInput({ onSend }: Props) {
  const [value, setValue] = useState("");

  const handleSend = () => {
    const trimmed = value.trim();
    if (!trimmed) return;
    onSend(trimmed);
    setValue("");
  };

  return (
    <div
      className="flex items-center gap-2 px-3 py-2.5"
      style={{ borderTop: "1px solid #243550", backgroundColor: "#0C1824" }}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        placeholder="Kirjoita kysymyksesi..."
        className="flex-1 px-3 py-2 rounded-xl text-sm outline-none transition-all"
        style={{
          backgroundColor: "#162236",
          color: "#E0E4E8",
          border: "1px solid #2A3A50",
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "rgba(0,163,191,0.5)";
          e.currentTarget.style.boxShadow = "0 0 0 2px rgba(0,163,191,0.15)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = "#2A3A50";
          e.currentTarget.style.boxShadow = "none";
        }}
      />
      <button
        onClick={handleSend}
        aria-label="Lähetä viesti"
        className="w-9 h-9 rounded-xl flex items-center justify-center transition-all"
        style={{ backgroundColor: value.trim() ? "#0ACDDF" : "#243550", color: "#FFFFFF" }}
        onMouseEnter={(e) => {
          if (value.trim()) e.currentTarget.style.backgroundColor = "#007A8F";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = value.trim() ? "#0ACDDF" : "#243550";
        }}
      >
        <Send className="w-4 h-4" />
      </button>
    </div>
  );
}
