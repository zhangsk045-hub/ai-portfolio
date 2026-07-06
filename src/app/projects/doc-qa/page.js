import DocQA from "@/components/DocQA";
export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">AI 文档问答系统</h1>
      <p className="text-gray-500 mb-8">上传文档，AI 基于内容回答问题，初探 RAG 技术。</p>
      <section className="mb-10"><h2 className="text-xl font-semibold mb-3">项目背景</h2><p className="text-gray-600">模拟 RAG 核心理念：让 AI 基于特定文档内容回答问题。</p></section>
      <section className="mb-10"><h2 className="text-xl font-semibold mb-3">在线 Demo</h2><DocQA /></section>
      <section className="mb-10"><h2 className="text-xl font-semibold mb-3">技术实现</h2><ul className="list-disc list-inside text-gray-600 space-y-1"><li>文本截断嵌入 Prompt</li><li>低温度确保准确性</li><li>System Prompt 约束：不知为不知</li></ul></section>
      <section><h2 className="text-xl font-semibold mb-3">反思与改进</h2><p className="text-gray-600">完整 RAG 需向量数据库。未来可支持 PDF、Word 和语义检索。</p></section>
    </div>
  );
}
