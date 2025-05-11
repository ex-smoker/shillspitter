async function generateHook() {
  const topic = document.getElementById('topicInput').value;
  const res = await fetch('/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ topic })
  });
  const data = await res.json();
  document.getElementById('output').innerText = data.hook;
}
function copyToClipboard() {
  const text = document.getElementById('output').innerText;
  navigator.clipboard.writeText(text);
}
