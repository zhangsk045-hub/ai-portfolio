"use client";
import { useState } from "react";
export default function ContentGenerator() {
  const [topic, setTopic] = useState("");
  const [style, setStyle] = useState("xiaohongshu");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const generate = async () => {
    if (!topic.trim() || loading) return;
    setLoading(true); setContent("");
    try {
      const res = await fetch("/api/content", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ topic, style }) });
      const data = await res.json();
      setContent(data.content);
    } catch { setContent("生成失败。"); }
    setLoading(false);
  };
  const styles = [
    { value: "xiaohongshu", label: "小红书" },
    { value: "wechat", label: "公众号" },
    { value: "ad", label: "广告文案" },
  ];
  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <input value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="输入文案主题，例如：夏季防晒新品推荐" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary-400" />
      <div className="flex gap-2">{styles.map((s) => <button key={s.value} onClick={() => setStyle(s.value)} className={"px-4 py-2 rounded-full text-sm border transition-colors " + (style === s.value ? "bg-primary-600 text-white border-primary-600" : "border-gray-200 text-gray-600 hover:border-primary-300")}>{s.label}</button>)}</div>
      <button onClick={generate} disabled={loading} className="w-full py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 disabled:opacity-50">{loading ? "生成中..." : "生成文案"}</button>
      {content && <div className="p-4 bg-gray-50 rounded-xl whitespace-pre-wrap text-sm text-gray-800">{content}</div>}
    </div>
  );
}
