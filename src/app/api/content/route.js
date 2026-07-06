import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.DEEPSEEK_API_KEY || 'dummy',
  baseURL: 'https://api.deepseek.com',
});

const MOCK = {
  xiaohongshu: `🔥 被问爆了！这个真的绝绝子✨

家人们谁懂啊！这个真的太好用了😭

✅ 颜值超高，拍照超出片
✅ 使用感满分，细节满分
✅ 性价比绝了

👇 评论区告诉我你的想法！

#好物推荐 #生活必备`,
  wechat: `# 行业趋势分析

> 把握趋势就是把握未来

## 趋势一：智能化升级
AI 技术正在重塑内容生产与用户运营的每个环节。

## 趋势二：内容为王
高质量内容依然是吸引用户的核心竞争力。

## 趋势三：私域运营
公域流量成本攀升，私域成为增长新引擎。`,
  ad: `【限时福利】错过等一年！

🔥 限时特惠，低至 5 折
✅ 品质保障，不满意全额退
📱 扫码立即抢购

别让机会从指尖溜走！`
};

export async function POST(request) {
  try {
    const { topic, style } = await request.json();
    const s = style || 'xiaohongshu';
    if (!process.env.DEEPSEEK_API_KEY) return Response.json({ content: MOCK[s] || MOCK.xiaohongshu });
    const styles = { xiaohongshu: '小红书风格：标题吸睛，内容简短有网感，emoji 和话题标签', wechat: '公众号风格：标题有信息量，正文结构完整', ad: '广告文案风格：简短有力，突出卖点' };
    const completion = await openai.chat.completions.create({
      model: 'deepseek-chat',
      messages: [
        { role: 'system', content: '你是一位专业文案写手。用以下风格：' + (styles[s] || styles.xiaohongshu) },
        { role: 'user', content: '为主题：' + topic + '生成一段文案' },
      ],
      temperature: 0.8,
      max_tokens: 800,
    });
    return Response.json({ content: completion.choices[0].message.content });
  } catch (e) {
    return Response.json({ content: '生成失败，请稍后重试。' });
  }
}
