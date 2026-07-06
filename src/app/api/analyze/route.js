import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.DEEPSEEK_API_KEY || 'dummy',
  baseURL: 'https://api.deepseek.com',
});

const MOCK = `## 📊 数据概览

| 指标 | 数值 |
|------|------|
| 月均粉丝增长 | 2,167 |
| 月均内容发布 | 33.8 篇 |
| 平均互动率 | 4.48% |

## 🔍 主要发现

1. 粉丝增长呈上升趋势：从 1,200 增长到 3,500，增长近 3 倍
2. 互动率稳步提升：从 3.5% 提升至 5.8%
3. 内容发布量稳定：每月 28-40 篇

## 💡 建议

- 保持内容更新频率，继续提升互动率
- 分析高互动内容特征，复制成功模式
- 尝试新的内容形式（短视频/直播）`;

export async function POST(request) {
  try {
    const { data } = await request.json();
    if (!process.env.DEEPSEEK_API_KEY) return Response.json({ analysis: MOCK });
    const completion = await openai.chat.completions.create({
      model: 'deepseek-chat',
      messages: [
        { role: 'system', content: '数据分析师。分析数据并给出：1.数据概览 2.主要发现 3.建议。Markdown 输出。' },
        { role: 'user', content: '请分析：\n' + data },
      ],
      temperature: 0.4,
      max_tokens: 1000,
    });
    return Response.json({ analysis: completion.choices[0].message.content });
  } catch (e) {
    return Response.json({ analysis: MOCK });
  }
}
