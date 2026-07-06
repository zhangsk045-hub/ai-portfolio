import ContentGenerator from "@/components/ContentGenerator";
export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">AI 内容生成器</h1>
      <p className="text-gray-500 mb-8">输入主题，一键生成不同风格的新媒体内容。</p>
      <section className="mb-10"><h2 className="text-xl font-semibold mb-3">项目背景</h2><p className="text-gray-600">探索用 AI 辅助内容生产，根据不同平台风格生成适配文案。</p></section>
      <section className="mb-10"><h2 className="text-xl font-semibold mb-3">在线 Demo</h2><ContentGenerator /></section>
      <section className="mb-10"><h2 className="text-xl font-semibold mb-3">技术实现</h2><ul className="list-disc list-inside text-gray-600 space-y-1"><li>Prompt 模板引擎</li><li>三种风格覆盖主流平台</li><li>温度参数控制创意度</li></ul></section>
      <section><h2 className="text-xl font-semibold mb-3">反思与改进</h2><p className="text-gray-600">未来可加入 SEO 优化、批量生成、一键排版。</p></section>
    </div>
  );
}
