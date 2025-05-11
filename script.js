const hooks = [
    "Your bags aren’t heavy, your tweet is.",
    "CT doesn’t sleep. Neither should your hooks.",
    "You’re not shadowbanned. You’re just boring.",
    "Every meme starts with a scroll-stopper.",
    "GM is fine. GM + alpha is better."
];

function generateHook() {
    const output = document.getElementById('output');
    const hook = hooks[Math.floor(Math.random() * hooks.length)];
    output.innerText = hook;
}

function copyHook() {
    const text = document.getElementById('output').innerText;
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard!');
    });
}
