"use client";
import { useState } from "react";
export default function DocQA() {
  const [docText, setDocText] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");
  const handleFile = (e) => {
    const file = e.target.files[0]; if (!file) return;
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = (ev) => setDocText(ev.target.result);
    reader.readAsText(file);
  };
  const ask = async () => {
    if (!question.trim() || !docText || loading) return;
    setLoading(true); setAnswer("");
    try {
      const res = await fetch("/api/qa", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ question, documentText: docText }) });
      const data = await res.json();
      setAnswer(data.answer || data.error);
    } catch { setAnswer("请求失败"); }
    setLoading(false);
  };
  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center">
        {!docText ? <><p className="text-gray-500 mb-2">上传 TXT 文件</p><input type="file" accept=".txt" onChange={handleFile} className="text-sm" /></>
          : <p className="text-green-600">✅ 已加载：{fileName}（{docText.length} 字）</p>}
      </div>
      {docText && <>
        <input value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="输入关于文档的问题..." className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary-400" onKeyDown={(e) => e.key === "Enter" && ask()} />
        <button onClick={ask} disabled={loading} className="w-full py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 disabled:opacity-50">{loading ? "分析中..." : "提问"}</button>
        {answer && <div className="p-4 bg-gray-50 rounded-xl text-sm text-gray-800 leading-relaxed">{answer}</div>}
      </>}
    </div>
  );
}
