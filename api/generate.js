export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { topic } = req.body;

  const prompt = `Write a short, viral crypto Twitter hook${topic ? ` about ${topic}` : ""}. Keep it engaging and under 280 characters.`;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 1,
        max_tokens: 80
      })
    });

    const data = await response.json();

    const tweet = data.choices?.[0]?.message?.content?.trim() || "Try again";

    res.status(200).json({ hook: tweet });

  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
