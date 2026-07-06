import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.DEEPSEEK_API_KEY || 'dummy',
  baseURL: 'https://api.deepseek.com',
});

const MOCK_RESPONSE = `您好！我是 AI 运营顾问。我可以帮您解答以下问题：

📱 社交媒体运营策略
📊 内容策划与排期
🚀 用户增长方法
✍️ 爆款文案技巧
🔍 数据分析与优化

请告诉我您具体想了解什么？`;

export async function POST(request) {
  try {
    if (!process.env.DEEPSEEK_API_KEY) return Response.json({ message: MOCK_RESPONSE });
    const { messages } = await request.json();
    const completion = await openai.chat.completions.create({
      model: 'deepseek-chat',
      messages: [
        { role: 'system', content: '你是一位专业的新媒体运营顾问。擅长回答社交媒体运营、内容策略、用户增长等方面的问题。用中文简洁、专业地回答。' },
        ...messages,
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });
    return Response.json({ message: completion.choices[0].message.content });
  } catch (e) {
    return Response.json({ message: MOCK_RESPONSE });
  }
}
