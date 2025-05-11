export default async function handler(req, res) {
  const { topic } = req.body;
  const prompt = `Write a short, viral crypto Twitter hook${topic ? ` about ${topic}` : ''}. Keep it engaging and under 280 characters.`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }]
    })
  });

  const json = await response.json();
  const hook = json.choices?.[0]?.message?.content?.trim() || "Try again";
  res.status(200).json({ hook });
}
