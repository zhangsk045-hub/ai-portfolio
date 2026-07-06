"use client";
import { useState } from "react";
const sample = "月份, 粉丝增长, 内容发布数, 平均互动率\n1月, 1200, 30, 3.5%\n2月, 1500, 28, 4.2%\n3月, 1800, 35, 3.8%\n4月, 2200, 32, 5.1%\n5月, 2800, 40, 4.5%\n6月, 3500, 38, 5.8%";
export default function DataAnalyzer() {
  const [data, setData] = useState(sample);
  const [analysis, setAnalysis] = useState("");
  const [loading, setLoading] = useState(false);
  const analyze = async () => {
    if (!data.trim() || loading) return;
    setLoading(true); setAnalysis("");
    try {
      const res = await fetch("/api/analyze", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ data }) });
      const r = await res.json();
      setAnalysis(r.analysis || r.error);
    } catch { setAnalysis("分析失败"); }
    setLoading(false);
  };
  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <textarea value={data} onChange={(e) => setData(e.target.value)} rows={6} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary-400 font-mono" placeholder="输入数据..." />
      <button onClick={analyze} disabled={loading} className="w-full py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 disabled:opacity-50">{loading ? "分析中..." : "开始分析"}</button>
      {analysis && <div className="p-4 bg-gray-50 rounded-xl text-sm text-gray-800 leading-relaxed whitespace-pre-wrap">{analysis}</div>}
    </div>
  );
}
