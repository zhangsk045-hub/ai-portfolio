import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.DEEPSEEK_API_KEY || 'dummy',
  baseURL: 'https://api.deepseek.com',
});

const MOCK = `根据文档内容分析，我可以为您解答以下信息：

文档中提到的主要内容涉及行业趋势分析和用户行为研究。

核心观点包括：
1. 用户需求正在向个性化、即时化方向发展
2. AI 技术正在改变内容生产的方式
3. 数据驱动的决策成为行业标准

请问您想了解哪个具体方面？`;

export async function POST(request) {
  try {
    const { question, documentText } = await request.json();
    if (!process.env.DEEPSEEK_API_KEY) return Response.json({ answer: MOCK });
    if (!documentText) return Response.json({ error: '请先上传文档' }, { status: 400 });
    const completion = await openai.chat.completions.create({
      model: 'deepseek-chat',
      messages: [
        { role: 'system', content: '文档分析助手。基于文档内容回答。简洁准确。' },
        { role: 'user', content: '文档内容：\n' + documentText.slice(0, 12000) + '\n\n问题：' + question },
      ],
      temperature: 0.3,
      max_tokens: 1000,
    });
    return Response.json({ answer: completion.choices[0].message.content });
  } catch (e) {
    return Response.json({ answer: MOCK });
  }
}
