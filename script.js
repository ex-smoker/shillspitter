const hookEl = document.getElementById('hook');
const copiedEl = document.getElementById('copied');

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
    "Volume leads price. Look at SOL."
  ],
  callout: [
    "Nobody actually uses your chain. Cope."
  ],
  gm: [
    "GM CT. Alt season or trap?",
    "Good morning. Bags still heavy?"
  ]
};

function generateHook() {
  const style = document.getElementById('style').value;
  const options = hooks[style] || hooks['default'];
  const newHook = options[Math.floor(Math.random() * options.length)];
  hookEl.textContent = newHook;
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
