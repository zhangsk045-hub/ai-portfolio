import DataAnalyzer from "@/components/DataAnalyzer";
export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">AI 数据分析面板</h1>
      <p className="text-gray-500 mb-8">输入数据，AI 自动生成分析结论与洞察。</p>
      <section className="mb-10"><h2 className="text-xl font-semibold mb-3">项目背景</h2><p className="text-gray-600">探索用 AI 降低数据分析门槛，让运营人员快速获得洞察。</p></section>
      <section className="mb-10"><h2 className="text-xl font-semibold mb-3">在线 Demo</h2><DataAnalyzer /></section>
      <section className="mb-10"><h2 className="text-xl font-semibold mb-3">技术实现</h2><ul className="list-disc list-inside text-gray-600 space-y-1"><li>结构化输出 Prompt</li><li>内置示例数据</li><li>低温度确保可靠性</li></ul></section>
      <section><h2 className="text-xl font-semibold mb-3">反思与改进</h2><p className="text-gray-600">未来可接入图表可视化，支持 CSV 上传和异常检测。</p></section>
    </div>
  );
}
