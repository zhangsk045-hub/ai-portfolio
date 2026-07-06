export default function About() {
  const skills = [
    { title: "🎯 目标导向", items: "极强的目标感，善于从需求出发倒推执行路径。面对复杂任务能够快速拆解优先级，确保每个阶段产出可衡量的结果。" },
    { title: "💬 沟通表达", items: "网络与新媒体专业背景，具备出色的逻辑思维与语言组织能力。能够精准捕捉客户痛点并提供针对性解决方案。" },
    { title: "📊 数据分析", items: "深度参与社交媒体账号日常运营，通过数据分析持续优化内容策略。熟悉线上引流+线下转化的全链路销售模式。" },
    { title: "🎪 统筹协调", items: "曾担任大学生艺术团团长，具备极强的组织协调能力与心理素质，能够应对高强度的工作节奏与挑战。" },
  ];

  const experiences = [
    {
      period: "2025.05 - 2025.08",
      company: "山东顶美文化传媒有限公司",
      role: "新媒体运营（实习生）",
      details: [
        "负责短视频板块的内容生态建设，涵盖文案策划、视频拍摄、后期剪辑与成品发布全流程",
        "深度参与社交媒体账号的日常运营与维护，通过数据分析持续优化内容策略",
        "协助人力资源部门完成线上招聘全流程，包括职位发布、简历筛选、候选人初筛与面试安排",
      ],
    },
    {
      period: "2024.09 - 2025.02",
      company: "山东创博教育",
      role: "吉他老师兼课程销售（兼职）",
      details: [
        "课余主导 8-12 人小班吉他教学，课前沟通挖掘学员差异化需求，针对性调整内容",
        "累计完成 8 单课程转化，强化了沟通与需求分析能力",
        "深刻理解培训行业 '以服务立口碑、以运营促留存' 的核心逻辑",
      ],
    },
  ];

  const campusExperiences = [
    {
      period: "2023 - 2025",
      title: "大学生艺术团团长",
      details: [
        "统筹策划并落地执行多场校内外文艺活动（毕业歌会、草地音乐节等）",
        "涵盖活动方案制定、节目编排、场地协调、人员分工及现场控场等全流程",
        "具备较强的组织协调能力，合理分配团队成员职责，高效推进活动各环节衔接",
      ],
    },
    {
      period: "2025.05 - 2025.06",
      title: "校园新闻采访与内容制作项目",
      details: [
        "独立完成校园热点事件新闻采访全流程：选题策划、采访提纲设计、实地拍摄",
        "使用 PR 剪辑素材，搭配 PS 处理采访配图",
        "全程把控内容真实性与表达逻辑，锻炼了选题判断、跨工具内容制作及结果导向的执行能力",
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* 个人头部 */}
      <div className="text-center mb-12">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
          张
        </div>
        <h1 className="text-3xl font-bold mb-2">张绍康</h1>
        <p className="text-gray-500">网络与新媒体本科 · 2026届 · 枣庄学院</p>
        <div className="flex justify-center gap-4 mt-4 text-sm text-gray-400">
          <span>📧 3177913911@qq.com</span>
          <span>📞 15963266166</span>
          <span>📍 山东青岛</span>
        </div>
      </div>

      {/* 自我评价 */}
      <section className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-100">
        <h2 className="text-xl font-bold mb-3">关于我</h2>
        <p className="text-gray-700 leading-relaxed">
          我是张绍康，网络与新媒体专业本科应届生。从大二开始接触新媒体运营实战，在山东顶美文化传媒负责短视频内容生态建设；同时期在山东创博教育担任吉他老师兼课程销售，累计完成多单课程转化。校园里担任大学生艺术团团长，统筹策划过多场大型活动。
          <br /><br />
          我对 AI 充满热情，自学搭建了 4 个 AI 应用项目。希望将新媒体背景与 AI 能力结合，成为一名 AI 产品方向的从业者——用技术放大内容的温度，用产品思维解决真实问题。
        </p>
      </section>

      {/* 核心能力 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">核心能力</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {skills.map((s) => (
            <div key={s.title} className="p-5 rounded-xl bg-gray-50 border border-gray-100 hover:border-primary-100 transition-colors">
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.items}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 教育背景 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">教育背景</h2>
        <div className="p-5 rounded-xl border border-gray-100 bg-white">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-semibold text-lg">枣庄学院</h3>
              <p className="text-gray-500">网络与新媒体 · 本科</p>
            </div>
            <span className="text-sm text-gray-400 whitespace-nowrap">2022.09 - 2026.06</span>
          </div>
          <p className="text-sm text-gray-500 mt-2">主修课程：新媒体广告设计、网页设计与制作、新媒体营销与策划、网络新闻采访与写作、传播学等</p>
        </div>
      </section>

      {/* 实习经历 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">实习经历</h2>
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-6 border-l-2 border-primary-200">
              <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-primary-500"></div>
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="font-semibold">{exp.company}</h3>
                  <p className="text-sm text-primary-600">{exp.role}</p>
                </div>
                <span className="text-xs text-gray-400 whitespace-nowrap">{exp.period}</span>
              </div>
              <ul className="mt-2 space-y-1">
                {exp.details.map((d, j) => (
                  <li key={j} className="text-sm text-gray-600 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary-400">{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 校内实践 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">校内实践</h2>
        <div className="space-y-6">
          {campusExperiences.map((exp, i) => (
            <div key={i} className="relative pl-6 border-l-2 border-accent-200">
              <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-accent-500"></div>
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="font-semibold">{exp.title}</h3>
                </div>
                <span className="text-xs text-gray-400 whitespace-nowrap">{exp.period}</span>
              </div>
              <ul className="mt-2 space-y-1">
                {exp.details.map((d, j) => (
                  <li key={j} className="text-sm text-gray-600 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-accent-400">{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 技术栈 */}
      <section>
        <h2 className="text-2xl font-bold mb-6">技术栈 & 工具</h2>
        <div className="flex flex-wrap gap-2">
          {["JavaScript", "React/Next.js", "Tailwind CSS", "OpenAI API", "Prompt Engineering", "PR (剪辑)", "PS (设计)", "RAG 理解", "Git", "数据分析"].map((skill) => (
            <span key={skill} className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-700 hover:border-primary-300 hover:text-primary-600 transition-colors">{skill}</span>
          ))}
        </div>
      </section>
    </div>
  );
}
