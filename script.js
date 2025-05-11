async function generateHook() {
  const topic = document.getElementById('topicInput').value;
  try {
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic })
    });

    if (!res.ok) {
      throw new Error(`Server error: ${res.status}`);
    }

    const data = await res.json();
    document.getElementById('output').innerText = data.hook || "⚠️ No response received";
  } catch (err) {
    console.error("Fetch error:", err);
    document.getElementById('output').innerText = "⚠️ Something went wrong. Try again.";
  }
}
