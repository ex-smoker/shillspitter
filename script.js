const hookEl = document.getElementById('hook');
const copiedEl = document.getElementById('copied');
const subjectEl = document.getElementById('subject');

const hooks = {
  default: [
    "You're early. But not that early. Tweet it.",
    "Crypto is a scam — until it isn't."
  ],
  viral: [
    "Most CT engagement comes from 3 types of tweets. This is one of them.",
    "This tweet got 12k likes. The content? Mid."
  ],
  shitpost: [
    "Imagine buying the top and telling your mum it's research.",
    "If you're not losing money for content, are you even CT?"
  ],
  alpha: [
    "Volume leads price. Look at {subject}.",
    "{subject} is about to run. And you're asleep?"
  ],
  callout: [
    "Nobody actually uses your chain. Cope.",
    "{subject}? Dead chain energy."
  ],
  gm: [
    "GM CT. Alt season or trap?",
    "Good morning. Bags still heavy?"
  ]
};

function generateHook() {
  const style = document.getElementById('style').value;
  const subject = subjectEl.value || 'this';
  const options = hooks[style] || hooks['default'];
  let raw = options[Math.floor(Math.random() * options.length)];
  const final = raw.replace(/{subject}/gi, subject);
  hookEl.textContent = final;
  copiedEl.textContent = '';
}

function copyHook() {
  navigator.clipboard.writeText(hookEl.textContent)
    .then(() => {
      copiedEl.textContent = '✅ Copied to clipboard!';
    })
    .catch(() => {
      copiedEl.textContent = '❌ Copy failed';
    });
}
