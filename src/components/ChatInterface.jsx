"use client";
import { useState } from "react";
export default function ChatInterface() {
  const [messages, setMessages] = useState([{ role: "assistant", content: "你好！我是新媒体运营顾问 AI，有什么可以帮你的？" }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const send = async () => {
    if (!input.trim() || loading) return;
    const userMsg = { role: "user", content: input };
    const updated = [...messages, userMsg];
    setMessages(updated); setInput(""); setLoading(true);
    try {
      const res = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: updated }) });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.message }]);
    } catch { setMessages((prev) => [...prev, { role: "assistant", content: "抱歉，出了点问题。" }]); }
    setLoading(false);
  };
  return (
    <div className="max-w-2xl mx-auto border border-gray-200 rounded-2xl overflow-hidden">
      <div className="bg-gray-50 px-4 py-3 border-b font-semibold">🤖 新媒体运营顾问</div>
      <div className="h-96 overflow-y-auto p-4 space-y-4 bg-white">
        {messages.map((m, i) => (
          <div key={i} className={"flex " + (m.role === "user" ? "justify-end" : "justify-start")}>
            <div className={"max-w-[80%] p-3 rounded-xl text-sm " + (m.role === "user" ? "bg-primary-600 text-white" : "bg-gray-100 text-gray-800")}>{m.content}</div>
          </div>
        ))}
        {loading && <div className="text-gray-400 text-sm">AI 正在思考...</div>}
      </div>
      <div className="border-t p-4 flex gap-2">
        <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()} placeholder="输入你的问题..." className="flex-1 px-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-primary-400" />
        <button onClick={send} disabled={loading} className="px-6 py-2 bg-primary-600 text-white rounded-full text-sm hover:bg-primary-700 disabled:opacity-50">发送</button>
      </div>
    </div>
  );
}
