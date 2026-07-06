export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* 头部 */}
      <div className="text-center mb-10">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
          张
        </div>
        <h1 className="text-3xl font-bold">张绍康</h1>
        <p className="text-gray-500 mt-1">网络与新媒体 · 本科 · 2026届</p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 mt-3 text-sm text-gray-400">
          <span>📧 3177913911@qq.com</span>
          <span>📞 15963266166</span>
          <span>📍 山东省青岛市</span>
          <span>🎂 2003.12</span>
        </div>
        <a
          href="/resume/张绍康简历.pdf"
          download
          className="inline-flex items-center gap-2 mt-6 px-6 py-2.5 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors text-sm font-medium"
        >
          ⬇ 下载简历 PDF
        </a>
      </div>

      {/* 自我评价 */}
      <section className="mb-8">
        <h2 className="text-lg font-bold mb-3 flex items-center gap-2"><span className="w-1 h-5 bg-primary-500 rounded-full inline-block"></span>自我评价</h2>
        <div className="space-y-2 text-sm text-gray-600 leading-relaxed">
          <p><strong>🎯 极强的目标导向：</strong>从需求出发倒推执行路径，善于拆解复杂任务并推动落地。</p>
          <p><strong>💬 卓越的沟通表达：</strong>新媒体专业背景，具备出色的逻辑思维与语言组织能力，能够精准捕捉客户痛点并提供针对性解决方案。</p>
          <p><strong>📊 丰富的实战经验：</strong>拥有新媒体运营与线下课程销售的双重经历，熟悉线上引流+线下转化的全链路销售模式。</p>
          <p><strong>🎪 优秀的抗压与统筹：</strong>曾担任艺术团团长，具备极强的组织协调能力与心理素质，能够应对高强度的工作节奏与业绩挑战。</p>
        </div>
      </section>

      {/* 教育背景 */}
      <section className="mb-8">
        <h2 className="text-lg font-bold mb-3 flex items-center gap-2"><span className="w-1 h-5 bg-primary-500 rounded-full inline-block"></span>教育背景</h2>
        <div className="border rounded-xl p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">枣庄学院</h3>
              <p className="text-sm text-gray-500">网络与新媒体 · 本科</p>
            </div>
            <span className="text-xs text-gray-400">2022.09 - 2026.06</span>
          </div>
          <p className="text-xs text-gray-400 mt-2">主修课程：新媒体广告设计、网页设计与制作、新媒体营销与策划、网络新闻采访与写作、传播学等</p>
        </div>
      </section>

      {/* 实习经历 */}
      <section className="mb-8">
        <h2 className="text-lg font-bold mb-3 flex items-center gap-2"><span className="w-1 h-5 bg-primary-500 rounded-full inline-block"></span>实习经历</h2>
        <div className="space-y-4">
          <div className="border rounded-xl p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">山东顶美文化传媒有限公司</h3>
                <p className="text-sm text-primary-600">新媒体运营（实习生）</p>
              </div>
              <span className="text-xs text-gray-400">2025.05 - 2025.08</span>
            </div>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary-400">负责短视频板块内容生态建设，包括文案策划、视频拍摄、后期剪辑与成品发布</li>
              <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary-400">深度参与社交媒体账号日常运营与维护，通过数据分析持续优化内容策略</li>
              <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary-400">协助人力资源部门完成线上招聘全流程：职位发布、简历筛选、面试安排</li>
            </ul>
          </div>
          <div className="border rounded-xl p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">山东创博教育</h3>
                <p className="text-sm text-primary-600">吉他老师兼课程销售（兼职）</p>
              </div>
              <span className="text-xs text-gray-400">2024.09 - 2025.02</span>
            </div>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary-400">课余主导 8-12 人小班吉他教学，课前挖掘学员差异化需求并针对性调整内容</li>
              <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary-400">累计完成 8 单课程转化，强化了沟通与需求分析能力</li>
              <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary-400">理解培训行业"以服务立口碑、以运营促留存"的核心逻辑</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 校内实践 */}
      <section className="mb-8">
        <h2 className="text-lg font-bold mb-3 flex items-center gap-2"><span className="w-1 h-5 bg-primary-500 rounded-full inline-block"></span>校内实践</h2>
        <div className="space-y-4">
          <div className="border rounded-xl p-4">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold">大学生艺术团团长</h3>
              <span className="text-xs text-gray-400">2023 - 2025</span>
            </div>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary-400">统筹策划毕业歌会、草地音乐节等校内外文艺活动</li>
              <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary-400">涵盖方案制定、节目编排、场地协调、人员分工及现场控场全流程</li>
              <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary-400">合理分配团队职责，高效推进活动各环节衔接，获师生广泛好评</li>
            </ul>
          </div>
          <div className="border rounded-xl p-4">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold">校园新闻采访与内容制作</h3>
              <span className="text-xs text-gray-400">2025.05 - 2025.06</span>
            </div>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary-400">独立完成校园热点事件新闻采访全流程：选题策划、采访提纲、实地拍摄</li>
              <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary-400">PR 剪辑素材 + PS 处理配图，全程把控内容真实性与表达逻辑</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 技能 */}
      <section>
        <h2 className="text-lg font-bold mb-3 flex items-center gap-2"><span className="w-1 h-5 bg-primary-500 rounded-full inline-block"></span>技能证书</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "新媒体运营", "文案策划", "短视频制作", "PR 剪辑", "PS 设计",
            "数据分析", "JavaScript", "React/Next.js", "Tailwind CSS",
            "OpenAI API", "Prompt Engineering", "Git",
            "沟通表达", "活动策划", "团队管理",
          ].map((s) => (
            <span key={s} className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700">{s}</span>
          ))}
        </div>
      </section>
    </div>
  );
}
